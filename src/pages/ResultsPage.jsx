import { useEffect } from 'react';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function ResultsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="page page-results">
      <div className="page-header">
        <div className="container">
          <span className="section-tag">Real Results</span>
          <h1 className="page-title">Before &amp; After — Real Patients</h1>
          <p className="page-subtitle">
            Every result tells a story of confidence restored. See the transformations
            our patients achieved with Dr. Moghazy's expert care.
          </p>
        </div>
      </div>
      <Testimonials />
      <CTA />
    </div>
  );
}
