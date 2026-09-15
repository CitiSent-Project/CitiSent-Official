import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger premium scroll-reveal animations via IntersectionObserver.
 *
 * Usage options:
 * 1. Global observer (e.g. in App.jsx):
 *    useScrollReveal();
 *    Automatically observes all elements in the DOM with the `.scroll-reveal` class.
 *
 * 2. Component Ref:
 *    const revealRef = useScrollReveal({ threshold: 0.18 });
 *    <div ref={revealRef} className="scroll-reveal">...</div>
 *
 * Requirements met:
 * - Viewport trigger: 15–25% visible (default threshold 0.18, rootMargin -8%)
 * - Triggers once: unobserves on entrance so it never replays or flickers
 * - Hardware accelerated: purely transform and opacity
 * - Accessibility: respects prefers-reduced-motion
 * - Zero layout shifts, lightweight and zero external dependencies
 */
export default function useScrollReveal(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    // Accessibility check: immediately reveal all elements if reduced motion is requested
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      if (elementRef.current) {
        elementRef.current.classList.add('is-revealed');
      } else {
        document.querySelectorAll('.scroll-reveal').forEach((el) => {
          el.classList.add('is-revealed');
        });
      }
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Disconnect observer for this element so it remains revealed and never replays
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      // Trigger when ~18% visible (within 15-25% requirement)
      threshold: options.threshold ?? 0.18,
      rootMargin: options.rootMargin ?? '0px 0px -8% 0px',
      ...options
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (elementRef.current) {
      if (!elementRef.current.classList.contains('is-revealed')) {
        observer.observe(elementRef.current);
      }
    } else {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return elementRef;
}
