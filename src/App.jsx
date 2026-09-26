import React, { useState, useEffect, useCallback, useRef } from 'react';
import Hero from './components/Hero';
import ArborizacaoSection from './components/ArborizacaoSection';
import SolutionSection from './components/SolutionSection';
import TeamSection from './components/TeamSection';
import EventsSection from './components/EventsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BlogModal from './components/BlogModal';
import Toast from './components/Toast';
import { BLOG_POSTS } from './data/newsData';

export default function App() {
  const [activeModalPost, setActiveModalPost] = useState(null);
  const [toast, setToast] = useState({ message: '', isVisible: false });
  const toastTimeoutRef = useRef(null);

  // Show Toast helper
  const showToast = useCallback((message, duration = 3500) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToast({ message, isVisible: true });
    toastTimeoutRef.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, duration);
  }, []);

  // Modal open
  const handleOpenPost = useCallback((post) => {
    setActiveModalPost(post);
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#noticia-${post.id}`);
    }
  }, []);

  // Modal close
  const handleCloseModal = useCallback(() => {
    setActiveModalPost(null);
    if (window.history && window.history.replaceState) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }
  }, []);

  // Share post
  const handleSharePost = useCallback((post) => {
    if (!post) return;
    const shareUrl = `${window.location.origin}${window.location.pathname}#noticia-${post.id}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          showToast('✓ Link do artigo copiado para a área de transferência!');
        })
        .catch(() => {
          fallbackCopy(shareUrl);
        });
    } else {
      fallbackCopy(shareUrl);
    }

    function fallbackCopy(text) {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        document.execCommand('copy');
        showToast('✓ Link do artigo copiado!');
      } catch (err) {
        showToast('Não foi possível copiar o link.');
      }
      document.body.removeChild(tempInput);
    }
  }, [showToast]);

  // URL Hash listener for #noticia-:id
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#noticia-')) {
        const postId = hash.replace('#noticia-', '');
        const post = BLOG_POSTS.find((p) => p.id === postId);
        if (post) {
          const noticiasSection = document.getElementById('noticias');
          noticiasSection?.scrollIntoView({ behavior: 'smooth' });
          setActiveModalPost(post);
        }
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Scroll reveal observer for elements with .reveal class
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal:not(.is-visible)');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  return (
    <>
      <Hero />

      <main>
        <ArborizacaoSection />
        <SolutionSection />
        <TeamSection />
        <EventsSection />
        <BlogSection onOpenPost={handleOpenPost} />
        <ContactSection onShowToast={showToast} />
      </main>

      <Footer />

      <BlogModal
        post={activeModalPost}
        onClose={handleCloseModal}
        onShare={handleSharePost}
      />

      <Toast message={toast.message} isVisible={toast.isVisible} />
    </>
  );
}
