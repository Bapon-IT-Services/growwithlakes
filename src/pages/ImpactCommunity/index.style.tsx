import styled, { css } from 'styled-components';
import {
  PageContainer,
  SectionDivider,
  SectionLabel,
  SectionLead,
  SectionRule,
  SectionShell,
  SectionTitle,
} from '../../styles/sectionPrimitives';

export const Section = styled(SectionShell)`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 55% 45% at 0% 20%, rgba(212, 175, 55, 0.06), transparent 70%),
      radial-gradient(ellipse 50% 40% at 100% 80%, rgba(212, 175, 55, 0.05), transparent 65%);
  }
`;

export const Inner = styled(PageContainer)`
  position: relative;
`;

export const Header = styled.header`
  max-width: 44rem;
  margin-bottom: clamp(2.25rem, 4.5vw, 3rem);
`;

export const Rule = styled(SectionRule)``;

export const Label = styled(SectionLabel)``;

export const Title = styled(SectionTitle)`
  margin-bottom: 0.75rem;
`;

export const Body = styled(SectionLead)`
  margin: 0 0 1.35rem;
`;

export const Pillars = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.65rem;
`;

export const Pillar = styled.span`
  padding: 0.35rem 0;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};

  &:not(:last-child)::after {
    content: '·';
    margin-left: 0.65rem;
    color: ${({ theme }) => theme.colors.mutedDark};
    font-weight: 400;
  }
`;

export const Block = styled.section`
  margin-top: clamp(2.75rem, 5vw, 3.75rem);
`;

export const BlockHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.5rem 1.25rem;
  margin-bottom: clamp(1.35rem, 3vw, 1.85rem);
  padding-bottom: 0.85rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const BlockTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.white};
`;

export const BlockHint = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedDark};
`;

/* —— Testimonials: scannable review cards —— */

export const TestimonialGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(0, 1fr);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.15rem;
  }
`;

export const ReviewCard = styled.blockquote`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 100%;
  padding: 1.35rem 1.25rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition:
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    border-color: rgba(212, 175, 55, 0.35);
    transform: translateY(-2px);
  }
`;

export const StarRow = styled.div`
  display: flex;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.gold};
  font-size: 0.85rem;
  letter-spacing: 0.08em;
`;

export const ReviewQuote = styled.p`
  margin: 0;
  flex: 1;
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
`;

export const ReviewFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Avatar = styled.span`
  display: grid;
  place-items: center;
  width: 2.35rem;
  height: 2.35rem;
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.gold};
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.3);
`;

export const AuthorBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
`;

export const AuthorName = styled.cite`
  font-style: normal;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const AuthorRole = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.mutedDark};
`;

/* —— Case studies: challenge → result cards —— */

export const CaseStudyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`;

export const CaseStudyCard = styled.article`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.02);
`;

export const CaseStudyHeader = styled.header`
  padding: 1.15rem 1.25rem;
  background: linear-gradient(
    90deg,
    rgba(212, 175, 55, 0.1) 0%,
    rgba(212, 175, 55, 0.03) 100%
  );
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
`;

export const CaseTag = styled.span`
  display: inline-block;
  margin-bottom: 0.4rem;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

export const CaseTitle = styled.h4`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.white};
`;

export const CaseFlow = styled.div`
  display: grid;
  gap: 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto 1fr;
    align-items: stretch;
  }
`;

export const CaseStep = styled.div<{ $variant: 'challenge' | 'result' }>`
  padding: 1.15rem 1.25rem;

  ${({ $variant }) =>
    $variant === 'result' &&
    css`
      background: rgba(212, 175, 55, 0.05);

      @media (min-width: 768px) {
        border-left: 1px solid rgba(212, 175, 55, 0.15);
      }
    `}

  ${({ $variant }) =>
    $variant === 'challenge' &&
    css`
      @media (max-width: 767px) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }
    `}
