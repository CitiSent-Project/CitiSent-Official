import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Menu, X, Download, ChevronRight } from 'lucide-react';
import Button from '../common/Button';
import logoLeft from '../../assets/logo-left.png';
import './Navbar.css';

export default function Navbar({ onOpenDownload }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'What is CitiSent', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`citi-navbar ${isScrolled ? 'citi-navbar--scrolled' : ''}`}>
      <div className="container citi-navbar__container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="citi-navbar__brand">
          <img src={logoLeft} alt="CitiSent Logo" className="brand-logo-img" style={{ height: '40px' }} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="citi-navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="citi-navbar__link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="citi-navbar__actions">
          <Button
            variant="primary"
            size="md"
            icon={Download}
            iconPosition="left"
            onClick={onOpenDownload}
          >
            Download App
          </Button>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer — rendered via portal to escape the navbar's backdrop-filter stacking context,
          which would otherwise confine position:fixed children to the navbar's bounding box. */}
      {ReactDOM.createPortal(
        <div className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer--open' : ''}`}>
          <div className="mobile-drawer__backdrop" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-drawer__content">
            <div className="mobile-drawer__header">
              <div className="citi-navbar__brand">
                <img src={logoLeft} alt="CitiSent Logo" className="brand-logo-img" style={{ height: '32px' }} />
              </div>
              <button className="mobile-drawer__close" onClick={() => setMobileMenuOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="mobile-drawer__links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="mobile-drawer__link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} className="mobile-drawer__arrow" />
                </a>
              ))}
            </div>

            <div className="mobile-drawer__cta">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={Download}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
              >
                Download CitiSent App
              </Button>
              <p className="mobile-drawer__hint">Available only for Android</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
