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
  background: rgba(5, 5, 5, 0.78);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.28);
`;

export const Inner = styled.div`
  width: 100%;
  max-width: calc(${({ theme }) => theme.maxWidth} + 3rem);
  margin: 0 auto;
  padding: 0 1.25rem;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
    gap: 1.5rem;
  }
`;

export const Nav = styled.nav`
  display: none;
  align-items: center;
  justify-content: center;
  gap: clamp(0.85rem, 1.8vw, 1.35rem);
  min-width: 0;

  @media (min-width: 900px) {
    display: flex;
  }
`;

export const NavLink = styled.a`
  position: relative;
  font-size: 0.6875rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.muted};
  white-space: nowrap;
  transition: color 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  &:hover::after,
  &[data-active='true']::after {
    transform: scaleX(1);
  }

  &[data-active='true'] {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const HeaderCta = styled.a`
  display: none;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  padding: 0 1rem;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bg};
  background: ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radius.pill};
  white-space: nowrap;
  transition:
    background 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.goldBright};
    transform: translateY(-1px);
  }

  @media (min-width: 900px) {
    display: inline-flex;
  }
`;

export const NavMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 900px) {
    display: none;
  }
`;
