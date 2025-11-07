import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/img/Logo.png';
import '../assets/css/navbar.css';

const pages = ['/', '/projects', '/about', '/contact'];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      const currentIndex = pages.indexOf(location.pathname);
      if (e.deltaY > 0 && currentIndex < pages.length - 1) {
        navigate(pages[currentIndex + 1]);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        navigate(pages[currentIndex - 1]);
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [location, navigate]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="navbar-img" />
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger"></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''} onClick={closeMenu}>Proyectos</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''} onClick={closeMenu}>Sobre mí</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''} onClick={closeMenu}>Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
