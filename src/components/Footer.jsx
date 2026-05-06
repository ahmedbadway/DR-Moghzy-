import '../styles/footer.css';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Doctor', href: '#profile' },
  { label: 'Services', href: '#services' },
  { label: 'Success Stories', href: '#testimonials' },
  { label: 'Pricing', href: '#cta' },
  { label: 'Contact Us', href: '#cta' },
];

const treatments = [
  { label: 'FUE Hair Transplant', href: '#services' },
  { label: 'PRP Hair Treatment', href: '#services' },
  { label: 'Scalp Micropigmentation', href: '#services' },
  { label: 'Eyebrow Restoration', href: '#services' },
  { label: 'Cosmetic Surgery', href: '#services' },
  { label: 'Post-Treatment Care', href: '#services' },
];

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! We will keep you updated.');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon" style={{ width: 38, height: 38, background: 'linear-gradient(135deg, #4da6d6, #1e3a5f)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', fontSize: '1.1rem', flexShrink: 0 }}>M</div>
              <div className="logo-text">
                <span className="logo-name">DR. Moghazy</span>
                <span className="logo-tagline">Hair &amp; Cosmetic Surgery</span>
              </div>
            </div>
            <p className="footer-about">
              Dr. Ahmed El Moghazy is a Plastic &amp; Aesthetic Plastic Surgeon and Hair Loss &amp; Hair Restoration Expert. "Helping you look better, not different."
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/dr_a.moghz"
                className="social-btn"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                📸
              </a>
              <a
                href="https://www.tiktok.com/@drmoghazyisherenow"
                className="social-btn"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                🎵
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} onClick={e => handleScroll(e, link.href)}>
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="footer-col">
            <h4>Treatments</h4>
            <ul className="footer-links">
              {treatments.map(link => (
                <li key={link.label}>
                  <a href={link.href} onClick={e => handleScroll(e, link.href)}>
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="footer-col footer-newsletter">
            <h4>Contact</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <span>Address</span>
                  <p>123 Medical District, Cairo, Egypt</p>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <span>Phone</span>
                  <a href="tel:+201000000000">+20 100 000 0000</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-text">
                  <span>Email</span>
                  <a href="mailto:info@drmoghazy.com">info@drmoghazy.com</a>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <p className="newsletter-text">Stay updated with the latest treatments and offers.</p>
              <form className="newsletter-form" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Your email"
                  required
                />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} DR. Moghazy — Hair &amp; Cosmetic Surgery. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#hero" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Privacy Policy</a>
            <a href="#hero" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Terms of Service</a>
            <a href="#hero" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
