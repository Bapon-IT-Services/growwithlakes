import Reveal from '../../components/Reveal';
import { popIn, staggerFast } from '../../motion/variants';
import * as S from './index.style';

const services = [
  {
    title: 'Media & Hosting',
    text: 'Conversations and shows that put culture, talent and community in the spotlight — with a polished, broadcast-ready feel.',
  },
  {
    title: 'A&R & Artist Development',
    text: 'Supporting artists with direction, taste and strategy — from first impression to sustainable growth.',
  },
  {
    title: 'Coaching & Workshops',
    text: 'Sessions that build confidence, clarity and craft — for individuals and teams who want to level up.',
  },
] as const;

export default function WhatIDo() {
  return (
    <S.Section id="services">
      <S.Inner>
        <Reveal>
          <S.Header>
            {/* <S.Label>Services</S.Label> */}
            <S.Title>What I do</S.Title>
          </S.Header>
        </Reveal>
        <S.Grid
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
        >
          {services.map((item) => (
            <S.Card
              key={item.title}
              variants={popIn}
              whileHover={{
                y: -6,
                transition: { type: 'spring', stiffness: 400, damping: 22 },
              }}
            >
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardText>{item.text}</S.CardText>
            </S.Card>
          ))}
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
