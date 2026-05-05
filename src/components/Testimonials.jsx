import { useState, useEffect, useRef } from 'react';
import '../styles/testimonials.css';

const testimonials = [
  {
    name: 'Ahmed Hassan',
    location: 'Cairo, Egypt',
    rating: 5,
    text: 'Dr. Moghazy and his team are absolutely incredible. The FUE transplant results exceeded my expectations — completely natural looking hair that boosted my confidence tremendously.',
    tag: 'FUE Transplant',
    initials: 'AH',
    color: '#4da6d6',
  },
  {
    name: 'Mohamed Ali',
    location: 'Alexandria, Egypt',
    rating: 5,
    text: 'Outstanding results after my PRP treatment. The team was professional and the clinic was state-of-the-art. My hair density improved by over 60% in just 6 months!',
    tag: 'PRP Treatment',
    initials: 'MA',
    color: '#1e3a5f',
  },
  {
    name: 'Kareem Nasser',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Flew from Dubai specifically to see Dr. Moghazy. Best decision I ever made. The procedure was painless and the recovery was smooth. Results are phenomenal!',
    tag: 'Hair Restoration',
    initials: 'KN',
    color: '#c4e538',
  },
  {
    name: 'Omar Khalil',
    location: 'Riyadh, KSA',
    rating: 5,
    text: 'World-class service from consultation to follow-up. Dr. Moghazy is a true artist. My hairline looks completely natural and my confidence is at an all-time high.',
    tag: 'FUE Transplant',
    initials: 'OK',
    color: '#2a4d7f',
  },
  {
    name: 'Sara Ahmed',
    location: 'Cairo, Egypt',
    rating: 5,
    text: 'As a woman experiencing hair thinning, I was nervous. Dr. Moghazy made me feel at ease and the treatment results have been life-changing. Highly recommend!',
    tag: 'PRP + Mesotherapy',
    initials: 'SA',
    color: '#4da6d6',
  },
  {
    name: 'Youssef Ibrahim',
    location: 'Giza, Egypt',
    rating: 5,
    text: 'The cosmetic surgery procedure was done with great precision. Recovery was faster than expected. The team\'s attention to detail is unmatched. 10/10 experience.',
    tag: 'Cosmetic Surgery',
    initials: 'YI',
    color: '#1e3a5f',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const visibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  };

  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => setVisible(visibleCount());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visible);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

  const cardWidthPct = 100 / visible;
  const gapPx = 24;
  const translateX = current * (cardWidthPct + (gapPx / (1200 / visible)));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll('.fade-in');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="testimonials-top">
          <div className="fade-in">
            <span className="section-tag">Success Stories</span>
            <h2 className="section-title">Natural Results, Real Confidence</h2>
            <p className="section-subtitle">
              Hear from our patients who regained their confidence with Dr. Moghazy's expert care.
            </p>
          </div>
          <div className="testimonials-controls fade-in fade-in-delay-1">
            <button className="ctrl-btn ctrl-btn-outline" onClick={prev} disabled={current === 0} aria-label="Previous">
              ←
            </button>
            <button className="ctrl-btn ctrl-btn-filled" onClick={next} disabled={current >= maxIndex} aria-label="Next">
              →
            </button>
          </div>
        </div>

        <div className="testimonials-slider">
          <div
            ref={trackRef}
            className="testimonials-track"
            style={{ transform: `translateX(calc(-${current * (100 / visible)}% - ${current * gapPx / visible}px))` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-header">
                  <div
                    className="testimonial-avatar"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-location">📍 {t.location}</div>
                  </div>
                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j}>★</span>
                    ))}
                  </div>
                </div>

                <p className="testimonial-text">"{t.text}"</p>

                <span className="testimonial-tag">{t.tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`dot${current === i ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
