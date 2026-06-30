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
          <S.Header>
            <S.Rule aria-hidden />
            <S.Label>Opportunities</S.Label>
            <S.Title>Growth starts with access</S.Title>
            <S.Text>We connect people to:</S.Text>
          </S.Header>

          <S.OpportunityGrid>
            {opportunityTypes.map((item) => (
              <S.OpportunityItem key={item}>{item}</S.OpportunityItem>
            ))}
          </S.OpportunityGrid>

          <S.ActionBar>
            <S.ActionLabel>Take the next step</S.ActionLabel>
            <S.ActionButtons>
              <Button type="primary" size="large" block href={links.opportunitiesSection}>
                Explore Opportunities
              </Button>
              <Button size="large" block href={links.careers}>
                Apply Now
              </Button>
              <Button size="large" block href={links.eventbrite} target="_blank">
                View Events
              </Button>
            </S.ActionButtons>
          </S.ActionBar>
        </S.Panel>
      </Reveal>
    </S.Section>
  );
}
