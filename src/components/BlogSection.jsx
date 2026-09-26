import React, { useState, useMemo } from 'react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/newsData';

export default function BlogSection({ onOpenPost }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');

  // Handle form submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue.trim().toLowerCase());
  };

  // Handle real-time input change
  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    setSearchQuery(val.trim().toLowerCase());
  };

  // Clear search
  const handleClearSearch = () => {
    setInputValue('');
    setSearchQuery('');
  };

  // Reset all filters
  const handleResetFilters = () => {
    setActiveCategory('all');
    setInputValue('');
    setSearchQuery('');
  };

  // Filtered posts logic
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        activeCategory === 'all' || post.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery) return true;

      const q = searchQuery;
      const titleMatch = post.title?.toLowerCase().includes(q);
      const excerptMatch = post.excerpt?.toLowerCase().includes(q);
      const badgeMatch = post.badge?.toLowerCase().includes(q);
      const authorMatch = post.author?.toLowerCase().includes(q);
      const contentMatch = post.content?.toLowerCase().includes(q);

      return titleMatch || excerptMatch || badgeMatch || authorMatch || contentMatch;
    });
  }, [activeCategory, searchQuery]);

  // Featured vs Grid posts
  const { featuredPost, gridPosts } = useMemo(() => {
    let featured = null;
    let grid = [...filteredPosts];

    if (!searchQuery && activeCategory === 'all') {
      const explicitFeaturedIndex = grid.findIndex((p) => p.featured);
      if (explicitFeaturedIndex !== -1) {
        featured = grid.splice(explicitFeaturedIndex, 1)[0];
      } else if (grid.length > 0) {
        featured = grid.shift();
      }
    } else if (grid.length >= 2) {
      featured = grid.shift();
    }

    return { featuredPost: featured, gridPosts: grid };
  }, [filteredPosts, searchQuery, activeCategory]);

  // Counter text
  const counterText = useMemo(() => {
    const total = filteredPosts.length;
    if (total === 0) return 'Nenhuma notícia encontrada';
    if (total === 1) return '1 publicação encontrada';
    return `${total} publicações encontradas`;
  }, [filteredPosts.length]);

  return (
    <section className="news-section blog-section" id="noticias">
      <div className="container">
        <div className="news-header blog-header">
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span>
            Atualizações e Artigos
          </p>
          <h2>Blog & Notícias do Projeto</h2>
          <p className="section-text">
            Acompanhe as publicações mais recentes, artigos técnicos, pesquisas de campo e marcos da Arborização Inteligente.
          </p>
        </div>

        {/* Barra de Busca e Categorias do Blog */}
        <div className="blog-toolbar">
          <search className="blog-search-wrapper">
            <form
              id="blogSearchForm"
              className="blog-search-form"
              role="search"
              aria-label="Pesquisar publicações"
              onSubmit={handleSearchSubmit}
            >
              <div className="blog-search-box">
                <input
                  type="search"
                  id="blogSearchInput"
                  name="q"
                  placeholder="Buscar artigos..."
                  aria-label="Buscar artigos"
                  autoComplete="off"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                {inputValue && (
                  <button
                    type="button"
                    className="blog-search-clear"
                    id="blogSearchClear"
                    aria-label="Limpar busca"
                    title="Limpar busca"
                    onClick={handleClearSearch}
                  >
                    &times;
                  </button>
                )}
                <button
                  type="submit"
                  className="blog-search-btn"
                  id="blogSearchBtn"
                  aria-label="Pesquisar"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </div>
            </form>
          </search>

          <div className="blog-categories" id="blogCategories" role="tablist" aria-label="Filtrar por categoria">
            {BLOG_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-btn${isSelected ? ' active' : ''}`}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Artigo em Destaque */}
        {featuredPost && (
          <div className="blog-featured-wrapper" id="blogFeaturedWrapper">
            <div id="blogFeatured">
              <article className="blog-featured-card reveal">
                <div className="featured-image-area">
                  <span className="featured-tag-badge">⭐ Destaque</span>
                  <span className="featured-category-badge">{featuredPost.badge}</span>
                  <img src={featuredPost.image} alt={featuredPost.title} loading="lazy" />
                </div>
                <div className="featured-content-area">
                  <div className="blog-meta-row">
                    <span className="blog-date-text">{featuredPost.date}</span>
                    <span>•</span>
                    <span className="blog-read-time-pill">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {featuredPost.readTime || '3 min de leitura'}
                    </span>
                  </div>
                  <h3 className="featured-title">{featuredPost.title}</h3>
                  <p className="featured-excerpt">{featuredPost.excerpt}</p>
                  <div className="featured-footer">
                    <div className="featured-author">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>{featuredPost.author || 'Equipe Arbo'}</span>
                    </div>
                    <button
                      type="button"
                      className="btn-read-featured open-blog-post"
                      onClick={() => onOpenPost(featuredPost)}
                    >
                      Ler artigo completo →
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        )}

        {/* Cabeçalho do Grid de Publicações */}
        {filteredPosts.length > 0 && (
          <div className="blog-grid-header">
            <h3 className="blog-grid-title">Publicações do Projeto</h3>
            <span className="blog-counter" id="blogCounter">
              {counterText}
            </span>
          </div>
        )}

        {/* Grid de Artigos do Blog */}
        {gridPosts.length > 0 && (
          <div className="blog-grid" id="blogGrid">
            {gridPosts.map((post) => (
              <article key={post.id} className="blog-card reveal">
                <div className="blog-card-image">
                  <span className="blog-card-badge">{post.badge}</span>
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-date-text">{post.date}</span>
                    <span className="blog-read-time-pill">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '0.85rem', height: '0.85rem' }} aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {post.readTime || '3 min'}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-author">{post.author || 'Equipe Arbo'}</span>
                    <button
                      type="button"
                      className="blog-card-link open-blog-post"
                      onClick={() => onOpenPost(post)}
                    >
                      Ler mais →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Estado Vazio (quando não há resultados) */}
        {filteredPosts.length === 0 && (
          <div className="blog-empty" id="blogEmpty" style={{ display: 'block' }}>
            <div className="blog-empty-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <h3 id="blogEmptyTitle">
              {searchQuery ? 'Nenhum resultado encontrado' : 'Artigos em Produção'}
            </h3>
            <p id="blogEmptyDesc">
              {searchQuery
                ? `Não encontramos nenhuma publicação para "${searchQuery}". Tente outros termos de busca.`
                : 'Ainda não há publicações nesta categoria. Nossos artigos técnicos e científicos estão em fase de produção por nossa equipe e serão lançados em breve!'}
            </p>
            <button
              type="button"
              className="blog-btn-reset"
              id="blogResetBtn"
              onClick={handleResetFilters}
            >
              Ver todas as notícias
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
