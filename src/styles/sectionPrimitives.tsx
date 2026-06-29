import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

export const SectionShell = styled.section`
  position: relative;
  z-index: 1;
  padding: clamp(2.75rem, 5vw, 4rem) 1.5rem;
  scroll-margin-top: calc(${({ theme }) => theme.headerHeight} + 16px);
`;

export const SectionRule = styled.span`
  display: block;
  width: 2.75rem;
  height: 1px;
  margin-bottom: 1rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gold},
    rgba(212, 175, 55, 0.15)
  );
`;

export const SectionLabel = styled.span`
  display: block;
  margin-bottom: 0.65rem;
  font-size: 0.6875rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;
`;

export const SectionTitle = styled.h2`
  display: inline-block;
  width: fit-content;
  max-width: 100%;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(1.15rem, 2.65vw, 2.5rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  white-space: nowrap;
  background: linear-gradient(
    92deg,
    ${({ theme }) => theme.colors.white} 0%,
    #ede3c4 32%,
    ${({ theme }) => theme.colors.goldBright} 62%,
    ${({ theme }) => theme.colors.gold} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  @media (prefers-reduced-motion: reduce) {
    background: none;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SectionLead = styled.p`
  margin: 1rem 0 0;
  font-size: 1.0625rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.muted};
`;

export const SectionDivider = styled.div`
  height: 1px;
  margin: clamp(2.5rem, 6vw, 3.5rem) 0 0;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.border} 20%,
    ${({ theme }) => theme.colors.border} 80%,
    transparent
  );
`;
