import { useEffect } from 'react';
import DoctorProfile from '../components/DoctorProfile';
import About from '../components/About';
import CTA from '../components/CTA';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="page page-about">
      <DoctorProfile />
      <About />
      <CTA />
    </div>
  );
}
