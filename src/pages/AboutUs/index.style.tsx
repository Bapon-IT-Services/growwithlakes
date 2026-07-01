import styled from 'styled-components';
import {
  PageContainer,
  SectionRule,
  SectionShell,
  SectionTitle,
} from '../../styles/sectionPrimitives';

export const Section = styled(SectionShell)`
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 50% 42% at 0% 15%, rgba(212, 175, 55, 0.07), transparent 68%),
      radial-gradient(ellipse 38% 32% at 100% 85%, rgba(212, 175, 55, 0.04), transparent 65%);
  }
`;

export const Inner = styled(PageContainer)`
  position: relative;
`;

export const Header = styled.header`
  max-width: 44rem;
  margin-bottom: clamp(1.75rem, 3.5vw, 2.5rem);
`;

export const Rule = styled(SectionRule)``;

export const Title = styled(SectionTitle)`
  margin-bottom: 0.75rem;
`;

/* —— Story layout: portrait + narrative —— */

export const Layout = styled.div`
  display: grid;
  gap: clamp(2rem, 4vw, 2.75rem);

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 0.4fr) minmax(0, 0.6fr);
    gap: 2.5rem 3.5rem;
    align-items: start;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 2.5vw, 1.75rem);

  @media (min-width: 900px) {
    position: sticky;
    top: calc(${({ theme }) => theme.headerHeight} + 1.25rem);
  }
`;

export const PortraitFrame = styled.figure`
  margin: 0;
  width: 100%;
`;

export const PortraitPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  aspect-ratio: 4 / 5;
  border: 1px dashed rgba(212, 175, 55, 0.28);
  background:
    repeating-linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.015) 0,
      rgba(255, 255, 255, 0.015) 2px,
      transparent 2px,
      transparent 10px
    ),
    ${({ theme }) => theme.colors.surface};
`;

export const PortraitIcon = styled.span`
  font-size: 1.5rem;
  line-height: 1;
  opacity: 0.35;
`;

export const PortraitLabel = styled.span`
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedDark};
`;

export const SideQuote = styled.blockquote`
  margin: 0;
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(0.9rem, 2vw, 1.3rem);
  font-weight: 600;
  font-style: italic;
  line-height: 1.35;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.gold};
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.15rem, 2.5vw, 1.5rem);
  min-width: 0;
`;

export const BodyText = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Callout = styled.aside`
  margin: 0.25rem 0;
  padding: clamp(1.15rem, 2.5vw, 1.5rem) clamp(1.15rem, 2.5vw, 1.65rem);
  border-left: 3px solid ${({ theme }) => theme.colors.gold};
  background: ${({ theme }) => theme.colors.surface};
`;

export const CalloutTitle = styled.h3`
  margin: 0 0 0.85rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.35rem, 2.4vw, 1.75rem);
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.gold};
`;

export const MissionCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1rem, 2.5vw, 1.35rem);
  width: 100%;
  max-width: 40rem;
  margin: clamp(1.5rem, 5vw, 2.5rem) auto 0;
  padding: clamp(1.5rem, 3vw, 2rem) 0;
  text-align: center;
`;

export const CenteredText = styled.p`
  margin: 0;
  max-width: 34rem;
  font-size: 0.9375rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.muted};
`;

export const GoldLead = styled.p`
  margin: 0;
  max-width: 32rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  font-weight: 500;
  font-style: italic;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.gold};
`;

export const RoleLine = styled.p`
  margin: 0.15rem 0 0;
  max-width: 28rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gold};
`;

export const SectionDivider = styled.hr`
  margin: clamp(0.75rem, 2vw, 1.25rem) 0;
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;

export const MissionPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
  width: 100%;
  padding: clamp(1.25rem, 3vw, 1.75rem) 0 0;
  text-align: center;
`;

export const MissionRule = styled.span`
  display: block;
  width: min(100%, 28rem);
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;

export const MissionLabel = styled.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

export const MissionTitle = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.65rem, 3.5vw, 2.35rem);
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

export const MissionAccent = styled.span`
  display: block;
  width: 2.25rem;
  height: 1px;
  background: ${({ theme }) => theme.colors.gold};
`;

/* —— Closing: Dr Lakes + approach + CTA —— */

export const Closing = styled.div`
  padding-bottom: clamp(1rem, 2vw, 1.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.35rem, 3vw, 2rem);
  text-align: center;
`;

export const ClosingTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

export const HonestGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  max-width: 36rem;
`;

export const HonestLine = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.muted};
`;

export const TruthLead = styled.p`
  margin: 0;
  width: fit-content;
  max-width: 100%;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1rem, 2.2vw, 1.55rem);
  font-weight: 500;
  line-height: 1.4;
  white-space: normal;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    white-space: nowrap;
  }

  color: ${({ theme }) => theme.colors.gold};
`;

export const ApproachBand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.15rem, 2.5vw, 1.5rem);
  width: 100%;
  max-width: 40rem;
  margin: clamp(0.5rem, 2vw, 1rem) auto 0;
  padding: clamp(1.5rem, 3vw, 2rem) 0;
  text-align: center;
`;

export const ApproachHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  width: 100%;
`;

export const ApproachRule = styled.span`
  flex: 1;
  max-width: 5.5rem;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.border} 35%,
    transparent 100%
  );

  &:first-child {
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.border} 65%
    );
  }

  &:last-child {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.border} 35%,
      transparent
    );
  }
`;

export const ApproachLabel = styled.span`
  flex-shrink: 0;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

export const ApproachQuote = styled.p`
  margin: 0;
  max-width: 34rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.15rem, 2.2vw, 1.45rem);
  font-weight: 500;
  font-style: italic;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.white};
`;

export const TogetherBand = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(0.65rem, 2.5vw, 1.75rem);
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding-top: 0.35rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-wrap: nowrap;
  }
`;

export const TogetherPhrase = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  flex-shrink: 0;
  white-space: normal;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(0.8rem, 1.6vw, 1.1rem);
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    white-space: nowrap;
  }

  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const ProgressQuote = styled.p`
  margin: clamp(0.5rem, 2vw, 1rem) 0 0;
  max-width: 38rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.35rem, 2.8vw, 1.85rem);
  font-weight: 500;
  font-style: italic;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.white};

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.white};
  }

  strong {
    font-weight: 500;
    font-style: italic;
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const ClosingCta = styled.p`
  margin: 0;
  max-width: 36rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Farewell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
  padding-bottom: clamp(0.5rem, 2vw, 1rem);
  text-align: center;
`;

export const WelcomeLine = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.25rem, 2.5vw, 1.55rem);
  font-weight: 500;
  font-style: italic;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.white};
`;

export const Signature = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.1rem;
  font-weight: 500;
  font-style: italic;
  color: ${({ theme }) => theme.colors.gold};
`;
