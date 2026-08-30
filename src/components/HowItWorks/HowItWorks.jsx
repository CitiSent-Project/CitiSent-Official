import React, { useState } from 'react';
import { 
  Camera, 
  Cpu, 
  Search, 
  MessageSquare, 
  HeartHandshake, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import './HowItWorks.css';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Report',
      subtitle: 'Submit in Seconds',
      icon: Camera,
      tag: 'Step 1: Citizen Action',
      desc: 'Snap a picture of the issue, choose a category (e.g. Infrastructure, Waste, Public Safety), and your phone automatically embeds verified GPS coordinates.',
      details: [
        'High-resolution photo & video attachments',
        'Automatic GPS geo-tagging & pinpoint map picker',
        'Custom description & voice-to-text input'
      ]
    },
    {
      num: '02',
      title: 'Analyze',
      subtitle: 'AI Sentiment & Triage',
      icon: Cpu,
      tag: 'Step 2: Smart Processing',
      desc: 'CitiSent’s AI engine instantly assesses the urgency and emotional weight of the report, automatically assigns a severity score, and routes it to the right department.',
      details: [
        'Automated municipal agency routing',
        'AI hazard & risk severity scoring',
        'Duplicate report clustering to avoid redundant tickets'
      ]
    },
    {
      num: '03',
      title: 'Track',
      subtitle: 'Real-Time Visibility',
      icon: Search,
      tag: 'Step 3: Progress Monitoring',
      desc: 'Follow the live lifecycle of your report on a transparent timeline: Submitted → Under Review → Assigned to Field Crew → Work in Progress → Resolved.',
      details: [
        'Milestone timestamp updates',
        'Assigned municipal department & ticket ID',
        'Instant push notifications on status changes'
      ]
    },
    {
      num: '04',
      title: 'Connect',
      subtitle: 'Direct Dialogue',
      icon: MessageSquare,
      tag: 'Step 4: Two-Way Collaboration',
      desc: 'City officials can request more details directly in-app, and citizens can provide follow-ups or verify resolution with before-and-after proof.',
      details: [
        'Real-time encrypted citizen-to-admin chat',
        'Official field crew progress photos',
        'Clarification requests and notes'
      ]
    },
    {
      num: '05',
      title: 'Impact',
      subtitle: 'A Better Community',
      icon: HeartHandshake,
      tag: 'Step 5: Lasting Resolution',
      desc: 'The issue is resolved with photographic proof. Your voice directly improves the neighborhood and contributes to municipal performance data.',
      details: [
        'Photographic proof of completed resolution',
        'Citizen satisfaction rating & feedback',
        'Contributes to civic neighborhood health index'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="section section-dark how-section">
      <div className="container">
        <SectionHeading
          badge="Simple 5-Step Pipeline"
          badgeIcon={Sparkles}
          badgeVariant="emerald"
          title="How CitiSent"
          highlight="Works in Action"
          subtitle="From the moment you spot a community hazard to its verified resolution, CitiSent ensures speed, clarity, and accountability at every stage."
          dark
        />

        {/* Step Navigation Pill Bar */}
        <div className="steps-nav">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                className={`step-nav-btn ${isActive ? 'step-nav-btn--active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <span className="step-nav-num">{step.num}</span>
                <span className="step-nav-title">{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Step Display Showcase */}
        <div className="step-showcase glass-card-dark">
          <div className="step-showcase__content">
            <div className="step-tag-row">
              <Badge variant="cyan">{steps[activeStep].tag}</Badge>
              <span className="step-counter">Phase {steps[activeStep].num} of 05</span>
            </div>

            <h3 className="step-main-title">
              {steps[activeStep].num}. {steps[activeStep].title} — <span className="text-gradient">{steps[activeStep].subtitle}</span>
            </h3>

            <p className="step-main-desc">{steps[activeStep].desc}</p>

            <div className="step-details-list">
              {steps[activeStep].details.map((detail, i) => (
                <div key={i} className="step-detail-item">
                  <CheckCircle2 size={16} className="step-detail-icon" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="step-controls">
              <button
                className="step-btn-prev"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              >
                Previous Step
              </button>
              <button
                className="step-btn-next"
                disabled={activeStep === steps.length - 1}
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              >
                <span>Next Step</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Visual Graphic for the Step */}
          <div className="step-showcase__visual">
            <div className="step-visual-card">
              <div className="step-icon-large">
                {React.createElement(steps[activeStep].icon, { size: 48 })}
              </div>
              <div className="step-visual-status">
                <span className="live-dot" />
                <span>Active Civic Workflow</span>
              </div>
              <div className="step-visual-progress">
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
                <div className="progress-bar-labels">
                  <span>Start</span>
                  <span>Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
