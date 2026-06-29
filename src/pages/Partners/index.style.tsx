import styled, { css, keyframes } from 'styled-components';
import { SectionTitle } from '../../styles/sectionPrimitives';

const marqueeScroll = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
`;

export const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: clamp(2.75rem, 5vw, 4rem) 1.5rem;
  background: transparent;
  scroll-margin-top: calc(${({ theme }) => theme.headerHeight} + 16px);
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 1.75rem;
  text-align: center;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Rule = styled.span`
  display: block;
  width: 2.75rem;
  height: 1px;
  margin: 0 auto 1rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gold},
    rgba(212, 175, 55, 0.15)
  );
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

export const Title = styled(SectionTitle)`
  margin: 0 0 1rem;
`;

export const Intro = styled.p`
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.72;
  color: ${({ theme }) => theme.colors.muted};
`;

export const PartnerMarqueeViewport = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: min(100%, 36rem);
  margin: 0 auto 1.75rem;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 2%, #000 98%, transparent);

  @media (min-width: 640px) {
    max-width: min(100%, 42rem);
  }

  @media (min-width: 1024px) {
    max-width: min(100%, 48rem);
  }
`;

export const PartnerMarqueeTrack = styled.div<{ $duration: number; $active: boolean }>`
  display: flex;
  width: max-content;
  ${({ $active, $duration }) =>
    $active && $duration > 0
      ? css`
          animation: ${marqueeScroll} ${$duration}s linear infinite;
        `
      : css`
          animation: none;
        `}
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const PartnerGroup = styled.div`
  display: flex;
  gap: 0.35rem;
  flex-wrap: nowrap;
  align-items: center;

  @media (min-width: 640px) {
    gap: 0.45rem;
  }
`;

export const PartnerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
  padding: 0.1rem 0.25rem;
  text-align: center;
  background: transparent;
`;

export const PartnerLogo = styled.span`
  width: clamp(52px, 14vw, 72px);
  height: clamp(52px, 14vw, 72px);
  border-radius: clamp(8px, 1.5vw, 14px);
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
  }
`;

export const PartnerName = styled.span`
  font-size: 0.58rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  line-height: 1.15;
  opacity: 0.8;
`;

export const CtaRow = styled.div`
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
