import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../styles/header.css';

const navLinks = [
  { label: 'Home',     to: '/',       type: 'route' },
  { label: 'About',    to: '/about',  type: 'route' },
  { label: 'Services', to: '#services', type: 'anchor' },
  { label: 'Results',  to: '#testimonials', type: 'anchor' },
  { label: 'News',     to: '#news', type: 'anchor' },
  { label: 'Pricing',  to: '#cta', type: 'anchor' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderLink = (link, isMobile = false) => {
    if (link.type === 'route') {
      return (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          onClick={() => isMobile && setMenuOpen(false)}
        >
          {link.label}
        </NavLink>
      );
    }
    return (
      <a
        key={link.to}
        href={link.to}
        className="nav-link"
        onClick={(e) => handleAnchorClick(e, link.to)}
      >
        {link.label}
      </a>
    );
  };

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <NavLink to="/" className="header-logo" end>
            <div className="logo-icon">M</div>
            <div className="logo-text">
              <span className="logo-name">DR. Moghazy</span>
              <span className="logo-tagline">Hair & Cosmetic Surgery</span>
            </div>
          </NavLink>

          <nav className="header-nav">
            {navLinks.map((link) => renderLink(link))}
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
        {navLinks.map((link) => renderLink(link, true))}
      </nav>
    </>
  );
}
