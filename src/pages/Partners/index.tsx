import { Button, Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import Reveal from '../../components/Reveal';
import { links } from '../../config/links';
import { useReducedMotion } from 'framer-motion';
import { fadeUp, partnerNameIn, staggerFast } from '../../motion/variants';
import * as S from './index.style';
import allansTeamLogo from "../../assets/drlakes/allan's_team.jpeg";
import bubblegumLogo from '../../assets/drlakes/bubblegum.jpeg';
import see2BelieveLogo from '../../assets/drlakes/see_2_believe.jpeg';
import surreyRemovalsLogo from '../../assets/drlakes/sr.jpeg';
import soulUnityLogo from '../../assets/drlakes/soul_unity.jpeg';
import soulUnityLogo2 from '../../assets/drlakes/soul.jpeg';

const partners = [
  { name: 'Soul Unity', logoSrc: soulUnityLogo },
  { name: 'Bubblegum Lounge', logoSrc: bubblegumLogo },
  { name: 'Surrey Removals', logoSrc: surreyRemovalsLogo },
  { name: 'See 2 Believe', logoSrc: see2BelieveLogo },
  { name: 'Soul Unity', logoSrc: soulUnityLogo2 },
   { name: "Allan's Team Ltd", logoSrc: allansTeamLogo },
] as const;
//logos//
export default function Partners() {
  const reducedMotion = useReducedMotion();
  const groupARef = useRef<HTMLDivElement | null>(null);
  const [loopX, setLoopX] = useState(0);

  const partnerNames = partners.map((p) => p.name);

  const logoSvg = (name: string) => {
    const src = partners.find((p) => p.name === name)?.logoSrc;
    if (src) {
      return <img src={src} alt="" loading="lazy" />;
    }

    switch (name) {
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.35" />
          </svg>
        );
    }
  };

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

  return (
    <S.Section id="partners">
      <S.Inner>
        <Reveal>
          <S.Header>
            <S.Label>Partners</S.Label>
            <S.Title>Aligned collaborators</S.Title>
            <S.Intro>
              A growing network of organisations and platforms that share the values of
              community, culture and forward motion. Official partners are featured here as
              the ecosystem expands.
            </S.Intro>
          </S.Header>
        </Reveal>
        <S.PartnerMarqueeViewport
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          aria-label="Partner organisations"
        >
          <S.PartnerMarqueeTrack
            animate={
              reducedMotion || loopX <= 0 ? { x: 0 } : { x: [0, -loopX] }
            }
            transition={
              reducedMotion || loopX <= 0
                ? undefined
                : {
                    duration: 26,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                  }
            }
          >
            <S.PartnerGroup aria-hidden ref={groupARef}>
              {partnerNames.map((name, idx) => (
                <S.PartnerItem
                  key={`a-${name}-${idx}`}
                  variants={partnerNameIn}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    transition: { type: 'spring', stiffness: 420, damping: 22 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <S.PartnerLogo aria-hidden>{logoSvg(name)}</S.PartnerLogo>
                  <S.PartnerName>{name}</S.PartnerName>
                </S.PartnerItem>
              ))}
            </S.PartnerGroup>

            <S.PartnerGroup aria-hidden>
              {partnerNames.map((name, idx) => (
                <S.PartnerItem
                  key={`b-${name}-${idx}`}
                  variants={partnerNameIn}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    transition: { type: 'spring', stiffness: 420, damping: 22 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <S.PartnerLogo aria-hidden>{logoSvg(name)}</S.PartnerLogo>
                  <S.PartnerName>{name}</S.PartnerName>
                </S.PartnerItem>
              ))}
            </S.PartnerGroup>
          </S.PartnerMarqueeTrack>
        </S.PartnerMarqueeViewport>
        <S.CtaRow
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-8% 0px' }}
        >
          <Space size="middle" wrap>
            <Button type="primary" size="large" href={links.becomePartner}>
              Become a Partner
            </Button>
            <Button size="large" href={links.registerInterest}>
              Register Interest
            </Button>
          </Space>
        </S.CtaRow>
      </S.Inner>
    </S.Section>
  );
}
