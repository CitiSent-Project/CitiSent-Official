import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Button from '../common/Button';
import adminChat1 from '../../assets/admin-chat-1.png';
import adminChat2 from '../../assets/admin-chat-2.png';
import adminChat3 from '../../assets/admin-chat-3.png';
import './AdminChat.css';

export default function AdminChat({ onOpenDownload }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: adminChat1,
      title: 'Manage Reports Screen',
      caption: 'Step 1: Open chat from your report',
      alt: 'CitiSent Manage Reports screen with Chat with Admin button'
    },
    {
      id: 2,
      image: adminChat2,
      title: 'Admin Discussion Modal',
      caption: 'Step 2: Connect with assigned department',
      alt: 'CitiSent Admin Discussion screen showing report summary'
    },
    {
      id: 3,
      image: adminChat3,
      title: 'Direct Dialogue Screen',
      caption: 'Step 3: Message city officers in real time',
      alt: 'Active two-way messaging between citizen and LGU administrator'
    }
  ];

  // Automatic slide rotation every 4 seconds, paused on hover
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setActiveSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide(prev => (prev + 1) % slides.length);
  };

  return (
    <section id="admin-chat" className="section admin-chat-section">
      {/* Anchor alias for backwards compatibility */}
      <span id="features" style={{ position: 'absolute', top: 0, pointerEvents: 'none' }} />

      <div className="container scroll-reveal">
        <div className="admin-chat-grid">
          
          {/* Left Column: Text Content */}
          <div className="admin-chat-text-col reveal-item">
            <span className="admin-chat-eyebrow">Direct Civic Communication</span>
            
            <h2 className="admin-chat-heading">
              Chat Directly with Your Assigned LGU Department
            </h2>
            
            <p className="admin-chat-desc">
              Once your report is submitted, communicate directly with the local city office handling your concern. Clarify details, send updates, and track resolution collaboratively in real time.
            </p>

            <div className="admin-chat-benefits">
              <div className="admin-chat-benefit-item">
                <div className="admin-chat-benefit-icon">
                  <MessageSquare size={18} />
                </div>
                <div className="admin-chat-benefit-content">
                  <strong className="admin-chat-benefit-title">Dedicated Case Channel</strong>
                  <span className="admin-chat-benefit-desc">Direct line to the exact department in charge of your report.</span>
                </div>
              </div>

              <div className="admin-chat-benefit-item">
                <div className="admin-chat-benefit-icon">
                  <Clock size={18} />
                </div>
                <div className="admin-chat-benefit-content">
                  <strong className="admin-chat-benefit-title">Real-Time Milestone Updates</strong>
                  <span className="admin-chat-benefit-desc">Stay informed as officials inspect, assign crews, and complete repairs.</span>
                </div>
              </div>

              <div className="admin-chat-benefit-item">
                <div className="admin-chat-benefit-icon">
                  <ShieldCheck size={18} />
                </div>
                <div className="admin-chat-benefit-content">
                  <strong className="admin-chat-benefit-title">Verified City Personnel</strong>
                  <span className="admin-chat-benefit-desc">All conversations are conducted with authorized Sto. Tomas City staff.</span>
                </div>
              </div>
            </div>

            {onOpenDownload && (
              <div className="admin-chat-cta">
                <Button 
                  variant="primary" 
                  size="md" 
                  icon={ArrowRight} 
                  iconPosition="right"
                  onClick={onOpenDownload}
                >
                  Download Mobile App
                </Button>
              </div>
            )}
          </div>

          {/* Right Column: Crossfade Image Carousel */}
          <div 
            className="admin-chat-image-col reveal-card reveal-delay-150"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-roledescription="carousel"
            aria-label="Admin Chat Screenshots"
          >
            <div className="admin-chat-card">
              
              {/* Phone Frame with Crossfade Stack */}
              <div className="admin-chat-phone-frame">
                {/* Invisible spacer image to maintain exact responsive height */}
                <img 
                  src={slides[0].image} 
                  alt="" 
                  aria-hidden="true" 
                  className="admin-chat-spacer-img" 
                />

                {/* Layered Crossfade Images */}
                {slides.map((slide, index) => (
                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.alt}
                    className={`admin-chat-fade-img ${activeSlide === index ? 'is-active' : ''}`}
                  />
                ))}
              </div>

              {/* Caption & Indicator Controls */}
              <div className="admin-chat-controls">
                <button
                  type="button"
                  className="admin-chat-nav-btn"
                  onClick={handlePrev}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="admin-chat-indicator-wrap">
                  <span className="admin-chat-caption">
                    {slides[activeSlide].caption}
                  </span>
                  
                  <div className="admin-chat-dots" role="tablist">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.id}
                        type="button"
                        role="tab"
                        aria-selected={activeSlide === index}
                        className={`admin-chat-dot ${activeSlide === index ? 'is-active' : ''}`}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Show ${slide.title}`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="admin-chat-nav-btn"
                  onClick={handleNext}
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
