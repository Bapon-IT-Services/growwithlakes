import styled from 'styled-components';
import { PageContainer, SectionShell, SectionTitle } from '../../styles/sectionPrimitives';

export const Section = styled(SectionShell)`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 55% 50% at 0% 0%, rgba(212, 175, 55, 0.09), transparent 68%),
      radial-gradient(ellipse 40% 40% at 100% 100%, rgba(212, 175, 55, 0.05), transparent 70%);
  }
`;

export const Inner = styled(PageContainer)`
  position: relative;
`;

export const Header = styled.div`
  margin-bottom: clamp(2rem, 4vw, 2.75rem);
  text-align: left;
  max-width: 40rem;
`;

export const Rule = styled.span`
  display: block;
  width: 2.75rem;
  height: 1px;
  margin: 0 0 1rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gold},
    rgba(212, 175, 55, 0.15)
  );
`;

export const Title = styled(SectionTitle)`
  
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.15rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.35rem;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: clamp(1.5rem, 2.5vw, 1.85rem) clamp(1.35rem, 2vw, 1.65rem);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radius.md};
  transition:
    border-color 0.3s ease,
    background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.035);
    border-color: rgba(212, 175, 55, 0.22);
  }
`;

export const CardTitle = styled.h3`
  margin: 0 0 0.85rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  font-weight: 500;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.white};
`;

export const CardText = styled.p`
  margin: 0;
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.72;
  color: ${({ theme }) => theme.colors.muted};
`;
