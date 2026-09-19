import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhyCitiSent from './components/WhyCitiSent/WhyCitiSent';
import HowItWorks from './components/HowItWorks/HowItWorks';
import AdminChat from './components/AdminChat/AdminChat';
import ResearchSurvey from './components/ResearchSurvey/ResearchSurvey';
import DownloadCTA from './components/DownloadCTA/DownloadCTA';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import DownloadModal from './components/DownloadModal/DownloadModal';
import PrivacyModal from './components/PrivacyModal/PrivacyModal';
import TermsModal from './components/TermsModal/TermsModal';
import CommunityGuidelinesModal from './components/CommunityGuidelinesModal/CommunityGuidelinesModal';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [communityGuidelinesModalOpen, setCommunityGuidelinesModalOpen] = useState(false);

  // Automatically observe all .scroll-reveal sections across the page
  useScrollReveal();

  const handleOpenDownload = () => {
    setDownloadModalOpen(true);
  };

  const handleCloseDownload = () => {
    setDownloadModalOpen(false);
  };

  const handleOpenPrivacy = () => {
    setPrivacyModalOpen(true);
  };

  const handleClosePrivacy = () => {
    setPrivacyModalOpen(false);
  };

  const handleOpenTerms = () => {
    setTermsModalOpen(true);
  };

  const handleCloseTerms = () => {
    setTermsModalOpen(false);
  };

  const handleOpenCommunityGuidelines = () => {
    setCommunityGuidelinesModalOpen(true);
  };

  const handleCloseCommunityGuidelines = () => {
    setCommunityGuidelinesModalOpen(false);
  };

  return (
    <div className="citisent-app">
      {/* Navigation */}
      <Navbar onOpenDownload={handleOpenDownload} />

      <main>
        {/* Hero Section */}
        <Hero onOpenDownload={handleOpenDownload} />

        {/* Why CitiSent */}
        <WhyCitiSent />


        {/* How It Works */}
        <HowItWorks />

        {/* Admin Chat Showcase */}
        <AdminChat onOpenDownload={handleOpenDownload} />

        {/* Academic Research Survey */}
        <ResearchSurvey />

        {/* FAQ Accordion */}
        <FAQ onOpenDownload={handleOpenDownload} />

        {/* Call To Action */}
        <DownloadCTA onOpenDownload={handleOpenDownload} />
      </main>

      {/* Footer */}
      <Footer
        onOpenDownload={handleOpenDownload}
        onOpenPrivacy={handleOpenPrivacy}
        onOpenTerms={handleOpenTerms}
        onOpenCommunityGuidelines={handleOpenCommunityGuidelines}
      />

      {/* Download Modal Popup */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={handleCloseDownload}
      />

      {/* Privacy Notice Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={handleClosePrivacy}
      />

      {/* Terms of Service Modal */}
      <TermsModal
        isOpen={termsModalOpen}
        onClose={handleCloseTerms}
      />

      {/* Community Guidelines Modal */}
      <CommunityGuidelinesModal
        isOpen={communityGuidelinesModalOpen}
        onClose={handleCloseCommunityGuidelines}
      />
    </div>
  );
}
