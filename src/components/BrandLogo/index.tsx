import { Link } from 'react-router-dom';
import * as S from './index.style.tsx';

export default function BrandLogo() {
  return (
    <S.Brand as={Link} to="/" aria-label="Grow With Lakes — home">
      {/* <S.Mark aria-hidden>
        <svg viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <path
            d="M8 28c4-6 10-9 14-9s10 3 14 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M11 22c3.5-4.5 7-6.5 11-6.5s7.5 2 11 6.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M14 16c3-3.5 5.5-4.5 8-4.5s5 1 8 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.45"
          />
        </svg>
      </S.Mark> */}
      <S.Wordmark>
        <S.Name>Grow With Lakes</S.Name>
        <S.Tag>Platform · Dr Lakes</S.Tag>
      </S.Wordmark>
    </S.Brand>
  );
}
