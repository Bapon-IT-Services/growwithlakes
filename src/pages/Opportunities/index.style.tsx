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
  display: grid;
  gap: 2.5rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr auto;
    gap: 3.5rem;
    align-items: start;
  }
`;

export const Copy = styled.div`
  width: 100%;

  @media (min-width: 900px) {
    padding-right: 2rem;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const Rule = styled(SectionRule)``;

export const Label = styled(SectionLabel)``;

export const Title = styled(SectionTitle)`
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  margin: 0 0 0.75rem;
  font-size: 1.0625rem;
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.muted};
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding: 0.45rem 0 0.45rem 1.35rem;
    font-size: 1rem;
    line-height: 1.55;
    color: ${({ theme }) => theme.colors.white};

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.95rem;
      width: 0.45rem;
      height: 1px;
      background: ${({ theme }) => theme.colors.gold};
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  min-width: min(100%, 260px);
`;
