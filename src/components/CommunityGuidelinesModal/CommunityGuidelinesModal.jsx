import React, { useEffect } from 'react';
import { X, ShieldCheck, HeartHandshake, AlertTriangle } from 'lucide-react';
import Badge from '../common/Badge';
import './CommunityGuidelinesModal.css';

export default function CommunityGuidelinesModal({ isOpen, onClose }) {
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
    <div className="guidelines-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="guidelines-container" onClick={(e) => e.stopPropagation()}>
        <button className="guidelines-close" onClick={onClose} aria-label="Close community guidelines modal">
          <X size={20} />
        </button>

        <div className="guidelines-header">
          <div className="guidelines-header__badge-row">
            <Badge variant="cyan" icon={ShieldCheck}>Civic Community Standards</Badge>
          </div>
          <h2 className="guidelines-title">Community Guidelines</h2>
          <p className="guidelines-updated">Last Updated: September 2026 • Sto. Tomas City, Batangas</p>
        </div>

        <div className="guidelines-body">
          <div className="guidelines-notice-box guidelines-notice-box--info">
            <div className="guidelines-notice-box__header">
              <HeartHandshake size={18} />
              <span>Building a Better Sto. Tomas City Together</span>
            </div>
            <p>
              CitiSent exists to give residents of Sto. Tomas City, Batangas, a constructive, reliable channel
              to collaborate with local government departments. These guidelines help ensure a safe, helpful, and
              productive reporting community for everyone.
            </p>
          </div>

          <h3 className="guidelines-section-title">What We Encourage</h3>
          <p className="guidelines-paragraph">
            Helpful reports make it easier for city teams to take swift, effective action. When submitting concerns:
          </p>

          <ul className="guidelines-bullet-list">
            <li className="guidelines-bullet-item">
              <strong>Be Truthful and Honest: </strong>
              Submit factual information about real public issues that you have personally observed.
            </li>
            <li className="guidelines-bullet-item">
              <strong>Provide Clear Descriptions: </strong>
              Briefly explain what the issue is, how severe it appears, and any landmarks that can help city teams identify the problem.
            </li>
            <li className="guidelines-bullet-item">
              <strong>Attach Relevant Evidence: </strong>
              A clear photograph of the problem (e.g. road damage, broken streetlight, blocked drain) gives inspectors valuable context.
            </li>
            <li className="guidelines-bullet-item">
              <strong>Provide Accurate Locations: </strong>
              Verify that your report is located within Sto. Tomas City, Batangas, and pinpoint the street or barangay as accurately as possible.
            </li>
            <li className="guidelines-bullet-item">
              <strong>Be Civil and Respectful: </strong>
              Maintain a courteous and constructive tone in report narratives and discussions with city personnel.
            </li>
            <li className="guidelines-bullet-item">
              <strong>Avoid Duplicate Flooding: </strong>
              Before filing, consider whether the issue is already being addressed. Avoid submitting multiple copies of the exact same incident.
            </li>
          </ul>

          <h3 className="guidelines-section-title">What is Prohibited</h3>
          <p className="guidelines-paragraph">
            To protect system integrity and community safety, the following behaviors are strictly not allowed:
          </p>

          <ul className="guidelines-bullet-list">
            <li className="guidelines-bullet-item">
              <strong>False or Prank Reports: </strong>
              Submitting fabricated situations, fake emergencies, or jokes on the platform.
            </li>
            <li className="guidelines-bullet-item">
              <strong>Harassment and Abuse: </strong>
              Bullying, targeting neighbors or city staff, hate speech, defamation, or threats of violence.
            </li>
            <li className="guidelines-bullet-item">
              <strong>Inappropriate Media: </strong>
              Uploading sexually explicit, violent, obscene, or offensive photographs.
            </li>
            <li className="guidelines-bullet-item">
              <strong>Spam and Commercial Ads: </strong>
              Promoting commercial goods, services, political advertisements, or unsolicited links.
            </li>
            <li className="guidelines-bullet-item">
              <strong>Impersonation: </strong>
              Pretending to be another citizen, city official, or barangay representative.
            </li>
            <li className="guidelines-bullet-item">
              <strong>System Manipulation: </strong>
              Trying to trick the urgency or sentiment analysis models with exaggerated keywords or repetitive automated spam.
            </li>
          </ul>

          <h3 className="guidelines-section-title">Enforcement</h3>
          <p className="guidelines-paragraph">
            Submissions that violate these guidelines may be flagged, rejected, or removed by city administrators.
            Accounts involved in repeated or severe violations may face temporary suspension or permanent account
            termination.
          </p>

          <div className="guidelines-notice-box guidelines-notice-box--warning">
            <div className="guidelines-notice-box__header">
              <AlertTriangle size={18} />
              <span>Need Immediate Help?</span>
            </div>
            <p>
              Remember: CitiSent is designed for civic and community reports, not life-or-death emergencies. For
              crimes in progress, medical crises, or active fires, please contact local emergency authorities or
              your nearest Barangay Hall directly.
            </p>
          </div>
        </div>

        <div className="guidelines-footer">
          <span className="guidelines-footer__note">
            Building a safer and stronger Sto. Tomas City together
          </span>
          <button className="guidelines-footer__btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
