const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const topbar = document.getElementById('topbar');
const navBackdrop = document.getElementById('navBackdrop');
const navCloseBtn = document.getElementById('navCloseBtn');

function setMenuState(isOpen) {
  if (!mainNav || !menuToggle) return;
  mainNav.classList.toggle('open', isOpen);
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  if (navBackdrop) {
    navBackdrop.classList.toggle('show', isOpen);
  }
  document.body.classList.toggle('nav-open', isOpen);
}

menuToggle?.addEventListener('click', () => {
  const willOpen = !mainNav.classList.contains('open');
  setMenuState(willOpen);
});

navCloseBtn?.addEventListener('click', () => {
  setMenuState(false);
});

navBackdrop?.addEventListener('click', () => {
  setMenuState(false);
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    setMenuState(false);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mainNav?.classList.contains('open')) {
    setMenuState(false);
  }
});

window.addEventListener('scroll', () => {
  topbar.classList.toggle('scrolled', window.scrollY > 12);
});

const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);

revealEls.forEach((el) => revealObserver.observe(el));

/* ---------- BLOG MANAGER ---------- */

class BlogManager {
  constructor() {
    this.posts =
      typeof BLOG_POSTS !== 'undefined' && Array.isArray(BLOG_POSTS)
        ? BLOG_POSTS
        : [];
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.currentModalPost = null;

    // Elementos da interface
    this.featuredContainer = document.getElementById('blogFeatured');
    this.featuredWrapper = document.getElementById('blogFeaturedWrapper');
    this.gridContainer = document.getElementById('blogGrid');
    this.counterEl = document.getElementById('blogCounter');
    this.emptyEl = document.getElementById('blogEmpty');
    this.searchInput = document.getElementById('blogSearchInput');
    this.searchClearBtn = document.getElementById('blogSearchClear');
    this.searchForm = document.getElementById('blogSearchForm');
    this.categoryBtns = document.querySelectorAll('.category-btn');
    this.resetBtn = document.getElementById('blogResetBtn');

    // Elementos do Modal
    this.modal = document.getElementById('newsModal');
    this.modalOverlay = document.getElementById('modalOverlay');
    this.modalClose = document.getElementById('modalClose');
    this.modalCloseBtn = document.getElementById('modalCloseBtn');
    this.modalShareBtn = document.getElementById('modalShareBtn');
    this.toast = document.getElementById('blogToast');

    this.init();
  }

  init() {
    if (!this.gridContainer) return;

    this.bindEvents();
    this.render();
    this.checkUrlHash();
  }

