import { Button } from 'antd';
import Reveal from '../../components/Reveal';
import { links } from '../../config/links';
import * as S from './index.style';

const opportunityTypes = [
  'Jobs',
  'Interviews',
  'Creative Collaborations',
  'Community-Led Opportunities',
  'Events & Workshops',
] as const;

export default function Opportunities() {
  return (
    <S.Section id="opportunities">
      <Reveal sectionId="opportunities">
        <S.Panel>
          <S.Copy>
            <S.Rule aria-hidden />
            <S.Label>Opportunities</S.Label>
            <S.Title>Growth starts with access</S.Title>
            <S.Text>We connect people to:</S.Text>
            <S.List>
              {opportunityTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </S.List>
          </S.Copy>
          <S.Actions>
            <Button type="primary" size="large" block href={links.careers}>
              Explore Opportunities
            </Button>
            <Button size="large" block href={links.applyNow}>
              Apply Now
            </Button>
            <Button size="large" block href={links.eventbrite} target="_blank">
              View Events
            </Button>
          </S.Actions>
        </S.Panel>
      </Reveal>
    </S.Section>
  );
}
