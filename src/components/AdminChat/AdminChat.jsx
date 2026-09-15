import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import adminChat1 from '../../assets/admin-chat-1.png';
import adminChat2 from '../../assets/admin-chat-2.png';
import adminChat3 from '../../assets/admin-chat-3.png';
import './AdminChat.css';

export default function AdminChat() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 1,
      step: 1,
      image: adminChat1,
      title: 'Locate Report & Tap Chat',
      desc: 'Find your active concern in Manage Reports and tap Chat with Admin.',
      caption: 'Step 1: Open chat from your report',
      alt: 'CitiSent Manage Reports screen with Chat with Admin button'
    },
    {
      id: 2,
      step: 2,
      image: adminChat2,
      title: 'Connect with Assigned Department',
      desc: 'View your report summary and connect to the assigned LGU office.',
      caption: 'Step 2: Connect with assigned department',
      alt: 'CitiSent Admin Discussion screen showing report summary'
    },
    {
      id: 3,
      step: 3,
      image: adminChat3,
      title: 'Message Officers in Real Time',
      desc: 'Direct two-way dialogue to clarify details, and track progress.',
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
          
          {/* Left Column: Heading + Interactive Steps */}
          <div 
            className="admin-chat-text-col reveal-item"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <h2 className="admin-chat-heading">
              Chat Directly with Your Assigned LGU Department
            </h2>

            <div className="admin-chat-stepper">
              {slides.map((s, index) => {
                const isActive = activeSlide === index;
                return (
                  <button
                    key={s.id}
                    type="button"
                    className={`admin-step-item ${isActive ? 'admin-step-item--active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                    aria-selected={isActive}
                  >
                    <div className="admin-step-circle">
                      {s.step}
                    </div>
                    <div className="admin-step-content">
                      <h3 className="admin-step-title">{s.title}</h3>
                      <p className="admin-step-desc">{s.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Crossfade Image Carousel */}
          <div 
            className="admin-chat-image-col reveal-card reveal-delay-150"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-roledescription="carousel"
            aria-label="Admin Chat Screenshots"
          >
            <div className="admin-chat-showcase">
              
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