  bindEvents() {
    // Submissão do formulário de busca semântico
    this.searchForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.searchInput) {
        this.searchQuery = this.searchInput.value.trim().toLowerCase();
        if (this.searchClearBtn) {
          this.searchClearBtn.style.display = this.searchQuery ? 'inline-flex' : 'none';
        }
        this.render();
      }
    });

    // Busca em tempo real
    this.searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      if (this.searchClearBtn) {
        this.searchClearBtn.style.display = this.searchQuery ? 'inline-flex' : 'none';
      }
      this.render();
    });

    // Limpar busca
    this.searchClearBtn?.addEventListener('click', () => {
      if (this.searchInput) {
        this.searchInput.value = '';
        this.searchQuery = '';
        this.searchClearBtn.style.display = 'none';
        this.searchInput.focus();
        this.render();
      }
    });

    // Botões de categorias
    this.categoryBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.categoryBtns.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        this.activeCategory = btn.dataset.category || 'all';
        this.render();
      });
    });

    // Botão reset no empty state
    this.resetBtn?.addEventListener('click', () => {
      this.resetFilters();
    });

    // Fechar Modal
    this.modalClose?.addEventListener('click', () => this.closeModal());
    this.modalCloseBtn?.addEventListener('click', () => this.closeModal());
    this.modalOverlay?.addEventListener('click', () => this.closeModal());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
        this.closeModal();
      }
    });

    // Compartilhar notícia
    this.modalShareBtn?.addEventListener('click', () => {
      this.shareCurrentPost();
    });

    // Delegação de cliques para abrir artigos (destaque e grid)
    document.addEventListener('click', (e) => {
      const openBtn = e.target.closest('.open-blog-post');
      if (openBtn) {
        e.preventDefault();
        const postId = openBtn.dataset.postId;
        this.openArticleModal(postId);
      }
    });
  }

  resetFilters() {
    this.activeCategory = 'all';
    this.searchQuery = '';
    if (this.searchInput) {
      this.searchInput.value = '';
    }
    if (this.searchClearBtn) {
      this.searchClearBtn.style.display = 'none';
    }
    this.categoryBtns.forEach((btn) => {
      const isAll = btn.dataset.category === 'all';
      btn.classList.toggle('active', isAll);
      btn.setAttribute('aria-selected', String(isAll));
    });
    this.render();
  }

  getFilteredPosts() {
    return this.posts.filter((post) => {
      const matchesCategory =
        this.activeCategory === 'all' || post.category === this.activeCategory;
      if (!matchesCategory) return false;

      if (!this.searchQuery) return true;

      const q = this.searchQuery;
      const titleMatch = post.title?.toLowerCase().includes(q);
      const excerptMatch = post.excerpt?.toLowerCase().includes(q);
      const badgeMatch = post.badge?.toLowerCase().includes(q);
      const authorMatch = post.author?.toLowerCase().includes(q);
      const contentMatch = post.content?.toLowerCase().includes(q);

      return (
        titleMatch || excerptMatch || badgeMatch || authorMatch || contentMatch
      );
    });
  }

  render() {
    const filtered = this.getFilteredPosts();

    // Atualiza contador
    if (this.counterEl) {
      const total = filtered.length;
      if (total === 0) {
        this.counterEl.textContent = 'Nenhuma notícia encontrada';
      } else if (total === 1) {
        this.counterEl.textContent = '1 publicação encontrada';
      } else {
        this.counterEl.textContent = `${total} publicações encontradas`;
      }
    }

    // Se vazio, exibe estado vazio
    if (filtered.length === 0) {
      if (this.featuredWrapper) this.featuredWrapper.style.display = 'none';
      if (this.gridContainer) this.gridContainer.innerHTML = '';
      if (this.emptyEl) {
        this.emptyEl.style.display = 'block';
        const emptyTitle = document.getElementById('blogEmptyTitle');
        const emptyDesc = document.getElementById('blogEmptyDesc');
        if (this.searchQuery) {
          if (emptyTitle) emptyTitle.textContent = 'Nenhum resultado encontrado';
          if (emptyDesc) emptyDesc.textContent = `Não encontramos nenhuma publicação para "${this.searchQuery}". Tente outros termos de busca.`;
        } else {
          if (emptyTitle) emptyTitle.textContent = 'Artigos em Produção';
          if (emptyDesc) emptyDesc.textContent = 'Ainda não há publicações nesta categoria. Nossos artigos técnicos e científicos estão em fase de produção por nossa equipe e serão lançados em breve!';
        }
      }
      return;
    }

    if (this.emptyEl) this.emptyEl.style.display = 'none';

    // Artigo em Destaque:
    // Exibe o primeiro post com featured: true (ou o primeiro da lista se não houver busca ativa)
    let featuredPost = null;
    let gridPosts = [...filtered];

    if (!this.searchQuery && this.activeCategory === 'all') {
      const explicitFeaturedIndex = gridPosts.findIndex((p) => p.featured);
      if (explicitFeaturedIndex !== -1) {
        featuredPost = gridPosts.splice(explicitFeaturedIndex, 1)[0];
      } else {
        featuredPost = gridPosts.shift();
      }
    } else if (gridPosts.length > 0) {
      // Se estiver filtrado, usa o primeiro como destaque se houver mais de 1
      if (gridPosts.length >= 2) {
        featuredPost = gridPosts.shift();
      }
    }

    // Renderiza Destaque
    if (featuredPost && this.featuredContainer && this.featuredWrapper) {
      this.featuredWrapper.style.display = 'block';
      this.featuredContainer.innerHTML = this.createFeaturedHtml(featuredPost);
    } else if (this.featuredWrapper) {
      this.featuredWrapper.style.display = 'none';
    }

    // Renderiza Grid
    if (this.gridContainer) {
      this.gridContainer.innerHTML = gridPosts
        .map((post) => this.createCardHtml(post))
        .join('');
    }

    // Observa novos elementos com animação reveal
    document
      .querySelectorAll('.blog-card, .blog-featured-card')
      .forEach((el) => {
        revealObserver.observe(el);
      });
  }

  createFeaturedHtml(post) {
    return `
      <article class="blog-featured-card reveal">
        <div class="featured-image-area">
          <span class="featured-tag-badge">⭐ Destaque</span>
          <span class="featured-category-badge">${this.escapeHtml(post.badge)}</span>
          <img src="${this.escapeHtml(post.image)}" alt="${this.escapeHtml(post.title)}" loading="lazy" />
        </div>
        <div class="featured-content-area">
          <div class="blog-meta-row">
            <span class="blog-date-text">${this.escapeHtml(post.date)}</span>
            <span>•</span>
            <span class="blog-read-time-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              ${this.escapeHtml(post.readTime || '3 min de leitura')}
            </span>
          </div>
          <h3 class="featured-title">${this.escapeHtml(post.title)}</h3>
          <p class="featured-excerpt">${this.escapeHtml(post.excerpt)}</p>
          <div class="featured-footer">
            <div class="featured-author">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>${this.escapeHtml(post.author || 'Equipe Arbo')}</span>
            </div>
            <button type="button" class="btn-read-featured open-blog-post" data-post-id="${this.escapeHtml(post.id)}">
              Ler artigo completo →
            </button>
          </div>
        </div>
      </article>
    `;
  }

  createCardHtml(post) {
    return `
      <article class="blog-card reveal">
        <div class="blog-card-image">
          <span class="blog-card-badge">${this.escapeHtml(post.badge)}</span>
          <img src="${this.escapeHtml(post.image)}" alt="${this.escapeHtml(post.title)}" loading="lazy" />
        </div>
        <div class="blog-card-content">
          <div class="blog-card-meta">
            <span class="blog-date-text">${this.escapeHtml(post.date)}</span>
            <span class="blog-read-time-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 0.85rem; height: 0.85rem;">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              ${this.escapeHtml(post.readTime || '3 min')}
            </span>
          </div>
          <h3>${this.escapeHtml(post.title)}</h3>
          <p>${this.escapeHtml(post.excerpt)}</p>
          <div class="blog-card-footer">
            <span class="blog-card-author">${this.escapeHtml(post.author || 'Equipe Arbo')}</span>
            <button type="button" class="blog-card-link open-blog-post" data-post-id="${this.escapeHtml(post.id)}">
              Ler mais →
            </button>
          </div>
        </div>
      </article>
    `;
  }

  openArticleModal(postId) {
    const post = this.posts.find((p) => p.id === postId);
    if (!post || !this.modal) return;

    this.currentModalPost = post;

    const modalImage = document.getElementById('modalImage');
    const modalBadge = document.getElementById('modalBadge');
    const modalReadTime = document.getElementById('modalReadTime');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalDate = document.getElementById('modalDate');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalContent = document.getElementById('modalContent');

    if (modalImage) {
      modalImage.src = post.image;
      modalImage.alt = post.title;
    }
    if (modalBadge) modalBadge.textContent = post.badge;
    if (modalReadTime)
      modalReadTime.textContent = post.readTime || '3 min de leitura';
    if (modalAuthor)
      modalAuthor.textContent = post.author || 'Equipe Arbo Inteligente';
    if (modalDate) modalDate.textContent = post.date;
    if (modalTitle) modalTitle.textContent = post.title;
    if (modalDescription) modalDescription.textContent = post.excerpt || '';
    if (modalContent) modalContent.innerHTML = post.content || '';

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Atualiza hash na URL sem scroll agressivo
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#noticia-${post.id}`);
    }
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    this.currentModalPost = null;

    if (window.history && window.history.replaceState) {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search,
      );
    }
  }

  shareCurrentPost() {
    if (!this.currentModalPost) return;

    const post = this.currentModalPost;
    const shareUrl = `${window.location.origin}${window.location.pathname}#noticia-${post.id}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          this.showToast(
            '✓ Link do artigo copiado para a área de transferência!',
          );
        })
        .catch(() => {
          this.fallbackCopy(shareUrl);
        });
    } else {
      this.fallbackCopy(shareUrl);
    }
  }

  fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      this.showToast('✓ Link do artigo copiado!');
    } catch (err) {
      this.showToast('Não foi possível copiar o link.');
    }
    document.body.removeChild(tempInput);
  }

  showToast(message) {
    if (!this.toast) return;
    this.toast.textContent = message;
    this.toast.classList.add('show');

    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toast.classList.remove('show');
    }, 3200);
  }

  checkUrlHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#noticia-')) {
      const postId = hash.replace('#noticia-', '');
      setTimeout(() => {
        const post = this.posts.find((p) => p.id === postId);
        if (post) {
          const noticiasSection = document.getElementById('noticias');
          noticiasSection?.scrollIntoView({ behavior: 'smooth' });
          this.openArticleModal(postId);
        }
      }, 300);
    }
  }

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

/* ============================================================
   CARROSSEL DE EVENTOS (Destaques & Passagem Automática)
   ============================================================ */

class EventsCarousel {
  constructor() {
    this.carousel = document.getElementById('eventsCarousel');
    this.prevBtn = document.getElementById('eventPrev');
    this.nextBtn = document.getElementById('eventNext');
    this.indicatorsContainer = document.getElementById('eventsIndicators');
    this.slides = this.carousel
      ? Array.from(this.carousel.querySelectorAll('.event-slide'))
      : [];
    this.currentIndex = 0;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 4500; // 4.5 segundos por slide

    if (this.carousel && this.slides.length > 0) {
      this.init();
    }
  }

  init() {
    this.createIndicators();
    this.bindEvents();
    this.startAutoPlay();
    this.updateActiveState(0);
  }

  createIndicators() {
    if (!this.indicatorsContainer) return;
    this.indicatorsContainer.innerHTML = '';
    this.indicators = this.slides.map((_, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `event-indicator${idx === 0 ? ' active' : ''}`;
      dot.setAttribute('aria-label', `Ir para evento ${idx + 1}`);
      dot.dataset.index = String(idx);
      dot.addEventListener('click', () => {
        this.goToSlide(idx);
        this.restartAutoPlay();
      });
      this.indicatorsContainer.appendChild(dot);
      return dot;
    });
  }

  bindEvents() {
    this.prevBtn?.addEventListener('click', () => {
      this.prev();
      this.restartAutoPlay();
    });

    this.nextBtn?.addEventListener('click', () => {
      this.next();
      this.restartAutoPlay();
    });

    // Pausar autoplay durante interação do usuário
    const carouselWrapper =
      this.carousel.closest('.events-carousel-wrapper') || this.carousel;
    carouselWrapper.addEventListener('mouseenter', () => this.pauseAutoPlay());
    carouselWrapper.addEventListener('mouseleave', () => this.startAutoPlay());
    carouselWrapper.addEventListener(
      'touchstart',
      () => this.pauseAutoPlay(),
      { passive: true },
    );
    carouselWrapper.addEventListener('touchend', () => this.startAutoPlay(), {
      passive: true,
    });

    // Sincronizar indicadores com scroll manual
    let scrollTimeout;
    this.carousel.addEventListener(
      'scroll',
      () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          this.syncIndexFromScroll();
        }, 80);
      },
      { passive: true },
    );

    // Navegação por teclado
    this.carousel.setAttribute('tabindex', '0');
    this.carousel.setAttribute('role', 'region');
    this.carousel.setAttribute('aria-label', 'Carrossel de eventos');
    this.carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prev();
        this.restartAutoPlay();
      } else if (e.key === 'ArrowRight') {
        this.next();
        this.restartAutoPlay();
      }
    });
  }

  syncIndexFromScroll() {
    if (!this.carousel || !this.slides.length) return;
    const scrollLeft = this.carousel.scrollLeft;
    let closestIndex = 0;
    let minDistance = Infinity;

    this.slides.forEach((slide, idx) => {
      const distance = Math.abs(
        slide.offsetLeft - this.carousel.offsetLeft - scrollLeft,
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== this.currentIndex) {
      this.currentIndex = closestIndex;
      this.updateActiveState(this.currentIndex);
    }
  }

  goToSlide(index) {
    if (index < 0) index = this.slides.length - 1;
    if (index >= this.slides.length) index = 0;
    this.currentIndex = index;

    const targetSlide = this.slides[index];
    if (targetSlide) {
      const targetLeft = targetSlide.offsetLeft - this.carousel.offsetLeft;
      this.carousel.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      });
    }

    this.updateActiveState(index);
  }

  next() {
    const nextIdx = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(nextIdx);
  }

  prev() {
    const prevIdx =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIdx);
  }

  updateActiveState(index) {
    if (this.indicators) {
      this.indicators.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
        dot.setAttribute('aria-current', idx === index ? 'true' : 'false');
      });
    }
  }

  startAutoPlay() {
    this.pauseAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.autoPlayDelay);
  }

  pauseAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  restartAutoPlay() {
    this.pauseAutoPlay();
    this.startAutoPlay();
  }
}

/* ============================================================
   FORMULÁRIO DE CONTATO (Feedback Interativo)
   ============================================================ */

function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('blogToast');
  const submitBtn = document.getElementById('contactSubmitBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('formName');
    const emailInput = document.getElementById('formEmail');
    const subjectInput = document.getElementById('formSubject');
    const messageInput = document.getElementById('formMessage');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !message) {
      if (toast) {
        toast.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
      }
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('is-loading');
      submitBtn.innerHTML = `
        <svg class="btn-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span>Enviando...</span>
      `;
    }

    setTimeout(() => {
      if (toast) {
        toast.textContent = `✓ Mensagem recebida, ${name}! Entraremos em contato com você pelo e-mail informado.`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4500);
      }

      form.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('is-loading');
        submitBtn.innerHTML = `
          <span>Enviar Mensagem</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        `;
      }
    }, 600);
  });
}

// Inicializa todos os módulos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new BlogManager();
  new EventsCarousel();
  initContactForm();
});

