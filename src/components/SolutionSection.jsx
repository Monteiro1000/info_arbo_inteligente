import React from 'react';
import { TECH_ITEMS, PLANS_DATA, AUDIENCE_SEGMENTS } from '../data/solutionData';

export default function SolutionSection() {
  return (
    <section className="solution-section" id="solucao">
      <div className="container">
        <div className="section-header text-center">
          <p className="eyebrow eyebrow-dark">
            Tecnologia &amp; Inovação
          </p>
          <h2>Nossa Solução: Monitoramento Arbóreo Inteligente</h2>
          <p className="section-text">
            Um sistema de monitoramento arbóreo capaz de analisar áreas com déficit vegetal, avaliar a saúde das árvores em tempo real e diferenciar espécies nativas de invasoras por meio de sensores IoT, inteligência artificial e drones.
          </p>
        </div>

        {/* Hardware & Tecnologias */}
        <div className="tech-ecosystem-box reveal">
          <div className="tech-box-header">
            <h3>Tecnologias Integradas ao Sistema</h3>
            <p>Conheça os componentes de hardware e software que operam em campo e na nuvem:</p>
          </div>
          <div className="tech-pills-grid">
            {TECH_ITEMS.map((item, idx) => (
              <div key={idx} className="tech-pill-item">
                <p className="topic-rect-blue">{item.num}</p>
                <div className="tech-item-body">
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                  {item.sourceUrl && (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tech-source-link"
                      title={`Ver referência técnica: ${item.sourceLabel}`}
                    >
                      Fonte: {item.sourceLabel} ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OS 4 PLANOS DA SOLUÇÃO */}
        <div className="plans-container">
          <div className="plans-title-wrapper text-center">
            <span className="plans-badge">Modelos de Atendimento</span>
            <h3>Os 4 Planos do Projeto Arborização Inteligente</h3>
            <p className="section-text">Estruturados sob medida para atender desde pequenos municípios até grandes centros urbanos e indústrias:</p>
          </div>

          <div className="plans-grid">
            {PLANS_DATA.map((plan) => {
              const cardClass = `plan-card ${plan.isFeatured ? 'featured-plan ' : ''}reveal`;

              return (
                <div
                  key={plan.id}
                  className={cardClass}
                  style={{ '--delay': plan.delay }}
                >
                  <div className="plan-header">
                    {plan.popularTag && (
                      <div className="plan-popular-tag">{plan.popularTag}</div>
                    )}
                    <span className="topic-rect-green">{plan.num}</span>
                    <span className="plan-tag">{plan.tag}</span>
                    <h4>{plan.title}</h4>
                  </div>
                  <p className="plan-summary">{plan.summary}</p>
                  <ul className="plan-features">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <span className="feat-check-icon" aria-hidden="true">✓</span>
                        <span className="feat-text">
                          {typeof feat === 'string' ? feat : feat.text}
                          {typeof feat !== 'string' && feat.sourceUrl && (
                            <a
                              href={feat.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="feat-source-link"
                              title={`Consultar fonte oficial: ${feat.sourceLabel}`}
                            >
                              ({feat.sourceLabel} ↗)
                            </a>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="plan-footer">
                    <span className="plan-badge-ideal">Ideal para: {plan.idealFor}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Diferencial & Públicos-Alvo */}
        <div className="solution-details-grid">
          <div className="differential-card reveal">
            <div className="card-kicker">Diferencial Inovador</div>
            <h3>O que torna a Arborização Inteligente um sistema único?</h3>
            <p>
              A <strong>Arborização Inteligente</strong> é a única plataforma que integra <strong>monitoramento em tempo real por sensores IoT</strong>, <strong>inteligência artificial preditiva</strong> e <strong>participação cidadã</strong> para transformar a gestão da arborização urbana em um processo preventivo, inteligente e fundamentado em evidências científicas.
            </p>
            <div className="differential-ods-box">
              <div className="ods-box-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <strong>Viabilidade e Conformidade com os ODS da ONU</strong>
              </div>
              <p>
                Resolve o impasse de secretarias de meio ambiente e prefeituras por laudos e relatórios técnicos precisos que respaldam tomadas de decisão, garantindo credibilidade pública e cumprimento das metas dos{' '}
                <a
                  href="https://brasil.un.org/pt-br/sdgs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-source-link"
                  title="Conheça os Objetivos de Desenvolvimento Sustentável da ONU Brasil"
                >
                  Objetivos de Desenvolvimento Sustentável (ODS) ↗
                </a>.
              </p>
            </div>
          </div>

          <div className="audience-card reveal">
            <div className="card-kicker">Impacto Multissetorial</div>
            <h3>Público-alvo e Beneficiários</h3>
            <p className="audience-intro">
              Solução projetada para gerar valor prático a diferentes atores da sociedade e da gestão pública:
            </p>
            <div className="audience-segments-grid">
              {AUDIENCE_SEGMENTS.map((seg) => (
                <div key={seg.id} className="audience-segment-item">
                  <div className="segment-top-row">
                    <span className="segment-badge">{seg.badge}</span>
                  </div>
                  <h4>{seg.title}</h4>
                  <p>{seg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
