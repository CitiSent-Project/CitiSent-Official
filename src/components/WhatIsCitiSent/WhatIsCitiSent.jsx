import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Building, 
  ShieldCheck, 
  Zap, 
  Eye, 
  MessageSquareCheck,
  Building2
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import './WhatIsCitiSent.css';

export default function WhatIsCitiSent({ onOpenDownload }) {
  const pillars = [
    {
      icon: Zap,
      title: "Direct Citizen Reporting",
      desc: "Describe the issue in your own words, add GPS location, and submit directly from your phone."
    },
    {
      icon: Eye,
      title: "Transparent Progress Tracking",
      desc: "Live step-by-step updates so you know when your report is received, inspected, and resolved."
    },
    {
      icon: MessageSquareCheck,
      title: "Direct Two-Way Communication",
      desc: "Chat directly with assigned local city officials to provide additional context and receive status updates."
    },
    {
      icon: Building2,
      title: "Smart Municipal Prioritization",
      desc: "Assists local government administrators in identifying high-urgency safety hazards and allocating crews."
    }
  ];

  return (
    <section id="about" className="section what-section">
      <div className="container scroll-reveal">
        <SectionHeading
          title="Making Sto. Tomas City"
          highlight="More Responsive & Connected"
          subtitle="CitiSent was designed for the community of Sto. Tomas City, Batangas. It gives residents a convenient way to raise concerns, monitor reports, communicate with administrators, and contribute to local improvement."
        />

        <div className="what-grid">
          {/* Left Column: Narrative & Value Pillars */}
          <div className="what-content">
            <h3 className="what-content__headline">
              A dedicated reporting channel for residents of Sto. Tomas City.
            </h3>
            <p className="what-content__desc">
              Whether it's an uncollected waste pile, an open manhole, a malfunctioning streetlight, or road damage within Sto. Tomas City, CitiSent ensures concerns reach the right local departments with clear tracking.
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

          {/* Right Column: Civic Overview Spotlight Card */}
          <div className="what-visual">
            <div className="civic-spotlight-card">
              <div className="spotlight-header">
                <div className="spotlight-badge">
                  <Building size={16} />
                  <span>Sto. Tomas City Platform</span>
                </div>
                <span className="spotlight-status">Official Civic Channel</span>
              </div>

              <div className="spotlight-body">
                <h4 className="spotlight-title">Designed for Community Action</h4>
                <p className="spotlight-text">
                  CitiSent connects residents directly with city administrators to ensure community concerns are documented, tracked, and addressed systematically.
                </p>

                <div className="spotlight-features">
                  <div className="spotlight-feature-item">
                    <CheckCircle2 size={18} className="spotlight-icon-check" />
                    <div>
                      <strong>Text-First Reporting</strong>
                      <span>Submit issues clearly in your own words with optional photos.</span>
                    </div>
                  </div>

                  <div className="spotlight-feature-item">
                    <CheckCircle2 size={18} className="spotlight-icon-check" />
                    <div>
                      <strong>Verified Location Pinning</strong>
                      <span>Accurate address tagging for municipal field crew dispatch.</span>
                    </div>
                  </div>

                  <div className="spotlight-feature-item">
                    <CheckCircle2 size={18} className="spotlight-icon-check" />
                    <div>
                      <strong>Real-Time Milestone Tracking</strong>
                      <span>Follow every step from initial review to completion.</span>
                    </div>
                  </div>

                  <div className="spotlight-feature-item">
                    <CheckCircle2 size={18} className="spotlight-icon-check" />
                    <div>
                      <strong>Direct Officer Messaging</strong>
                      <span>In-app communication for questions and photo confirmations.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="spotlight-footer">
                <div className="spotlight-location">
                  <MapPin size={14} />
                  <span>Sto. Tomas City, Batangas</span>
                </div>
                <div className="spotlight-security">
                  <ShieldCheck size={14} />
                  <span>Direct Municipal Routing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
