import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Matches SiteHeader section spy offset */
const HEADER_OFFSET = 86;
const MAX_ATTEMPTS = 16;

function scrollToId(id: string, offset = HEADER_OFFSET) {
  const el = document.getElementById(id);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
  return true;
}

/**
 * Scrolls to the element matching the URL hash after landing on the home page.
 * Uses layout effect + retries so back/forward navigation from routes like /careers
 * lands on the correct section before paint and before reveal animations run.
 */
export function useScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useLayoutEffect(() => {
    if (pathname !== '/' || !hash) return;

    const id = hash.slice(1).toLowerCase();
    if (!id) return;

    let cancelled = false;
    let attempts = 0;

    const tryScroll = () => {
      if (cancelled) return;
      if (scrollToId(id)) return;

      attempts += 1;
      if (attempts < MAX_ATTEMPTS) {
        requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();

    return () => {
      cancelled = true;
    };
  }, [pathname, hash, key]);
}
