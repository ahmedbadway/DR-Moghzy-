import { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Doctor from '../components/Doctor';
import Testimonials from '../components/Testimonials';
import News from '../components/News';
import CTA from '../components/CTA';

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="page page-home">
      <Hero />
      <Stats />
      <Services />
      <Doctor />
      <Testimonials />
      <News />
      <CTA />
    </div>
  );
}
