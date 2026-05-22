import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import MobileNavMenu from '../../components/MobileNavMenu';
import { buildMobileNavLinks, homeNavItems } from '../../config/navigation';
import { links } from '../../config/links';
import * as S from './index.style';

const MotionHeader = motion(S.Header);

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [activeId, setActiveId] = useState<string>('');
  const rafRef = useRef<number | null>(null);
  const isHome = pathname === '/';

  const sectionIds = useMemo(
    () =>
      homeNavItems.flatMap((item) => (item.sectionId ? [item.sectionId] : [])),
    []
  );

  useEffect(() => {
    if (!isHome) {
      setActiveId('');
      return;
    }

    const HEADER_OFFSET = 86;

    const computeActive = () => {
      let bestId = '';
      let bestTop = -Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
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
  }, [sectionIds, isHome]);

  const mobileLinks = useMemo(
    () => buildMobileNavLinks(pathname, isHome, activeId),
    [pathname, isHome, activeId]
  );

  return (
    <MotionHeader
      role="banner"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <S.Inner>
        <S.Brand as={Link} to="/">
          Grow With <span>Lakes</span>
        </S.Brand>
        <S.Nav aria-label="Primary">
          {homeNavItems.map((item) => {
            const isCareers = item.sectionId === null;
            const isActive = isCareers
              ? pathname === links.careers
              : isHome && activeId === item.sectionId;

            if (isCareers) {
              return (
                <S.NavLink
                  key={item.to}
                  as={Link}
                  to={item.to}
                  data-active={isActive}
                >
                  {item.label}
                </S.NavLink>
              );
            }

            const href = isHome ? `#${item.sectionId}` : `/#${item.sectionId}`;

            return (
              <S.NavLink key={item.to} href={href} data-active={isActive}>
                {item.label}
              </S.NavLink>
            );
          })}
        </S.Nav>
        <S.NavMobile>
          <MobileNavMenu links={mobileLinks} />
        </S.NavMobile>
      </S.Inner>
    </MotionHeader>
  );
}
