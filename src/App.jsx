import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhatIsCitiSent from './components/WhatIsCitiSent/WhatIsCitiSent';
import KeyFeatures from './components/KeyFeatures/KeyFeatures';
import HowItWorks from './components/HowItWorks/HowItWorks';
import AppPreview from './components/AppPreview/AppPreview';
import DownloadCTA from './components/DownloadCTA/DownloadCTA';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import DownloadModal from './components/DownloadModal/DownloadModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

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

        {/* Key Features */}
        <KeyFeatures />

        {/* How It Works */}
        <HowItWorks />

        {/* Interactive App Preview */}
        <AppPreview onOpenDownload={handleOpenDownload} />

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
