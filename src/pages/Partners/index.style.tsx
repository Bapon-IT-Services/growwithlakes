import styled, { keyframes } from 'styled-components';
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

const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const PartnerMarqueeViewport = styled(motion.div)`
  position: relative;
  z-index: 1;
  margin: 0 0 2.5rem;
  overflow: hidden;

  /* Soft fade at edges for a more premium look */
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
`;

export const PartnerMarqueeTrack = styled.div`
  display: flex;
  gap: 0;
  width: max-content;
  animation: ${marquee} 26s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const PartnerGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: nowrap;
  align-items: center;
`;

export const PartnerItem = styled(motion.div)`
  padding: 0.65rem 1.15rem;
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
  gap: 1.25rem;
  justify-content: center;
  align-items: stretch;

  .ant-space {
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 1.25rem;
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
      gap: 1rem;
    }

    .ant-btn {
      width: auto;
    }
  }
`;
