import React from 'react';
import {
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Smartphone,
  Activity,
  TrendingUp
} from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { APP_STATS } from '../../config/downloadLinks';
import homepageImg from '../../assets/homepage-image.png';
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

          <h1 className="hero-title">
            Make <span className="text-gradient">Sto. Tomas City</span> Heard.
          </h1>

          <p className="hero-subtitle">
            <strong>CitiSent: An Emotion-Aware City-Based Reporting System with Sentiment Analysis</strong> connects Sto. Tomas residents with local government through smarter reporting, tracking, and communication.
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
            {/* Phone Mockup Image */}
            <div className="hero-phone-img-container">
              <img
                src={homepageImg}
                alt="CitiSent Sto. Tomas Mobile App Preview"
                className="hero-phone-img"
              />
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
