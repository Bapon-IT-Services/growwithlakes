import { links } from './links';

export type HomeNavItem = {
  to: string;
  label: string;
  sectionId: string | null;
};

/** Shown in the desktop header — kept short so the bar stays clean */
export const primaryNavItems: HomeNavItem[] = [
  { to: '/#about', label: 'About', sectionId: 'about' },
  { to: '/#opportunities', label: 'Opportunities', sectionId: 'opportunities' },
  { to: '/#partners', label: 'Partners', sectionId: 'partners' },
  { to: '/#events', label: 'Events', sectionId: 'events' },

];

/** Full site map — mobile menu & scroll spy */
export const secondaryNavItems: HomeNavItem[] = [
  { to: '/#contact', label: 'Contact Us', sectionId: 'contact' },
];

export const homeNavItems: HomeNavItem[] = [...primaryNavItems, ...secondaryNavItems];

export type MobileNavLink = {
  key: string;
  label: string;
  href?: string;
  to?: string;
  active?: boolean;
};

export function buildMobileNavLinks(
  pathname: string,
  isHome: boolean,
  activeId: string
): MobileNavLink[] {
  return homeNavItems.map((item) => {
    const isCareers = item.sectionId === null;
    const active = isCareers
      ? pathname === links.careers
      : isHome && activeId === item.sectionId;

    if (isCareers) {
      return { key: item.to, label: item.label, to: item.to, active };
    }

    const href = isHome ? `#${item.sectionId}` : `/#${item.sectionId}`;
    return { key: item.to, label: item.label, href, active };
  });
}
