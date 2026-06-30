import Reveal from '../../components/Reveal';
import * as S from './index.style';

const offerings = [
  {
    title: 'The Wave Room – Media Platform',
    text: 'Home to On Air Off Script, creating real conversations and cultural moments through music, discussion and storytelling.',
  },
  {
    title: 'A&R & Artist Development',
    text: 'Supporting talent with direction, exposure and growth.',
  },
  {
    title: 'Community Connector',
    text: 'Connecting people, businesses and organisations to opportunities, partnerships and meaningful growth.',
  },
  {
    title: 'Coaching, Consultancy & Events',
    text: 'Helping individuals, brands and businesses build ideas, confidence, structure and meaningful experiences.',
  },
] as const;

export default function WhatIDo() {
  return (
    <S.Section id="what-i-do">
      <Reveal sectionId="what-i-do">
        <S.Inner>
          <S.Title>What I do</S.Title>
          <S.Grid>
            {offerings.map((item) => (
              <S.Card key={item.title}>
                <S.CardTitle>{item.title}</S.CardTitle>
                <S.CardText>{item.text}</S.CardText>
              </S.Card>
            ))}
          </S.Grid>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
