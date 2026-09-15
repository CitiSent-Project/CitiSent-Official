import React from 'react';
import { 
  Smartphone, 
  Sparkles, 
  MessageSquare, 
  Building2 
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import './WhyCitiSent.css';

export default function WhyCitiSent() {
  const benefits = [
    {
      icon: Smartphone,
      title: "Easy Reporting",
      desc: "Submit concerns quickly from your phone with photos and accurate location.",
      tag: "Mobile-First"
    },
    {
      icon: Sparkles,
      title: "Smart Analysis",
      desc: "Reports are analyzed to help identify urgency and sentiment for faster response.",
      tag: "Intelligent Triage"
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      desc: "Stay updated with real-time milestones and chat directly with assigned officers.",
      tag: "Two-Way Updates"
    },
    {
      icon: Building2,
      title: "Better Community",
      desc: "Help make local public services in Sto. Tomas City more responsive and accountable.",
      tag: "Civic Impact"
    }
  ];

  return (
    <section id="why-citisent" className="section why-section">
      <div className="container scroll-reveal">
        <SectionHeading
          badge="Why CitiSent"
          title="Why"
          highlight="CitiSent?"
          subtitle="A streamlined civic platform built to make reporting fast, transparent, and actionable for every resident."
        />

        <div className="why-grid reveal-stagger-list">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="why-card">
                <div className="why-card__top">
                  <div className="why-card__icon-box">
                    <Icon size={22} className="why-card__icon" />
                  </div>
                  <span className="why-card__tag">{benefit.tag}</span>
                </div>
                <h3 className="why-card__title">{benefit.title}</h3>
                <p className="why-card__desc">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
