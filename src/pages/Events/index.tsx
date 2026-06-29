import { Button } from 'antd';
import Reveal from '../../components/Reveal';
import { links } from '../../config/links';
import * as S from './index.style';

const eventTypes = [
  {
    title: 'Workshops',
    text: 'Hands-on sessions to learn, create and grow alongside others.',
  },
  {
    title: 'Live Shows',
    text: 'Culture, music and conversation brought to life on stage.',
  },
  {
    title: 'Community Events',
    text: 'Spaces where local projects and people come together.',
  },
  {
    title: 'Networking Events',
    text: 'Meet collaborators, partners and opportunity-makers in the room.',
  },
  {
    title: 'Grow With Lakes Experiences',
    text: 'Signature platform moments built around growth and connection.',
  },
] as const;

export default function Events() {
  return (
    <S.Section id="events">
      <Reveal sectionId="events">
        <S.Inner>
          <S.Header>
            <S.Rule aria-hidden />
            <S.Label>Events</S.Label>
            <S.Title>The platform comes alive</S.Title>
            <S.Intro>
              From workshops and live shows to networking and community experiences —
              discover what&apos;s on through Eventbrite.
            </S.Intro>
          </S.Header>

          <S.Grid>
            {eventTypes.map((event, index) => (
              <S.Card key={event.title}>
                <S.CardIndex>{String(index + 1).padStart(2, '0')}</S.CardIndex>
                <S.CardTitle>{event.title}</S.CardTitle>
                <S.CardText>{event.text}</S.CardText>
              </S.Card>
            ))}
          </S.Grid>

          <S.CtaBand>
            <S.CtaCopy>
              Workshops, live shows, community gatherings and Grow With Lakes experiences —
              all listed on Eventbrite.
            </S.CtaCopy>
            <S.CtaActions>
              <Button type="primary" size="large" href={links.eventbrite} target="_blank">
                View Events
              </Button>
            </S.CtaActions>
          </S.CtaBand>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
