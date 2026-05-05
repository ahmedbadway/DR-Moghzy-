import { useEffect, useRef } from 'react';
import '../styles/cta.css';

const features = [
  'Free Consultation',
  'Certified Surgeons',
  'Lifetime Follow-up',
  'Guaranteed Results',
];

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll('.fade-in');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section" id="cta" ref={sectionRef}>
      <div className="container">
        <div className="cta-inner">
          <div className="cta-content fade-in">
            <span className="cta-badge">✦ Book Your Session</span>
            <h2 className="cta-title">
              Start Your Journey to<br />
              <span className="highlight">Permanent Hair Restoration</span>
            </h2>
            <p className="cta-text">
              Take the first step towards natural-looking, permanent hair restoration.
              Book a free consultation with Dr. Ahmed Moghazy today and discover your personalized treatment plan.
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

          <div className="cta-actions fade-in fade-in-delay-2">
            <a href="tel:+201000000000" className="cta-main-btn">
              📅 Book Appointment Now
            </a>
            <a href="https://wa.me/201000000000" className="cta-secondary-btn" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp Us
            </a>
            <p className="cta-note">Free consultation · No commitment required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
