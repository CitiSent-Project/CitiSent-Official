import React, { useState } from 'react';

// Actual User Screenshots
import step1HomeImg from '../../assets/step1-home.png';
import step2CreateReportImg from '../../assets/step2-create-report.png';
import step3LguImg from '../../assets/step3-select-lgu.png';
import step4FillReportImg from '../../assets/step4-fill-report.png';
import step6SubmittedImg from '../../assets/step6-submitted.png';

import SectionHeading from '../common/SectionHeading';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      num: 1,
      title: 'Login & Start',
      caption: 'Step 1: Citizen Home Page',
      image: step1HomeImg,
      imageAlt: 'CitiSent Home Page after logging in',
      desc: 'Log in to your CitiSent account and start directly from the Home page. Here, you can view city emergency hotlines and see your latest submitted reports.'
    },
    {
      id: 2,
      num: 2,
      title: 'Create a Report',
      caption: 'Step 2: Bottom Navigation Bar',
      image: step2CreateReportImg,
      imageAlt: 'Tap Create Report in the bottom navigation bar',
      desc: 'From the Home page, click “Create Report” in the bottom navigation bar. This opens the report creation page where you begin drafting your concern.'
    },
    {
      id: 3,
      num: 3,
      title: 'Choose an LGU Office',
      caption: 'Step 3: Select Department / LGU Office',
      image: step3LguImg,
      imageAlt: 'Select your Local Government Unit department',
      desc: 'On the Create Report page, select the specific LGU office you want to submit your concern to. The selected office is the department responsible for handling and resolving the report.'
    },
    {
      id: 4,
      num: 4,
      title: 'Complete Your Report',
      caption: 'Step 4: Fill Out Report Details',
      image: step4FillReportImg,
      imageAlt: 'Fill out report details form',
      desc: 'Fill out the required information for your concern. The description is the most important part because this is what the admin will read and use to understand the concern and determine the appropriate action. You can also specify the actual location of the incident and optionally attach a picture for visual context.'
    },
    {
      id: 5,
      num: 5,
      title: 'Submit Your Report',
      caption: 'Step 5: Submission & Confirmation',
      image: step6SubmittedImg,
      imageAlt: 'Report submitted confirmation modal with green checkmark',
      desc: 'Once all the necessary information has been completed, click “Submit”. Wait for the submission process to finish until the confirmation message “Report submitted” appears, confirming that the report has been successfully submitted.'
    }
  ];

  return (
    <section id="how-it-works" className="section hiw-section">
      <div className="container scroll-reveal">
        
        {/* Section Heading matching other sections */}
        <SectionHeading
          title="How It"
          highlight="Works"
          subtitle="A clear step-by-step walkthrough of how citizens submit concerns directly to their Local Government Unit."
        />

        {/* Two-Column Showcase (Left: Phone Screen, Right: Vertical Stepper) */}
        <div className="hiw-grid">
          
          {/* Left Column: Phone Mockup Frame */}
          <div className="hiw-preview-col">
            <div className="hiw-phone-wrapper reveal-scale reveal-delay-100">
              <div className="hiw-phone-frame">
                {/* Invisible spacer image to maintain exact responsive height */}
                <img
                  src={steps[0].image}
                  alt=""
                  aria-hidden="true"
                  className="hiw-spacer-img"
                />

                {/* Layered Crossfade Images */}
                {steps.map((step, index) => (
                  <img
                    key={step.id}
                    src={step.image}
                    alt={step.imageAlt}
                    className={`hiw-fade-img ${activeStep === index ? 'is-active' : ''}`}
                  />
                ))}
              </div>

              {/* Clean Caption under Phone */}
              <div className="hiw-phone-caption reveal-item reveal-delay-200">
                <span className="hiw-caption-pill">
                  {steps[activeStep].caption}
                </span>
              </div>

              {/* Navigation Indicator Dots & Arrows */}
              <div className="hiw-preview-nav reveal-item reveal-delay-250">
                <button
                  type="button"
                  className="hiw-nav-arrow"
                  onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : steps.length - 1))}
                  aria-label="Previous step"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="hiw-preview-dots">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`hiw-dot ${activeStep === i ? 'hiw-dot--active' : ''}`}
                      onClick={() => setActiveStep(i)}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="hiw-nav-arrow"
                  onClick={() => setActiveStep(prev => (prev < steps.length - 1 ? prev + 1 : 0))}
                  aria-label="Next step"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Numbered Timeline Stepper */}
          <div className="hiw-timeline-col">
            <div className="hiw-stepper reveal-stagger-list">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.id}
                    className={`hiw-step-item ${isActive ? 'hiw-step-item--active' : ''}`}
                    onClick={() => setActiveStep(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveStep(idx);
                      }
                    }}
                  >
                    {/* Vertical Connector Line & Number Circle */}
                    <div className="hiw-step-marker">
                      <div className="hiw-circle">
                        {step.num}
                      </div>
                      {idx < steps.length - 1 && <div className="hiw-line" />}
                    </div>

                    {/* Step Information Block */}
                    <div className="hiw-step-body">
                      <div className="hiw-step-title-row">
                        <h3 className="hiw-step-title">{step.title}</h3>
                        {isActive && (
                          <span className="hiw-active-indicator">Viewing</span>
                        )}
                      </div>

                      <p className="hiw-step-desc">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
