import React from 'react';
import './Badge.css';

export default function Badge({
  children,
  variant = 'primary', // 'primary' | 'emerald' | 'cyan' | 'amber' | 'neutral' | 'dark'
  icon: Icon,
  pulsing = false,
  className = ''
}) {
  return (
    <span className={`citi-badge citi-badge--${variant} ${className}`}>
      {pulsing && <span className="citi-badge__pulse" />}
      {Icon && <Icon className="citi-badge__icon" size={14} />}
      <span className="citi-badge__text">{children}</span>
    </span>
  );
}
