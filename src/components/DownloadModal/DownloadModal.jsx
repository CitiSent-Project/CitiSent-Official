import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  Download,
  CheckCircle2,
  ShieldCheck,
  QrCode,
  ExternalLink,
  Info
} from 'lucide-react';
import QRCode from 'qrcode';
import { APP_DOWNLOAD_LINKS } from '../../config/downloadLinks';
import Badge from '../common/Badge';
import './DownloadModal.css';

export default function DownloadModal({ isOpen, onClose }) {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');
  const [showSteps, setShowSteps] = useState(false);

  useEffect(() => {
    QRCode.toDataURL(APP_DOWNLOAD_LINKS.directApkFile, {
      width: 240,
      margin: 1,
      color: {
        dark: '#0B132B',
        light: '#FFFFFF'
      }
    })
      .then((url) => setQrCodeDataUrl(url))
      .catch((err) => console.error('Error generating QR code:', err));
  }, []);

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
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <Badge variant="emerald" icon={ShieldCheck}>Official Mobile App</Badge>
          <h3 className="modal-title">Get CitiSent for Android</h3>
          <p className="modal-desc">
            Download the APK package now to report concerns and track community improvements in real-time.
          </p>
        </div>

        <div className="modal-body">
          {/* Download Options Grid */}
          <div className="modal-options">
            {/* Primary Direct APK Download */}
            <a
              href={APP_DOWNLOAD_LINKS.directApkFile}
              download="CitiSent-Mobile.apk"
              className="store-card store-card--apk"
            >
              <div className="store-card__icon-box">
                <Download size={22} />
              </div>
              <div className="store-card__content">
                <div className="store-card__badge-row">
                  <span className="store-card__subtitle">DIRECT APK INSTALL</span>
                  <span className="store-card__pill">Auto Download</span>
                </div>
                <strong className="store-card__name">Download CitiSent APK (v1.0.0)</strong>
                <span className="store-card__redirect-note">
                  Tap to immediately start APK download on Android
                </span>
              </div>
              <ArrowRight size={18} className="store-card__arrow" />
            </a>

            {/* GitHub Releases Link */}
            <a
              href={APP_DOWNLOAD_LINKS.githubRelease}
              target="_blank"
              rel="noopener noreferrer"
              className="store-card store-card--github"
            >
              <div className="store-card__icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div className="store-card__content">
                <span className="store-card__subtitle">GITHUB RELEASES</span>
                <strong className="store-card__name">View Release on GitHub</strong>
                <span className="store-card__redirect-note">
                  Browse release notes & assets <ExternalLink size={12} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '3px' }} />
                </span>
              </div>
              <ArrowRight size={18} className="store-card__arrow" />
            </a>
          </div>

          {/* Real QR Code Scanner for Desktop Users */}
          <div className="qr-box">
            <div className="qr-box__visual">
              {qrCodeDataUrl ? (
                <img
                  src={qrCodeDataUrl}
                  alt="Scan to download CitiSent APK"
                  className="qr-box__img"
                  width="92"
                  height="92"
                />
              ) : (
                <div className="qr-box__loading">Loading QR...</div>
              )}
            </div>
            <div className="qr-box__info">
              <div className="qr-box__tag">
                <QrCode size={14} />
                <span>Scan to Auto-Download APK</span>
              </div>
              <p className="qr-box__text">
                Point your Android camera at this QR code to immediately trigger the APK download on your phone.
              </p>
            </div>
          </div>

          {/* Android Installation Tip Accordion */}
          <div className="install-helper">
            <button
              type="button"
              className="install-helper__toggle"
              onClick={() => setShowSteps(!showSteps)}
            >
              <Info size={15} />
              <span>How to install the APK on your phone?</span>
              <span className="install-helper__action">{showSteps ? 'Hide' : 'Show steps'}</span>
            </button>
            {showSteps && (
              <ol className="install-steps">
                <li><strong>1. Download:</strong> Tap the download button or scan the QR code to fetch the APK file.</li>
                <li><strong>2. Confirm:</strong> If Android warns <em>"File might be harmful"</em>, tap <em>"Download anyway"</em> (standard security notice for APKs outside Google Play).</li>
                <li><strong>3. Install:</strong> Tap the notification or open your Downloads folder, tap <em>CitiSent-Mobile.apk</em>, and tap <em>"Install"</em>.</li>
              </ol>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-footer__item">
            <CheckCircle2 size={16} className="text-emerald" />
            <span>100% Free & Open Citizen Access</span>
          </div>
          <div className="modal-footer__item">
            <CheckCircle2 size={16} className="text-emerald" />
            <span>Privacy Focused & Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
