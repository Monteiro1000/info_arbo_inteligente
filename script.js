const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const topbar = document.getElementById("topbar");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 12);
});

const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealEls.forEach((el) => revealObserver.observe(el));

/* ---------- CAROUSEL ---------- */

class NewsCarousel {
  constructor() {
    this.carousel = document.getElementById("newsCarousel");
    this.prevBtn = document.getElementById("carouselPrev");
    this.nextBtn = document.getElementById("carouselNext");
    this.indicators = document.querySelectorAll(".indicator");
    this.cards = document.querySelectorAll(".news-card");
    
    if (!this.carousel || !this.prevBtn || !this.nextBtn) return;
    
    this.currentIndex = 0;
    this.cardWidth = this.cards[0]?.offsetWidth || 0;
    this.gap = 16; // 1.6rem em pixels
    this.autoScrollInterval = null;
    
    this.init();
  }
  
  init() {
    this.prevBtn.addEventListener("click", () => this.scroll(-1));
    this.nextBtn.addEventListener("click", () => this.scroll(1));
    
    this.indicators.forEach((indicator) => {
      indicator.addEventListener("click", (e) => {
        const index = parseInt(e.target.dataset.index);
        this.goToSlide(index);
      });
    });
    
    // Recalculate on resize
    window.addEventListener("resize", () => {
      this.cardWidth = this.cards[0]?.offsetWidth || 0;
    });
    
    this.updateCarousel();
  }
  
  scroll(direction) {
    const cardsPerView = this.getCardsPerView();
    this.currentIndex = (this.currentIndex + direction + this.cards.length) % this.cards.length;
    this.updateCarousel();
  }
  
  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
  }
  
  getCardsPerView() {
    const width = window.innerWidth;
    if (width >= 1200) return 4;
    if (width >= 900) return 2;
    return 1;
  }
  
  updateCarousel() {
    const scrollDistance = this.currentIndex * (this.cardWidth + this.gap);
    this.carousel.scrollLeft = scrollDistance;
    
    // Update indicators
    this.indicators.forEach((indicator, index) => {
      const isCurrent = index === this.currentIndex;
      indicator.setAttribute("aria-current", String(isCurrent));
    });
  }
}

// Initialize carousel when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new NewsCarousel();
  new NewsModal();
});

/* ---------- NEWS MODAL ---------- */

