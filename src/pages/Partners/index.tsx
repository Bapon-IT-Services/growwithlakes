import { Button, Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import Reveal from '../../components/Reveal';
import { links } from '../../config/links';
import { useReducedMotion } from 'framer-motion';
import { fadeUp, partnerNameIn, staggerFast } from '../../motion/variants';
import * as S from './index.style';

const partners = [
  {
    name: 'Spotify',
    logoSrc: 'https://www.google.com/s2/favicons?domain=spotify.com&sz=256',
  },
  {
    name: 'SoundCloud',
    logoSrc: 'https://www.google.com/s2/favicons?domain=soundcloud.com&sz=256',
  },
  {
    name: 'Deezer',
    logoSrc: 'https://www.google.com/s2/favicons?domain=deezer.com&sz=256',
  },
  // {
  //   name: 'Universal Music Group',
  //   logoSrc: 'https://www.google.com/s2/favicons?domain=umg.com&sz=256',
  // },
  {
    name: 'Sony Music',
    logoSrc: 'https://www.google.com/s2/favicons?domain=sonymusic.com&sz=256',
  },
  {
    name: 'Warner Music',
    logoSrc: 'https://www.google.com/s2/favicons?domain=warnermusic.com&sz=256',
  },
  {
    name: 'YouTube Music',
    logoSrc: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=256',
  },
  {
    name: 'Tidal',
    logoSrc: 'https://www.google.com/s2/favicons?domain=tidal.com&sz=256',
  },
  {
    name: 'Apple Music',
    logoSrc: 'https://www.google.com/s2/favicons?domain=music.apple.com&sz=256',
  },
  {
    name: 'Amazon Music',
    logoSrc: 'https://www.google.com/s2/favicons?domain=music.amazon.com&sz=256',
  },
  {
    name: 'Bandcamp',
    logoSrc: 'https://www.google.com/s2/favicons?domain=bandcamp.com&sz=256',
  },
  {
    name: 'iHeartRadio',
    logoSrc: 'https://www.google.com/s2/favicons?domain=iheart.com&sz=256',
  },
  {
    name: 'Pandora',
    logoSrc: 'https://www.google.com/s2/favicons?domain=pandora.com&sz=256',
  },
  // {
  //   name: 'VEVO',
  //   logoSrc: 'https://www.google.com/s2/favicons?domain=vevo.com&sz=256',
  // },
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
      case 'PMP Records':
        // Vinyl
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.35" />
            <circle cx="12" cy="12" r="2.1" fill="currentColor" opacity="0.85" />
            <path
              d="M11.4 12.3l4.2-2.5"
              stroke="currentColor"
              strokeWidth="2.35"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        );
      case 'Code 7':
        // Code brackets + 7 mark
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 8l-3 4 3 4"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 8l3 4-3 4"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19l3.5-7.5H11"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
          </svg>
        );
      case 'Juscoolradio':
        // Radio + waves
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 18h10"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M9 19V11.2c0-1 .8-1.8 1.8-1.8h2.4c1 0 1.8.8 1.8 1.8V19"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinejoin="round"
            />
            <path
              d="M12 5.1c1 0 2 .7 2.6 1.8"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M9.2 8.7a5 5 0 0 1 5.6 0"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M7 12.5c2.8-2.7 7.2-2.7 10 0"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>
        );
      case 'Brixton Soup Kitchen':
        // Bowl + spoon
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 11c0 4.2 10 4.2 10 0"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
            />
            <path
              d="M7.5 9c.7-2.3 8.3-2.3 9 0"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M12 15.2V20"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M15.1 8.2c1 1.8 0 3.3-1.7 4.3"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              opacity="0.65"
            />
          </svg>
        );
      case 'Lambeth Careers Hub':
        // Briefcase + path
        return (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 7V6.2c0-.95.78-1.7 1.7-1.7h2.6c.95 0 1.7.75 1.7 1.7V7"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
            />
            <rect
              x="6.5"
              y="7.8"
              width="11"
              height="12.5"
              rx="2.2"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 13h11"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M12 10.2l.01 6.1"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        );
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
