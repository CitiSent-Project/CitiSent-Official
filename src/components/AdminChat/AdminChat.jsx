import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import './AdminChat.css';

export default function AdminChat() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const slides = [
    {
      id: 1,
      step: 1,
      startTime: 0.0,
      endTime: 6.5,
      timeRange: '0:00 – 0:06',
      title: 'Locate Report & Tap Chat',
      desc: 'Find your active concern in Manage Reports and tap Chat with Admin.'
    },
    {
      id: 2,
      step: 2,
      startTime: 6.5,
      endTime: 10.5,
      timeRange: '0:06 – 0:10',
      title: 'Connect with Assigned Department',
      desc: 'View your report summary and connect to the assigned LGU office.'
    },
    {
      id: 3,
      step: 3,
      startTime: 10.5,
      endTime: 35.46,
      timeRange: '0:10 – 0:35',
      title: 'Message Officers in Real Time',
      desc: 'Direct two-way dialogue to clarify details and track resolution progress.'
    }
  ];

  // Sync active step as video progresses
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;

    const stepIdx = slides.findIndex((slide, idx) => {
      if (idx === slides.length - 1) {
        return time >= slide.startTime;
      }
      return time >= slide.startTime && time < slide.endTime;
    });

    if (stepIdx !== -1 && stepIdx !== activeSlide) {
      setActiveSlide(stepIdx);
    }
  };

  // Jump to specific step timestamp on click
  const handleStepClick = (idx) => {
    setActiveSlide(idx);
    if (videoRef.current) {
      videoRef.current.currentTime = slides[idx].startTime;
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
    <section id="admin-chat" className="section admin-chat-section">
      {/* Anchor alias for backwards compatibility */}
      <span id="features" style={{ position: 'absolute', top: 0, pointerEvents: 'none' }} />

      <div className="container scroll-reveal">
        <div className="admin-chat-grid">
          
          {/* Left Column: Heading + Interactive Steps */}
          <div className="admin-chat-text-col reveal-item">
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
                    onClick={() => handleStepClick(index)}
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

          {/* Right Column: Phone Mockup Video */}
          <div className="admin-chat-image-col reveal-card reveal-delay-150">
            <div className="admin-chat-showcase">
              
              {/* Phone Frame */}
              <div 
                className="admin-chat-phone-frame"
                onClick={togglePlay}
                role="region"
                aria-label="Admin chat preview video"
              >
                <video
                  ref={videoRef}
                  className="admin-chat-video"
                  poster="/videos/admin-chat-poster.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/videos/admin-chat.mp4" type="video/mp4" />
                  <source src="/videos/mockup (2).mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Center Play/Pause Overlay */}
                <div className={`admin-chat-video-overlay ${!isPlaying ? 'is-paused' : ''}`}>
                  <button 
                    type="button" 
                    className="admin-play-btn-large" 
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

        </div>
      </div>
    </section>
  );
}
