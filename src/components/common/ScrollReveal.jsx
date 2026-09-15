import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import './ScrollReveal.css';

/**
 * Reusable ScrollReveal wrapper component.
 * 
 * Props:
 * - as: HTML tag or React component to render (default 'div')
 * - className: custom class names to append
 * - delay: transition-delay in ms (e.g. delay={150})
 * - threshold: intersection threshold ratio (default 0.1)
 * - rootMargin: margin around the viewport (default '0px 0px -60px 0px')
 */
export default function ScrollReveal({
  children,
  className = '',
  as: Component = 'div',
  delay,
  threshold,
  rootMargin,
  ...props
}) {
  const ref = useScrollReveal({ threshold, rootMargin });

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}
