import { useEffect, useRef } from 'react';
import '../styles/doctor.css';

export default function Doctor() {
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
    <section className="doctor" id="doctor" ref={ref}>
      {/* Background image with overlay */}
      <div className="doctor-bg">
        <img
          src="/images/doctor-bg.jpg"
          alt="Doctor examining scalp"
        />
        <div className="doctor-bg-overlay" />
      </div>

      <div className="container">
        <div className="doctor-inner">

          {/* Left: text */}
          <div className="doctor-left fade-in">
            <span className="doctor-tag">Meet Our Expert</span>
            <h2 className="doctor-title">
              Tailored Hair<br />
              Regrowth Solutions
            </h2>
            <p className="doctor-desc">
              Dr. Ahmed Moghazy combines cutting-edge technology with artistic precision
              to deliver personalized hair restoration plans. Every patient receives a
              bespoke treatment designed for their unique hair type and goals.
            </p>

            <div className="doctor-credentials">
              {[
                { num: '15+', label: 'Years Experience' },
                { num: '500+', label: 'Surgeries Done' },
                { num: '98%', label: 'Success Rate' },
              ].map((c, i) => (
                <div key={i} className="doctor-cred">
                  <span className="doctor-cred-num">{c.num}</span>
                  <span className="doctor-cred-label">{c.label}</span>
                </div>
              ))}
            </div>

            <button
              className="doctor-btn"
              onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Appointment →
            </button>
          </div>

          {/* Right: appointment card */}
          <div className="doctor-right fade-in fade-in-delay-2">
            <div className="doctor-card">
              <div className="doctor-card-header">
                <div className="doctor-card-avatar">AM</div>
                <div>
                  <div className="doctor-card-name">Dr. Ahmed Moghazy</div>
                  <div className="doctor-card-spec">Hair Restoration Specialist</div>
                  <div className="doctor-card-stars">★★★★★ <span>4.9</span></div>
                </div>
              </div>
              <div className="doctor-card-divider" />
              <div className="doctor-card-label">Next Available Slot</div>
              <div className="doctor-card-slots">
                {['Mon 10:00', 'Tue 14:00', 'Thu 11:00'].map((slot, i) => (
                  <div key={i} className={`doctor-slot${i === 0 ? ' active' : ''}`}>{slot}</div>
                ))}
              </div>
              <button
                className="doctor-card-btn"
                onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Confirm Appointment
              </button>
              <div className="doctor-card-note">Free consultation · No commitment</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