class NewsModal {
  constructor() {
    this.modal = document.getElementById("newsModal");
    this.modalOverlay = document.getElementById("modalOverlay");
    this.modalClose = document.getElementById("modalClose");
    this.modalCloseBtn = document.getElementById("modalCloseBtn");
    this.openLinks = document.querySelectorAll(".open-modal");
    
    if (!this.modal) return;
    
    this.newsData = [
      {
        badge: "Tecnologia",
        image: "assets/salvando-a-terra.png",
        date: "15 de Agosto, 2024",
        title: "Nova plataforma de monitoramento em tempo real",
        description: "Lançamos a versão 2.0 com dashboards avançados e integrações com IoT para coleta de dados mais precisa sobre a saúde das árvores urbanas.",
        content: `
          <p>A Arborização Inteligente apresenta sua plataforma mais avançada até o momento, desenvolvida com tecnologias de ponta para oferecer monitoramento em tempo real.</p>
          
          <h3 style="color: #02183f; margin: 1.5rem 0 0.8rem; font-weight: 700;">Principais Funcionalidades:</h3>
          <ul>
            <li>Dashboards interativos com visualização de dados em tempo real</li>
            <li>Integração com sensores IoT para coleta automática de dados</li>
            <li>Análise preditiva com IA para saúde das árvores</li>
            <li>Relatórios personalizáveis e exportáveis</li>
            <li>API aberta para integrações com terceiros</li>
          </ul>
          
          <p>Com essa nova versão, gestores públicos e cidadãos terão acesso a informações mais precisas e atualizadas, permitindo tomadas de decisão mais eficientes.</p>
        `
      },
      {
        badge: "Sustentabilidade",
        image: "material_site_arborizacao_inteligente/SAVE_20251003_225236.jpg",
        date: "08 de Agosto, 2024",
        title: "Expansão do projeto para cidades do Nordeste",
        description: "A Arborização Inteligente chega em mais 5 municípios, consolidando nossa missão de promover cidades mais verdes e saudáveis em toda a região.",
        content: `
          <p>Com grande satisfação, anunciamos a expansão do projeto Arborização Inteligente para mais 5 municípios do Nordeste, reforçando nosso compromisso com a sustentabilidade regional.</p>
          
          <h3 style="color: #02183f; margin: 1.5rem 0 0.8rem; font-weight: 700;">Cidades Beneficiadas:</h3>
          <ul>
            <li>Aracaju - SE</li>
            <li>Maceió - AL</li>
            <li>Recife - PE</li>
            <li>Fortaleza - CE</li>
            <li>Natal - RN</li>
          </ul>
          
          <p>Cada município contará com equipes especializadas e infraestrutura completa para implementação do sistema de monitoramento arbóreo.</p>
        `
      },
      {
        badge: "Inovação",
        image: "assets/salvando-a-terra.png",
        date: "01 de Agosto, 2024",
        title: "IA para análise predictiva de saúde arbórea",
        description: "Implementação de modelos de machine learning que predizem a necessidade de manutenção e intervenções preventivas nas árvores urbanas.",
        content: `
          <p>Desenvolvemos algoritmos avançados de inteligência artificial que analisam múltiplos fatores para prever problemas de saúde em árvores urbanas.</p>
          
          <h3 style="color: #02183f; margin: 1.5rem 0 0.8rem; font-weight: 700;">Tecnologias Utilizadas:</h3>
          <ul>
            <li>Machine Learning com redes neurais profundas</li>
            <li>Análise de imagens via computer vision</li>
            <li>Processamento de dados geoespaciais</li>
            <li>Modelos preditivos de fatores climáticos</li>
          </ul>
          
          <p>Essa inovação permite identificar doenças, pragas e deficiências nutricionais com até 3 meses de antecedência, possibilitando intervenções preventivas.</p>
        `
      },
      {
        badge: "Comunidade",
        image: "material_site_arborizacao_inteligente/SAVE_20251003_225236.jpg",
        date: "25 de Julho, 2024",
        title: "Aplicativo mobile disponível para download",
        description: "Cidadãos agora podem participar ativamente do projeto reportando problemas e acompanhando iniciativas de arborização em suas comunidades.",
        content: `
          <p>O aplicativo mobile Arborização Inteligente está disponível para iOS e Android, democratizando o acesso aos dados e permitindo participação comunitária.</p>
          
          <h3 style="color: #02183f; margin: 1.5rem 0 0.8rem; font-weight: 700;">Recursos do App:</h3>
          <ul>
            <li>Mapa interativo de árvores monitoradas</li>
            <li>Sistema de denúncias de problemas arbóreos</li>
            <li>Histórico de manutenções e intervenções</li>
            <li>Educação ambiental com conteúdos interativos</li>
            <li>Gamificação com pontos e conquistas</li>
          </ul>
          
          <p>Download agora em Apple App Store e Google Play Store!</p>
        `
      },
      {
        badge: "Pesquisa",
        image: "assets/salvando-a-terra.png",
        date: "18 de Julho, 2024",
        title: "Relatório: impacto positivo em 3 anos",
        description: "Dados mostram aumento de 40% na cobertura arbórea nas cidades monitoradas e melhoria significativa na qualidade do ar e temperatura ambiente.",
        content: `
          <p>Após 3 anos de implementação da Arborização Inteligente, os resultados são surpreendentes e reforçam a importância do monitoramento ambiental eficiente.</p>
          
          <h3 style="color: #02183f; margin: 1.5rem 0 0.8rem; font-weight: 700;">Resultados Alcançados:</h3>
          <ul>
            <li><strong>+40%</strong> de aumento na cobertura arbórea nas cidades monitoradas</li>
            <li><strong>-2.3°C</strong> de redução na temperatura média em áreas verdes</li>
            <li><strong>15%</strong> de melhoria na qualidade do ar (redução de poluentes)</li>
            <li><strong>2.5M</strong> de árvores monitoradas continuamente</li>
            <li><strong>85%</strong> de aprovação comunitária do projeto</li>
          </ul>
          
          <p>O relatório completo está disponível em nosso site com análises detalhadas, metodologia e projeções futuras.</p>
        `
      }
    ];
    
    this.init();
  }
  
  init() {
    this.openLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const newsIndex = parseInt(link.dataset.news);
        this.openModal(newsIndex);
      });
    });
    
    this.modalClose?.addEventListener("click", () => this.closeModal());
    this.modalCloseBtn?.addEventListener("click", () => this.closeModal());
    this.modalOverlay?.addEventListener("click", () => this.closeModal());
    
    // Close on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal.classList.contains("active")) {
        this.closeModal();
      }
    });
  }
  
  openModal(index) {
    const news = this.newsData[index];
    if (!news) return;
    
    document.getElementById("modalBadge").textContent = news.badge;
    document.getElementById("modalImage").src = news.image;
    document.getElementById("modalImage").alt = news.title;
    document.getElementById("modalDate").textContent = news.date;
    document.getElementById("modalTitle").textContent = news.title;
    document.getElementById("modalDescription").textContent = news.description;
    document.getElementById("modalContent").innerHTML = news.content;
    
    this.modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  
  closeModal() {
    this.modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}
