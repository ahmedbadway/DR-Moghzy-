import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';
import './styles/transitions.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <main key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </HashRouter>
  );
}
