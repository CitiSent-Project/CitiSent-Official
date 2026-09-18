import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Lock, CheckCircle2 } from 'lucide-react';
import Badge from '../common/Badge';
import './LegalModal.css';

export default function LegalModal({ isOpen, onClose, initialTab = 'terms' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

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
    <div className="legal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="legal-container" onClick={(e) => e.stopPropagation()}>
        <button className="legal-close" onClick={onClose} aria-label="Close legal documents modal">
          <X size={20} />
        </button>

        <div className="legal-header">
          <div className="legal-header__badge-row">
            <Badge variant="emerald" icon={ShieldCheck}>Official Civic Documentation</Badge>
          </div>
          <h2 className="legal-title">
            {activeTab === 'terms' ? 'Terms of Service' : 'Privacy Notice'}
          </h2>
          <p className="legal-updated">Last Updated: September 2026 • Sto. Tomas City, Batangas</p>

          <div className="legal-tabs">
            <button
              className={`legal-tab-btn ${activeTab === 'terms' ? 'legal-tab-btn--active' : ''}`}
              onClick={() => setActiveTab('terms')}
            >
              <FileText size={15} />
              <span>Terms of Service</span>
            </button>
            <button
              className={`legal-tab-btn ${activeTab === 'privacy' ? 'legal-tab-btn--active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              <Lock size={15} />
              <span>Privacy Notice (RA 10173)</span>
            </button>
          </div>
        </div>

        <div className="legal-body">
          {activeTab === 'privacy' ? (
            /* Privacy Notice content provided by CitiSent */
            <div className="legal-content">
              <div className="legal-notice-box legal-notice-box--info">
                <div className="legal-notice-box__header">
                  <ShieldCheck size={18} />
                  <span>Commitment to Data Privacy</span>
                </div>
                <p>
                  CitiSent values your privacy and is dedicated to safeguarding your personal data in accordance
                  with Republic Act No. 10173, also known as the Data Privacy Act of 2012 (DPA) of the Philippines,
                  its Implementing Rules and Regulations, and related issuances of the National Privacy Commission (NPC).
                </p>
              </div>

              <h3 className="legal-section-title">1. Introduction</h3>
              <p className="legal-paragraph">
                This Privacy Notice outlines how CitiSent collects, uses, stores, and protects personal data
                gathered from users of our mobile application. By utilizing CitiSent to file reports and interact
                with local government services in Sto. Tomas City, Batangas, you acknowledge the data handling
                practices described herein.
              </p>

              <h3 className="legal-section-title">2. Information We Collect</h3>
              <p className="legal-paragraph">
                CitiSent collects only information strictly necessary for user authentication, report submission,
                and municipal administrative response. We do not collect unnecessary personal details.
              </p>

              <h4 className="legal-subsection-title">A. Account Information</h4>
              <p className="legal-paragraph">When you register an account, we collect:</p>
              <ul className="legal-bullet-list">
                <li className="legal-bullet-item"><strong>Full Name:</strong> First name, middle name (optional), and last name.</li>
                <li className="legal-bullet-item"><strong>Account Identifiers:</strong> A chosen unique username and password (stored using cryptographic hashing).</li>
                <li className="legal-bullet-item"><strong>Contact Information:</strong> Valid email address and Philippine mobile number (+639...).</li>
                <li className="legal-bullet-item"><strong>Demographics &amp; Classification:</strong> Age, gender, and client classification (Citizen, Business, or Government).</li>
                <li className="legal-bullet-item"><strong>Residence:</strong> Selected barangay within Sto. Tomas City, Batangas.</li>
              </ul>

              <h4 className="legal-subsection-title">B. Report &amp; Civic Information</h4>
              <p className="legal-paragraph">When you create or update a community report, we collect:</p>
              <ul className="legal-bullet-list">
                <li className="legal-bullet-item"><strong>Issue Category:</strong> The selected public concern type (e.g., roads, sanitation, streetlights).</li>
                <li className="legal-bullet-item"><strong>Description:</strong> The written narrative detailing the issue.</li>
                <li className="legal-bullet-item"><strong>Location Data:</strong> Descriptive location name and geographical coordinates (latitude and longitude).</li>
                <li className="legal-bullet-item"><strong>Visual Evidence:</strong> Photos uploaded as evidence (optional).</li>
                <li className="legal-bullet-item"><strong>Timestamp &amp; Status:</strong> Submission date and time, current status, and history of updates.</li>
              </ul>

              <h4 className="legal-subsection-title">C. Communications &amp; In-App Messages</h4>
              <p className="legal-paragraph">
                Messages or comments exchanged between you and city administrators through the in-app discussion feature
                regarding submitted reports, as well as notification read states.
              </p>

              <h4 className="legal-subsection-title">D. Device &amp; System Permissions</h4>
              <p className="legal-paragraph">The Application requests runtime permissions strictly on an as-needed basis:</p>
              <ul className="legal-bullet-list">
                <li className="legal-bullet-item"><strong>Camera &amp; Photo Gallery:</strong> Requested only when you choose to take or attach a photo to a report.</li>
                <li className="legal-bullet-item"><strong>Foreground Location:</strong> Requested only when you tap &quot;Use My Current Location&quot; to determine coordinates within Sto. Tomas City.</li>
                <li className="legal-bullet-item"><strong>Local Storage:</strong> For storing your secure session authentication token (JWT).</li>
              </ul>

              <h3 className="legal-section-title">3. Why We Process Your Information</h3>
              <p className="legal-paragraph">We process your personal information for specific, legitimate purposes:</p>
              <ul className="legal-bullet-list">
                <li className="legal-bullet-item">To create, verify, and administer your CitiSent user account.</li>
                <li className="legal-bullet-item">To transmit, log, and organize community reports for official review by Sto. Tomas City departments.</li>
                <li className="legal-bullet-item">To accurately locate reported hazards or infrastructure issues within the city.</li>
                <li className="legal-bullet-item">To run automated natural language processing (sentiment/emotion analysis) that estimates urgency to assist administrators in triaging submissions.</li>
                <li className="legal-bullet-item">To send you notifications and updates regarding the status of your reported issues.</li>
                <li className="legal-bullet-item">To maintain system security, detect duplicate spam, and prevent fraudulent abuse.</li>
              </ul>

              <h3 className="legal-section-title">4. Data Sharing &amp; Access</h3>
              <p className="legal-paragraph">Your information is handled with strict confidentiality and is shared only with:</p>
              <ul className="legal-bullet-list">
                <li className="legal-bullet-item">
                  <strong>Authorized City Officials: </strong>
                  Designated administrators, department heads, and municipal personnel of Sto. Tomas City responsible for reviewing and resolving community concerns.
                </li>
                <li className="legal-bullet-item">
                  <strong>Infrastructure Providers: </strong>
                  Cloud hosting and storage services (Supabase PostgreSQL database and secure storage) and OpenStreetMap Nominatim for geocoding services.
                </li>
              </ul>
              <p className="legal-paragraph">
                We do NOT sell, rent, monetize, or disclose your personal data to third-party advertisers, commercial entities,
                or unauthorized persons.
              </p>

              <h3 className="legal-section-title">5. Data Storage &amp; Retention</h3>
              <p className="legal-paragraph">
                Your data is stored in secure cloud databases managed via Supabase with encrypted network transmissions.
              </p>
              <p className="legal-paragraph">
                Information is retained for as long as necessary to process community reports, maintain historical
                records for municipal accountability, or until you request account deletion. When you delete your
                account via the Settings screen, your personal account credentials and profile records are removed
                in accordance with system deletion procedures.
              </p>

              <h3 className="legal-section-title">6. Security Safeguards</h3>
              <p className="legal-paragraph">
                We employ reasonable organizational, physical, and technical measures to protect your personal data,
                including password hashing, TLS/HTTPS encryption in transit, token-based authentication (JWT), and
                restricted administrative access.
              </p>
              <p className="legal-paragraph">
                While we implement diligent security practices, no method of electronic storage or internet
                transmission is completely impenetrable. Users are encouraged to maintain strong, confidential passwords.
              </p>

              <h3 className="legal-section-title">7. Your Rights under the Data Privacy Act</h3>
              <p className="legal-paragraph">
                Under the Philippine Data Privacy Act of 2012, you possess the following rights regarding your personal data:
              </p>
              <ul className="legal-bullet-list">
                <li className="legal-bullet-item">Right to be informed whether your personal data is being processed.</li>
                <li className="legal-bullet-item">Right to access your registered information and submitted reports.</li>
                <li className="legal-bullet-item">Right to rectify or correct inaccuracies in your personal profile through the Edit Profile screen.</li>
                <li className="legal-bullet-item">Right to erasure or blocking by deleting your account via the Settings screen.</li>
                <li className="legal-bullet-item">Right to lodge a complaint with the National Privacy Commission (NPC) if you feel your privacy rights have been violated.</li>
              </ul>

              <h3 className="legal-section-title">8. Revisions to this Notice</h3>
              <p className="legal-paragraph">
                This Privacy Notice may be updated periodically to reflect improvements in our data practices or
                statutory amendments. Any updates will be displayed within this screen along with an updated &quot;Last Updated&quot; date.
              </p>
            </div>
          ) : (
            /* Terms of Service content */
            <div className="legal-content">
              <div className="legal-notice-box legal-notice-box--info">
                <div className="legal-notice-box__header">
                  <FileText size={18} />
                  <span>Civic Reporting Agreement</span>
                </div>
                <p>
                  By accessing or registering with CitiSent, you agree to comply with these Terms of Service.
                  CitiSent is an emotion-aware civic reporting platform designed to serve residents, businesses,
                  and local government units in Sto. Tomas City, Batangas.
                </p>
              </div>

              <h3 className="legal-section-title">1. Acceptance of Terms</h3>
              <p className="legal-paragraph">
                By downloading, installing, registering, or using CitiSent, you acknowledge that you have read,
                understood, and agreed to be bound by these Terms of Service and our Privacy Notice. If you do not
                agree with any portion of these terms, please discontinue using the application.
              </p>

              <h3 className="legal-section-title">2. Civic Eligibility &amp; Account Registration</h3>
              <p className="legal-paragraph">
                CitiSent is open to all citizens, community members, local business operators, students, and stakeholders
                located within Sto. Tomas City, Batangas. When creating an account:
              </p>
              <ul className="legal-bullet-list">
                <li className="legal-bullet-item">You agree to provide true, accurate, and current registration information.</li>
                <li className="legal-bullet-item">You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li className="legal-bullet-item">You must promptly notify administrators of any unauthorized use or security breach of your account.</li>
              </ul>

              <h3 className="legal-section-title">3. Citizen Reporting Guidelines &amp; Code of Conduct</h3>
              <p className="legal-paragraph">
                CitiSent is an official civic engagement instrument. Users are required to use the service responsibly.
                The following acts are strictly prohibited:
              </p>
              <ul className="legal-bullet-list">
                <li className="legal-bullet-item">Filing fabricated, malicious, prank, or fraudulent reports.</li>
                <li className="legal-bullet-item">Submitting defamatory, threatening, obscene, or harassing language in reports or direct chat messages.</li>
                <li className="legal-bullet-item">Uploading unauthorized photos that violate personal privacy or copyright.</li>
                <li className="legal-bullet-item">Attempting to reverse engineer, disrupt, or exploit the CitiSent platform or municipal dispatch database.</li>
              </ul>

              <h3 className="legal-section-title">4. Emotion-Aware Sentiment Triage</h3>
              <p className="legal-paragraph">
                CitiSent utilizes natural language processing (sentiment and emotion analysis) to help administrators assess
                community urgency. Users understand and acknowledge that automated sentiment scores serve solely as an
                administrative prioritization aid and do not replace professional human review by municipal officials.
              </p>

              <h3 className="legal-section-title">5. Municipal Authority &amp; Emergency Disclaimer</h3>
              <p className="legal-paragraph">
                CitiSent connects reports to relevant departments within Sto. Tomas City. However:
              </p>
              <ul className="legal-bullet-list">
                <li className="legal-bullet-item">
                  <strong>Not for Life-Threatening Emergencies:</strong> CitiSent is designed for municipal civic management (potholes, streetlights, garbage, drainage). For immediate emergencies, call 911, the Philippine National Police (PNP), or the Bureau of Fire Protection (BFP).
                </li>
                <li className="legal-bullet-item">
                  <strong>Dispatch Discretion:</strong> Resolution schedules, field assignments, and work order completions remain at the operational discretion of the respective municipal departments.
                </li>
              </ul>

              <h3 className="legal-section-title">6. Account Deletion &amp; Data Erasure</h3>
              <p className="legal-paragraph">
                You retain full autonomy over your account. You can request account deletion at any time directly through the
                Settings screen. Upon deletion, your credentials and personal identifiers will be removed in accordance with
                our Privacy Notice and system data retention standards.
              </p>

              <h3 className="legal-section-title">7. Modifications &amp; Governing Law</h3>
              <p className="legal-paragraph">
                These terms are governed by and construed in accordance with the laws of the Republic of the Philippines.
                We reserve the right to revise these terms to align with legal updates or municipal guidelines. Continued use
                of CitiSent following published changes represents your agreement to the updated terms.
              </p>
            </div>
          )}
        </div>

        <div className="legal-footer">
          <span className="legal-footer__note">
            Republic Act No. 10173 • Data Privacy Act of 2012 Compliant
          </span>
          <button className="legal-footer__btn" onClick={onClose}>
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
