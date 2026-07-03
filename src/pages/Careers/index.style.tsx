import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { FocusArea } from '../../config/careers';

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

export const Page = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: clip;
  background: ${({ theme }) => theme.colors.bg};
`;

export const Main = styled.main`
  position: relative;
  z-index: 1;
`;

export const CareersHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  min-height: ${({ theme }) => theme.headerHeight};
  display: flex;
  align-items: center;
  background: rgba(8, 6, 4, 0.88);
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
  border-bottom: 1px solid rgba(212, 175, 55, 0.22);
`;

export const CareersHeaderInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 clamp(0.85rem, 4vw, 1.5rem);
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 480px) {
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    gap: clamp(0.65rem, 2vw, 1rem);
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  min-width: 0;
  font-size: clamp(0.75rem, 2.5vw, 0.8125rem);
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.muted};
  transition: color 0.25s ease;
  justify-self: start;
  grid-column: 1;
  grid-row: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  .anticon {
    flex-shrink: 0;
    font-size: 0.85rem;
  }
`;

export const BackLinkShort = styled.span`
  display: inline;

  @media (min-width: 520px) {
    display: none;
  }
`;

export const BackLinkFull = styled.span`
  display: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 520px) {
    display: inline;
  }
`;

export const CareersHeaderMark = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(0.75rem, 2vw, 1rem);
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  justify-self: center;
  grid-column: 1 / -1;
  grid-row: 1;
  pointer-events: none;

  @media (min-width: 480px) {
    grid-column: 2;
    pointer-events: auto;
  }

  @media (max-width: 479px) {
    display: none;
  }
`;

export const CareersHeaderEnd = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 0.75rem);
  grid-column: 2;
  grid-row: 1;

  @media (min-width: 480px) {
    grid-column: 3;
  }
`;

export const CareersHeaderAction = styled(Link)`
  font-size: clamp(0.6875rem, 2vw, 0.8125rem);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  white-space: nowrap;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const Mesh = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 80% 50% at 20% 0%, rgba(212, 175, 55, 0.14), transparent 55%),
    radial-gradient(ellipse 60% 40% at 90% 30%, rgba(212, 175, 55, 0.08), transparent 50%),
    linear-gradient(165deg, #0a0806 0%, ${({ theme }) => theme.colors.bg} 45%, #050505 100%);
`;

export const GridOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.35;
  background-image:
    linear-gradient(rgba(212, 175, 55, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212, 175, 55, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(180deg, black 0%, transparent 70%);
`;

export const Hero = styled.section`
  position: relative;
  z-index: 1;
  padding: calc(${({ theme }) => theme.headerHeight} + clamp(1.75rem, 5vw, 4rem))
    clamp(0.85rem, 4vw, 1.5rem) clamp(2rem, 6vw, 4rem);
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  width: 100%;
  min-width: 0;
`;

export const HeroEyebrow = styled.span`
  display: inline-block;
  max-width: 100%;
  margin-bottom: 1.25rem;
  padding: 0.35rem clamp(0.65rem, 2vw, 0.9rem);
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid rgba(212, 175, 55, 0.35);
  background: rgba(212, 175, 55, 0.08);
  font-size: clamp(0.5625rem, 2vw, 0.6875rem);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;
  line-height: 1.45;
`;

export const HeroTitle = styled.h1`
  margin: 0 0 1.25rem;
  max-width: 30ch;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 400;
  font-size: clamp(2.15rem, 9vw, 4.5rem);
  line-height: 1.05;
  color: ${({ theme }) => theme.colors.white};
`;

export const HeroAccent = styled.span`
  display: inline;

  background: linear-gradient(
    105deg,
    ${({ theme }) => theme.colors.gold} 0%,
    ${({ theme }) => theme.colors.goldBright} 45%,
    ${({ theme }) => theme.colors.gold} 90%
  );

  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${shimmer} 8s linear infinite;
`;
export const HeroLead = styled.p`
  margin: 0;
  max-width: 36rem;
  font-size: clamp(0.9375rem, 2.5vw, 1.125rem);
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.muted};
`;

export const PlatformNote = styled.p`
  margin: 1.75rem 0 0;
  max-width: 40rem;
  padding: 1rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.03);
  font-size: 0.9375rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.muted};

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
  }
`;

export const InlineLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gold};
  text-decoration: underline;
  text-underline-offset: 0.2em;
  transition: color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.goldBright};
  }
`;

export const PillRow = styled(motion.div)`
  margin-top: clamp(1.5rem, 4vw, 2rem);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const pillAreaStyles: Record<FocusArea, ReturnType<typeof css>> = {
  Media: css`
    color: #e8c547;
    border-color: rgba(212, 175, 55, 0.45);
    background: rgba(212, 175, 55, 0.12);

    &::before {
      background: #d4af37;
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.55);
    }
  `,
  Music: css`
     color: #e8c547;
    border-color: rgba(212, 175, 55, 0.45);
    background: rgba(212, 175, 55, 0.12);

    &::before {
      background: #d4af37;
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.55);
    }
  `,
  Community: css`
     color: #e8c547;
    border-color: rgba(212, 175, 55, 0.45);
    background: rgba(212, 175, 55, 0.12);

    &::before {
      background: #d4af37;
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.55);
    }
  `,
  Partnerships: css`
   color: #e8c547;
    border-color: rgba(212, 175, 55, 0.45);
    background: rgba(212, 175, 55, 0.12);

    &::before {
      background: #d4af37;
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.55);
    }
  `,
  Operations: css`
    color: #e8c547;
    border-color: rgba(212, 175, 55, 0.45);
    background: rgba(212, 175, 55, 0.12);

    &::before {
      background: #d4af37;
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.55);
    }
  `,
};

