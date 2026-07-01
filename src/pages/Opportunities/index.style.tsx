import styled from 'styled-components';
import {
  SectionLabel,
  SectionRule,
  SectionShell,
  SectionTitle,
} from '../../styles/sectionPrimitives';

export const Section = styled(SectionShell)``;

export const Panel = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: clamp(1.25rem, 3.5vw, 2.25rem) clamp(1rem, 3vw, 1.5rem);
`;

export const Header = styled.header`
  margin-bottom: 1.75rem;
  max-width: 36rem;
`;

export const Rule = styled(SectionRule)``;

export const Label = styled(SectionLabel)``;

export const Title = styled(SectionTitle)`
  margin-bottom: 0.65rem;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
`;

export const OpportunityGrid = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: clamp(0.85rem, 2.5vw, 1.75rem);
  padding: 0;
  margin-bottom: 1.5rem;
  list-style: none;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const OpportunityItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  white-space: nowrap;
  font-size: clamp(0.8125rem, 1.8vw, 0.9375rem);
  font-weight: 500;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.white};

  &::before {
    content: '';
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.45);
  }
`;

export const ActionBar = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ActionLabel = styled.span`
  display: block;
  margin-bottom: 1rem;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

export const ActionButtons = styled.div`
  display: grid;
  gap: 0.75rem;

  .ant-btn {
    height: 46px !important;
    border-radius: ${({ theme }) => theme.radius.md};
    font-weight: 600;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.85rem;
  }
`;
