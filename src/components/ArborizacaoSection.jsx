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
                    <span className="stat-label">
                      {card.statLabel}
                      {card.statSourceUrl && (
                        <a
                          href={card.statSourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="stat-source-badge"
                          title="Acessar base de dados do IBGE"
                        >
                          ({card.statSourceLabel} ↗)
                        </a>
                      )}
                    </span>
                  </div>
                )}

                <h3>{card.title}</h3>

                {card.desc && <p>{card.desc}</p>}

                {card.bullets && (
                  <ul className="arbor-list">
                    {card.bullets.map((b, idx) => (
                      <li key={idx}>
                        <div>
                          <strong>{b.label}:</strong> {b.text}
                          {b.sourceUrl && (
                            <a
                              href={b.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bullet-source-link"
                              title={`Consultar fonte oficial: ${b.sourceLabel}`}
                            >
                              [Fonte: {b.sourceLabel} ↗]
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {card.paragraphs && card.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    dangerouslySetInnerHTML={{
                      __html: p
                        .replace(
                          /Censo do IBGE \(2022\)/g,
                          '<a href="https://censo2022.ibge.gov.br/" target="_blank" rel="noopener noreferrer" class="source-inline-link" title="Acessar publicação oficial do Censo Demográfico do IBGE"><strong>Censo do IBGE (2022) ↗</strong></a>'
                        )
                        .replace(
                          /Sergipe é o estado brasileiro com o menor índice de vias públicas arborizadas de todo o país\./g,
                          '<strong>Sergipe é o estado brasileiro com o menor índice de vias públicas arborizadas de todo o país</strong>.'
                        )
                        .replace(
                          /ilhas de calor/g,
                          '<a href="https://www.gov.br/mma/pt-br" target="_blank" rel="noopener noreferrer" class="source-inline-link" title="Saiba mais sobre ilhas de calor e políticas climáticas do MMA"><strong>ilhas de calor ↗</strong></a>'
                        )
                        .replace(/Arborização Inteligente/g, '<strong>Arborização Inteligente</strong>')
                    }}
                  />
                ))}

                {card.officialSource && (
                  <div className="official-source-box">
                    <div className="source-box-title">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      <span>Fonte Oficial Citada:</span>
                    </div>
                    <a
                      href={card.officialSource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="official-source-link"
                      title="Acessar portal oficial do IBGE"
                    >
                      <strong>{card.officialSource.name}</strong>
                      <span>{card.officialSource.doc} ↗</span>
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
