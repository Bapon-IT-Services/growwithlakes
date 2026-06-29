import Reveal from '../../components/Reveal';
import SocialLinks from '../../components/SocialLinks';
import * as S from './index.style';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <S.Section id="footer">
      <Reveal sectionId="footer">
        <S.Inner>
          <S.Brand>
            <S.BrandTitle>Grow With Lakes</S.BrandTitle>
            <S.PoweredBy>
              A platform connecting people to opportunities, partnerships and growth —
              through conversation, community and collaboration. Powered by Dr Lakes.
            </S.PoweredBy>
            <SocialLinks />
          </S.Brand>

          <S.Copyright>
            © {year} Grow With Lakes. Powered by Dr Lakes.
          </S.Copyright>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
