import React from 'react';
import { Download, Smartphone, QrCode, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { APP_DOWNLOAD_LINKS } from '../../config/downloadLinks';
import Button from '../common/Button';
import Badge from '../common/Badge';
import './DownloadCTA.css';

export default function DownloadCTA({ onOpenDownload }) {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-bg-glow" />
          
          <div className="cta-content">
            <div className="cta-badge-wrap">
              <Badge variant="dark" icon={ShieldCheck}>Join 15,000+ Citizens</Badge>
            </div>

            <h2 className="cta-title">
              Your Voice Can Make <span className="text-gradient-emerald">a Real Difference.</span>
            </h2>

            <p className="cta-subtitle">
              Download the official CitiSent mobile application and help build a safer, cleaner, and more responsive community today.
            </p>

            <div className="cta-actions">
              <Button
                variant="white"
                size="lg"
                icon={Download}
                iconPosition="left"
                onClick={onOpenDownload}
              >
                Download CitiSent Free
              </Button>

              <a
                href={APP_DOWNLOAD_LINKS.android}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-store-badge"
              >
                <span>Google Play</span>
              </a>

              <a
                href={APP_DOWNLOAD_LINKS.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-store-badge"
              >
                <span>App Store</span>
              </a>
            </div>

            <div className="cta-guarantees">
              <div className="cta-guarantee-item">
                <CheckCircle2 size={16} />
                <span>100% Free & Open Access</span>
              </div>
              <div className="cta-guarantee-item">
                <CheckCircle2 size={16} />
                <span>No Ads or Hidden Fees</span>
              </div>
              <div className="cta-guarantee-item">
                <CheckCircle2 size={16} />
                <span>Verified City Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
