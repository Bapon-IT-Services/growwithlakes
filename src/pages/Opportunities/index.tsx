import { Button } from 'antd';
import { links } from '../../config/links';
import { fadeIn } from '../../motion/variants';
import * as S from './index.style';

export default function Opportunities() {
  return (
    <S.Section id="opportunities">
      <S.Panel
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-12% 0px' }}
      >
        <S.Copy>
          <S.Label>Opportunities</S.Label>
          <S.Title>Connect the ecosystem</S.Title>
          <S.Text>
            Grow With Lakes exists to link creatives, businesses and community — so the
            right projects, roles and partnerships find the right people. Whether you are
            looking or listing, this is where the conversation starts.
          </S.Text>
        </S.Copy>
        <S.Actions>
          <Button type="primary" size="large" block href={links.viewOpportunities}>
            View Opportunities
          </Button>
          <Button size="large" block href={links.postOpportunity}>
            Post an Opportunity
          </Button>
        </S.Actions>
      </S.Panel>
    </S.Section>
  );
}
