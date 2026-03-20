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

export const PartnerMarqueeViewport = styled(motion.div)`
  position: relative;
  z-index: 1;
  margin: 0 0 2.5rem;
  overflow: hidden;

  /* Soft fade at edges for a more premium look */
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
`;

export const PartnerMarqueeTrack = styled(motion.div)`
  display: flex;
  gap: 0;
  width: max-content;
  will-change: transform;
`;

export const PartnerGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: nowrap;
  align-items: center;
`;

export const PartnerItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.18rem;
  padding: 0.2rem 0.55rem;
  text-align: center;
  background: transparent;
  border: 0;
  border-radius: 0;
  cursor: default;
`;

export const PartnerLogo = styled.span`
  width: clamp(56px, 9vw, 100px);
  height: clamp(56px, 9vw, 100px);
  border-radius: clamp(10px, 2vw, 18px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.goldBright};

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
    filter: drop-shadow(0 18px 28px rgba(212, 175, 55, 0.12));
  }
`;

export const PartnerName = styled.span`
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  line-height: 1.15;
  opacity: 0.8;
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
