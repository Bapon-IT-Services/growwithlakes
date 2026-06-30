import styled from 'styled-components';
import {
  PageContainer,
  SectionLabel,
  SectionLead,
  SectionRule,
  SectionShell,
  SectionTitle,
} from '../../styles/sectionPrimitives';

export const Section = styled(SectionShell)``;

export const Inner = styled(PageContainer)``;

export const Header = styled.div`
  margin-bottom: 2rem;
  max-width: 40rem;
`;

export const Rule = styled(SectionRule)``;

export const Intro = styled(SectionLead)``;

export const Label = styled(SectionLabel)``;

export const Title = styled(SectionTitle)``;

export const Grid = styled.div`
  display: grid;
  gap: 0;
  margin-bottom: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.article`
  padding: 1.35rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background 0.3s ease;

  @media (min-width: 640px) {
    border-right: 1px solid ${({ theme }) => theme.colors.border};

    &:nth-child(2n) {
      border-right: none;
    }
  }

  @media (min-width: 960px) {
    &:nth-child(2n) {
      border-right: 1px solid ${({ theme }) => theme.colors.border};
    }

    &:nth-child(3n) {
      border-right: none;
    }
  }

  &:hover {
    background: rgba(212, 175, 55, 0.04);
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const CtaRow = styled.div`
  display: flex;
  justify-content: flex-start;
`;
