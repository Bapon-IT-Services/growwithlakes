import Reveal from '../../components/Reveal';
import * as S from './index.style';

const pillars = ['Conversation', 'Community', 'Opportunity', 'Growth'] as const;

export default function ImpactCommunity() {
  return (
    <S.Section id="impact">
      <Reveal sectionId="impact">
        <S.Inner>
          <S.Rule aria-hidden />
          <S.Label>Impact &amp; Community</S.Label>
          <S.Title>Where connection becomes momentum</S.Title>
          <S.Pillars aria-label="Platform focus">
            {pillars.map((pillar) => (
              <S.Pillar key={pillar}>{pillar}</S.Pillar>
            ))}
          </S.Pillars>
          <S.Body>
            Supporting artists, entrepreneurs, businesses and community projects through
            conversation, opportunity, connection and collaboration.
          </S.Body>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
