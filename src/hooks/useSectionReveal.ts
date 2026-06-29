import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reveal animation that also shows content when the URL hash targets this section.
 * Fixes blank sections after browser back/forward to /#section-id.
 */
export function useSectionReveal(sectionId?: string, margin = '-5% 0px' as const) {
  const ref = useRef<HTMLDivElement>(null);
  const { pathname, hash } = useLocation();
  const isInView = useInView(ref, { once: true, margin });
  const normalizedId = sectionId?.toLowerCase() ?? '';
  const hashTarget =
    normalizedId.length > 0 &&
    pathname === '/' &&
    hash.slice(1).toLowerCase() === normalizedId;

  return {
    ref,
    animate: isInView || hashTarget ? ('show' as const) : ('hidden' as const),
  };
}
