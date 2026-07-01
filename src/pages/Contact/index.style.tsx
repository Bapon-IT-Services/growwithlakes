import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  PageContainer,
  SectionLabel,
  SectionLead,
  SectionRule,
  SectionShell,
  SectionTitle,
} from '../../styles/sectionPrimitives';

export const Section = styled(SectionShell)``;

export const Inner = styled(PageContainer)`
  display: grid;
  gap: clamp(1.75rem, 4vw, 2.5rem);
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 0.95fr 1.05fr;
    gap: 3.5rem;
    align-items: start;
  }
`;

export const IntroCol = styled.div``;

export const FormCol = styled.div`
  padding-top: 0.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1.5rem 0 1.5rem 2.5rem;
    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const Rule = styled(SectionRule)``;

export const Label = styled(SectionLabel)``;

export const Title = styled(SectionTitle)`
  margin-bottom: 0.75rem;
`;

export const Intro = styled(SectionLead)`
  margin-bottom: 2rem;
`;

export const SideBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const SideLabel = styled.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const Link = styled(motion.a)`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
  padding-bottom: 2px;
  display: inline-block;
  width: fit-content;

  &:hover {
    color: ${({ theme }) => theme.colors.goldBright};
    border-color: ${({ theme }) => theme.colors.goldBright};
  }
`;

export const Phone = styled(Link)`
  font-variant-numeric: tabular-nums;
`;

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  > div {
    justify-content: flex-start;
  }
`;
