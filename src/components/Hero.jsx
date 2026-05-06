import { useState, useEffect } from 'react';
import '../styles/hero.css';
import PlaceholderImg from './PlaceholderImg';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">

      {/* ── VIDEO BACKGROUND ── */}
      <div className="hero-video-wrap">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-bg.jpg"
          src="/videos/hero-video.mp4"
        />
      </div>

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* ── CONTENT ── */}
      <div className="hero-content">
        <div className="hero-inner container">

          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Simple Care, Stronger Hair Growth
            </div>

            <h1 className="hero-title">
              Permanent Hair<br />
              Restoration That<br />
              Looks Natural
            </h1>

            <p className="hero-desc">
              Achieve natural-looking hair restoration results with our expert team
              using advanced techniques and personalized care for every client.
            </p>

            <div className="hero-actions">
              <button className="hero-btn-book" onClick={() => scrollTo('#cta')}>
                Book A Session
                <span className="hero-btn-arrow">→</span>
              </button>
              <button className="hero-btn-ghost" onClick={() => scrollTo('#services')}>
                View Solutions
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">

            {/* Rating card */}
            <div className="hero-rating-card">
              <div className="hero-rating-avatars">
                {['AH', 'MK', 'SR'].map((init, i) => (
                  <div
                    key={i}
                    className="hero-avatar"
                    style={{ background: ['#4da6d6', '#1e3a5f', '#c4e538'][i] }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div className="hero-rating-info">
                <div className="hero-rating-stars">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} style={{ color: i < 4 ? '#ffd700' : '#ffd70066' }}>{s}</span>
                  ))}
                </div>
                <div className="hero-rating-text">
                  <strong>4.9</strong> Customer Rating
                </div>
              </div>
            </div>

            {/* Premium Hair Care card */}
            <div className="hero-premium-card">
              <div className="hero-premium-img">
                <PlaceholderImg
                  src="/images/doctor.jpg"
                  alt="Premium Hair Care"
                  type="hero-doctor"
                />
              </div>
              <div className="hero-premium-body">
                <div className="hero-premium-label">Premium Hair Care</div>
                <div className="hero-premium-sub">
                  Complete Hair Care Solutions — Guaranteed Quality, Every Time.
                </div>
                <button className="hero-premium-btn" onClick={() => scrollTo('#cta')}>
                  Book A Appointment →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
