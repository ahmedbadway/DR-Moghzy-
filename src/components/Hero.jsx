import { useState, useEffect } from 'react';
import '../styles/hero.css';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;

  return (
    <section className="hero" id="hero">
      <div
        className="hero-bg"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-inner">
          {/* Left */}
          <div className="hero-left">
            <div className="hero-badge">
              <span />
              Simple Care, Stronger Hair Growth
            </div>

            <h1 className="hero-title">
              Permanent Hair<br />
              Restoration That<br />
              <span className="accent">Looks Natural</span>
            </h1>

            <p className="hero-description">
              Achieve natural-looking hair restoration results with our expert team using advanced techniques and personalized care for every client.
            </p>

            <div className="hero-cta">
              <a href="#cta" className="btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#cta').scrollIntoView({ behavior: 'smooth' }); }}>
                Book A Session →
              </a>
              <a href="#services" className="btn-outline" onClick={e => { e.preventDefault(); document.querySelector('#services').scrollIntoView({ behavior: 'smooth' }); }}>
                View Solutions
              </a>
            </div>

            <div className="hero-stats-row">
              <div className="hero-stat">
                <span className="hero-stat-num">4.6★</span>
                <span className="hero-stat-label">Customer Rating</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">98%</span>
                <span className="hero-stat-label">Success Rate</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">500+</span>
                <span className="hero-stat-label">Treatments Done</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="hero-right">
            <div className="hero-card-wrapper">
              <div className="hero-card-main">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80"
                  alt="Doctor performing hair restoration treatment"
                  loading="eager"
                />
                <div className="hero-card-overlay">
                  <div className="hero-card-rating">
                    <div className="stars">
                      {'★★★★★'.split('').map((s, i) => (
                        <span key={i} className="star">{s}</span>
                      ))}
                    </div>
                    <span className="rating-num">4.6</span>
                    <span className="rating-label">Customer Rating</span>
                  </div>
                  <div className="hero-card-text">Premium Hair Care</div>
                  <div className="hero-card-sub">Complete Hair Care Solutions — Guaranteed Quality, Every Time.</div>
                </div>
              </div>

              {/* Floating card */}
              <div className="hero-card-small">
                <div className="hero-card-small-title">Book A Appointment</div>
                <div className="hero-card-small-sub">Dr. Ahmed Moghazy</div>
                <div className="hero-card-small-btn">Schedule Now →</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
