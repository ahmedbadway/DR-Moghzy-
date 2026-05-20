import { HashRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import './styles/transitions.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
