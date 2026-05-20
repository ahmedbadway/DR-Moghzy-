import { useEffect } from 'react';
import Services from '../components/Services';
import CTA from '../components/CTA';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="page page-services">
      <div className="page-header">
        <div className="container">
          <span className="section-tag">Our Services</span>
          <h1 className="page-title">Expert Hair &amp; Cosmetic Treatments</h1>
          <p className="page-subtitle">
            Comprehensive solutions tailored to your needs — from advanced FUE
            transplantation to PRP therapy and cosmetic refinement.
          </p>
        </div>
      </div>
      <Services />
      <CTA />
    </div>
  );
}
