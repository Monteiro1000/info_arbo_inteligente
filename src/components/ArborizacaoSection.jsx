import React from 'react';
import { ARBOR_CARDS } from '../data/arborData';

export default function ArborizacaoSection() {
  const renderIcon = (type) => {
    switch (type) {
      case 'tree':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22v-8M12 14c-4 0-7-3-7-7 0-3 3-5 7-5s7 2 7 5c0 4-3 7-7 7z" />
            <path d="M9 18l3-4 3 4" />
          </svg>
        );
      case 'warning':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        );
      case 'danger':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="arborizacao-section" id="arborizacao">
      <div className="container">
        <div className="section-header text-center">
          <h2>Arborização: O que é e por que é um desafio urgente?</h2>
          <p className="section-text">
            Compreenda a importância vital da cobertura arbórea urbana e o cenário alarmante enfrentado no Brasil, na região Nordeste e especialmente no estado de Sergipe.
          </p>
        </div>

        <div className="arborizacao-grid">
          {ARBOR_CARDS.map((card) => {
            const cardClasses = `arbor-card ${card.isHighlight ? 'highlight-card ' : ''}reveal`;
            const iconClasses = `arbor-icon-wrapper ${card.iconType === 'warning' ? 'warning' : card.iconType === 'danger' ? 'danger' : ''}`.trim();

            return (
              <article
                key={card.id}
                className={cardClasses}
                style={{ '--delay': card.delay }}
              >
                <div className={iconClasses}>
                  {renderIcon(card.iconType)}
                </div>

                {card.isHighlight && card.statNum && (
                  <div className="stat-highlight">
                    <span className="stat-num">{card.statNum}</span>
                    <span className="stat-label">{card.statLabel}</span>
                  </div>
                )}

                <h3>{card.title}</h3>

                {card.desc && <p>{card.desc}</p>}

                {card.bullets && (
                  <ul className="arbor-list">
                    {card.bullets.map((b, idx) => (
                      <li key={idx}>
                        <strong>{b.label}:</strong> {b.text}
                      </li>
                    ))}
                  </ul>
                )}

                {card.paragraphs && card.paragraphs.map((p, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: p.replace(/Censo do IBGE \(2022\)/g, '<strong>Censo do IBGE (2022)</strong>').replace(/Sergipe é o estado brasileiro com o menor índice de vias públicas arborizadas de todo o país\./g, '<strong>Sergipe é o estado brasileiro com o menor índice de vias públicas arborizadas de todo o país</strong>.').replace(/ilhas de calor/g, '<strong>ilhas de calor</strong>').replace(/Arborização Inteligente/g, '<strong>Arborização Inteligente</strong>') }} />
                ))}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
