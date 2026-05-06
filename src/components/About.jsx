import { useEffect, useRef } from 'react';
import '../styles/about.css';
import PlaceholderImg from './PlaceholderImg';

const features = [
  { icon: '🌿', title: 'Enriched with Vitamin E', desc: 'Nourishes follicles and strengthens each strand from root to tip.' },
  { icon: '🩸', title: 'Widening blood vessels on the scalp', desc: 'Improves circulation to deliver nutrients directly to hair roots.' },
  { icon: '💧', title: 'Increasing oxygen & nutrients supply', desc: 'Optimizes scalp environment for maximum hair regrowth potential.' },
  { icon: '✨', title: 'Enhances blood flow in scalp', desc: 'Stimulates dormant follicles for thicker, fuller-looking hair.' },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about-inner">

          {/* LEFT — image with floating card */}
          <div className="about-left fade-in">
            <div className="about-img-wrap">
              <PlaceholderImg
                src="/images/about-treatment.jpg"
                alt="Hair restoration procedure"
                className="about-img"
                type="treatment"
              />
              <div className="about-img-badge">
                <div className="about-badge-icon">⭐</div>
                <div>
                  <div className="about-badge-title">4.9 / 5.0</div>
                  <div className="about-badge-sub">Patient Satisfaction</div>
                </div>
              </div>
              <div className="about-img-stat">
                <span className="about-stat-num">500+</span>
                <span className="about-stat-label">Successful Treatments</span>
              </div>
            </div>
          </div>

          {/* RIGHT — features */}
          <div className="about-right">
            <div className="fade-in">
              <span className="section-tag">About the Doctor</span>
              <h2 className="section-title">
                Dr. Ahmed El Moghazy —<br />Hair &amp; Aesthetic Surgeon
              </h2>
              <p className="section-subtitle">
                Plastic &amp; Aesthetic Plastic Surgeon and Hair Loss &amp; Hair Restoration Expert.
                His philosophy: <em>"Helping you look better, not different."</em>
                Follow him on Instagram <strong>@dr_a.moghz</strong> and TikTok <strong>@drmoghazyisherenow</strong>.
              </p>
            </div>

            <div className="about-features">
              {features.map((f, i) => (
                <div key={i} className={`about-feature fade-in fade-in-delay-${i + 1}`}>
                  <div className="about-feature-icon">{f.icon}</div>
                  <div className="about-feature-body">
                    <div className="about-feature-title">{f.title}</div>
                    <div className="about-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="fade-in fade-in-delay-4">
              <a
                href="#cta"
                className="about-cta-btn"
                onClick={e => { e.preventDefault(); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Book Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
