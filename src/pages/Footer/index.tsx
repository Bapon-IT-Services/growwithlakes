import Reveal from '../../components/Reveal';
import * as S from './index.style';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <S.Section id="footer">
      <Reveal>
        <S.Inner>
          <S.Brand>
            <S.BrandTitle>Grow With Lakes</S.BrandTitle>
            <S.PoweredBy>
              Powered by Dr Lakes. A community-driven platform connecting media,
              creatives, businesses and opportunities.
            </S.PoweredBy>
          </S.Brand>

          <S.Copyright>
            © {year} Grow With Lakes. Powered by Dr Lakes.
          </S.Copyright>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}

