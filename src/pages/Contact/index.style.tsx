import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: 5.5rem 1.5rem 6.5rem;
  background: transparent;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  text-align: center;
  padding: clamp(2.25rem, 5vw, 3.25rem);
  border-radius: ${({ theme }) => theme.radius.lg};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;
`;

export const Title = styled.h2`
  margin: 0 0 2rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(2rem, 4vw, 2.85rem);
  line-height: 1.12;
  color: ${({ theme }) => theme.colors.white};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
`;

export const Link = styled(motion.a)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
  padding-bottom: 2px;
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.colors.goldBright};
    border-color: ${({ theme }) => theme.colors.goldBright};
  }
`;

export const Phone = styled(Link)`
  font-variant-numeric: tabular-nums;
`;

export const Footnote = styled.p`
  margin: 3rem 0 0;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.mutedDark};
  letter-spacing: 0.02em;
`;
