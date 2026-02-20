import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'glass' : ''}`}>
      <div className="container nav-container">

        <div className="nav-left">
          <Link to="/" className="brand" onClick={closeMobileMenu}>
            <img src="/adzzat.png" alt="Adzzat Logo" className="brand-logo" />
            <span className="brand-text">Adzzat</span>
          </Link>

          {/* Desktop Menu - placed next to logo like Deccan */}
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/explore" className="nav-link">Explore</Link>
          </div>
        </div>

        <div className="nav-actions">
          {/* Keep actions empty per previous instructions */}
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu glass">
          <Link to="/" className="mobile-link" onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" className="mobile-link" onClick={closeMobileMenu}>About</Link>
          <Link to="/contact" className="mobile-link" onClick={closeMobileMenu}>Contact</Link>
          <Link to="/explore" className="mobile-link" onClick={closeMobileMenu}>Explore</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
