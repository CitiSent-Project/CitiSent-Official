import React, { useRef, useEffect, useCallback } from 'react';
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
  const heroRef = useRef(null);
  const phoneRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);
  const rafIdRef = useRef(null);

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

  // Linear interpolation helper
  const lerp = (start, end, factor) => start + (end - start) * factor;

  const animate = useCallback(() => {
    const current = currentRef.current;
    const target = targetRef.current;

    // Smooth dampening factor: 0.07 ensures slow, elegant glide
    current.x = lerp(current.x, target.x, 0.07);
    current.y = lerp(current.y, target.y, 0.07);

    // Subtle drift translation: max ~12px horizontal, ~10px vertical
    const tx = current.x * 12;
    const ty = current.y * 10;

    // Subtle 3D perspective rotation:
    // When cursor is left (x < 0) -> rotates left (ry < 0)
    // When cursor is right (x > 0) -> rotates right (ry > 0)
    // When cursor is up (y < 0) -> tilts up (rx > 0)
    // When cursor is down (y > 0) -> tilts down (rx < 0)
    const ry = current.x * 7;
    const rx = -current.y * 6;

    if (phoneRef.current) {
      phoneRef.current.style.transform = `perspective(1000px) translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    }

    const isMoving =
      Math.abs(target.x - current.x) > 0.001 ||
      Math.abs(target.y - current.y) > 0.001;

    if (isMoving || isHoveredRef.current) {
      rafIdRef.current = requestAnimationFrame(animate);
    } else {
      if (phoneRef.current) {
        phoneRef.current.style.transform = '';
      }
      rafIdRef.current = null;
    }
  }, []);

  const isTouchDevice = () => {
    if (typeof window === 'undefined') return true;
    return (
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.innerWidth <= 1024
    );
  };

  const handleMouseMove = (e) => {
    if (isTouchDevice()) return;
    if (!heroRef.current || !phoneRef.current) return;

    isHoveredRef.current = true;

    const heroRect = heroRef.current.getBoundingClientRect();
    const phoneRect = phoneRef.current.getBoundingClientRect();

    // Measure cursor offset relative to the phone center
    const phoneCenterX = phoneRect.left + phoneRect.width / 2;
    const phoneCenterY = phoneRect.top + phoneRect.height / 2;

    // Normalize between -1 and +1 based on hero dimensions
    const spanX = Math.max(heroRect.width * 0.45, 300);
    const spanY = Math.max(heroRect.height * 0.5, 250);

    const normX = (e.clientX - phoneCenterX) / spanX;
    const normY = (e.clientY - phoneCenterY) / spanY;

    targetRef.current.x = Math.max(-1, Math.min(1, normX));
    targetRef.current.y = Math.max(-1, Math.min(1, normY));

    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(animate);
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    targetRef.current = { x: 0, y: 0 };
    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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
                ref={phoneRef}
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
