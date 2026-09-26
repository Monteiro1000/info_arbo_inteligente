import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);
    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={`topbar container ${scrolled ? 'scrolled' : ''}`} id="topbar">
      <a className="brand" href="#home" aria-label="Página inicial Arborização Inteligente" onClick={closeMenu}>
        <img className="brand-logo" src="assets/logo.png" alt="Logo Arborização Inteligente" />
        <span className="brand-text">
          <strong>Arborização Inteligente</strong>
          <small>Monitoramento arbóreo para cidades mais verdes</small>
        </span>
      </a>

      <button
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        id="menu-toggle"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu de navegação"}
        aria-expanded={isOpen}
        aria-controls="main-nav"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <div
        className={`nav-backdrop ${isOpen ? 'show' : ''}`}
        id="navBackdrop"
        aria-hidden="true"
        onClick={closeMenu}
      ></div>

      <nav className={`main-nav ${isOpen ? 'open' : ''}`} id="main-nav" aria-label="Menu principal">
        <div className="nav-drawer-header">
          <div className="nav-drawer-brand">
            <img className="nav-drawer-logo" src="assets/logo.png" alt="Logo Arborização Inteligente" />
            <span>Arborização Inteligente</span>
          </div>
          <button className="nav-close-btn" id="navCloseBtn" aria-label="Fechar menu" onClick={closeMenu}>
            &times;
          </button>
        </div>

        <div className="nav-links-wrapper">
          <a className="nav-link" href="#arborizacao" onClick={closeMenu}>Arborização</a>
          <a className="nav-link" href="#solucao" onClick={closeMenu}>Solução & Planos</a>
          <a className="nav-link" href="#quem-somos" onClick={closeMenu}>Quem somos</a>
          <a className="nav-link" href="#eventos" onClick={closeMenu}>Destaques</a>
          <a className="nav-link" href="#noticias" onClick={closeMenu}>Blog</a>
          <a className="nav-link" href="#contato" onClick={closeMenu}>Contato</a>
        </div>

        <div className="nav-drawer-footer">
          <a className="contact-link" href="#contato" onClick={closeMenu}>
            Falar com a equipe
          </a>
        </div>
      </nav>
    </div>
  );
}
