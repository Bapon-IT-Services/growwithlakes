import { ExportOutlined, PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useDrLakesAudio, useDrLakesHeroAudio } from '../../context/DrLakesAudioContext';
import { links } from '../../config/links';
import { staggerHero, fadeUp } from '../../motion/variants';
import * as S from './index.style';

const waveHeights = [20, 32, 48, 26, 58, 36, 52, 24, 56, 34, 44, 22, 50, 30, 40] as const;

const heroCtas = [
  { label: 'Join the Network', href: links.contactSection, featured: true },
  { label: 'Explore Opportunities', href: links.opportunitiesSection },
  { label: 'Free Consultation', href: links.calendly, external: true },
  { label: 'View Events', href: links.eventbrite, external: true },
] as const;

export default function Hero() {
  
  useDrLakesHeroAudio();
  const { isPlaying, togglePlayback } = useDrLakesAudio();

  return (
    <S.Section id="top">
      <S.Atmosphere aria-hidden />
      <S.GlowOrb aria-hidden />
      <S.Inner>
        <S.Grid>
          <S.Content>
            <motion.div variants={staggerHero} initial="hidden" animate="show">
              <S.Title variants={fadeUp}>Grow With Lakes</S.Title>
              <S.Badge variants={fadeUp}>
                <S.BadgeDot aria-hidden />
                Powered by Dr Lakes
              </S.Badge>
              <S.Lead variants={fadeUp}>
                Where music, conversation, opportunity and growth come together.
              </S.Lead>
              <S.ButtonRow variants={fadeUp}>
                <S.CtaActions>
                  {heroCtas.map((cta) => (
                    <S.HeroCta
                      key={cta.label}
                      href={cta.href}
                      $featured={'featured' in cta && cta.featured}
                      {...('external' in cta && cta.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      <S.CtaText>{cta.label}</S.CtaText>
                      <S.CtaIcon aria-hidden>
                        {'external' in cta && cta.external ? <ExportOutlined /> : '→'}
                      </S.CtaIcon>
                    </S.HeroCta>
                  ))}
                </S.CtaActions>

                <S.ListenControlWrap $playing={isPlaying}>
                  <S.ListenBorderSvg
                    aria-hidden
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="heroListenBorderGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fff9e6" stopOpacity="0.35" />
                        <stop offset="40%" stopColor="#ffe9a8" />
                        <stop offset="55%" stopColor="#e8c547" />
                        <stop offset="100%" stopColor="#d4af37" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    <S.ListenBorderTrack
                      x="1.5"
                      y="1.5"
                      width="97"
                      height="97"
                      rx="4.5"
                      ry="31"
                      vectorEffect="non-scaling-stroke"
                    />
                    <S.ListenBorderTrace
                      $playing={isPlaying}
                      x="1.5"
                      y="1.5"
                      width="97"
                      height="97"
                      rx="4.5"
                      ry="31"
                      vectorEffect="non-scaling-stroke"
                      pathLength={100}
                    />
                  </S.ListenBorderSvg>
                  <S.ListenControl
                    type="button"
                    onClick={togglePlayback}
                    aria-label={isPlaying ? 'Pause Dr Lakes audio' : 'Play Dr Lakes audio'}
                  >
                    <S.ListenIconRing aria-hidden>
                      {isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                    </S.ListenIconRing>
                    <S.ListenCopy>
                      <S.ListenLabel>{isPlaying ? 'Pause audio' : 'Listen now'}</S.ListenLabel>
                    </S.ListenCopy>
                  </S.ListenControl>
                </S.ListenControlWrap>
              </S.ButtonRow>
              <motion.div variants={fadeUp}>
                <motion.div
                  aria-hidden
                  style={{ marginTop: '2.25rem', transformOrigin: '50% 50%' }}
                  animate={{ opacity: [0.35, 0.8, 0.35], scaleX: [0.88, 1, 0.88] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <S.Divider />
                </motion.div>
              </motion.div>
            </motion.div>
          </S.Content>

          <S.VisualCol>
            <S.OrbitAnchor aria-hidden>
              <S.OrbitRing
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
              />
            </S.OrbitAnchor>
            <S.OrbitAnchorInner aria-hidden>
              <S.OrbitRingDashed
                animate={{ rotate: -360 }}
                transition={{ duration: 95, repeat: Infinity, ease: 'linear' }}
              />
            </S.OrbitAnchorInner>
            <S.VisualPanel
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <S.VisualTop>
                <S.VisualLabel>Community</S.VisualLabel>
                <S.VisualStatus>Growing together</S.VisualStatus>
              </S.VisualTop>
              <S.WaveWrap aria-hidden>
                {waveHeights.map((h, i) => (
                  <S.WaveBar
                    key={i}
                    style={{ height: h }}
                    animate={{ scaleY: [0.28, 1, 0.42, 0.95, 0.28] }}
                    transition={{
                      duration: 0.9 + i * 0.04,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.06,
                    }}
                  />
                ))}
              </S.WaveWrap>
              <S.VisualFoot>
                <S.VisualFootText>
                  Conversation. Community. Opportunity. Growth. — a platform built to connect
                  people, not just a personal brand.
                </S.VisualFootText>
                <S.VisualAccent aria-hidden>✦</S.VisualAccent>
              </S.VisualFoot>
            </S.VisualPanel>
          </S.VisualCol>
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
