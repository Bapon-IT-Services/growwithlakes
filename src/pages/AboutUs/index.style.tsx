import styled from 'styled-components';

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
  padding: clamp(2rem, 5vw, 2.75rem);
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
  margin: 0 0 1.5rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: clamp(2rem, 4vw, 2.85rem);
  line-height: 1.12;
  color: ${({ theme }) => theme.colors.white};
`;

export const Body = styled.div`
  max-width: 42rem;
  font-size: 1.0625rem;
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.muted};

  p {
    margin: 0 0 1.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
