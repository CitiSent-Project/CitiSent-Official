import React from 'react';
import { APP_DOWNLOAD_LINKS } from '../../config/downloadLinks';
import './DownloadCTA.css';

export default function DownloadCTA({
  onOpenDownload,
  title = "Try CitiSent for free",
  subtitle,
  primaryBtnText = "DOWNLOAD NOW",
  secondaryBtnText = null,
  secondaryBtnHref = null,
  onSecondaryClick,
}) {
  const handleSecondaryClick = (e) => {
    if (onSecondaryClick) {
      e.preventDefault();
      onSecondaryClick(e);
      return;
    }

    if (!secondaryBtnHref || secondaryBtnHref.startsWith('#')) {
      e.preventDefault();
      const targetId = secondaryBtnHref || '#why-citisent';
      const target = document.querySelector(targetId);
      if (target) {
        const navOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="download-cta" className="citi-slack-cta-section" aria-label="Download CitiSent Call To Action">
      <div className="citi-slack-cta-banner">
        <div className="citi-slack-cta-inner scroll-reveal">
          <h2 className="citi-slack-cta-title">
            {title}
          </h2>

          {subtitle && (
            <p className="citi-slack-cta-subtitle">
              {subtitle}
            </p>
          )}

          <div className="citi-slack-cta-actions">
            <button
              type="button"
              className="citi-slack-cta-btn-primary"
              onClick={onOpenDownload}
              aria-label="Download CitiSent application package"
            >
              {primaryBtnText}
            </button>

            {secondaryBtnText && (
              secondaryBtnHref?.startsWith('mailto:') ? (
                <a
                  href={secondaryBtnHref}
                  className="citi-slack-cta-btn-secondary"
                  aria-label="Contact the CitiSent development team"
                >
                  {secondaryBtnText}
                </a>
              ) : (
                <button
                  type="button"
                  className="citi-slack-cta-btn-secondary"
                  onClick={handleSecondaryClick}
                >
                  {secondaryBtnText}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
