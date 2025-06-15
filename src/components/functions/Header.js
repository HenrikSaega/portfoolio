import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import { ReactComponent as Logo } from "../pics/Logo2.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const headerClass = `navigation-menu ${scrolled && !hovered ? 'navigation-menu-small' : ''}`;

  return (
    <header 
      className={headerClass} 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      ref={navRef}
    >
      <nav className="nav-buttons">

        <div className="mobile-left">
          <Logo className="logo no-select" />
          <button
            className={`menu-toggle no-select ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>

        <div className="desktop-nav">
          <NavLink onClick={() => setMenuOpen(false)} className="header_a" to="/home" end>HOME</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="header_a" to="/aboutme">ABOUT ME</NavLink>
          <div className="desktop-logo-wrapper">
            <Logo className="logo no-select" />
          </div>
          <NavLink onClick={() => setMenuOpen(false)} className="header_a" to="/projects">PROJECTS</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="header_a" to="/contact">CONTACT</NavLink>
        </div>


        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink onClick={() => setMenuOpen(false)} className="header_a" to="/home" end>HOME</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="header_a" to="/aboutme">ABOUT ME</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="header_a" to="/projects">PROJECTS</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className="header_a" to="/contact">CONTACT</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
