import { useEffect, useRef } from 'react';
import '../styles/services.css';

const services = [
  {
    badge: 'Most Popular',
    icon: '🔬',
    image: 'https://images.unsplash.com/photo-1559757175-7cb036e0d465?w=600&q=80',
    title: 'FUE Hair Transplant',
    desc: 'Follicular Unit Extraction — the gold standard in hair transplantation. Minimally invasive with natural, permanent results.',
  },
  {
    badge: 'Advanced',
    icon: '💉',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&q=80',
    title: 'PRP Hair Treatment',
    desc: 'Platelet-Rich Plasma therapy stimulates hair follicles and promotes natural hair regrowth for thicker, healthier hair.',
  },
  {
    badge: 'Cosmetic',
    icon: '✨',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    title: 'Cosmetic Surgery',
    desc: 'Expert cosmetic procedures including rhinoplasty, facelifts, and more to enhance your natural beauty.',
  },
  {
    badge: 'Non-Surgical',
    icon: '🌿',
    image: 'https://images.unsplash.com/photo-1612349316228-7a8b89f1ee87?w=600&q=80',
    title: 'Scalp Micropigmentation',
    desc: 'A non-surgical solution that creates the appearance of fuller hair through precise scalp pigmentation.',
  },
  {
    badge: 'Premium',
    icon: '⭐',
    image: 'https://images.unsplash.com/photo-1621798062685-b42b0d3f9f1c?w=600&q=80',
    title: 'Eyebrow Restoration',
    desc: 'Restore natural-looking eyebrows with precision hair transplant techniques tailored to your facial features.',
  },
  {
    badge: 'Care',
    icon: '❤️',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    title: 'Post-Treatment Care',
    desc: 'Comprehensive aftercare program to ensure optimal healing and the best long-term results for every patient.',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

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
    <section className="services" id="services" ref={sectionRef}>
      <div className="container">
        <div className="services-top">
          <div className="services-top-left fade-in">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Expert Hair &amp; Cosmetic Treatments</h2>
            <p className="section-subtitle">
              Comprehensive solutions for hair restoration and cosmetic enhancement with industry-leading results.
            </p>
          </div>
          <div className="services-top-right fade-in fade-in-delay-1">
            <a href="#cta" className="services-btn" onClick={e => { e.preventDefault(); document.querySelector('#cta').scrollIntoView({ behavior: 'smooth' }); }}>
              View All Solutions
              <span className="arrow-icon">↗</span>
            </a>
          </div>
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`service-card fade-in fade-in-delay-${(i % 3) + 1}`}
            >
              <div className="service-card-image">
                <img src={svc.image} alt={svc.title} loading="lazy" />
                <span className="service-card-badge">{svc.badge}</span>
              </div>
              <div className="service-card-body">
                <div className="service-card-icon">{svc.icon}</div>
                <h3 className="service-card-title">{svc.title}</h3>
                <p className="service-card-desc">{svc.desc}</p>
                <div className="service-card-footer">
                  <span className="service-card-link">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
