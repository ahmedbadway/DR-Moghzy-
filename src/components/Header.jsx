import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const navLinks = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Results',  href: '#results' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll spy: highlight nav link of the section currently in view
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1));
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `/#${href}`);
    }
  };

  const renderLink = (link) => (
    <a
      key={link.href}
      href={link.href}
      className={`nav-link${active === link.href ? ' active' : ''}`}
      onClick={(e) => handleAnchorClick(e, link.href)}
    >
      {link.label}
    </a>
  );

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <NavLink to="/" className="header-logo" end onClick={(e) => handleAnchorClick(e, '#hero')}>
            <div className="logo-icon">M</div>
            <div className="logo-text">
              <span className="logo-name">DR. Moghazy</span>
              <span className="logo-tagline">Hair & Cosmetic Surgery</span>
            </div>
          </NavLink>

          <nav className="header-nav">
            {navLinks.map(renderLink)}
          </nav>

          <div className="header-actions">
            <a
              href="#cta"
              className="header-contact-btn"
              onClick={(e) => handleAnchorClick(e, '#cta')}
            >
              Contact Us →
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        {navLinks.map(renderLink)}
      </nav>
    </>
  );
}
