import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: 3.25rem 1.5rem 2.75rem;
  background: transparent;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  align-items: end;
  gap: 1rem;
  text-align: center;

  @media (min-width: 900px) {
    grid-template-columns: 1.2fr 0.8fr;
    text-align: left;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;

  @media (min-width: 900px) {
    align-items: flex-start;
  }
`;

export const BrandTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 500;
  font-size: 1.65rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const PoweredBy = styled.p`
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
  max-width: 50rem;
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.mutedDark};

  @media (min-width: 900px) {
    text-align: right;
  }
`;

