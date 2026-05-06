import { useEffect, useRef } from 'react';
import '../styles/cta.css';

const features = [
  'Free Consultation',
  'Certified Surgeons',
  'Lifetime Follow-up',
  'Guaranteed Results',
];

const clinics = [
  {
    name: 'Sheikh Zayed Clinic',
    address: 'Izar Plaza Mall\nPalm Hills, Sheikh Zayed, Cairo',
    hours: 'Wed: 3 PM – 8 PM',
  },
  {
    name: 'New Cairo Clinic',
    address: 'Concord Plaza Mall\n90th Street, New Cairo, Cairo',
    hours: 'Mon: 5–9 PM · Tue: 1–8 PM',
  },
];

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section" id="cta" ref={sectionRef}>
      <div className="container">
        <div className="cta-inner">

          {/* ── LEFT: copy ── */}
          <div className="cta-content fade-in">
            <span className="cta-badge">✦ Book Your Session</span>
            <h2 className="cta-title">
              Start Your Journey to<br />
              <span className="highlight">Permanent Hair Restoration</span>
            </h2>
            <p className="cta-text">
              Take the first step towards natural-looking, permanent hair restoration.
              Book a free consultation with Dr. Ahmed El Moghazy today and discover
              your personalized treatment plan.
            </p>
            <div className="cta-features">
              {features.map(f => (
                <div key={f} className="cta-feature">
                  <div className="cta-feature-icon">✓</div>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: contact card ── */}
          <div className="cta-contact-card fade-in fade-in-delay-2">

            {/* Clinics */}
            {clinics.map((c, i) => (
              <div key={i} className="cta-clinic">
                <div className="cta-clinic-header">
                  <span className="cta-clinic-pin">📍</span>
                  <span className="cta-clinic-name">{c.name}</span>
                </div>
                <p className="cta-clinic-address">
                  {c.address.split('\n').map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </p>
                <div className="cta-clinic-hours">
                  <span className="cta-hours-icon">📅</span>
                  {c.hours}
                </div>
              </div>
            ))}

            <div className="cta-divider" />

            {/* Phone / WhatsApp */}
            <div className="cta-phone-row">
              <div className="cta-phone-labels">
                <span className="cta-phone-icon">📞</span>
                <span className="cta-phone-label">Phone / WhatsApp</span>
              </div>
              <div className="cta-phone-btns">
                <a href="tel:+201119291117" className="cta-main-btn">
                  📅 Call Now — +20 111 929 1117
                </a>
                <a
                  href="https://wa.me/201119291117"
                  className="cta-secondary-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* WhatsApp SVG */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="cta-divider" />

            {/* Social icons */}
            <div className="cta-social-row">
              <span className="cta-social-label">Follow Dr. Moghazy</span>
              <div className="cta-social-icons">
                <a
                  href="https://www.instagram.com/dr_a.moghz"
                  className="cta-social-icon cta-social-icon--ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @dr_a.moghz"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8"/>
                    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </svg>
                  @dr_a.moghz
                </a>
                <a
                  href="https://www.tiktok.com/@drmoghazyisherenow"
                  className="cta-social-icon cta-social-icon--tt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok @drmoghazyisherenow"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                  </svg>
                  @drmoghazyisherenow
                </a>
              </div>
            </div>

            <p className="cta-note">Free consultation · No commitment required</p>
          </div>

        </div>
      </div>
    </section>
  );
}
