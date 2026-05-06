import { useEffect, useRef, useState } from 'react';
import '../styles/stats.css';
import PlaceholderImg from './PlaceholderImg';

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const isDecimal = target % 1 !== 0;
    const raf = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(isDecimal ? parseFloat((e * target).toFixed(1)) : Math.floor(e * target));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [started, target, duration]);
  return count;
}

function useFadeIn(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
}

/* ── Card 1: Dark navy with big number ── */
function CardDark() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(98.0, 2000, started);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="stat-card stat-dark fade-in">
      <div className="stat-dark-top">
        <div className="stat-dark-icon">✓</div>
        <div className="stat-dark-arrow">↗</div>
      </div>

      <div className="stat-dark-avatars">
        {['AH','MK','SR','YI'].map((init, i) => (
          <div key={i} className="stat-dark-avatar"
            style={{ background: ['#4da6d6','#2a4d7f','#c4e538','#4da6d6'][i] }}>
            {init}
          </div>
        ))}
      </div>

      <div className="stat-dark-number">
        {count.toFixed(1)}%
      </div>

      <div className="stat-dark-label">Naturally Restored Hair</div>
      <div className="stat-dark-desc">Real Hair Transplant Success With Natural-Looking Results</div>

      <div className="stat-dark-tags">
        <span>Follicular</span>
        <span>University Streams</span>
        <span>Natural</span>
      </div>
    </div>
  );
}

/* ── Card 2: Light with photo ── */
function CardLight() {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <div ref={ref} className="stat-card stat-light fade-in fade-in-delay-1">
      <div className="stat-light-photo">
        <PlaceholderImg
          src="/images/service-1.jpg"
          alt="Hair Treatment"
          type="fue"
        />
        <div className="stat-light-photo-badge">Hair Treatment</div>
      </div>
      <div className="stat-light-body">
        <div className="stat-light-label">Hair Treatment</div>
        <div className="stat-light-desc">
          Advanced FUE procedure delivering precise natural-looking hair results with minimal recovery time.
        </div>
        <div className="stat-light-tags">
          <span>FUE</span>
          <span>PRP</span>
          <span>Restore</span>
        </div>
      </div>
    </div>
  );
}

/* ── Card 3: Green/lime with number ── */
function CardGreen() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(59.7, 2000, started);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="stat-card stat-green fade-in fade-in-delay-2">
      <div className="stat-green-top">
        <div className="stat-green-chart">📈</div>
        <div className="stat-green-arrow">↗</div>
      </div>

      <div className="stat-green-number">
        {count.toFixed(1)}%
      </div>

      <div className="stat-green-label">Hair Growth Improvement</div>
      <div className="stat-green-desc">
        Advanced PRP procedure delivering precise natural-looking hair results.
      </div>

      <div className="stat-green-tags">
        <span>Growth</span>
        <span>Density</span>
        <span>Thickness</span>
      </div>
    </div>
  );
}

export default function Stats() {
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
    <section className="stats" id="stats" ref={sectionRef}>
      <div className="container">

        {/* Header row */}
        <div className="stats-header">
          <div className="stats-header-left fade-in">
            <h2 className="section-title">Advanced Hair<br />Restoration Solutions</h2>
          </div>
          <div className="stats-header-right fade-in fade-in-delay-1">
            <p className="section-subtitle">
              Modern technology and expert care to restore your confidence with safe
              and effective hair transplant treatments.
            </p>
            <button
              className="stats-view-btn"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View All Solutions
              <span className="stats-view-btn-arrow">↗</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="stats-grid">
          <CardDark />
          <CardLight />
          <CardGreen />
        </div>

      </div>
    </section>
  );
}
