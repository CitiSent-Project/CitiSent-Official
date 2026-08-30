import React, { useEffect } from 'react';
import { X, Smartphone, ArrowRight, Download, CheckCircle2, ShieldCheck, QrCode } from 'lucide-react';
import { APP_DOWNLOAD_LINKS } from '../../config/downloadLinks';
import Button from '../common/Button';
import Badge from '../common/Badge';
import './DownloadModal.css';

export default function DownloadModal({ isOpen, onClose }) {
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
          <h3 className="modal-title">Get CitiSent for Your Device</h3>
          <p className="modal-desc">
            Download the mobile app now to start reporting concerns and tracking community improvements in real-time.
          </p>
        </div>

        <div className="modal-body">
          {/* Download Options Grid */}
          <div className="modal-options">
            <a
              href={APP_DOWNLOAD_LINKS.android}
              target="_blank"
              rel="noopener noreferrer"
              className="store-card store-card--android"
            >
              <div className="store-card__icon-box">
                <svg className="store-icon" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-.715v-18.94c.175-.285.39-.533.61-.717zm11.246 11.247l2.42 2.42-12.7 7.332 10.28-9.752zm0-2.122L4.575 1.187l12.7 7.332-2.42 2.42zm1.488 1.061l3.522 2.034c.915.528.915 1.39 0 1.918l-3.522 2.034-2.122-2.122 2.122-1.864z" />
                </svg>
              </div>
              <div className="store-card__content">
                <span className="store-card__subtitle">GET IT ON</span>
                <strong className="store-card__name">Google Play Store</strong>
              </div>
              <ArrowRight size={18} className="store-card__arrow" />
            </a>

            <a
              href={APP_DOWNLOAD_LINKS.ios}
              target="_blank"
              rel="noopener noreferrer"
              className="store-card store-card--ios"
            >
              <div className="store-card__icon-box">
                <svg className="store-icon" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.67-1.26z" />
                </svg>
              </div>
              <div className="store-card__content">
                <span className="store-card__subtitle">DOWNLOAD ON THE</span>
                <strong className="store-card__name">Apple App Store</strong>
              </div>
              <ArrowRight size={18} className="store-card__arrow" />
            </a>

            <a
              href={APP_DOWNLOAD_LINKS.directApk}
              download
              className="store-card store-card--apk"
            >
              <div className="store-card__icon-box">
                <Download size={24} />
              </div>
              <div className="store-card__content">
                <span className="store-card__subtitle">DIRECT DOWNLOAD</span>
                <strong className="store-card__name">Download Android APK (v1.0)</strong>
              </div>
              <ArrowRight size={18} className="store-card__arrow" />
            </a>
          </div>

          {/* QR Code Scanner for Desktop Users */}
          <div className="qr-box">
            <div className="qr-box__visual">
              <svg viewBox="0 0 100 100" className="qr-svg" width="100" height="100">
                {/* Simulated high-quality QR code matrix */}
                <rect width="100" height="100" fill="#FFFFFF" rx="8" />
                {/* Corners */}
                <rect x="10" y="10" width="24" height="24" rx="4" fill="#0B132B" />
                <rect x="14" y="14" width="16" height="16" rx="2" fill="#FFFFFF" />
                <rect x="18" y="18" width="8" height="8" rx="1" fill="#2563EB" />

                <rect x="66" y="10" width="24" height="24" rx="4" fill="#0B132B" />
                <rect x="70" y="14" width="16" height="16" rx="2" fill="#FFFFFF" />
                <rect x="74" y="18" width="8" height="8" rx="1" fill="#2563EB" />

                <rect x="10" y="66" width="24" height="24" rx="4" fill="#0B132B" />
                <rect x="14" y="70" width="16" height="16" rx="2" fill="#FFFFFF" />
                <rect x="18" y="74" width="8" height="8" rx="1" fill="#2563EB" />

                {/* QR Pattern dots */}
                <circle cx="42" cy="18" r="3" fill="#0B132B" />
                <circle cx="52" cy="18" r="3" fill="#06B6D4" />
                <circle cx="46" cy="30" r="3" fill="#0B132B" />
                <circle cx="54" cy="38" r="3" fill="#0B132B" />
                <circle cx="38" cy="46" r="3" fill="#2563EB" />
                <circle cx="50" cy="50" r="4" fill="#10B981" />
                <circle cx="62" cy="46" r="3" fill="#0B132B" />
                <circle cx="44" cy="62" r="3" fill="#0B132B" />
                <circle cx="54" cy="70" r="3" fill="#2563EB" />
                <circle cx="42" cy="80" r="3" fill="#06B6D4" />
                <circle cx="70" cy="54" r="3" fill="#0B132B" />
                <circle cx="82" cy="66" r="3" fill="#0B132B" />
                <circle cx="76" cy="78" r="3" fill="#10B981" />
                <circle cx="86" cy="86" r="3" fill="#0B132B" />
              </svg>
            </div>
            <div className="qr-box__info">
              <div className="qr-box__tag">
                <QrCode size={14} />
                <span>Instant Mobile Install</span>
              </div>
              <p className="qr-box__text">
                Scan with your smartphone camera to immediately install CitiSent on your phone.
              </p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-footer__item">
            <CheckCircle2 size={16} className="text-emerald" />
            <span>100% Free & Open Citizen Access</span>
          </div>
          <div className="modal-footer__item">
            <CheckCircle2 size={16} className="text-emerald" />
            <span>Privacy Focused & Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}
