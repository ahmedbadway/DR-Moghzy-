import { useEffect, useRef, useState } from 'react';
import '../styles/stats.css';

function useCountUp(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = null;
    const isDecimal = target % 1 !== 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = isDecimal
        ? parseFloat((eased * target).toFixed(1))
        : Math.floor(eased * target);
      setCount(value);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

const statsData = [
  {
    variant: 'stat-card-navy',
    icon: '✓',
    number: 98.0,
    suffix: '%',
    label: 'Naturally Restored Hair',
    desc: 'Our clients achieve natural-looking results with long-lasting hair restoration.',
    tags: ['Follicular Units', 'Strands', 'Natural'],
  },
  {
    variant: 'stat-card-sky',
    icon: '💊',
    number: 500,
    suffix: '+',
    label: 'Successful Treatments',
    desc: 'Hundreds of satisfied patients across Egypt and the Middle East.',
    tags: ['FUE', 'FUT', 'PRP'],
  },
  {
    variant: 'stat-card-lime',
    icon: '📈',
    number: 59.7,
    suffix: '%',
    label: 'Hair Growth Improvement',
    desc: 'Advanced PRP procedure delivering precise natural-looking hair results.',
    tags: ['Growth', 'Density', 'Thickness'],
  },
];

function StatCard({ data, index }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(data.number, 1800, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`stat-card ${data.variant} fade-in fade-in-delay-${index + 1}`}
    >
      <div className="stat-card-header">
        <div className="stat-icon">{data.icon}</div>
        <div className="stat-arrow">↗</div>
      </div>

      <div className="stat-number">
        {data.number % 1 !== 0 ? count.toFixed(1) : count}{data.suffix}
      </div>

      <div>
        <div className="stat-label">{data.label}</div>
        <div className="stat-desc">{data.desc}</div>
      </div>

      <div className="stat-tags">
        {data.tags.map(tag => (
          <span key={tag} className="stat-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll('.fade-in');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" id="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-header fade-in">
          <span className="section-tag">Our Results</span>
          <h2 className="section-title">Advanced Hair Restoration Solutions</h2>
          <p className="section-subtitle">
            Modern technology and expert care to restore your confidence with safe and effective hair transplant treatments.
          </p>
        </div>

        <div className="stats-grid">
          {statsData.map((stat, i) => (
            <StatCard key={i} data={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
