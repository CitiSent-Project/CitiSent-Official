import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import Badge from '../common/Badge';
import './TermsModal.css';

export default function TermsModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="terms-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="terms-container" onClick={(e) => e.stopPropagation()}>
        <button className="terms-close" onClick={onClose} aria-label="Close terms modal">
          <X size={20} />
        </button>

        <div className="terms-header">
          <div className="terms-header__badge-row">
            <Badge variant="blue" icon={ShieldCheck}>Official Civic Documentation</Badge>
          </div>
          <h2 className="terms-title">Terms of Service</h2>
          <p className="terms-updated">Last Updated: September 2026 • Sto. Tomas City, Batangas</p>
        </div>

        <div className="terms-body">
          <div className="terms-notice-box">
            <div className="terms-notice-box__header">
              <FileText size={18} />
              <span>Civic Reporting Agreement</span>
            </div>
            <p>
              By accessing or registering with CitiSent, you agree to comply with these Terms of Service.
              CitiSent is an emotion-aware civic reporting platform designed to serve residents, businesses,
              and local government units in Sto. Tomas City, Batangas.
            </p>
          </div>

          <h3 className="terms-section-title">1. Acceptance of Terms</h3>
          <p className="terms-paragraph">
            By downloading, installing, registering, or using CitiSent, you acknowledge that you have read,
            understood, and agreed to be bound by these Terms of Service and our Privacy Notice. If you do not
            agree with any portion of these terms, please discontinue using the application.
          </p>

          <h3 className="terms-section-title">2. Civic Eligibility &amp; Account Registration</h3>
          <p className="terms-paragraph">
            CitiSent is open to all citizens, community members, local business operators, students, and stakeholders
            located within Sto. Tomas City, Batangas. When creating an account:
          </p>
          <ul className="terms-bullet-list">
            <li className="terms-bullet-item">You agree to provide true, accurate, and current registration information.</li>
            <li className="terms-bullet-item">You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li className="terms-bullet-item">You must promptly notify administrators of any unauthorized use or security breach of your account.</li>
          </ul>

          <h3 className="terms-section-title">3. Citizen Reporting Guidelines &amp; Code of Conduct</h3>
          <p className="terms-paragraph">
            CitiSent is an official civic engagement instrument. Users are required to use the service responsibly.
            The following acts are strictly prohibited:
          </p>
          <ul className="terms-bullet-list">
            <li className="terms-bullet-item">Filing fabricated, malicious, prank, or fraudulent reports.</li>
            <li className="terms-bullet-item">Submitting defamatory, threatening, obscene, or harassing language in reports or direct chat messages.</li>
            <li className="terms-bullet-item">Uploading unauthorized photos that violate personal privacy or copyright.</li>
            <li className="terms-bullet-item">Attempting to reverse engineer, disrupt, or exploit the CitiSent platform or municipal dispatch database.</li>
          </ul>

          <h3 className="terms-section-title">4. Emotion-Aware Sentiment Triage</h3>
          <p className="terms-paragraph">
            CitiSent utilizes natural language processing (sentiment and emotion analysis) to help administrators assess
            community urgency. Users understand and acknowledge that automated sentiment scores serve solely as an
            administrative prioritization aid and do not replace professional human review by municipal officials.
          </p>

          <h3 className="terms-section-title">5. Municipal Authority &amp; Emergency Disclaimer</h3>
          <p className="terms-paragraph">
            CitiSent connects reports to relevant departments within Sto. Tomas City. However:
          </p>
          <ul className="terms-bullet-list">
            <li className="terms-bullet-item">
              <strong>Not for Life-Threatening Emergencies:</strong> CitiSent is designed for municipal civic management (potholes, streetlights, garbage, drainage). For immediate emergencies, call 911, the Philippine National Police (PNP), or the Bureau of Fire Protection (BFP).
            </li>
            <li className="terms-bullet-item">
              <strong>Dispatch Discretion:</strong> Resolution schedules, field assignments, and work order completions remain at the operational discretion of the respective municipal departments.
            </li>
          </ul>

          <h3 className="terms-section-title">6. Account Deletion &amp; Data Erasure</h3>
          <p className="terms-paragraph">
            You retain full autonomy over your account. You can request account deletion at any time directly through the
            Settings screen. Upon deletion, your credentials and personal identifiers will be removed in accordance with
            our Privacy Notice and system data retention standards.
          </p>

          <h3 className="terms-section-title">7. Modifications &amp; Governing Law</h3>
          <p className="terms-paragraph">
            These terms are governed by and construed in accordance with the laws of the Republic of the Philippines.
            We reserve the right to revise these terms to align with legal updates or municipal guidelines. Continued use
            of CitiSent following published changes represents your agreement to the updated terms.
          </p>
        </div>

        <div className="terms-footer">
          <span className="terms-footer__note">
            Official Civic Platform of Sto. Tomas City, Batangas
          </span>
          <button className="terms-footer__btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
