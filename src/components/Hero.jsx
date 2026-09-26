import React from 'react';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <header className="site-header" id="home">
      <Navbar />

      <div className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot"></span>
            Sistema de Monitoramento Arbóreo Inteligente
          </p>
          <h1>Arborização Inteligente</h1>
          <p className="hero-slogan">"Uma cidade inteligente é aquela que usa tecnologia para preservar a vida."</p>
          <p className="lead">
            Nascemos com o propósito de transformar a arborização urbana através de dados estratégicos, telemetria IoT e inteligência artificial. Considerando que Sergipe apresenta o <strong>menor índice de vias arborizadas do Brasil</strong>, segundo o <strong>Censo do IBGE (2022)</strong>, criamos uma solução completa para fornecer dados que auxiliem a gestão pública e a população na tomada de decisões eficientes, reduzindo ilhas de calor e priorizando espécies nativas.
          </p>

          <div className="hero-actions">
            <a href="#solucao" className="btn btn-primary">Conhecer a Solução</a>
            <a href="#contato" className="btn btn-outline">Entrar em Contato</a>
          </div>

          <ul className="hero-highlights">
            <li>
              <span className="highlight-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 3c-4 0-8 3-8 9 0 4 3 7 7 8 1-5 3-9 9-13-2-2-5-4-8-4z" fill="currentColor"/></svg>
              </span>
              <span>Sensores IoT (ESP32)</span>
            </li>
            <li>
              <span className="highlight-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M3 17l5-5 4 4 9-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="21" cy="7" r="1.6" fill="currentColor"/></svg>
              </span>
              <span>Drones & IA Preventiva</span>
            </li>
            <li>
              <span className="highlight-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>
              </span>
              <span>Satélite & Planos</span>
            </li>
            <li>
              <span className="highlight-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="currentColor"/></svg>
              </span>
              <span>Alinhado aos ODS da ONU</span>
            </li>
          </ul>
        </div>
      </div>

      <svg className="header-canopy" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">
        <path className="canopy-path" d="M0,120 C150,180 300,40 450,110 C600,180 750,40 900,110 C1050,180 1150,90 1200,120" />
      </svg>
    </header>
  );
}
