import styled from 'styled-components';
import {
  PageContainer,
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
    background: radial-gradient(
      ellipse 70% 55% at 50% 100%,
      rgba(212, 175, 55, 0.07) 0%,
      transparent 70%
    );
  }
`;

export const Inner = styled(PageContainer)`
  position: relative;
  text-align: center;
`;

export const Rule = styled(SectionRule)`
  margin: 0 auto 1rem;
`;

export const Label = styled(SectionLabel)``;

export const Title = styled(SectionTitle)`
  margin-bottom: 1.5rem;
`;

export const Pillars = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Pillar = styled.span`
  padding: 0.45rem 0.9rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  border-bottom: 1px solid rgba(212, 175, 55, 0.35);
`;

export const Body = styled(SectionLead)`
  margin: 0 auto 1.25rem;
  max-width: 44rem;
`;

export const Note = styled.p`
  margin: 0 auto;
  max-width: 40rem;
  font-size: 0.875rem;
  line-height: 1.65;
  font-style: italic;
  color: ${({ theme }) => theme.colors.mutedDark};
`;
