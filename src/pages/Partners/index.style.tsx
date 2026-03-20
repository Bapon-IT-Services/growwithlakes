import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: 5.5rem 1.5rem;
  background: transparent;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
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

export const Intro = styled.p`
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.72;
  color: ${({ theme }) => theme.colors.muted};
`;

export const PartnerGrid = styled(motion.ul)`
  list-style: none;
  margin: 0 0 2.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

export const PartnerItem = styled(motion.li)`
  padding: 0.7rem 1.25rem;
  font-size: 0.8125rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: default;
`;

export const CtaRow = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  justify-content: center;
  align-items: stretch;

  .ant-space {
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0.875rem;
  }

  .ant-btn {
    width: 100%;
    min-width: 0;
    height: 50px !important;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .ant-space {
      width: auto;
      flex-direction: row;
      gap: 0;
    }

    .ant-btn {
      width: auto;
    }
  }
`;
