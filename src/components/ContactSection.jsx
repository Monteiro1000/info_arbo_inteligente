import React, { useState } from 'react';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      onShowToast('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      onShowToast(`✓ Mensagem recebida, ${name.trim()}! Entraremos em contato com você pelo e-mail informado.`);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsLoading(false);
    }, 600);
  };

  return (
    <section className="contact-section" id="contato">
      <div className="container">
        <div className="section-header text-center">
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span>
            Canais Oficiais & Mensagem Direta
          </p>
          <h2>Entre em Contato Conosco</h2>
          <p className="section-text">
            Tem interesse em implementar a Arborização Inteligente na sua cidade, escola ou projeto? Fale diretamente com nossa equipe!
          </p>
        </div>

        <div className="contact-main-wrapper">
          {/* Formulário de Contato Rápido */}
          <div className="contact-form-container">
            <div className="contact-form-header">
              <span className="contact-form-badge">Mensagem Direta</span>
              <h3>Envie uma Mensagem</h3>
              <p>Preencha os campos abaixo para tirar dúvidas, propor projetos ou solicitar parcerias com nossos pesquisadores.</p>
            </div>

            <form id="contactForm" className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="formName" className="form-label">Nome Completo</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="formName"
                    name="name"
                    className="form-input"
                    placeholder="Ex: Maria Silva"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="formEmail" className="form-label">E-mail para Retorno</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="formEmail"
                    name="email"
                    className="form-input"
                    placeholder="Ex: maria.silva@exemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="formSubject" className="form-label">Assunto ou Tipo de Parceria</label>
                <div className="input-wrapper select-wrapper">
                  <select
                    id="formSubject"
                    name="subject"
                    className="form-input form-select"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Selecione um assunto...</option>
                    <option value="parceria-municipal">Parceria com Prefeitura / Gestão Pública</option>
                    <option value="pesquisa-academica">Pesquisa Científica & Acadêmica (UFS/Outras)</option>
                    <option value="sensores-iot">Implementação de Sensores IoT & Drones</option>
                    <option value="educacao-comunidade">Ações Educacionais e nas Escolas</option>
                    <option value="duvidas-gerais">Dúvidas Gerais sobre o Projeto</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="formMessage" className="form-label">Sua Mensagem</label>
                <div className="input-wrapper">
                  <textarea
                    id="formMessage"
                    name="message"
                    className="form-input form-textarea"
                    rows={4}
                    placeholder="Descreva brevemente como podemos colaborar com a arborização da sua região..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`btn btn-primary contact-submit-btn${isLoading ? ' is-loading' : ''}`}
                id="contactSubmitBtn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="btn-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                    </svg>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Cards dos Canais Oficiais */}
          <div className="contact-channels-grid">
            {/* Card 1: E-mail Oficial */}
            <div className="contact-channel-card">
              <div className="contact-channel-icon email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-channel-content">
                <span className="contact-channel-label">E-mail Oficial</span>
                <h3>Fale por E-mail</h3>
                <p>Envie propostas, solicitações de parcerias municipais, convênios acadêmicos ou tire dúvidas com nossa equipe.</p>
                <a href="mailto:arborizacaointeligente1@gmail.com" className="btn btn-primary contact-channel-btn">
                  <span>Enviar E-mail</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </a>
                <span className="contact-channel-info">arborizacaointeligente1@gmail.com</span>
              </div>
            </div>

            {/* Card 2: Instagram Oficial */}
            <div className="contact-channel-card">
              <div className="contact-channel-icon instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className="contact-channel-content">
                <span className="contact-channel-label">Redes Sociais</span>
                <h3>Siga no Instagram</h3>
                <p>Acompanhe atualizações em tempo real, registros em campo, novidades tecnológicas e eventos em que participamos.</p>
                <a
                  href="https://www.instagram.com/arborizacao_inteligente?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary contact-channel-btn instagram-btn"
                >
                  <span>Acessar Instagram</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <span className="contact-channel-info">@arborizacao_inteligente</span>
              </div>
            </div>

            {/* Card 3: Origem & Localização */}
            <div className="contact-channel-card">
              <div className="contact-channel-icon location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-channel-content">
                <span className="contact-channel-label">Base do Projeto</span>
                <h3>Localização & Origem</h3>
                <p>Iniciativa nascida em Sergipe, vinculada à comunidade acadêmica da UFS, desenvolvida para impactar o Nordeste e o Brasil.</p>
                <div className="contact-location-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Aracaju, Sergipe — Brasil</span>
                </div>
                <span className="contact-channel-info">Universidade Federal de Sergipe (UFS)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
