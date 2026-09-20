import React, { useState, useRef } from 'react';
import SectionHeading from '../common/SectionHeading';
import { Play, Pause } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const steps = [
    {
      id: 1,
      num: 1,
      title: 'Login & Start',
      caption: 'Step 1: Citizen Home Page',
      startTime: 0.0,
      endTime: 1.5,
      timeRange: '0:00 – 0:01',
      desc: 'Log in to your CitiSent account and start directly from the Home page. Here, you can view city emergency hotlines and see your latest submitted reports.'
    },
    {
      id: 2,
      num: 2,
      title: 'Create a Report',
      caption: 'Step 2: Bottom Navigation Bar',
      startTime: 1.5,
      endTime: 5.5,
      timeRange: '0:01 – 0:05',
      desc: 'From the Home page, click “Create Report” in the bottom navigation bar. This opens the report creation page where you begin drafting your concern.'
    },
    {
      id: 3,
      num: 3,
      title: 'Choose an LGU Office',
      caption: 'Step 3: Select Department / LGU Office',
      startTime: 5.5,
      endTime: 10.0,
      timeRange: '0:05 – 0:10',
      desc: 'On the Create Report page, select the specific LGU office you want to submit your concern to. The selected office is the department responsible for handling and resolving the report.'
    },
    {
      id: 4,
      num: 4,
      title: 'Complete Your Report',
      caption: 'Step 4: Fill Out Report Details',
      startTime: 10.0,
      endTime: 22.0,
      timeRange: '0:10 – 0:22',
      desc: 'Fill out the required information for your concern. The description is the most important part because this is what the admin will read and use to understand the concern and determine the appropriate action. You can also specify the actual location of the incident and optionally attach a picture for visual context.'
    },
    {
      id: 5,
      num: 5,
      title: 'Submit Your Report',
      caption: 'Step 5: Submission & Confirmation',
      startTime: 22.0,
      endTime: 23.64,
      timeRange: '0:22 – 0:24',
      desc: 'Once all the necessary information has been completed, click “Submit”. Wait for the submission process to finish until the confirmation message “Report submitted” appears, confirming that the report has been successfully submitted.'
    }
  ];

  // Sync active step as the video progresses
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;

    const stepIdx = steps.findIndex((step, idx) => {
      if (idx === steps.length - 1) {
        return time >= step.startTime;
      }
      return time >= step.startTime && time < step.endTime;
    });

    if (stepIdx !== -1 && stepIdx !== activeStep) {
      setActiveStep(stepIdx);
    }
  };

  // Jump to specific step timestamp on click
  const handleStepClick = (idx) => {
    setActiveStep(idx);
    if (videoRef.current) {
      videoRef.current.currentTime = steps[idx].startTime;
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="how-it-works" className="section hiw-section">
      <div className="container scroll-reveal">
        
        {/* Section Heading matching other sections */}
        <SectionHeading
          title="How It"
          highlight="Works"
          subtitle="A clear step-by-step walkthrough of how citizens submit concerns directly to their Local Government Unit."
        />

        {/* Two-Column Showcase (Left: Phone Screen Video, Right: Vertical Stepper) */}
        <div className="hiw-grid">
          
          {/* Left Column: Phone Mockup Frame with Video */}
          <div className="hiw-preview-col">
            <div className="hiw-phone-wrapper reveal-scale reveal-delay-100">
              
              {/* Phone Mockup Frame */}
              <div 
                className="hiw-phone-frame"
                onClick={togglePlay}
                role="region"
                aria-label="How it works video player"
              >
                <video
                  ref={videoRef}
                  className="hiw-video"
                  poster="/videos/how-it-works-poster.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/videos/how-it-works.mp4" type="video/mp4" />
                  <source src="/videos/mockup (1).mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Center Play/Pause Indicator Overlay */}
                <div className={`hiw-video-overlay ${!isPlaying ? 'is-paused' : ''}`}>
                  <button 
                    type="button" 
                    className="hiw-play-btn-large" 
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '3px' }} />}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Vertical Numbered Timeline Stepper */}
          <div className="hiw-timeline-col">
            <div className="hiw-stepper reveal-stagger-list">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <div
                    key={step.id}
                    className={`hiw-step-item ${isActive ? 'hiw-step-item--active' : ''} ${isPassed ? 'hiw-step-item--passed' : ''}`}
                    onClick={() => handleStepClick(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleStepClick(idx);
                      }
                    }}
                  >
                    {/* Vertical Connector Line & Number Circle */}
                    <div className="hiw-step-marker">
                      <div className="hiw-circle">
                        {step.num}
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="hiw-line">
                          <div className={`hiw-line-fill ${isPassed ? 'is-filled' : ''}`} />
                        </div>
                      )}
                    </div>

                    {/* Step Information Block */}
                    <div className="hiw-step-body">
                      <div className="hiw-step-title-row">
                        <div className="hiw-step-title-wrap">
                          <h3 className="hiw-step-title">{step.title}</h3>
                          <span className="hiw-step-timerange">{step.timeRange}</span>
                        </div>
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
