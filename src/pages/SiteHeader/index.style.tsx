import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: ${({ theme }) => theme.headerHeight};
  display: flex;
  align-items: center;
  background: rgba(5, 5, 5, 0.72);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
`;

export const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Brand = styled.a`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;

  span {
    color: ${({ theme }) => theme.colors.gold};
    font-weight: 400;
  }
`;

export const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: 1.75rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled.a`
  position: relative;
  font-size: 0.8125rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.muted};
  transition: color 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.gold}, transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const NavCompact = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
