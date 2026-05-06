import './styles/global.css';
import Header from './components/Header';
import DoctorProfile from './components/DoctorProfile';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Doctor from './components/Doctor';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <DoctorProfile />
        <Hero />
        <Stats />
        <About />
        <Services />
        <Doctor />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
