import { links } from './links';

export type HomeNavItem = {
  to: string;
  label: string;
  sectionId: string | null;
};

export const homeNavItems: HomeNavItem[] = [
  { to: '/#about', label: 'About', sectionId: 'about' },
  { to: '/#services', label: 'What I do', sectionId: 'services' },
  { to: '/#opportunities', label: 'Opportunities', sectionId: 'opportunities' },
  { to: links.careers, label: 'Careers', sectionId: null },
  { to: '/#partners', label: 'Partners', sectionId: 'partners' },
  { to: '/#contact', label: 'Contact', sectionId: 'contact' },
];

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
