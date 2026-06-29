import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
`;

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.gold};
  font-size: 1.15rem;
  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    transform 0.25s ease;

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.goldBright};
    border-color: rgba(212, 175, 55, 0.5);
    background: rgba(212, 175, 55, 0.08);
    transform: translateY(-2px);
  }
`;
