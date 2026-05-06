import { useState, useEffect } from 'react';
import '../styles/header.css';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#testimonials' },
  { label: 'Pricing', href: '#cta' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#hero" className="header-logo" onClick={e => handleNavClick(e, '#hero')}>
            <div className="logo-icon">M</div>
            <div className="logo-text">
              <span className="logo-name">DR. Moghazy</span>
              <span className="logo-tagline">Hair & Cosmetic Surgery</span>
            </div>
          </a>

          <nav className="header-nav">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="#cta" className="header-contact-btn" onClick={e => handleNavClick(e, '#cta')}>
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
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={e => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
