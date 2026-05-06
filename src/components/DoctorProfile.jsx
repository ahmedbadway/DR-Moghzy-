import { useEffect, useRef } from 'react';
import '../styles/doctorProfile.css';
import PlaceholderImg from './PlaceholderImg';

const stats = [
  { value: '4.9', label: 'Rating', sub: 'out of 5.0' },
  { value: '1,914', label: 'Followers', sub: 'on Instagram' },
  { value: '142', label: 'Posts', sub: 'shared cases' },
];

const badges = [
  { icon: '🎓', text: 'Plastic Surgeon' },
  { icon: '✨', text: 'Aesthetic Surgery' },
  { icon: '💆', text: 'Hair Restoration' },
  { icon: '🔬', text: 'Hair Loss Expert' },
];

export default function DoctorProfile() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="dp" id="profile" ref={ref}>
      {/* Decorative background shapes */}
      <div className="dp-bg-circle dp-bg-circle--1" />
      <div className="dp-bg-circle dp-bg-circle--2" />

      <div className="container">
        <div className="dp-inner">

          {/* ── LEFT: Image column ── */}
          <div className="dp-left fade-in">
            <div className="dp-img-wrap">
              {/* Image placeholder — replace src with actual doctor photo */}
              <div className="dp-img-placeholder">
                <PlaceholderImg
                  src="./images/doctor.jpg"
                  alt="Dr. Ahmed El Moghazy"
                  className="dp-img"
                  type="doctor"
                />
              </div>

              {/* Floating rating badge */}
              <div className="dp-badge dp-badge--rating">
                <div className="dp-badge-stars">★★★★★</div>
                <div className="dp-badge-value">4.9 / 5.0</div>
                <div className="dp-badge-label">Patient Rating</div>
              </div>

            </div>
          </div>

          {/* ── RIGHT: Content column ── */}
          <div className="dp-right">

            {/* Tag */}
            <div className="fade-in">
              <span className="dp-tag">About the Doctor</span>
            </div>

            {/* Name & title */}
            <div className="fade-in fade-in-delay-1">
              <h1 className="dp-name">Dr. Ahmed El Moghazy</h1>
              <p className="dp-title">
                Plastic Surgeon &amp; Aesthetic Plastic Surgeon
              </p>
              <p className="dp-specialty">
                Hair Loss &amp; Hair Restoration Expert
              </p>
            </div>

            {/* Philosophy quote */}
            <div className="dp-quote fade-in fade-in-delay-2">
              <div className="dp-quote-mark">"</div>
              <p className="dp-quote-text">
                Helping you look better, not different
              </p>
            </div>

            {/* Bio */}
            <div className="fade-in fade-in-delay-2">
              <p className="dp-bio">
                Dr. Ahmed El Moghazy is a distinguished Plastic and Aesthetic Plastic Surgeon
                with deep expertise in hair loss treatment and advanced hair restoration techniques.
                He brings together surgical precision, aesthetic sensibility, and a genuine
                commitment to each patient's confidence — delivering results that feel natural,
                not artificial.
              </p>
              <p className="dp-bio">
                His approach is built on one belief: every patient deserves a result that enhances
                who they already are. Whether restoring a hairline or refining an aesthetic concern,
                Dr. Moghazy tailors every plan to the individual — never a template, always a
                transformation.
              </p>
            </div>

            {/* Specialty badges */}
            <div className="dp-badges fade-in fade-in-delay-3">
              {badges.map((b, i) => (
                <div key={i} className="dp-spec-badge">
                  <span className="dp-spec-icon">{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="dp-stats fade-in fade-in-delay-3">
              {stats.map((s, i) => (
                <div key={i} className="dp-stat">
                  <span className="dp-stat-value">{s.value}</span>
                  <span className="dp-stat-label">{s.label}</span>
                  <span className="dp-stat-sub">{s.sub}</span>
                </div>
              ))}
            </div>

            {/* Social & CTA */}
            <div className="dp-actions fade-in fade-in-delay-4">
              <a
                href="https://www.instagram.com/dr_a.moghz"
                className="dp-icon-link dp-icon-link--ig"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @dr_a.moghz"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@drmoghazyisherenow"
                className="dp-icon-link dp-icon-link--tt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @drmoghazyisherenow"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>
              <button
                className="dp-cta-btn"
                onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Consultation →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
