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
  padding: clamp(1.5rem, 3.5vw, 2.25rem);
  overflow: hidden;
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
  gap: 0.65rem;
  padding: 0;
  list-style: none;

  @media (min-width: 540px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
  }
`;

export const OpportunityItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 3rem;
  padding: 0.75rem 1rem;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.white};
  transition:
    border-color 0.25s ease,
    background 0.25s ease;

  &::before {
    content: '';
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.45);
  }

  // &:hover {
  //   background: rgba(212, 175, 55, 0.06);
  //   border-color: rgba(212, 175, 55, 0.28);
  // }

  &:last-child:nth-child(odd) {
    @media (min-width: 540px) and (max-width: 899px) {
      grid-column: 1 / -1;
      max-width: calc(50% - 0.375rem);
      justify-self: center;
    }
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
