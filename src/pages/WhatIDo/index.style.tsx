import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: 6rem 1.5rem;
  background: transparent;
  scroll-margin-top: calc(${({ theme }) => theme.headerHeight} + 16px);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 2.75rem;
  max-width: 32rem;
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
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(2rem, 4vw, 2.85rem);
  line-height: 1.12;
  color: ${({ theme }) => theme.colors.white};
`;

export const Grid = styled(motion.div)`
  display: grid;
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled(motion.article)`
  padding: 1.85rem 1.65rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(212, 175, 55, 0.32);
    box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.08);
  }
`;

export const CardTitle = styled.h3`
  margin: 0 0 0.75rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export const CardText = styled.p`
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.68;
  color: ${({ theme }) => theme.colors.muted};
`;
