import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Matches SiteHeader section spy offset */
const HEADER_OFFSET = 86;

function scrollToId(id: string, offset = HEADER_OFFSET) {
  const el = document.getElementById(id);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
  return true;
}

/**
 * Scrolls to the element matching the URL hash after landing on the home page.
 * Needed because client-side navigation from routes like /careers does not
 * trigger the browser's native hash scroll.
 */
export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== '/' || !hash) return;

    const id = hash.slice(1);
    if (!id) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const run = () => {
      if (scrollToId(id)) return;
      timeoutId = setTimeout(() => scrollToId(id), 100);
    };

    const frameId = requestAnimationFrame(run);

    return () => {
      cancelAnimationFrame(frameId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [pathname, hash]);
}