export const Pill = styled(motion.span)<{ $area: FocusArea }>`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem clamp(0.65rem, 2vw, 0.85rem);
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: clamp(0.625rem, 2vw, 0.75rem);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  ${({ $area }) => pillAreaStyles[$area]}

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  }
`;

export const RolesSection = styled.section`
  position: relative;
  z-index: 1;
  padding: clamp(1.5rem, 4vw, 2rem) clamp(0.85rem, 4vw, 1.5rem) clamp(2.5rem, 8vw, 5rem);
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  width: 100%;
  min-width: 0;
`;

export const RolesIntro = styled.p`
  margin: 0 0 2rem;
  max-width: 40rem;
  font-size: clamp(0.9375rem, 2.5vw, 1rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
`;

export const RolesHeading = styled.h2`
  margin: 0 0 0.75rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const RoleList = styled(motion.ol)`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const RoleActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  flex-wrap: nowrap;

  .ant-btn {
    min-width: 0;
    white-space: nowrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: auto;
    justify-content: flex-start;
  }
`;

export const RoleItem = styled(motion.li)<{ $active?: boolean }>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.25rem 1.5rem;
  align-items: start;
  padding: clamp(1.25rem, 3vw, 1.75rem) 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
  min-width: 0;

  ${({ $active }) =>
    $active &&
    css`
      background: rgba(212, 175, 55, 0.04);
      border-bottom-color: rgba(212, 175, 55, 0.28);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: auto 1fr;
    gap: 0.85rem 1rem;

    ${RoleActions} {
      grid-column: 2;
      grid-row: 2;
      justify-self: start;
      margin-top: 0.25rem;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateX(4px);
    }
  }
`;

export const RoleIndex = styled.span<{ $active?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.65rem, 5vw, 2.5rem);
  line-height: 1;
  font-weight: 600;
  min-width: 2.25rem;
  color: ${({ theme }) => theme.colors.gold};
  text-shadow: 0 0 24px rgba(212, 175, 55, 0.35);
  transition:
    color 0.25s ease,
    text-shadow 0.25s ease;

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.colors.goldBright};
      text-shadow: 0 0 32px rgba(232, 197, 71, 0.55);
    `}
`;

export const RoleBody = styled.div`
  min-width: 0;
`;

export const RoleMeta = styled.span`
  display: block;
  margin-bottom: 0.35rem;
  font-size: 0.6875rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;
`;

export const RoleTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};
`;

export const RoleSummary = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.muted};
  cursor: default;
`;

export const RoleHoverZone = styled.div`
  min-width: 0;
  cursor: default;
`;

export const RoleDescription = styled(motion.div)`
  overflow: hidden;
`;

export const RoleDescriptionInner = styled.p`
  margin: 1rem 0 0;
  padding: clamp(0.85rem, 2.5vw, 1rem) clamp(0.85rem, 2.5vw, 1.125rem);
  font-size: clamp(0.875rem, 2.2vw, 0.9375rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
  border-left: 2px solid rgba(212, 175, 55, 0.45);
  border-radius: 0 ${({ theme }) => theme.radius.sm} ${({ theme }) => theme.radius.sm} 0;
  background: rgba(212, 175, 55, 0.06);
`;

export const ExpandButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  box-sizing: border-box;
  padding: 0;
  border: 1px solid rgba(212, 175, 55, 0.5);
  border-radius: ${({ theme }) => theme.radius.sm};
  background: rgba(212, 175, 55, 0.14);
  color: ${({ theme }) => theme.colors.goldBright};
  font-size: 1.125rem;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  .anticon {
    font-size: 1.125rem;
  }

  &:hover {
    background: rgba(212, 175, 55, 0.28);
    border-color: ${({ theme }) => theme.colors.goldBright};
    color: ${({ theme }) => theme.colors.white};
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.35);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.goldBright};
    outline-offset: 2px;
  }

  &[data-expanded='true'] {
    background: rgba(212, 175, 55, 0.32);
    border-color: ${({ theme }) => theme.colors.goldBright};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 24px rgba(212, 175, 55, 0.4);
  }
`;

export const CtaBand = styled.section`
  position: relative;
  z-index: 1;
  margin: 0 clamp(0.85rem, 4vw, 1.5rem) clamp(2rem, 8vw, 4rem);
  max-width: ${({ theme }) => theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: clamp(1.5rem, 5vw, 3rem);
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid rgba(212, 175, 55, 0.28);
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.12) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(212, 175, 55, 0.06) 100%
  );
  text-align: center;
  min-width: 0;
`;

export const CtaTitle = styled.h2`
  margin: 0 0 0.75rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const CtaText = styled.p`
  margin: 0 auto 1.5rem;
  max-width: 32rem;
  font-size: clamp(0.9375rem, 2.5vw, 1rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
  justify-content: center;

  .ant-btn {
    min-width: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;

    .ant-btn {
      width: 100%;
    }
  }
`;
