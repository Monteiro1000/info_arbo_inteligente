import React from 'react';
import { TECH_ITEMS, PLANS_DATA, AUDIENCE_TAGS } from '../data/solutionData';

export default function SolutionSection() {
  return (
    <section className="solution-section" id="solucao">
      <div className="container">
        <div className="section-header text-center">
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span>
            Tecnologia & Inovação
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
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
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
                      <li key={fIdx}>{feat}</li>
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
            <h3>O que torna Arborização Inteligente um sistema único?</h3>
            <p>
              A <strong>Arborização Inteligente</strong> é a única plataforma que integra <strong>monitoramento em tempo real por sensores IoT</strong>, <strong>inteligência artificial preditiva</strong> e <strong>participação cidadã</strong> para transformar a gestão da arborização urbana em um processo preventivo, inteligente e fundamentado em evidências.
            </p>
            <div className="viability-note">
              <strong>Viabilidade e Conformidade com os ODS:</strong>
              <p>Resolve o impasse de secretarias de meio ambiente e prefeituras por relatórios técnicos precisos que respaldam tomadas de decisão, garantindo credibilidade pública e cumprimento das metas dos Objetivos de Desenvolvimento Sustentável (ODS).</p>
            </div>
          </div>

          <div className="audience-card reveal">
            <div className="card-kicker">Impacto Multissetorial</div>
            <h3>Público-alvo e Beneficiários</h3>
            <div className="audience-tags">
              {AUDIENCE_TAGS.map((tag, idx) => (
                <span key={idx} className="aud-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
