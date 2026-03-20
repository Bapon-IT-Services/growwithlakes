import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import * as S from './index.style';

const MotionHeader = motion(S.Header);

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'What I do' },
  { href: '#opportunities', label: 'Opportunities' },
  { href: '#partners', label: 'Partners' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function SiteHeader() {
  const [activeId, setActiveId] = useState<string>('');
  const rafRef = useRef<number | null>(null);

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace(/^#/, '')),
    []
  );

  useEffect(() => {
    const HEADER_OFFSET = 86; // headerHeight(72px) + comfortable breathing room

    const computeActive = () => {
      let bestId = '';
      let bestTop = -Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        // Select the section whose top is closest to the header, but not below it.
        if (top <= HEADER_OFFSET + 10 && top > bestTop) {
          bestTop = top;
          bestId = id;
        }
      }

      setActiveId(bestId);
    };

    const onScrollOrResize = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        computeActive();
      });
    };

    computeActive();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [sectionIds]);

  return (
    <MotionHeader
      role="banner"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <S.Inner>
        <S.Brand href="#top">
          Grow With <span>Lakes</span>
        </S.Brand>
        <S.Nav aria-label="Primary">
          {navItems.map((item) => (
            <S.NavLink
              key={item.href}
              href={item.href}
              data-active={activeId === item.href.replace(/^#/, '')}
            >
              {item.label}
            </S.NavLink>
          ))}
        </S.Nav>
        <S.NavCompact aria-label="Contact shortcut">
          <Button type="link" href="#contact" size="small" style={{ color: '#d4af37' }}>
            Contact
          </Button>
        </S.NavCompact>
      </S.Inner>
    </MotionHeader>
  );
}
