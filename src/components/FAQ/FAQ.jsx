import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import { APP_DOWNLOAD_LINKS } from '../../config/downloadLinks';
import './FAQ.css';

export default function FAQ({ onOpenDownload }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is CitiSent?",
      a: "CitiSent is a civic reporting mobile application that helps citizens report community concerns directly to the appropriate local government department. It allows users to submit reports with descriptions, photos, and locations, while providing updates on the status of their concerns. CitiSent also uses sentiment analysis to help identify the urgency and emotional context of citizen reports."
    },
    {
      q: "Who can use CitiSent?",
      a: "CitiSent is designed for everyone living in Sto. Tomas City, Batangas—including all community residents, local business owners, students, and neighborhood leaders across all barangays. City administrators, municipal engineers, and public works personnel also utilize the integrated dispatch system to manage and resolve reported concerns."
    },
    {
      q: "What types of issues can I report?",
      a: "You can report a wide variety of community concerns including road potholes, damaged streetlights, uncollected waste, water leaks, traffic signal failures, public park maintenance, illegal dumping, and hazardous municipal infrastructure."
    },
    {
      q: "Can I track the status and progress of my reports?",
      a: "Yes! Every report receives a unique tracking ID and a real-time progress timeline (Submitted → Under Review → Assigned to Field Crew → In Progress → Resolved). You will receive instant notifications whenever the status updates or when officers upload photographic resolution proof."
    },
    {
      q: "Can I communicate directly with administrators?",
      a: "Absolutely. CitiSent includes an encrypted, direct two-way messaging channel. If a municipal officer needs more details about your report (such as landmark landmarks or gate access), you can exchange messages directly within the app."
    },
    {
      q: "Is CitiSent free to use?",
      a: "Yes, CitiSent is 100% free for all citizens with no ads, subscriptions, or hidden fees. Our mission is to promote transparent and responsive civic engagement for every community."
    },
    {
      q: "Where can I download CitiSent?",
      a: "You can download CitiSent directly as an Android APK from our official GitHub Releases page."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container container-narrow scroll-reveal">
        <SectionHeading
          title="Got Questions?"
          highlight="We Have Answers"
          subtitle="Everything you need to know about the CitiSent citizen platform and how it operates in your community."
        />

        <div className="faq-accordion reveal-stagger-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <div className="faq-chevron-wrap">
                    <ChevronDown size={18} className="faq-chevron" />
                  </div>
                </button>

                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{faq.a}</p>
                    {index === 6 && (
                      <button 
                        className="faq-download-trigger" 
                        onClick={onOpenDownload}
                      >
                        Click here to download CitiSent now →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
