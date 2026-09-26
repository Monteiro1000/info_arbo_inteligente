import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a className="brand" href="#home">
            <img className="brand-logo" src="assets/logo.png" alt="Logo Arborização Inteligente" />
            <span className="brand-text">
              <strong>Arborização Inteligente</strong>
              <small>Tecnologia e dados para cidades sustentáveis</small>
            </span>
          </a>
          <p className="footer-tagline">
            "Uma cidade inteligente é aquela que usa tecnologia para preservar a vida."
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#arborizacao">Arborização Urbana</a></li>
            <li><a href="#solucao">Nossa Solução & Planos</a></li>
            <li><a href="#quem-somos">Quem Somos & Metas</a></li>
            <li><a href="#eventos">Destaques do Projeto</a></li>
            <li><a href="#noticias">Blog do Projeto</a></li>
            <li><a href="#contato">Fale Conosco</a></li>
          </ul>
        </div>

        <div className="footer-contact-group">
          <h4>Contato Oficial</h4>
          <ul>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:arborizacaointeligente1@gmail.com">arborizacaointeligente1@gmail.com</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <a
                href="https://www.instagram.com/arborizacao_inteligente?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                @arborizacao_inteligente
              </a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Aracaju, Sergipe — Brasil</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="copy-text">
          &copy; 2026 Arborização Inteligente. Todos os direitos reservados.
        </p>
        <div className="footer-bottom-badges">
          <span>ODS 11 • Cidades Sustentáveis</span>
          <span>ODS 13 • Ação Climática</span>
          <span>ODS 15 • Vida Terrestre</span>
        </div>
      </div>
    </footer>
  );
}
