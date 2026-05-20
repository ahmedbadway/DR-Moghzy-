import { useEffect, useRef } from 'react';
import '../styles/news.css';

const news = [
  {
    date: 'May 12, 2026',
    category: 'Clinic Update',
    title: 'New Robotic FUE System Now Live at Our Cairo Clinic',
    excerpt:
      'We have upgraded our hair restoration suite with the latest robotic-assisted FUE platform — delivering faster sessions, less downtime, and even more natural-looking results.',
    color: '#4da6d6',
  },
  {
    date: 'April 28, 2026',
    category: 'Research',
    title: 'PRP + Exosome Therapy Shows 72% Density Gains in 9 Months',
    excerpt:
      'Our latest clinical study on combined PRP and exosome therapy is now published. Patients reported significant density and thickness improvements with zero downtime.',
    color: '#1e3a5f',
  },
  {
    date: 'April 10, 2026',
    category: 'Event',
    title: 'Dr. Moghazy Speaking at ISHRS World Congress 2026',
    excerpt:
      'Dr. Moghazy will present on advanced hairline design and ethnic hair restoration techniques at the International Society of Hair Restoration Surgery world congress.',
    color: '#c4e538',
  },
];

export default function News() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="news" id="news" ref={sectionRef}>
      <div className="container">
        <div className="news-header fade-in">
          <span className="section-tag">Latest Updates</span>
          <h2 className="section-title">
            News &amp; Announcements
          </h2>
          <p className="section-subtitle">
            Stay informed about our latest treatments, clinical research,
            and milestones from the DR. Moghazy team.
          </p>
        </div>

        <div className="news-grid">
          {news.map((item, i) => (
            <article
              key={i}
              className={`news-card fade-in fade-in-delay-${i % 3}`}
            >
              <div
                className="news-card-thumb"
                style={{ background: `linear-gradient(135deg, ${item.color} 0%, var(--navy) 100%)` }}
              >
                <span className="news-card-category">{item.category}</span>
              </div>
              <div className="news-card-body">
                <div className="news-card-date">{item.date}</div>
                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-card-excerpt">{item.excerpt}</p>
                <a href="#cta" className="news-card-link">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
