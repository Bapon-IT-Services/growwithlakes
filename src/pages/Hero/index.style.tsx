import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const titleShine = keyframes`
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const pulseGlow = keyframes`
  0%,
  100% {
    opacity: 0.36;
  }
  50% {
    opacity: 0.62;
  }
`;

const pulseDot = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.55);
    opacity: 1;
  }
  70% {
    box-shadow: 0 0 0 10px rgba(212, 175, 55, 0);
    opacity: 0.85;
  }
  100% {
    box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
    opacity: 1;
  }
`;

export const Section = styled.section`
  position: relative;
  z-index: 1;
  min-height: min(100vh, 960px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(${({ theme }) => theme.headerHeight} + 2.5rem) 1.5rem clamp(3rem, 8vw, 5rem);
  overflow: hidden;
  background: transparent;
`;

/** Soft hero-only light pools — no solid bands, sits on global backdrop */
export const Atmosphere = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 90% 70% at 15% 20%, rgba(212, 175, 55, 0.11) 0%, transparent 55%),
    radial-gradient(ellipse 60% 50% at 92% 65%, rgba(212, 175, 55, 0.07) 0%, transparent 50%),
    radial-gradient(circle at 50% 100%, rgba(212, 175, 55, 0.05) 0%, transparent 45%);
`;

export const GlowOrb = styled.div`
  position: absolute;
  width: min(100vw, 720px);
  height: min(100vw, 720px);
  left: 50%;
  top: 44%;
  translate: -50% -50%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(212, 175, 55, 0.14) 0%,
    rgba(212, 175, 55, 0.04) 38%,
    transparent 65%
  );
  pointer-events: none;
  animation: ${pulseGlow} 12s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.5;
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: min(${({ theme }) => theme.maxWidth}, 100%);
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  gap: clamp(2.75rem, 7vw, 4.5rem);
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1.35fr) minmax(240px, 360px);
    gap: clamp(1.5rem, 3vw, 2.5rem);
  }
`;

export const Content = styled.div`
  text-align: center;
  min-width: 0;

  @media (min-width: 1024px) {
    text-align: left;
    max-width: none;
  }
`;

export const Badge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 1.1rem 0.5rem 0.75rem;
  margin-bottom: 1.35rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  border: 1px solid rgba(212, 175, 55, 0.4);
  border-radius: ${({ theme }) => theme.radius.pill};
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.1) 0%,
    rgba(212, 175, 55, 0.02) 100%
  );
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.2),
    0 12px 40px rgba(0, 0, 0, 0.25);
`;

export const BadgeDot = styled.span`
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.goldBright};
  animation: ${pulseDot} 2.4s ease-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Title = styled(motion.h1)`
  margin: 0 0 1.1rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(3rem, 9.5vw, 5.25rem);
  line-height: 0.98;
  letter-spacing: -0.035em;
  background: linear-gradient(
    115deg,
    ${({ theme }) => theme.colors.white} 0%,
    ${({ theme }) => theme.colors.white} 35%,
    ${({ theme }) => theme.colors.goldBright} 50%,
    ${({ theme }) => theme.colors.white} 65%,
    ${({ theme }) => theme.colors.white} 100%
  );
  background-size: 220% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${titleShine} 14s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Lead = styled(motion.p)`
  margin: 0 0 1.25rem;
  font-size: clamp(1.08rem, 2.4vw, 1.35rem);
  font-weight: 500;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.01em;
  max-width: 26rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Tagline = styled(motion.p)`
  margin: 0 0 1.75rem;
  font-size: clamp(0.98rem, 2vw, 1.08rem);
  line-height: 1.72;
  color: ${({ theme }) => theme.colors.muted};
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ChipRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const Chip = styled.span`
  padding: 0.4rem 0.85rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.muted};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    border-color: rgba(212, 175, 55, 0.35);
    background: rgba(212, 175, 55, 0.05);
  }
`;

export const ButtonRow = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: stretch;
  width: 100%;
  max-width: 100%;
  min-width: 0;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

