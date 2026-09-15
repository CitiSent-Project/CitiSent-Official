import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhatIsCitiSent from './components/WhatIsCitiSent/WhatIsCitiSent';
import HowItWorks from './components/HowItWorks/HowItWorks';
import AdminChat from './components/AdminChat/AdminChat';
import DownloadCTA from './components/DownloadCTA/DownloadCTA';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import DownloadModal from './components/DownloadModal/DownloadModal';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // Automatically observe all .scroll-reveal sections across the page
  useScrollReveal();

  const handleOpenDownload = () => {
    setDownloadModalOpen(true);
  };

  const handleCloseDownload = () => {
    setDownloadModalOpen(false);
  };

  return (
    <div className="citisent-app">
      {/* Navigation */}
      <Navbar onOpenDownload={handleOpenDownload} />

      <main>
        {/* Hero Section */}
        <Hero onOpenDownload={handleOpenDownload} />

        {/* What is CitiSent */}
        <WhatIsCitiSent onOpenDownload={handleOpenDownload} />


        {/* How It Works */}
        <HowItWorks />

        {/* Admin Chat Showcase */}
        <AdminChat />

        {/* FAQ Accordion */}
        <FAQ onOpenDownload={handleOpenDownload} />

        {/* Call To Action */}
        <DownloadCTA onOpenDownload={handleOpenDownload} />
      </main>

      {/* Footer */}
      <Footer onOpenDownload={handleOpenDownload} />

      {/* Download Modal Popup */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={handleCloseDownload}
      />
    </div>
  );
}
