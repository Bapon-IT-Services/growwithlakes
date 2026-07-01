import { Button } from 'antd';
import Reveal from '../../components/Reveal';
import { links } from '../../config/links';
import * as S from './index.style';

const services = [
  { title: 'Coaching' },
  { title: 'Artist Development' },
  { title: 'Event Support' },
  { title: 'Community Projects' },
  { title: 'Partnerships' },
  { title: 'Business Growth Conversations' },
] as const;

export default function WorkWithMe() {
  return (
    <S.Section id="work-with-me">
      <Reveal sectionId="work-with-me">
        <S.Inner>
          <S.Header>
            <S.Rule aria-hidden />
            <S.Label>Work With Me</S.Label>
            <S.Title>Collaborate with Dr Lakes</S.Title>
          </S.Header>
          <S.Grid>
            {services.map((item) => (
              <S.Card key={item.title}>
                <S.CardTitle>{item.title}</S.CardTitle>
              </S.Card>
            ))}
          </S.Grid>
          <S.CtaRow>
            <Button type="primary" size="large" href={links.calendly} target="_blank">
              Book a Free Consultation
            </Button>
          </S.CtaRow>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
