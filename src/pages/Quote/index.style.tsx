import styled from 'styled-components';
import { SectionShell } from '../../styles/sectionPrimitives';

export const Section = styled(SectionShell)`
  text-align: center;
  overflow: hidden;
`;

export const Inner = styled.div`
  position: relative;
  max-width: min(52rem, 100%);
  margin: 0 auto;
  padding: 0 clamp(0.5rem, 3vw, 2rem);

  &::before,
  &::after {
    content: '“';
    position: absolute;
    top: -0.5rem;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(4rem, 12vw, 6rem);
    line-height: 1;
    color: ${({ theme }) => theme.colors.gold};
    opacity: 0.2;
    pointer-events: none;
  }

  &::before {
    left: 0;
  }

  &::after {
    content: '”';
    right: 0;
    top: auto;
    bottom: 2rem;
  }
`;

export const Mark = styled.span`
  display: none;
`;

export const Blockquote = styled.blockquote`
  margin: 0;
  padding: clamp(1.5rem, 4vw, 2.5rem) 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.35rem, 3.2vw, 1.85rem);
  font-weight: 500;
  font-style: italic;
  line-height: 1.55;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.white};
`;

export const Attribution = styled.cite`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;
