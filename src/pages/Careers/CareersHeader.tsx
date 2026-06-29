import { ArrowLeftOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import MobileNavMenu from '../../components/MobileNavMenu';
import { buildMobileNavLinks } from '../../config/navigation';
import * as S from './index.style';

const MotionHeader = motion(S.CareersHeader);

export default function CareersHeader() {
  const { pathname } = useLocation();
  const mobileLinks = useMemo(
    () => buildMobileNavLinks(pathname, false, ''),
    [pathname]
  );

  return (
    <MotionHeader
      role="banner"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <S.CareersHeaderInner>
        <S.BackLink to="/">
          <ArrowLeftOutlined aria-hidden />
          Grow With Lakes · Platform
        </S.BackLink>
        <S.CareersHeaderMark>Careers</S.CareersHeaderMark>
        <S.CareersHeaderEnd>
          <S.CareersHeaderAction to="/#contact">Contact</S.CareersHeaderAction>
          <MobileNavMenu links={mobileLinks} menuLabel="Open site menu" />
        </S.CareersHeaderEnd>
      </S.CareersHeaderInner>
    </MotionHeader>
  );
}
