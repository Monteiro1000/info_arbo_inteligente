import React from 'react';
import { TEAM_MEMBERS, TEAM_GOALS, ODS_ITEMS } from '../data/teamData';

export default function TeamSection() {
  return (
    <section className="team-section" id="quem-somos">
      <div className="container">
        <div className="section-header text-center">
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span>
            Equipe, Metas & Objetivos
          </p>
          <h2>Quem Somos Nós, Metas e Objetivos</h2>
          <p className="section-text">
            Conheça o time de estudantes, pesquisadores e inovadores sergipanos dedicado a construir cidades sustentáveis e inteligentes.
          </p>
        </div>

        {/* Grid de Membros da Equipe */}
        <div className="team-grid">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="team-card reveal"
              style={{ '--delay': member.delay }}
            >
              <div className={`member-photo-wrapper ${member.photoClass || ''}`.trim()}>
                <img
                  src={member.photo}
                  alt={`Foto de ${member.name}`}
                  loading="lazy"
                />
              </div>
              <div className="member-info">
                <h4>{member.name}</h4>
                <span className="member-role">{member.role}</span>
                <p className="member-desc">{member.desc}</p>
                <div className="member-socials">
                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      className="member-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${member.name}`}
                      title="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  )}
                  {member.instagram && member.instagram !== '#' && (
                    <a
                      href={member.instagram}
                      className="member-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${member.name}`}
                      title="Instagram"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metas, Objetivos e ODS */}
        <div className="goals-container reveal">
          <div className="goals-header">
            <h3>Metas, Objetivos e Compromisso com os ODS</h3>
            <p>Trabalhamos orientados por indicadores claros de curto, médio e longo prazo:</p>
          </div>

          <div className="goals-grid">
            {TEAM_GOALS.map((goal) => (
              <div key={goal.id} className="goal-item">
                <div className="goal-badge">{goal.badge}</div>
                <h4>{goal.title}</h4>
                <p>{goal.desc}</p>
              </div>
            ))}
          </div>

          {/* Selos ODS */}
          <div className="ods-wrapper">
            <span className="ods-label">Alinhamento Estratégico com os Objetivos de Desenvolvimento Sustentável (ONU):</span>
            <div className="ods-badges-list">
              {ODS_ITEMS.map((ods) => (
                <div key={ods.id} className={`ods-badge-card ${ods.className}`}>
                  <div className="ods-image-wrapper">
                    <img src={ods.img} alt={`${ods.code} - ${ods.title}`} className="ods-badge-img" loading="lazy" />
                  </div>
                  <span className="ods-number">{ods.code}</span>
                  <strong>{ods.title}</strong>
                  <p>{ods.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
