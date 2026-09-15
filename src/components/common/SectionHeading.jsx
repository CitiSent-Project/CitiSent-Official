import React from 'react';
import Badge from './Badge';
import './SectionHeading.css';

export default function SectionHeading({
  badge,
  badgeIcon,
  badgeVariant = 'primary',
  title,
  highlight,
  subtitle,
  align = 'center', // 'left' | 'center' | 'right'
  dark = false,
  className = ''
}) {
  return (
    <div className={`section-heading section-heading--${align} ${dark ? 'section-heading--dark' : ''} ${className}`}>
      {badge && (
        <div className="section-heading__badge-wrapper">
          <Badge variant={dark ? 'dark' : badgeVariant} icon={badgeIcon}>
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="section-heading__title">
        {title} {highlight && <span className="section-heading__highlight">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
