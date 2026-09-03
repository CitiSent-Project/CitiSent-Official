import React, { useState } from 'react';
import { 
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import lguImg from '../../assets/lgu-image.png';
import homepageImg from '../../assets/homepage-image.png';
import welcomeImg from '../../assets/welcome-image.png';
import './HowItWorks.css';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Choose Your LGU',
      subtitle: 'Select who to report to',
      tag: 'Step 1: Select Local Government',
      image: lguImg,
      imageAlt: 'Select a Department screen in CitiSent app',
      desc: 'Select the Local Government Unit responsible for the concern you want to report. Since CitiSent is designed for Sto. Tomas City, the available LGU will be your local city government.',
      details: [
        'Choose the appropriate local government unit',
        'Reports are routed directly to the selected LGU',
        'Ensures your concern reaches the right officials'
      ]
    },
    {
      num: '02',
      title: 'Describe Your Concern',
      subtitle: 'Your words are what matter most',
      tag: 'Step 2: Written Report Description',
      image: homepageImg,
      imageAlt: 'CitiSent app home screen with latest reports',
      desc: 'Tell your local government what is happening. Describe the issue clearly in your own words — what happened, what the problem is, and any other details that can help the LGU understand your concern.',
      details: [
        'Write your concern in your own words',
        'Include relevant details: what, when, and why',
        'Your written description is the most important part of the report'
      ]
    },
    {
      num: '03',
      title: 'Add Location & Photo',
      subtitle: 'Where is the issue? (Photo is optional)',
      tag: 'Step 3: Location & Supporting Evidence',
      image: lguImg,
      imageAlt: 'CitiSent app department selection for location',
      desc: 'Pinpoint where the issue is located so the appropriate local government personnel can identify where action is needed. You may also add an optional photo to provide additional visual context.',
      details: [
        'Set the exact location of the reported issue',
        'Add a photo if available — photos are completely optional',
        'You can submit your report without uploading an image'
      ]
    },
    {
      num: '04',
      title: 'Submit Your Report',
      subtitle: 'Send and track your concern',
      tag: 'Step 4: Submission & Tracking',
      image: welcomeImg,
      imageAlt: 'CitiSent app welcome and login screen',
      desc: 'Review your report and submit it to the selected LGU. CitiSent will notify you of progress updates and allow you to communicate directly with the officials handling your concern.',
      details: [
        'Submit your report directly to the selected LGU',
        'Receive real-time status updates and notifications',
        'Communicate with assigned administrators in-app'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="section section-dark how-section">
      <div className="container">
        <SectionHeading
          badgeVariant="emerald"
          title="How CitiSent"
          highlight="Works in Action"
          subtitle="From choosing the right LGU to submitting your concern, CitiSent makes it easy for residents of Sto. Tomas City to report community issues."
          dark
        />

        {/* Step Navigation Pill Bar */}
        <div className="steps-nav">
          {steps.map((step, idx) => {
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
              <span className="step-counter">Phase {steps[activeStep].num} of 04</span>
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

          {/* Right Visual: Phone Screenshot */}
          <div className="step-showcase__visual">
            <div className="step-phone-frame">
              <img
                key={activeStep}
                src={steps[activeStep].image}
                alt={steps[activeStep].imageAlt}
                className="step-phone-img"
              />
              {/* Carousel dot pagination */}
              <div className="step-pagination">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    className={`step-pagination__dot ${activeStep === idx ? 'step-pagination__dot--active' : ''}`}
                    onClick={() => setActiveStep(idx)}
                    aria-label={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
