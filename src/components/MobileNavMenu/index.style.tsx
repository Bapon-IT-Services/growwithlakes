import styled from 'styled-components';

export const MenuToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-radius: ${({ theme }) => theme.radius.sm};
  background: rgba(212, 175, 55, 0.08);
  color: ${({ theme }) => theme.colors.gold};
  cursor: pointer;
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.14);
    border-color: rgba(212, 175, 55, 0.5);
    color: ${({ theme }) => theme.colors.goldBright};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DrawerLink = styled.a<{ $active?: boolean }>`
  display: block;
  padding: 0.875rem 0.25rem;
  font-size: 0.9375rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ $active, theme }) => ($active ? theme.colors.gold : theme.colors.muted)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  &:last-child {
    border-bottom: none;
  }
`;
