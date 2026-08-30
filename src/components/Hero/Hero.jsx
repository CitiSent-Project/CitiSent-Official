import React from 'react';
import { 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Clock, 
  TrendingUp, 
  CheckCircle,
  MessageSquare,
  Activity,
  Smartphone
} from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { APP_STATS } from '../../config/downloadLinks';
import './Hero.css';

export default function Hero({ onOpenDownload }) {
  const scrollToFeatures = (e) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      const navOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Decorative Gradients & Mesh */}
      <div className="hero-bg-glow hero-bg-glow--primary" />
      <div className="hero-bg-glow hero-bg-glow--cyan" />
      <div className="hero-bg-grid" />

      <div className="container hero-container">
        {/* Left Column: Headline & Messaging */}
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <Badge variant="primary" icon={Sparkles} pulsing>
              Next-Gen Citizen Reporting Platform
            </Badge>
          </div>

          <h1 className="hero-title">
            Make <span className="text-gradient">Sto. Tomas City</span> Heard.
          </h1>

          <p className="hero-subtitle">
            CitiSent connects residents of Sto. Tomas City, Batangas with their local government through easier reporting, tracking, communication, and community insights.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <Button
              variant="primary"
              size="lg"
              icon={Download}
              iconPosition="left"
              onClick={onOpenDownload}
            >
              Download CitiSent
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={scrollToFeatures}
            >
              Discover How It Works
            </Button>
          </div>

          {/* Platform Trust Pills */}
          <div className="hero-trust">
            <div className="trust-item">
              <ShieldCheck size={18} className="trust-item__icon" />
              <span>Official Civic Channel</span>
            </div>
            <div className="trust-item">
              <CheckCircle size={18} className="trust-item__icon" />
              <span>AI Sentiment Triage</span>
            </div>
            <div className="trust-item">
              <Smartphone size={18} className="trust-item__icon" />
              <span>Android Ready</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Mockup Showcase */}
        <div className="hero-visual">
          <div className="hero-phone-wrapper animate-float">
            {/* Phone Frame */}
            <div className="hero-phone">
              <div className="hero-phone__speaker" />
              <div className="hero-phone__screen">
                {/* Phone Header */}
                <div className="app-header">
                  <div className="app-header__status">
                    <span className="app-time">9:41</span>
                    <div className="app-signals">
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </div>
                  </div>
                  <div className="app-nav">
                    <div className="app-user">
                      <div className="app-avatar">MD</div>
                      <div>
                        <span className="app-greeting">Welcome back,</span>
                        <strong className="app-username">Citizen Alex</strong>
                      </div>
                    </div>
                    <div className="app-bell">
                      <span className="app-bell__badge">2</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Live Report Card */}
                <div className="app-card app-card--highlight">
                  <div className="app-card__tag">
                    <span className="tag-status tag-status--progress">In Progress</span>
                    <span className="tag-id">#REP-8821</span>
                  </div>
                  <h4 className="app-card__title">Damaged Streetlight & Exposed Wiring</h4>
                  <div className="app-card__meta">
                    <MapPin size={12} />
                    <span>Maharlika Hwy, Sto. Tomas City</span>
                  </div>

                  {/* Sentiment Bar */}
                  <div className="sentiment-meter">
                    <div className="sentiment-meter__info">
                      <span className="sentiment-label">AI Urgency Sentiment</span>
                      <span className="sentiment-val text-amber">High Urgency (89%)</span>
                    </div>
                    <div className="sentiment-bar">
                      <div className="sentiment-bar__fill" style={{ width: '89%' }} />
                    </div>
                  </div>

                  {/* Progress Timeline */}
                  <div className="mini-timeline">
                    <div className="mini-step mini-step--done">
                      <div className="step-dot" />
                      <span>Submitted</span>
                    </div>
                    <div className="mini-step mini-step--done">
                      <div className="step-dot" />
                      <span>Analyzed</span>
                    </div>
                    <div className="mini-step mini-step--active">
                      <div className="step-dot" />
                      <span>Assigned</span>
                    </div>
                    <div className="mini-step">
                      <div className="step-dot" />
                      <span>Resolved</span>
                    </div>
                  </div>
                </div>

                {/* Quick Action Button */}
                <div className="app-quick-cta">
                  <span>+ Submit New Report</span>
                </div>
              </div>
            </div>

            {/* Floating Highlight Card 1: Sentiment AI */}
            <div className="floating-card floating-card--sentiment">
              <div className="floating-card__icon bg-cyan">
                <Activity size={18} color="#FFFFFF" />
              </div>
              <div>
                <span className="floating-card__label">AI Sentiment Analysis</span>
                <strong className="floating-card__value">Instant Prioritization</strong>
              </div>
            </div>

            {/* Floating Highlight Card 2: Resolution Stat */}
            <div className="floating-card floating-card--stats">
              <div className="floating-card__icon bg-emerald">
                <TrendingUp size={18} color="#FFFFFF" />
              </div>
              <div>
                <span className="floating-card__label">Resolution Rate</span>
                <strong className="floating-card__value">{APP_STATS.resolvedReports}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="hero-stats-bar">
        <div className="container hero-stats-container">
          <div className="hero-stat-card">
            <strong className="stat-number text-gradient">{APP_STATS.activeCitizens}</strong>
            <span className="stat-label">Active Citizen Reporters</span>
          </div>
          <div className="hero-stat-card">
            <strong className="stat-number text-gradient-emerald">{APP_STATS.resolvedReports}</strong>
            <span className="stat-label">Report Resolution Rate</span>
          </div>
          <div className="hero-stat-card">
            <strong className="stat-number text-gradient">{APP_STATS.avgResponseTime}</strong>
            <span className="stat-label">Average Response Time</span>
          </div>
          <div className="hero-stat-card">
            <strong className="stat-number text-gradient-emerald">{APP_STATS.partnerMunicipalities}</strong>
            <span className="stat-label">Connected Barangays</span>
          </div>
        </div>
      </div>
    </section>
  );
}
