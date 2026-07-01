import styled from 'styled-components';
import { SectionTitle } from '../../styles/sectionPrimitives';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: clamp(2.25rem, 5vw, 4rem) clamp(1rem, 4vw, 1.5rem);
  scroll-margin-top: calc(${({ theme }) => theme.headerHeight} + 16px);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 50% 40% at 0% 50%, rgba(212, 175, 55, 0.06), transparent 70%),
      radial-gradient(ellipse 40% 35% at 100% 80%, rgba(212, 175, 55, 0.04), transparent 65%);
  }
`;

export const Inner = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

export const Header = styled.div`
  max-width: 34rem;
  margin-bottom: 2.5rem;
`;

export const Rule = styled.span`
  display: block;
  width: 2.75rem;
  height: 1px;
  margin-bottom: 1rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gold},
    rgba(212, 175, 55, 0.15)
  );
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 0.65rem;
  font-size: 0.6875rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;
`;

export const Title = styled(SectionTitle)`
  margin: 0 0 0.75rem;
`;

export const Intro = styled.p`
  margin: 0;
  font-size: clamp(0.98rem, 2.2vw, 1.0625rem);
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
`;

export const Card = styled.article`
  position: relative;
  padding: 1.35rem 1.25rem 1.35rem 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  transition:
    background 0.3s ease,
    transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 1rem;
    bottom: 1rem;
    width: 2px;
    background: linear-gradient(
      180deg,
      transparent,
      ${({ theme }) => theme.colors.gold},
      transparent
    );
    opacity: 0.45;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background: rgba(212, 175, 55, 0.05);
    transform: translateY(-2px);
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const CardIndex = styled.span`
  display: block;
  margin-bottom: 0.65rem;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.gold};
`;

export const CardTitle = styled.h3`
  margin: 0 0 0.45rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.15rem, 2.5vw, 1.35rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const CardText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.muted};
`;

export const CtaBand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CtaCopy = styled.p`
  margin: 0;
  max-width: 28rem;
  font-size: 0.9375rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.muted};
`;

export const CtaActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;
