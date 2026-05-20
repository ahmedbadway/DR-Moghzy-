import { useEffect } from 'react';
import Hero from '../components/Hero';
import CTA from '../components/CTA';

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="page page-home">
      <Hero />
      <CTA />
    </div>
  );
}
