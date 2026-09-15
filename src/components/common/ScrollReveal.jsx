import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import './ScrollReveal.css';

/**
 * Reusable ScrollReveal wrapper component.
 * 
 * Props:
 * - as: HTML tag or React component to render (default 'div')
 * - variant: 'up' (default) | 'scale' | 'card' | 'item'
 * - delay: transition-delay in ms (e.g. delay={120})
 * - stagger: boolean (adds reveal-stagger-list for automated child delays)
 * - className: custom class names to append
 * - threshold: intersection threshold ratio (default 0.18)
 * - rootMargin: margin around the viewport (default '0px 0px -8% 0px')
 */
export default function ScrollReveal({
  children,
  className = '',
  as: Component = 'div',
  variant = 'up',
  delay,
  stagger = false,
  threshold,
  rootMargin,
  style,
  ...props
}) {
  const ref = useScrollReveal({ threshold, rootMargin });

  const variantClass =
    variant === 'scale'
      ? 'reveal-scale'
      : variant === 'card'
      ? 'reveal-card'
      : variant === 'item'
      ? 'reveal-item'
      : '';

  const staggerClass = stagger ? 'reveal-stagger-list' : '';

  const combinedClasses = [
    'scroll-reveal',
    variantClass,
    staggerClass,
    className
  ]
    .filter(Boolean)
    .join(' ');

  const combinedStyles = {
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
    ...style
  };

  return (
    <Component
      ref={ref}
      className={combinedClasses}
      style={Object.keys(combinedStyles).length > 0 ? combinedStyles : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}
