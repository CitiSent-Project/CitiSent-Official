import React, { useState } from 'react';
import { 
  UserCheck, 
  Building2, 
  Clock, 
  ShieldCheck, 
  LineChart, 
  Smile, 
  HeartHandshake, 
  CheckCircle,
  Zap,
  Award
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import './WhyCitiSent.css';

export default function WhyCitiSent() {
  const [activeAudience, setActiveAudience] = useState('citizens'); // 'citizens' | 'administrators'

  const citizenBenefits = [
    {
      icon: Clock,
      title: '3x Faster Response Times',
      desc: 'Direct dispatch to municipal field workers bypasses traditional red tape and manual paperwork.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Guesswork Transparency',
      desc: 'Real-time timeline tracking keeps you updated at every stage of inspection and repair.'
    },
    {
      icon: HeartHandshake,
      title: 'Direct Official Dialogue',
      desc: 'Have a direct conversation with the exact officer handling your neighborhood issue.'
    },
    {
      icon: Smile,
      title: 'A Cleaner, Safer Neighborhood',
      desc: 'Your single report can prevent an accident, clear a hazard, or fix infrastructure for hundreds of neighbors.'
    }
  ];

  const adminBenefits = [
    {
      icon: Zap,
      title: 'AI Sentiment & Priority Triage',
      desc: 'Automatically flag high-risk safety hazards and emotional distress to prioritize urgent work orders.'
    },
    {
      icon: LineChart,
      title: 'Community Heatmaps & Data',
      desc: 'Understand recurring geographic issues, budget requirements, and seasonal infrastructure patterns.'
    },
    {
      icon: UserCheck,
      title: 'Reduced Redundant Inquiries',
      desc: 'Automated status notifications reduce repetitive phone calls and emails to city staff by over 60%.'
    },
    {
      icon: Award,
      title: 'Higher Citizen Satisfaction & Trust',
      desc: 'Transparent before-and-after photo verification builds unprecedented trust with the public.'
    }
  ];

  const currentBenefits = activeAudience === 'citizens' ? citizenBenefits : adminBenefits;

  return (
    <section id="why-citisent" className="section why-section">
      <div className="container">
        <SectionHeading
          badge="The Value of CitiSent"
          badgeIcon={Award}
          badgeVariant="primary"
          title="Why Choose CitiSent for"
          highlight="Sto. Tomas City?"
          subtitle="Built to empower residents of Sto. Tomas City and elevate the efficiency of our local municipal administration through smart technology."
        />

        {/* Audience Toggle */}
        <div className="audience-toggle-wrapper">
          <div className="audience-toggle">
            <button
              className={`audience-btn ${activeAudience === 'citizens' ? 'audience-btn--active' : ''}`}
              onClick={() => setActiveAudience('citizens')}
            >
              <UserCheck size={18} />
              <span>For Residents of Sto. Tomas City</span>
            </button>
            <button
              className={`audience-btn ${activeAudience === 'administrators' ? 'audience-btn--active' : ''}`}
              onClick={() => setActiveAudience('administrators')}
            >
              <Building2 size={18} />
              <span>For City Administrators</span>
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="why-grid">
          {currentBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="why-card glass-card">
                <div className="why-card__icon-wrap">
                  <Icon size={24} className="why-icon" />
                </div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
                <div className="why-card__footer">
                  <CheckCircle size={15} className="why-card__check" />
                  <span>Verified Civic Impact</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Banner */}
        <div className="why-banner">
          <div className="why-banner__content">
            <h4 className="why-banner__title">
              "CitiSent transforms citizen feedback from a passive complaint box into an active, transparent civic collaboration engine."
            </h4>
            <span className="why-banner__author">— CitiSent Urban Innovation Principles</span>
          </div>
        </div>
      </div>
    </section>
  );
}
