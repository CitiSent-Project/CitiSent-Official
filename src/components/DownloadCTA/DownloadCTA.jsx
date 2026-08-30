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
              Help Make <span className="text-gradient-emerald">Sto. Tomas City</span> Better.
            </h2>

            <p className="cta-subtitle">
              Download CitiSent and make your voice heard in your community.
            </p>

            <div className="cta-actions">
              <Button
                variant="white"
                size="lg"
                icon={Download}
                iconPosition="left"
                onClick={onOpenDownload}
              >
                Download CitiSent
              </Button>
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
