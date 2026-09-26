import React, { useState, useRef, useEffect, useCallback } from 'react';
import { EVENTS_DATA } from '../data/eventsData';

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const totalSlides = EVENTS_DATA.length;

  const goToSlide = useCallback((index) => {
    let targetIndex = index;
    if (targetIndex < 0) targetIndex = totalSlides - 1;
    if (targetIndex >= totalSlides) targetIndex = 0;

    setCurrentIndex(targetIndex);

    const carousel = carouselRef.current;
    if (carousel) {
      const slides = carousel.querySelectorAll('.event-slide');
      const targetSlide = slides[targetIndex];
      if (targetSlide) {
        const targetLeft = targetSlide.offsetLeft - carousel.offsetLeft;
        carousel.scrollTo({
          left: targetLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % totalSlides);
  }, [currentIndex, goToSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
  }, [currentIndex, goToSlide, totalSlides]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      goToSlide((currentIndex + 1) % totalSlides);
    }, 4500);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, goToSlide, totalSlides]);

  // Sync index from scroll (touch swipe / snap scrolling)
  const handleScroll = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollLeft = carousel.scrollLeft;
    const slides = carousel.querySelectorAll('.event-slide');
    let closestIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, idx) => {
      const distance = Math.abs(slide.offsetLeft - carousel.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== currentIndex) {
      setCurrentIndex(closestIndex);
    }
  }, [currentIndex]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <section className="events-section" id="eventos">
      <div className="container">
        <div className="events-header text-center">
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span>
            Destaques
          </p>
          <h2>Destaques do Projeto</h2>
          <p className="section-text">
            Reconhecimento, premiações e participações oficiais da Arborização Inteligente em feiras científicas, eventos de inovação e conferências climáticas.
          </p>
        </div>

        {/* Carrossel de Eventos em Destaque */}
        <div
          className="events-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <button
            className="events-nav-btn prev"
            id="eventPrev"
            aria-label="Destaque anterior"
            onClick={prevSlide}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div
            className="events-carousel"
            id="eventsCarousel"
            ref={carouselRef}
            tabIndex={0}
            role="region"
            aria-label="Carrossel de eventos"
            onScroll={handleScroll}
            onKeyDown={handleKeyDown}
          >
            {EVENTS_DATA.map((event) => (
              <div key={event.id} className="event-slide">
                <div className="event-card-inner">
                  <div className="event-image-box">
                    <span className={`event-status-pill ${event.statusType || 'past'}`}>
                      {event.statusPill}
                    </span>
                    <img src={event.image} alt={event.alt} loading="lazy" />
                  </div>
                  <div className="event-body-box">
                    <span className="event-date-tag">{event.dateTag}</span>
                    <h3>{event.title}</h3>
                    <p className="event-desc">{event.desc}</p>
                    <div className="event-meta-footer">
                      <span className="event-highlight-tag">{event.highlightTag}</span>
                      <span className="event-attendees-tag">{event.attendeesTag}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="events-nav-btn next"
            id="eventNext"
            aria-label="Próximo destaque"
            onClick={nextSlide}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Indicadores do Carrossel de Eventos */}
        <div className="events-carousel-indicators" id="eventsIndicators">
          {EVENTS_DATA.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`event-indicator${idx === currentIndex ? ' active' : ''}`}
              aria-label={`Ir para evento ${idx + 1}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
