import React from 'react';
import {
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Smartphone
} from 'lucide-react';
import Button from '../common/Button';
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
              Learn More
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
          <div className="hero-phone-wrapper">
            <div className="hero-phone-img-container">
              <img
                src={homepageImg}
                alt="CitiSent Sto. Tomas Mobile App Preview"
                className="hero-phone-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
