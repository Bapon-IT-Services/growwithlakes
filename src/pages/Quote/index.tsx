import Reveal from '../../components/Reveal';
import * as S from './index.style';

export default function Quote() {
  return (
    <S.Section id="quote" aria-label="Featured quote">
      <Reveal sectionId="quote">
        <S.Inner>
          <S.Blockquote>
            I&apos;m not here because I&apos;ve figured everything out. I&apos;m here because
            I&apos;m still growing too. If you&apos;re ready to grow, let&apos;s build something
            meaningful together.
          </S.Blockquote>
          <S.Attribution>Dr Lakes</S.Attribution>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
