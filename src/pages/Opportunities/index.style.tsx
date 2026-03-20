import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: 5.5rem 1.5rem;
  background: transparent;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Panel = styled(motion.div)`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: clamp(2rem, 4.5vw, 3rem);
  border-radius: ${({ theme }) => theme.radius.lg};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: grid;
  gap: 2rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr auto;
    gap: 3rem;
  }
`;

export const Copy = styled.div`
  max-width: 36rem;
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
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(2rem, 4vw, 2.85rem);
  line-height: 1.12;
  color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.p`
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  min-width: min(100%, 240px);
`;