`;

export const StepLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.55rem;
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

export const StepIcon = styled.span<{ $variant: 'challenge' | 'result' }>`
  display: grid;
  place-items: center;
  width: 1.35rem;
  height: 1.35rem;
  font-size: 0.65rem;
  font-weight: 700;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.gold};
  background: ${({ $variant }) =>
    $variant === 'result' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.06)'};
  border: 1px solid
    ${({ $variant }) =>
      $variant === 'result' ? 'rgba(212, 175, 55, 0.4)' : 'rgba(255, 255, 255, 0.12)'};
`;

export const StepText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.muted};
`;

export const CaseArrow = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 300;
  color: rgba(212, 175, 55, 0.55);
  background: rgba(255, 255, 255, 0.02);

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const CaseArrowMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px dashed rgba(212, 175, 55, 0.2);
  border-bottom: 1px dashed rgba(212, 175, 55, 0.2);

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.35), transparent);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

/* —— Event photos: bento mosaic —— */

export const PhotoMosaic = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(120px, auto);

  @media (min-width: 720px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-auto-rows: minmax(130px, auto);
    gap: 0.85rem;
  }
`;

const photoSpan = {
  hero: css`
    @media (min-width: 720px) {
      grid-column: span 7;
      grid-row: span 2;
    }
  `,
  tall: css`
    @media (min-width: 720px) {
      grid-column: span 5;
      grid-row: span 2;
    }
  `,
  wide: css`
    @media (min-width: 720px) {
      grid-column: span 7;
    }
  `,
  compact: css`
    @media (min-width: 720px) {
      grid-column: span 5;
    }
  `,
} as const;

export type PhotoSpan = keyof typeof photoSpan;

export const PhotoTile = styled.figure<{ $span: PhotoSpan; $tilt?: boolean }>`
  position: relative;
  margin: 0;
  min-height: 140px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.md};
  ${({ $span }) => photoSpan[$span]}

  ${({ $tilt }) =>
    $tilt &&
    css`
      @media (min-width: 720px) {
        transform: rotate(-1.25deg);
      }
    `}
`;

export const PhotoPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  width: 100%;
  height: 100%;
  min-height: inherit;
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

export const PhotoIcon = styled.span`
  font-size: 1.35rem;
  line-height: 1;
  opacity: 0.35;
`;

export const PhotoPlaceholderLabel = styled.span`
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedDark};
`;

export const PhotoCaption = styled.figcaption`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.25rem 0.75rem;
  margin-top: 0.55rem;
  padding: 0 0.15rem;
`;

export const PhotoTitle = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const PhotoEvent = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

/* —— Impact stories: editorial alternating rows —— */

export const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const StoryRow = styled.article`
  display: grid;
  gap: 1rem 1.5rem;
  padding: clamp(1.5rem, 3vw, 2rem) 0;

  @media (min-width: 768px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.6fr);
    align-items: center;
    gap: 2rem 3rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
`;

export const StoryLead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

export const StoryIndex = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

export const StoryHeadline = styled.h4`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.35rem, 2.5vw, 1.85rem);
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.white};
`;

export const StoryStat = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 0.35rem 0.7rem;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(212, 175, 55, 0.1);
`;

export const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StoryExcerpt = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
`;

export const StoryByline = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.65rem;
  font-size: 0.8125rem;
`;

export const StoryPerson = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const StoryContext = styled.span`
  color: ${({ theme }) => theme.colors.mutedDark};

  &::before {
    content: '—';
    margin-right: 0.65rem;
    color: rgba(212, 175, 55, 0.45);
  }
`;

export const Divider = styled(SectionDivider)``;

export const Note = styled.p`
  margin: clamp(2.25rem, 4vw, 3rem) 0 0;
  padding-top: 1.25rem;
  max-width: 36rem;
  font-size: 0.8125rem;
  line-height: 1.65;
  font-style: italic;
  color: ${({ theme }) => theme.colors.mutedDark};
  border-top: 1px dashed rgba(212, 175, 55, 0.2);
`;
