import React, { useState } from 'react';
import { 
  MapPin, 
  BarChart3, 
  MessageSquare, 
  BrainCircuit, 
  BellRing, 
  Building, 
  ArrowUpRight,
  Sparkles,
  Layers,
  Check
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import './KeyFeatures.css';

export default function KeyFeatures() {
  const [activeFilter, setActiveFilter] = useState('all');

  const features = [
    {
      id: 'reporting',
      category: 'citizen',
      icon: MapPin,
      iconColor: 'blue',
      badge: 'Core Feature',
      title: 'Easy Citizen Reporting',
      desc: 'Allow citizens to quickly submit reports about issues in their community with camera upload, category tagging, and automatic GPS geo-pinning in under 15 seconds.',
      highlights: ['Automatic GPS Location', 'Photo Evidence Upload', 'Smart Category Tags']
    },
    {
      id: 'tracking',
      category: 'citizen',
      icon: BarChart3,
      iconColor: 'emerald',
      badge: 'Real-Time',
      title: 'Live Report Tracking',
      desc: 'Citizens can monitor the exact progress and status of their submitted reports from initial review, to unit dispatch, through final photographic resolution.',
      highlights: ['Step-by-step Milestones', 'Timestamped Progress Logs', 'Resolution Verification']
    },
    {
      id: 'communication',
      category: 'citizen',
      icon: MessageSquare,
      iconColor: 'cyan',
      badge: 'Two-Way Dialogue',
      title: 'Administrator Communication',
      desc: 'Direct in-app messaging channel between citizens and assigned municipal administrators to provide clarifications, updates, or follow-up feedback.',
      highlights: ['In-App Chat Threads', 'Officer Assignment Notes', 'Encrypted & Official']
    },
    {
      id: 'sentiment',
      category: 'ai',
      icon: BrainCircuit,
      iconColor: 'purple',
      badge: 'AI Powered',
      title: 'AI Sentiment & Urgency Analysis',
      desc: 'Natural language sentiment models analyze citizen descriptions to detect urgency levels, hazards, and emotional weight for prioritized emergency dispatch.',
      highlights: ['Urgency Classification', 'Tone & Severity Scoring', 'Hazard Keyword Detection']
    },
    {
      id: 'notifications',
      category: 'citizen',
      icon: BellRing,
      iconColor: 'amber',
      badge: 'Instant Alerts',
      title: 'Real-Time Notifications',
      desc: 'Keep citizens proactively updated with push notifications and status badges whenever a municipal officer inspects, comments on, or resolves their report.',
      highlights: ['Instant Push Alerts', 'Status Milestone Triggers', 'Community Broadcasts']
    },
    {
      id: 'insights',
      category: 'admin',
      icon: Building,
      iconColor: 'rose',
      badge: 'City Analytics',
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
          badge="Platform Capabilities"
          badgeIcon={Layers}
          badgeVariant="cyan"
          title="Everything You Need to"
          highlight="Transform Civic Reporting"
          subtitle="Engineered for both everyday citizens and local government administrators with intelligent, reliable, and user-centric features."
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
                  <div className={`feature-card__icon-box feature-card__icon-box--${feat.iconColor}`}>
                    <Icon size={24} />
                  </div>
                  <span className="feature-card__badge">{feat.badge}</span>
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
