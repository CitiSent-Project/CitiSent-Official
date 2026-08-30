import React, { useState } from 'react';
import { 
  Smartphone, 
  Send, 
  MapPin, 
  Camera, 
  MessageSquare, 
  Activity, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  ChevronRight
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import Button from '../common/Button';
import './AppPreview.css';

export default function AppPreview({ onOpenDownload }) {
  const [activeScreen, setActiveScreen] = useState('submit');

  const screens = [
    {
      id: 'submit',
      title: 'Submit Report',
      subtitle: 'Effortless reporting in seconds with GPS and photo capture.',
      icon: Camera
    },
    {
      id: 'track',
      title: 'Lifecycle Tracker',
      subtitle: 'Transparent progress milestones with real-time status updates.',
      icon: Clock
    },
    {
      id: 'sentiment',
      title: 'AI Sentiment Engine',
      subtitle: 'Automated urgency scoring and emotional context detection.',
      icon: Activity
    },
    {
      id: 'chat',
      title: 'Admin Messenger',
      subtitle: 'Direct two-way conversation with assigned city officers.',
      icon: MessageSquare
    }
  ];

  return (
    <section id="preview" className="section section-alt preview-section">
      <div className="container">
        <SectionHeading
          badge="Interactive App Showcase"
          badgeIcon={Smartphone}
          badgeVariant="emerald"
          title="Experience the"
          highlight="CitiSent Mobile Interface"
          subtitle="Designed with meticulous attention to detail for an intuitive, fast, and accessible citizen experience on iOS and Android."
        />

        {/* Screen Switcher Tabs */}
        <div className="preview-nav-tabs">
          {screens.map((screen) => {
            const Icon = screen.icon;
            const isActive = activeScreen === screen.id;
            return (
              <button
                key={screen.id}
                className={`preview-tab-btn ${isActive ? 'preview-tab-btn--active' : ''}`}
                onClick={() => setActiveScreen(screen.id)}
              >
                <Icon size={18} />
                <span>{screen.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Phone Showcase Container */}
        <div className="preview-stage">
          {/* Left / Info Sidebar */}
          <div className="preview-info-panel">
            <span className="preview-info-tag">Active Screen</span>
            <h3 className="preview-info-title">
              {screens.find(s => s.id === activeScreen)?.title}
            </h3>
            <p className="preview-info-desc">
              {screens.find(s => s.id === activeScreen)?.subtitle}
            </p>

            <div className="preview-feature-bullets">
              {activeScreen === 'submit' && (
                <>
                  <div className="preview-bullet">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Instant camera & gallery upload with EXIF GPS tagging</span>
                  </div>
                  <div className="preview-bullet">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Pre-configured categories (Roads, Utilities, Sanitation, Safety)</span>
                  </div>
                  <div className="preview-bullet">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Voice-to-text input for quick hands-free reporting</span>
                  </div>
                </>
              )}

              {activeScreen === 'track' && (
                <>
                  <div className="preview-bullet">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>5-point progress pipeline with exact timestamps</span>
                  </div>
                  <div className="preview-bullet">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Assigned field personnel name & vehicle dispatch badge</span>
                  </div>
                  <div className="preview-bullet">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Resolution certificate with photographic completion evidence</span>
                  </div>
                </>
              )}

              {activeScreen === 'sentiment' && (
                <>
                  <div className="preview-bullet">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Natural language processing evaluates hazard risk & distress</span>
                  </div>
                  <div className="preview-bullet">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Automatic urgency prioritization (Low, Moderate, High, Emergency)</span>
                  </div>
                  <div className="preview-bullet">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Assists municipal dispatchers in tackling critical hazards first</span>
                  </div>
                </>
              )}

              {activeScreen === 'chat' && (
                <>
                  <div className="preview-bullet">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Direct encrypted channel between citizen and district engineer</span>
                  </div>
                  <div className="preview-bullet">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Share updated photos or access code instructions</span>
                  </div>
                  <div className="preview-bullet">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Official municipal record keeping for total accountability</span>
                  </div>
                </>
              )}
            </div>

            <div className="preview-cta-wrap">
              <Button variant="primary" size="md" onClick={onOpenDownload}>
                Install CitiSent Today
              </Button>
            </div>
          </div>

          {/* Center Phone Frame with dynamic screens */}
          <div className="preview-phone-wrap">
            <div className="preview-phone-mockup">
              <div className="preview-phone-notch" />
              <div className="preview-phone-screen">
                {/* Mobile Top Bar */}
                <div className="mockup-top-bar">
                  <span className="mockup-time">9:41</span>
                  <div className="mockup-icons">
                    <span className="bar-signal" />
                    <span className="bar-wifi" />
                    <span className="bar-battery" />
                  </div>
                </div>

                {/* SCREEN 1: SUBMIT REPORT */}
                {activeScreen === 'submit' && (
                  <div className="screen-view screen-submit">
                    <div className="mockup-header-title">
                      <h4>New Citizen Report</h4>
                      <span className="sub">District 4 — Central Sector</span>
                    </div>

                    <div className="mockup-field">
                      <label>Report Category</label>
                      <div className="category-pill-select">
                        <span className="cat-pill active">🚧 Road Hazard</span>
                        <span className="cat-pill">💡 Streetlight</span>
                        <span className="cat-pill">🚰 Water Leak</span>
                      </div>
                    </div>

                    <div className="mockup-field">
                      <label>Photo Evidence</label>
                      <div className="mockup-photo-upload">
                        <div className="photo-preview-box">
                          <img 
                            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23e2e8f0'><rect width='100' height='100'/><text x='50%' y='50%' font-size='11' text-anchor='middle' fill='%2364748b' dy='.3em'>PHOTO ATTACHED</text></svg>" 
                            alt="Attached hazard" 
                            className="photo-thumb"
                          />
                          <span className="photo-tag">GPS: 14.5995° N, 120.9842° E</span>
                        </div>
                      </div>
                    </div>

                    <div className="mockup-field">
                      <label>Issue Description</label>
                      <div className="mockup-input">
                        Deep pothole near pedestrian crossing causing severe vehicle slowdowns and safety hazards.
                      </div>
                    </div>

                    <div className="mockup-submit-btn">
                      <span>Submit Verified Report</span>
                      <Send size={14} />
                    </div>
                  </div>
                )}

                {/* SCREEN 2: LIFECYCLE TRACKER */}
                {activeScreen === 'track' && (
                  <div className="screen-view screen-track">
                    <div className="mockup-header-title">
                      <h4>Report #REP-8821</h4>
                      <span className="badge-status-green">● Field Crew Dispatched</span>
                    </div>

                    <div className="track-card">
                      <strong className="track-title">Damaged Streetlight & Exposed Wiring</strong>
                      <span className="track-loc"><MapPin size={12} /> Corner 5th Ave & Pine St</span>
                    </div>

                    <div className="track-pipeline">
                      <div className="pipe-step done">
                        <div className="pipe-dot"><CheckCircle2 size={12} /></div>
                        <div className="pipe-text">
                          <strong>Report Submitted</strong>
                          <span>Aug 29, 08:30 AM</span>
                        </div>
                      </div>
                      <div className="pipe-step done">
                        <div className="pipe-dot"><CheckCircle2 size={12} /></div>
                        <div className="pipe-text">
                          <strong>AI Triage & Urgency Tagged</strong>
                          <span>Aug 29, 08:31 AM</span>
                        </div>
                      </div>
                      <div className="pipe-step current">
                        <div className="pipe-dot"><span className="pulse-circle" /></div>
                        <div className="pipe-text">
                          <strong>Assigned: Dept. of Public Works</strong>
                          <span>Aug 29, 10:15 AM (En Route)</span>
                        </div>
                      </div>
                      <div className="pipe-step">
                        <div className="pipe-dot" />
                        <div className="pipe-text">
                          <strong>Resolution & Photo Verification</strong>
                          <span>Pending completion</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 3: AI SENTIMENT ENGINE */}
                {activeScreen === 'sentiment' && (
                  <div className="screen-view screen-sentiment">
                    <div className="mockup-header-title">
                      <h4>AI Sentiment & Urgency</h4>
                      <span className="sub">Automated Triage Analysis</span>
                    </div>

                    <div className="sentiment-box">
                      <div className="sentiment-score-ring">
                        <span className="score-num">89%</span>
                        <span className="score-label">Urgency Score</span>
                      </div>
                      <div className="sentiment-classification">
                        <Badge variant="amber">High Priority Hazard</Badge>
                        <span className="sentiment-note">Public Safety Risk Detected</span>
                      </div>
                    </div>

                    <div className="sentiment-insights-card">
                      <strong className="insight-heading">AI Linguistic Analysis</strong>
                      <div className="insight-item">
                        <span>Hazard Keywords:</span>
                        <strong className="text-danger">"Exposed wiring", "Pedestrians"</strong>
                      </div>
                      <div className="insight-item">
                        <span>Emotional Tone:</span>
                        <strong>Concerned / Urgent Citizen</strong>
                      </div>
                      <div className="insight-item">
                        <span>Recommended Action:</span>
                        <strong className="text-primary">Immediate Electrical Crew Dispatch</strong>
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 4: CHAT WITH ADMIN */}
                {activeScreen === 'chat' && (
                  <div className="screen-view screen-chat">
                    <div className="chat-top-header">
                      <div className="chat-avatar">DPW</div>
                      <div>
                        <strong>Officer Ramos (DPW)</strong>
                        <span className="chat-status">● Active Now</span>
                      </div>
                    </div>

                    <div className="chat-messages">
                      <div className="chat-bubble chat-bubble--admin">
                        Hello! Our electrical repair team is en route to 5th Ave. Could you confirm if the light pole is near the school entrance?
                        <span className="chat-time">10:20 AM</span>
                      </div>
                      <div className="chat-bubble chat-bubble--user">
                        Yes, exactly 20 meters past the main gate on the right sidewalk.
                        <span className="chat-time">10:22 AM</span>
                      </div>
                      <div className="chat-bubble chat-bubble--admin">
                        Got it! Crew has arrived and is replacing the exposed ballast now. Thanks for keeping our city safe!
                        <span className="chat-time">10:30 AM</span>
                      </div>
                    </div>

                    <div className="chat-input-bar">
                      <span className="chat-placeholder">Type message to officer...</span>
                      <div className="chat-send-btn"><Send size={12} /></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
