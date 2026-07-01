import { Button, Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import Reveal from '../../components/Reveal';
import { links } from '../../config/links';
import { useReducedMotion } from 'framer-motion';
import * as S from './index.style';
import allansTeamLogo from "../../assets/drlakes/allan's_team.jpeg";
import bubblegumLogo from '../../assets/drlakes/bubblegum.jpeg';
import see2BelieveLogo from '../../assets/drlakes/see_2_believe.jpeg';
import surreyRemovalsLogo from '../../assets/drlakes/sr.jpeg';
import soulUnityLogo from '../../assets/drlakes/soul_unity.jpeg';
import soulUnityLogo2 from '../../assets/drlakes/soul.jpeg';
import stopByLogo from '../../assets/drlakes/Stop_by_logo.png';
import gemLogo from '../../assets/drlakes/Gem_logo.png';

const partners = [
  { name: 'Soul Unity', logoSrc: soulUnityLogo },
  { name: 'Bubblegum Lounge', logoSrc: bubblegumLogo },
  { name: 'Surrey Removals', logoSrc: surreyRemovalsLogo },
  { name: 'See 2 Believe', logoSrc: see2BelieveLogo },
  { name: 'Soul Unity', logoSrc: soulUnityLogo2 },
  { name: "Allan's Team Ltd", logoSrc: allansTeamLogo },
  { name: 'Stop by jerk', logoSrc: stopByLogo },
  { name: 'Gem', logoSrc: gemLogo },
] as const;

/** Slower loop on a shorter track keeps logos readable */
function marqueeDuration(trackWidth: number) {
  return Math.max(20, trackWidth / 85);
}

export default function Partners() {
  const reducedMotion = useReducedMotion();
  const groupARef = useRef<HTMLDivElement | null>(null);
  const [loopX, setLoopX] = useState(0);

  const logoSvg = (logoSrc: string) => (
    <img src={logoSrc} alt="" loading="lazy" decoding="async" />
  );

  useEffect(() => {
    const measure = () => {
      if (!groupARef.current) return;
      const w = groupARef.current.getBoundingClientRect().width;
      if (!Number.isFinite(w) || w <= 0) return;
      setLoopX(w);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const marqueeActive = !reducedMotion && loopX > 0;

  return (
    <S.Section id="partners">
      <Reveal sectionId="partners">
        <S.Inner>
          <S.Header>
            <S.Rule aria-hidden />
            <S.Label>Partners &amp; Collaboration</S.Label>
            <S.Title>Building bigger together</S.Title>
            <S.Intro>
              We are building a network of aligned partners across media, creative development,
              technology, business and community. Together, we create opportunities, share
              resources and build something bigger than individual platforms.
            </S.Intro>
          </S.Header>
          <S.PartnerMarqueeViewport aria-label="Partner organisations">
          <S.PartnerMarqueeTrack
            $active={marqueeActive}
            $duration={marqueeDuration(loopX)}
          >
            <S.PartnerGroup ref={groupARef}>
              {partners.map((partner, idx) => (
                <S.PartnerItem key={`a-${partner.name}-${idx}`}>
                  <S.PartnerLogo aria-hidden>{logoSvg(partner.logoSrc)}</S.PartnerLogo>
                  <S.PartnerName>{partner.name}</S.PartnerName>
                </S.PartnerItem>
              ))}
            </S.PartnerGroup>

            <S.PartnerGroup aria-hidden>
              {partners.map((partner, idx) => (
                <S.PartnerItem key={`b-${partner.name}-${idx}`}>
                  <S.PartnerLogo aria-hidden>{logoSvg(partner.logoSrc)}</S.PartnerLogo>
                  <S.PartnerName>{partner.name}</S.PartnerName>
                </S.PartnerItem>
              ))}
            </S.PartnerGroup>
          </S.PartnerMarqueeTrack>
          </S.PartnerMarqueeViewport>
          <S.CtaRow>
            <Space size="middle" wrap>
              <Button type="primary" size="large" href={links.careers}>
                Become a Partner
              </Button>
              <Button size="large" href={links.contactSection}>
                Register Your Interest
              </Button>
            </Space>
          </S.CtaRow>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
