import { useState, useEffect, useRef } from 'react';
import Home from '../pages/home.jsx';
import NavBar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import logo from '../assets/img/Logo.png';
import '../assets/css/home_loader.css';

export default function HomeLoader() {
  // Usa sessionStorage para verificar si ya se mostró el loader
  const initialLoaderShown = sessionStorage.getItem('homeLoaderShown') === 'true';
  const [loading, setLoading] = useState(!initialLoaderShown);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (initialLoaderShown) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          timeoutRef.current = setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('homeLoaderShown', 'true');
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [initialLoaderShown]);

  const totalRombos = 12;
  const activeRombos = Math.ceil((progress / 100) * totalRombos);
  const rombos = Array.from({ length: totalRombos }, (_, i) => i < activeRombos);

  if (loading) {
    return (
      <div className={`loader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
        <img
          src={logo}
          alt="Logo"
          className="loader-logo"
          style={{ filter: `brightness(${0.2 + (progress / 100) * 1.0})` }}
        />
        <div className="loader-rombos-container">
          {rombos.map((active, i) => (
            <div key={i} className={`loader-rombo ${active ? 'active' : ''}`}></div>
          ))}
        </div>
        <div className="loader-percentage">{progress}%</div>
      </div>
    );
  }

  return (
    <div className="fade-in">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}
