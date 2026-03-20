import { Button } from 'antd';
import { motion } from 'framer-motion';
import * as S from './index.style';

const MotionHeader = motion(S.Header);

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#opportunities', label: 'Opportunities' },
  { href: '#partners', label: 'Partners' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function SiteHeader() {
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
            <S.NavLink key={item.href} href={item.href}>
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
