import React, { useState, useEffect } from 'react';
import { ExternalLink, Copy, Check, Clock, ShieldCheck } from 'lucide-react';
import QRCode from 'qrcode';
import { APP_DOWNLOAD_LINKS } from '../../config/downloadLinks';
import Button from '../common/Button';
import './ResearchSurvey.css';

export default function ResearchSurvey() {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    QRCode.toDataURL(APP_DOWNLOAD_LINKS.researchSurvey, {
      width: 200,
      margin: 1,
      color: {
        dark: '#001845',
        light: '#FFFFFF'
      }
    })
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error('Error generating survey QR code:', err));
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(APP_DOWNLOAD_LINKS.researchSurvey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="research-survey" className="section research-survey-section">
      <div className="container scroll-reveal">
        <div className="survey-container">
          {/* Main Context & Actions */}
          <div className="survey-content">
            <span className="survey-badge">Academic Research</span>
            <h2 className="survey-title">Help Us Evaluate CitiSent</h2>
            <p className="survey-description">
              We are conducting an academic study on{' '}
              <strong>&ldquo;CitiSent: An Emotion-Aware City-Based Reporting System with Sentiment Analysis&rdquo;</strong>.
              If you have a few minutes, please share your thoughts through our questionnaire. Your response helps us evaluate system usability and improve local reporting for Sto. Tomas City.
            </p>

            <div className="survey-meta">
              <span className="survey-meta__item">
                <Clock size={15} />
                Takes 3–5 minutes
              </span>
              <span className="survey-meta__item">
                <ShieldCheck size={15} />
                Anonymous & confidential
              </span>
            </div>

            <div className="survey-actions">
              <Button
                variant="primary"
                size="md"
                icon={ExternalLink}
                iconPosition="right"
                href={APP_DOWNLOAD_LINKS.researchSurvey}
                target="_blank"
                className="survey-open-btn"
              >
                Open Questionnaire
              </Button>

              <Button
                variant="outline"
                size="md"
                icon={copied ? Check : Copy}
                iconPosition="left"
                onClick={handleCopyLink}
                className="survey-copy-btn"
              >
                {copied ? 'Link Copied' : 'Copy Link'}
              </Button>
            </div>
          </div>

          {/* Clean QR Box */}
          <div className="survey-qr-wrapper">
            <div className="survey-qr-box">
              <div className="survey-qr-frame">
                {qrCodeUrl ? (
                  <img
                    src={qrCodeUrl}
                    alt="QR Code for CitiSent Research Survey"
                    className="survey-qr-image"
                    width="140"
                    height="140"
                  />
                ) : (
                  <div className="survey-qr-placeholder">Loading QR...</div>
                )}
              </div>
              <span className="survey-qr-caption">Scan to open on phone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
