import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Users, 
  ShieldAlert, 
  Zap, 
  Sparkles, 
  Eye, 
  MessageSquareCheck,
  Building2
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import Button from '../common/Button';
import './WhatIsCitiSent.css';

export default function WhatIsCitiSent({ onOpenDownload }) {
  const pillars = [
    {
      icon: Zap,
      title: "Frictionless Citizen Reporting",
      desc: "No confusing bureaucratic hotlines. Snap a photo, add GPS location, and submit in seconds from your pocket."
    },
    {
      icon: Eye,
      title: "Complete Public Transparency",
      desc: "Live step-by-step progress tracking so you always know when your report is received, inspected, and resolved."
    },
    {
      icon: MessageSquareCheck,
      title: "Direct Two-Way Communication",
      desc: "Chat directly with assigned local city officials to provide additional context or receive instant status updates."
    },
    {
      icon: Building2,
      title: "Data-Driven City Responsiveness",
      desc: "Empower city leaders with AI sentiment analytics to detect high-urgency hazards and allocate municipal crews faster."
    }
  ];

  return (
    <section id="about" className="section what-section">
      <div className="container">
        <SectionHeading
          badge="Built for Sto. Tomas City"
          badgeIcon={Sparkles}
          badgeVariant="primary"
          title="Making Sto. Tomas City"
          highlight="More Responsive & Connected"
          subtitle="CitiSent was designed with the community of Sto. Tomas City, Batangas in mind. It gives residents a convenient way to raise concerns, monitor their reports, communicate with administrators, and contribute to a more responsive community."
        />

        <div className="what-grid">
          {/* Left Column: Narrative & Value Pillars */}
          <div className="what-content">
            <h3 className="what-content__headline">
              A smarter way for residents of Sto. Tomas City to report, track, and communicate about community concerns.
            </h3>
            <p className="what-content__desc">
              Whether it's an uncollected waste pile, an open manhole, a malfunctioning traffic signal, or public property damage within Sto. Tomas City, CitiSent gives every citizen a verified voice and every city administrator the clarity to act.
            </p>

            <div className="pillars-list">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="pillar-item">
                    <div className="pillar-item__icon-wrap">
                      <Icon size={20} className="pillar-icon" />
                    </div>
                    <div>
                      <h4 className="pillar-item__title">{pillar.title}</h4>
                      <p className="pillar-item__desc">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="what-cta-wrap">
              <Button variant="primary" size="md" onClick={onOpenDownload}>
                Join Your Community on CitiSent
              </Button>
            </div>
          </div>

          {/* Right Column: Comparative Problem vs Solution Visual */}
          <div className="what-visual">
            <div className="comparison-container">
              {/* Old Traditional Way */}
              <div className="compare-card compare-card--old">
                <div className="compare-card__header">
                  <div className="compare-tag compare-tag--old">
                    <XCircle size={15} />
                    <span>Traditional Reporting</span>
                  </div>
                </div>
                <ul className="compare-list">
                  <li className="compare-list__item compare-list__item--bad">
                    <span className="dot-bullet red" />
                    <span>Endless automated phone hotlines & paper forms</span>
                  </li>
                  <li className="compare-list__item compare-list__item--bad">
                    <span className="dot-bullet red" />
                    <span>No status visibility — concerns vanish into a black hole</span>
                  </li>
                  <li className="compare-list__item compare-list__item--bad">
                    <span className="dot-bullet red" />
                    <span>Zero feedback from municipal administrators</span>
                  </li>
                  <li className="compare-list__item compare-list__item--bad">
                    <span className="dot-bullet red" />
                    <span>Slow manual categorization & delayed triage</span>
                  </li>
                </ul>
              </div>

              {/* The CitiSent Way */}
              <div className="compare-card compare-card--new">
                <div className="compare-card__header">
                  <div className="compare-tag compare-tag--new">
                    <CheckCircle2 size={15} />
                    <span>The CitiSent Platform</span>
                  </div>
                  <Badge variant="emerald">Live & Verified</Badge>
                </div>
                <ul className="compare-list">
                  <li className="compare-list__item compare-list__item--good">
                    <span className="dot-bullet green" />
                    <span><strong>10-Second Submissions:</strong> Photo, GPS, and auto-categorization</span>
                  </li>
                  <li className="compare-list__item compare-list__item--good">
                    <span className="dot-bullet green" />
                    <span><strong>Real-Time Lifecycle Tracking:</strong> Track every stage from triage to fix</span>
                  </li>
                  <li className="compare-list__item compare-list__item--good">
                    <span className="dot-bullet green" />
                    <span><strong>Direct Admin Messenger:</strong> Receive photo evidence upon resolution</span>
                  </li>
                  <li className="compare-list__item compare-list__item--good">
                    <span className="dot-bullet green" />
                    <span><strong>AI Sentiment Analysis:</strong> Automatic urgency scoring to protect safety</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
