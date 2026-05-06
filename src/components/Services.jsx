import { useEffect, useRef } from 'react';
import '../styles/services.css';
import PlaceholderImg from './PlaceholderImg';

const services = [
  { badge: 'Most Popular', icon: '🔬', image: '/images/service-1.jpg', placeholderType: 'fue',     title: 'FUE Hair Transplant',      desc: 'Follicular Unit Extraction — the gold standard in hair transplantation. Minimally invasive with natural, permanent results.',                                              stat: '98% Success' },
  { badge: 'Advanced',     icon: '💉', image: '/images/service-2.jpg', placeholderType: 'prp',     title: 'PRP Hair Treatment',       desc: 'Platelet-Rich Plasma therapy stimulates hair follicles and promotes natural hair regrowth for thicker, healthier hair.',                                              stat: '6 Month Results' },
  { badge: 'Cosmetic',     icon: '✨', image: '/images/service-3.jpg', placeholderType: 'cosmetic', title: 'Cosmetic Surgery',         desc: 'Expert cosmetic procedures including rhinoplasty, facelifts, and more to enhance your natural beauty with precision.',                                              stat: '500+ Done' },
  { badge: 'Non-Surgical', icon: '🌿', image: '/images/service-4.jpg', placeholderType: 'scalp',   title: 'Scalp Micropigmentation',  desc: 'A non-surgical solution that creates the appearance of fuller hair through precise scalp pigmentation techniques.',                                              stat: 'Pain Free' },
  { badge: 'Premium',      icon: '⭐', image: '/images/service-5.jpg', placeholderType: 'eyebrow', title: 'Eyebrow Restoration',      desc: 'Restore natural-looking eyebrows with precision hair transplant techniques tailored to your unique facial features.',                                              stat: 'Natural Look' },
  { badge: 'Care',         icon: '❤️', image: '/images/service-6.jpg', placeholderType: 'care',    title: 'Post-Treatment Care',      desc: 'Comprehensive aftercare program to ensure optimal healing and the best long-term results for every patient.',                                              stat: 'Lifetime Follow-up' },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="services-top">
          <div className="services-top-left fade-in">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Expert Hair &amp; Cosmetic Treatments</h2>
            <p className="section-subtitle">
              Comprehensive solutions for hair restoration and cosmetic enhancement
              with industry-leading results.
            </p>
          </div>
          <div className="services-top-right fade-in fade-in-delay-1">
            <button
              className="services-btn"
              onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View All Solutions
              <span className="arrow-icon">↗</span>
            </button>
          </div>
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <div key={i} className={`service-card fade-in fade-in-delay-${(i % 3) + 1}`}>
              <div className="service-card-image">
                <PlaceholderImg src={svc.image} alt={svc.title} type={svc.placeholderType} loading="lazy" />
                <span className="service-card-badge">{svc.badge}</span>
                <span className="service-card-stat">{svc.stat}</span>
              </div>
              <div className="service-card-body">
                <div className="service-card-icon">{svc.icon}</div>
                <h3 className="service-card-title">{svc.title}</h3>
                <p className="service-card-desc">{svc.desc}</p>
                <div className="service-card-footer">
                  <span className="service-card-link">Learn More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
