import React from 'react';
import {
  ShieldCheck,
  Mail,
  ArrowUp,
  Heart,
  Activity,
  Download
} from 'lucide-react';
import { APP_DOWNLOAD_LINKS } from '../../config/downloadLinks';
import './Footer.css';
import logoLeft from '../../assets/logo-left.png';

export default function Footer({ onOpenDownload }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container scroll-reveal">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col footer-col--brand">
            <div className="footer-brand">
              <img src={logoLeft} alt="CitiSent Logo" className="brand-logo-image" />
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="footer-col">
            <h4 className="footer-heading">Platform</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>What is CitiSent</a></li>
              <li><a href="#how-it-works" onClick={(e) => handleLinkClick(e, '#how-it-works')}>How It Works</a></li>
              <li><a href="#admin-chat" onClick={(e) => handleLinkClick(e, '#admin-chat')}>Admin Chat</a></li>
            </ul>
          </div>

          {/* Resources Col */}
          <div className="footer-col">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')}>Frequently Asked Questions</a></li>
              <li><a href={APP_DOWNLOAD_LINKS.directApk} download>Download APK Package</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <p className="footer-contact-text">
              Interested in deploying CitiSent for your municipality or city district?
            </p>
            <a href={`mailto:${APP_DOWNLOAD_LINKS.partnershipEmail}`} className="footer-contact-btn">
              <Mail size={16} />
              <span>Contact Civic Team</span>
            </a>

            <div className="footer-socials">
              <a href="https://github.com/DarrenGuev/CitiSent-Official" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="X / Twitter" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.75a1.64 1.64 0 0 0-1.64 1.64 1.64 1.64 0 0 0 1.64 1.64 1.64 1.64 0 0 0 1.64-1.64 1.64 1.64 0 0 0-1.64-1.64z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© 2026 CitiSent. All rights reserved. Built with civic purpose for Sto. Tomas City, Batangas.</span>
          </div>

          <div className="footer-legal">
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span className="dot-divider">•</span>
            <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            <span className="dot-divider">•</span>
            <a href="#" onClick={(e) => e.preventDefault()}>Security & Encryption</a>
          </div>

          <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
