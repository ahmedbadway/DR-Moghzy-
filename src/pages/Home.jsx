import { useEffect } from 'react';
import Hero from '../components/Hero';
import DoctorProfile from '../components/DoctorProfile';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <div className="page page-home">
      <Hero />
      <DoctorProfile />
      <About />
      <Services />
      <Testimonials />
      <CTA />
    </div>
  );
}
