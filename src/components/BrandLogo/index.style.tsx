import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Name = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.15rem, 3.5vw, 1.5rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.25s ease;
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  flex-shrink: 0;
  min-width: 0;
  text-decoration: none;
  color: inherit;

  &:hover ${Name} {
    color: ${({ theme }) => theme.colors.goldBright};
  }
`;

export const Mark = styled.span`
  flex-shrink: 0;
  width: 2.35rem;
  height: 2.35rem;
  color: ${({ theme }) => theme.colors.gold};

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Wordmark = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
`;

export const Tag = styled.span`
  font-size: 0.5625rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedDark};

  @media (max-width: 359px) {
    display: none;
  }
`;
