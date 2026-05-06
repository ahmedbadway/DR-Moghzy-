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
    result: 'before-after',
  },
  {
    name: 'Mohamed Ali',
    location: 'Alexandria, Egypt',
    rating: 5,
    text: 'Outstanding results after my PRP treatment. My hair density improved by over 60% in just 6 months. The team was professional and clinic state-of-the-art.',
    tag: 'PRP Treatment',
    initials: 'MA',
    color: '#1e3a5f',
    result: 'before-after',
  },
  {
    name: 'Kareem Nasser',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Flew from Dubai specifically to see Dr. Moghazy. Best decision I ever made. The procedure was painless and the recovery was smooth. Results are phenomenal!',
    tag: 'Hair Restoration',
    initials: 'KN',
    color: '#2a4d7f',
    result: 'before-after',
  },
  {
    name: 'Omar Khalil',
    location: 'Riyadh, KSA',
    rating: 5,
    text: 'World-class service from consultation to follow-up. Dr. Moghazy is a true artist. My hairline looks completely natural and confidence at an all-time high.',
    tag: 'FUE Transplant',
    initials: 'OK',
    color: '#4da6d6',
    result: 'before-after',
  },
  {
    name: 'Sara Ahmed',
    location: 'Cairo, Egypt',
    rating: 5,
    text: 'As a woman experiencing hair thinning, I was nervous. Dr. Moghazy made me feel at ease and the treatment results have been life-changing. Highly recommend!',
    tag: 'PRP + Mesotherapy',
    initials: 'SA',
    color: '#c4e538',
    result: 'before-after',
  },
  {
    name: 'Youssef Ibrahim',
    location: 'Giza, Egypt',
    rating: 5,
    text: "The procedure was done with great precision. Recovery was faster than expected. The team's attention to detail is unmatched. 10/10 experience.",
    tag: 'Cosmetic Surgery',
    initials: 'YI',
    color: '#1e3a5f',
    result: 'before-after',
  },
];

const brands = ['Dropbox', 'Slack', 'Notion', 'Figma', 'Linear', 'Vercel'];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);
  const sectionRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 600) setVisible(1);
      else if (window.innerWidth <= 900) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visible);
  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div className="testimonials-header">
          <div className="testimonials-header-left fade-in">
            <span className="section-tag">Success Stories</span>
            <h2 className="section-title">
              Natural Results<br />Real Confidence
            </h2>
            <p className="section-subtitle">
              From the first consultation to the final result, our patients experience
              a transformation that stays with them for life.
            </p>
          </div>

          <div className="testimonials-header-right fade-in fade-in-delay-1">
            {/* Result highlight card */}
            <div className="testi-result-card">
              <div className="testi-result-top">
                <span className="testi-result-badge">Results That Stay With You</span>
              </div>
              <div className="testi-result-imgs">
                <div className="testi-result-img-wrap">
                  <img
                    src="/images/before-after-1.jpg"
                    alt="Before"
                  />
                  <span className="testi-img-label">Before</span>
                </div>
                <div className="testi-result-img-wrap">
                  <img
                    src="/images/before-after-2.jpg"
                    alt="After"
                  />
                  <span className="testi-img-label after">After</span>
                </div>
              </div>
              <div className="testi-result-stat">
                <strong>98%</strong> of patients see results within 6 months
              </div>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="testimonials-slider fade-in">
          <div
            className="testimonials-track"
            style={{
              transform: `translateX(calc(-${current * (100 / visible)}% - ${current * 24 / visible}px))`,
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-top">
                  <div className="testimonial-avatar" style={{ background: t.color }}>
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

        {/* Controls + Dots */}
        <div className="testimonials-footer fade-in">
          <div className="testimonials-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`dot${current === i ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="testimonials-controls">
            <button className="ctrl-btn ctrl-btn-outline" onClick={prev} disabled={current === 0}>←</button>
            <button className="ctrl-btn ctrl-btn-filled" onClick={next} disabled={current >= maxIndex}>→</button>
          </div>
        </div>

        {/* Brand logos */}
        <div className="testi-brands fade-in">
          <div className="testi-brands-label">Trusted by patients from</div>
          <div className="testi-brands-logos">
            {brands.map((b, i) => (
              <div key={i} className="testi-brand-logo">{b}</div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
