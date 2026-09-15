import React, { useState } from 'react';
import { 
  BarChart3, 
  MessageSquare, 
  BrainCircuit, 
  BellRing, 
  Building, 
  Check,
  Camera
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import './KeyFeatures.css';

export default function KeyFeatures() {
  const [activeFilter, setActiveFilter] = useState('all');

  const features = [
    {
      id: 'lgu',
      category: 'citizen',
      icon: Building,
      iconColor: 'blue',
      title: 'Choose Your LGU',
      desc: 'Select the Local Government Unit you want to send your report to. Your concern goes directly to the right officials in Sto. Tomas City.',
      highlights: ['Direct LGU Routing', 'Sto. Tomas City Government', 'Correct Department Delivery']
    },
    {
      id: 'reporting',
      category: 'citizen',
      icon: MessageSquare,
      iconColor: 'emerald',
      title: 'Describe the Problem',
      desc: 'Tell your LGU what is happening in your own words. Your written description is the primary information in the report and helps officials understand your concern.',
      highlights: ['Write in your own words', 'Voice-to-Text Input', 'Primary Report Information']
    },
    {
      id: 'photo',
      category: 'citizen',
      icon: Camera,
      iconColor: 'emerald',
      title: 'Optional Photo Evidence',
      desc: 'Add a photo when it helps provide additional context. Photos are optional and simply support your written report.',
      highlights: ['High-Resolution Uploads', 'Not Required to Submit', 'Helps Field Crews']
    },
    {
      id: 'tracking',
      category: 'citizen',
      icon: BarChart3,
      iconColor: 'cyan',
      title: 'Live Report Tracking',
      desc: 'Citizens can monitor the exact progress and status of their submitted reports from initial review, to unit dispatch, through final resolution.',
      highlights: ['Step-by-step Milestones', 'Timestamped Progress Logs', 'Resolution Verification']
    },
    {
      id: 'sentiment',
      category: 'ai',
      icon: BrainCircuit,
      iconColor: 'purple',
      title: 'AI-Powered Text Analysis',
      desc: 'CitiSent analyzes the words and sentiment in your report to help identify the nature, emotional tone, and urgency of community concerns.',
      highlights: ['Urgency Classification', 'Tone & Severity Scoring', 'Hazard Keyword Detection']
    },
    {
      id: 'notifications',
      category: 'citizen',
      icon: BellRing,
      iconColor: 'amber',
      title: 'Real-Time Notifications',
      desc: 'Keep citizens proactively updated with push notifications and status badges whenever a municipal officer inspects, comments on, or resolves their report.',
      highlights: ['Instant Push Alerts', 'Status Milestone Triggers', 'Community Broadcasts']
    },
    {
      id: 'insights',
      category: 'admin',
      icon: Building,
      iconColor: 'rose',
      title: 'Community Insights & Heatmaps',
      desc: 'Help municipal leaders identify recurring infrastructure issues, view neighborhood hazard heatmaps, and optimize city budget and crew allocation.',
      highlights: ['Civic Issue Heatmaps', 'Trend & Pattern Discovery', 'District Resource Planning']
    }
  ];

  const filteredFeatures = activeFilter === 'all' 
    ? features 
    : features.filter(f => f.category === activeFilter);

  return (
    <section id="features" className="section section-alt features-section">
      <div className="container">
        <SectionHeading
          title="Everything You Need to"
          highlight="Transform Sto. Tomas City"
          subtitle="Engineered for both everyday residents and local government administrators with intelligent, reliable, and user-centric features specifically for our city."
        />

        {/* Feature Filters */}
        <div className="features-filter">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Features
          </button>
          <button
            className={`filter-btn ${activeFilter === 'citizen' ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('citizen')}
          >
            Citizen Tools
          </button>
          <button
            className={`filter-btn ${activeFilter === 'ai' ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('ai')}
          >
            AI & Intelligence
          </button>
          <button
            className={`filter-btn ${activeFilter === 'admin' ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter('admin')}
          >
            Municipal Insights
          </button>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {filteredFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div key={feat.id} className="feature-card glass-card">
                <div className="feature-card__header">
                  <div className="feature-card__icon-box">
                    <Icon size={24} />
                  </div>
                </div>

                <h3 className="feature-card__title">{feat.title}</h3>
                <p className="feature-card__desc">{feat.desc}</p>

                <div className="feature-card__highlights">
                  {feat.highlights.map((h, i) => (
                    <div key={i} className="highlight-pill">
                      <Check size={13} className="highlight-check" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
