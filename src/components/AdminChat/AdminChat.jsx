import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import adminChat1 from '../../assets/admin-chat-1.png';
import adminChat2 from '../../assets/admin-chat-2.png';
import adminChat3 from '../../assets/admin-chat-3.png';
import './AdminChat.css';

export default function AdminChat() {
  const [activeChatStep, setActiveChatStep] = useState(0);

  const chatSteps = [
    {
      step: 1,
      badge: 'Step 1',
      title: 'Locate Report & Tap Chat',
      subtitle: 'Manage Reports Screen',
      desc: 'In the “Manage Reports” screen, review your submitted concerns. Every active report features a direct “Chat with Admin” button linked to the department handling it.',
      image: adminChat1,
      alt: 'CitiSent Manage Reports screen with Chat with Admin button'
    },
    {
      step: 2,
      badge: 'Step 2',
      title: 'Department Discussion Opens',
      subtitle: 'Admin Discussion Modal',
      desc: 'Tapping the chat button opens an official Admin Discussion panel, displaying your unique Report Reference ID and the assigned municipal office.',
      image: adminChat2,
      alt: 'CitiSent Admin Discussion screen showing report summary'
    },
    {
      step: 3,
      badge: 'Step 3',
      title: 'Real-Time Two-Way Messaging',
      subtitle: 'Direct Citizen-Officer Dialogue',
      desc: 'Chat directly with assigned local city administrators. Ask questions, clarify landmarks, provide extra details, and get live answers straight from the officers.',
      image: adminChat3,
      alt: 'Active two-way messaging between citizen and LGU administrator'
    }
  ];

  return (
    <section id="admin-chat" className="section admin-chat-section">
      {/* Anchor alias for backwards compatibility */}
      <span id="features" style={{ position: 'absolute', top: 0, pointerEvents: 'none' }} />
      <div className="container scroll-reveal">
        <SectionHeading
          title="Chat Directly with Your"
          highlight="Assigned LGU Department"
          subtitle="Once your report is submitted, stay in direct contact with the local city office handling your concern. Clarify details, provide extra information, and track resolution collaboratively in real time."
        />

        <div className="admin-chat-showcase">
          <div className="chat-showcase__body">
            {/* Left Column: Interactive 3-Step Selection */}
            <div className="chat-showcase__stepper">
              {chatSteps.map((s, idx) => {
                const isActive = activeChatStep === idx;
                return (
                  <button
                    key={s.step}
                    type="button"
                    className={`chat-step-btn ${isActive ? 'chat-step-btn--active' : ''}`}
                    onClick={() => setActiveChatStep(idx)}
                    aria-selected={isActive}
                  >
                    <div className="chat-step-badge">{s.badge}</div>
                    <div className="chat-step-info">
                      <h4 className="chat-step-title">{s.title}</h4>
                      <p className="chat-step-desc">{s.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Phone Mockup Display */}
            <div className="chat-showcase__preview">
              <div className="chat-phone-frame">
                <img
                  key={activeChatStep}
                  src={chatSteps[activeChatStep].image}
                  alt={chatSteps[activeChatStep].alt}
                  className="chat-phone-img"
                />
              </div>

              {/* Step Navigation Indicator Dots & Arrows */}
              <div className="chat-preview-nav">
                <button
                  type="button"
                  className="chat-nav-arrow"
                  onClick={() => setActiveChatStep(prev => (prev > 0 ? prev - 1 : chatSteps.length - 1))}
                  aria-label="Previous step"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="chat-preview-dots">
                  {chatSteps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`chat-dot ${activeChatStep === i ? 'chat-dot--active' : ''}`}
                      onClick={() => setActiveChatStep(i)}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="chat-nav-arrow"
                  onClick={() => setActiveChatStep(prev => (prev < chatSteps.length - 1 ? prev + 1 : 0))}
                  aria-label="Next step"
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
