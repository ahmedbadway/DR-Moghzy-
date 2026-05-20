import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/hero.css';
import PlaceholderImg from './PlaceholderImg';

const HERO_BG = `${import.meta.env.BASE_URL}images/hero-bg.jpg`;
const HERO_VIDEO = `${import.meta.env.BASE_URL}videos/hero-video.mp4`;

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const parallaxOffset = scrollY * 0.7;

  return (
    <section className="hero" id="hero">

      {/* ── PARALLAX VIDEO BACKGROUND ── */}
      <div
        className="hero-bg"
        style={{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }}
      >
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_BG}
          src={HERO_VIDEO}
        />
      </div>

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* ── CONTENT ── */}
      <div className="hero-content">
        <div className="hero-inner container">

          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-badge hero-anim hero-anim-1">
              <span className="hero-badge-dot" />
              Simple Care, Stronger Hair Growth
            </div>

            <h1 className="hero-title hero-anim hero-anim-2">
              Permanent Hair<br />
              Restoration That<br />
              Looks Natural
            </h1>

            <p className="hero-desc hero-anim hero-anim-3">
              Achieve natural-looking hair restoration results with our expert team
              using advanced techniques and personalized care for every client.
            </p>

            <div className="hero-actions hero-anim hero-anim-4">
              <button className="hero-btn-book" onClick={() => scrollTo('#cta')}>
                Book A Session
                <span className="hero-btn-arrow">→</span>
              </button>
              <button className="hero-btn-ghost" onClick={() => navigate('/about')}>
                About the Doctor
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">

            {/* Rating card */}
            <div className="hero-rating-card hero-anim hero-anim-3">
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
            <div className="hero-premium-card hero-anim hero-anim-4">
              <div className="hero-premium-img">
                <PlaceholderImg
                  src={`${import.meta.env.BASE_URL}images/doctor.jpg`}
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
