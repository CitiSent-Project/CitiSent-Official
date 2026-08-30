import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Shield, ChevronRight, Activity } from 'lucide-react';
import Button from '../common/Button';
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
    { label: 'Why CitiSent', href: '#why-citisent' },
    { label: 'App Preview', href: '#preview' },
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
          <div className="brand-logo-icon">
            <svg viewBox="0 0 40 40" width="34" height="34" fill="none">
              <rect width="40" height="40" rx="10" fill="#0B132B" />
              <path d="M20 6L32 11V20C32 27.5 27 34 20 36.5C13 34 8 27.5 8 20V11L20 6Z" fill="url(#navGrad)" />
              <circle cx="20" cy="18" r="5" fill="#FFFFFF" />
              <path d="M20 15C18.34 15 17 16.34 17 18C17 21 20 25 20 25C20 25 23 21 23 18C23 16.34 21.66 15 20 15Z" fill="#2563EB" />
              <defs>
                <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="brand-logo-text">
            <span className="brand-name">Citi<span className="brand-accent">Sent</span></span>
            <span className="brand-tag">Civic Tech</span>
          </div>
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

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer__backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-drawer__content">
          <div className="mobile-drawer__header">
            <div className="brand-logo-text">
              <span className="brand-name">Citi<span className="brand-accent">Sent</span></span>
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
            <p className="mobile-drawer__hint">Available free for iOS & Android</p>
          </div>
        </div>
      </div>
    </header>
  );
}