export const MusicButtonWrap = styled.div`
  width: 100%;
  max-width: 100%;

  .ant-btn {
    width: 100%;
    height: 40px !important;
    padding-inline: 1rem;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    box-shadow: 0 8px 28px rgba(212, 175, 55, 0.22);
  }

  @media (min-width: 1024px) {
    width: auto;

    .ant-btn {
      width: auto;
      min-width: 9rem;
    }
  }
`;

export const CtaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem;
  width: 100%;
  max-width: 100%;
  min-width: 0;

  @media (min-width: 1024px) {
    gap: 0.75rem;
    max-width: 28rem;
  }
`;

export const CtaTile = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  min-height: 3.25rem;
  padding: 0.75rem 1rem;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.28);
  border-radius: ${({ theme }) => theme.radius.sm};
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.08);
    border-color: rgba(212, 175, 55, 0.5);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 2px;
  }
`;

export const CtaLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
`;

export const CtaArrow = styled.span`
  flex-shrink: 0;
  font-size: 0.875rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.gold};
  opacity: 0.7;
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;

  ${CtaTile}:hover & {
    opacity: 1;
    transform: translateX(2px);
  }
`;

export const CtaButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  width: 100%;
  max-width: 100%;
  min-width: 0;

  .ant-btn {
    width: 100%;
    height: 44px !important;
    padding-inline: 1rem;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    line-height: 1.2;
    white-space: nowrap;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 0.5rem;

    .ant-btn {
      flex: 1 1 0;
      width: auto;
      min-width: 0;
      height: 36px !important;
      padding-inline: 0.5rem;
      font-size: 0.6875rem;
      letter-spacing: 0.01em;
    }
  }

  @media (min-width: 1280px) {
    gap: 0.6rem;

    .ant-btn {
      height: 38px !important;
      padding-inline: 0.7rem;
      font-size: 0.75rem;
    }
  }
`;

export const VisualCol = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 280px;

  @media (min-width: 1024px) {
    min-height: 360px;
  }
`;

/** Centres children so framer `rotate` does not fight `translate` centering */
export const OrbitAnchor = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: min(72vw, 340px);
  height: min(72vw, 340px);
  translate: -50% -50%;
  pointer-events: none;

  @media (min-width: 1024px) {
    width: 380px;
    height: 380px;
  }
`;

export const OrbitAnchorInner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: min(62vw, 290px);
  height: min(62vw, 290px);
  translate: -50% -50%;
  pointer-events: none;

  @media (min-width: 1024px) {
    width: 320px;
    height: 320px;
  }
`;

export const OrbitRing = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.32);
  box-shadow: 0 0 60px rgba(212, 175, 55, 0.1);
`;

export const OrbitRingDashed = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px dashed rgba(212, 175, 55, 0.36);
`;

export const VisualPanel = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 380px;
  padding: clamp(1.75rem, 4vw, 2.35rem) clamp(1.5rem, 4vw, 2rem);
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid rgba(212, 175, 55, 0.42);
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.055) 0%,
    rgba(255, 255, 255, 0.02) 40%,
    rgba(5, 5, 5, 0.2) 100%
  );
  box-shadow:
    0 28px 72px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(212, 175, 55, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  overflow: hidden;
`;

export const VisualTop = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.35rem;
`;

export const VisualLabel = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

export const VisualStatus = styled.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.muted};
`;

export const WaveWrap = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 6px;
  height: 72px;
  margin-bottom: 1.25rem;
`;

export const WaveBar = styled(motion.span)`
  display: block;
  width: 5px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.goldBright} 0%,
    ${({ theme }) => theme.colors.gold} 50%,
    rgba(212, 175, 55, 0.25) 100%
  );
  transform-origin: center bottom;
  box-shadow: 0 0 14px rgba(212, 175, 55, 0.3);
`;

export const VisualFoot = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const VisualFootText = styled.p`
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.muted};
`;

export const VisualAccent = styled.span`
  flex-shrink: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.colors.gold};
  opacity: 0.9;
`;

export const Divider = styled.span`
  display: block;
  width: 100%;
  max-width: 200px;
  height: 1px;
  margin: 2.5rem auto 0;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.gold},
    transparent
  );
  opacity: 0.72;

  @media (min-width: 1024px) {
    margin: 2.5rem 0 0;
  }
`;
