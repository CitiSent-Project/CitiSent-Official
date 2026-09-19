import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Menu, X, Download, ChevronRight } from 'lucide-react';
import Button from '../common/Button';
import logoLeft from '../../assets/logo-left.png';
import './Navbar.css';

export default function Navbar({ onOpenDownload }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

      // Style change threshold for background blur / shadow
      setIsScrolled(currentScrollY > 20);

      // Keep navbar visible if mobile drawer is currently open
      if (mobileMenuOpen) {
        setIsVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // Ignore overscroll / rubber-banding at the bottom of the page
      if (maxScrollY > 0 && currentScrollY >= maxScrollY - 10) {
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // Always keep navbar visible near the top of the page
      if (currentScrollY < 60) {
        setIsVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - lastScrollYRef.current;

      // Small threshold to avoid flicker from minor touch/trackpad oscillations
      if (Math.abs(diff) < 6) {
        return;
      }

      if (diff > 0) {
        // Scrolling down -> hide navbar smoothly
        setIsVisible(false);
      } else {
        // Scrolling up -> show navbar smoothly
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Why CitiSent', href: '#why-citisent' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Admin Chat', href: '#admin-chat' },
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
    <header className={`citi-navbar ${isScrolled ? 'citi-navbar--scrolled' : ''} ${!isVisible ? 'citi-navbar--hidden' : ''}`}>
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

        {/* Actions / Mobile Toggle */}
        <div className="citi-navbar__actions">
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
