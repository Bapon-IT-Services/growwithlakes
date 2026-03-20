import Reveal from '../../components/Reveal';
import * as S from './index.style';

export default function AboutUs() {
  return (
    <S.Section id="about">
      <Reveal>
        <S.Inner>
          <S.Label>About</S.Label>
          <S.Title>The platform</S.Title>
          <S.Body>
            <p>
              Grow With Lakes is the home for a growing ecosystem around Dr Lakes — where
              stories are told, artists are supported, and real connections turn into
              opportunity.
            </p>
            <p>
              This is the start of something intentional: a digital presence that invites
              collaborators, partners and the wider community to align with the brand, share
              what they bring, and grow together.
            </p>
          </S.Body>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
