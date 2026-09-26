import React, { useEffect } from 'react';

export default function BlogModal({ post, onClose, onShare }) {
  useEffect(() => {
    if (!post) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Escape key listener
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div
      id="newsModal"
      className="modal active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="modal-overlay" id="modalOverlay" onClick={onClose}></div>
      <div className="modal-content blog-modal-content">
        <button
          className="modal-close"
          id="modalClose"
          aria-label="Fechar modal"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-header">
          <img
            id="modalImage"
            src={post.image}
            alt={post.title}
            className="modal-image"
          />
          <div className="modal-badges-row">
            <span id="modalBadge" className="modal-badge">
              {post.badge}
            </span>
            <span id="modalReadTime" className="modal-read-time">
              {post.readTime || '3 min de leitura'}
            </span>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-author-bar">
            <div className="modal-author-avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="modal-author-info">
              <span id="modalAuthor" className="modal-author-name">
                {post.author || 'Equipe Arbo Inteligente'}
              </span>
              <span id="modalDate" className="modal-date">
                {post.date}
              </span>
            </div>
          </div>

          <h2 id="modalTitle">{post.title}</h2>
          <p id="modalDescription" className="modal-description">
            {post.excerpt}
          </p>

          <div
            id="modalContent"
            className="modal-full-content"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </div>

        <div className="modal-footer">
          <button
            className="modal-share-btn"
            id="modalShareBtn"
            type="button"
            onClick={() => onShare(post)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <span>Compartilhar</span>
          </button>
          <button
            className="modal-btn btn-secondary"
            id="modalCloseBtn"
            type="button"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
