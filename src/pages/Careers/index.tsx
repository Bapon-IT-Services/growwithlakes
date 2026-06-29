import { Button } from 'antd';
import { useEffect } from 'react';
import Reveal from '../../components/Reveal';
import { careerRoles, focusAreas } from '../../config/careers';
import CareerRoleItem from './CareerRoleItem';
import { links } from '../../config/links';
import { popIn, staggerFast } from '../../motion/variants';
import Footer from '../Footer';
import CareersHeader from './CareersHeader';
import * as S from './index.style';

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Page>
      <S.Mesh aria-hidden />
      <S.GridOverlay aria-hidden />
      <CareersHeader />
      <S.Main>
        <S.Hero>
          <Reveal>
            <S.HeroEyebrow>Careers · Grow With Lakes Platform</S.HeroEyebrow>
            <S.HeroTitle>
              Join the team behind the <S.HeroAccent>platform</S.HeroAccent>
            </S.HeroTitle>
            <S.HeroLead>
              Grow With Lakes connects people to opportunities, partnerships and growth
              through conversation, community and collaboration. These roles are for people
              who want to help build that ecosystem — powered by Dr Lakes.
            </S.HeroLead>
          </Reveal>
          {/* <S.PlatformNote>
            <strong>Looking for coaching or collaboration instead?</strong> Visit{' '}
            <S.InlineLink to="/#work-with-me">Work With Me</S.InlineLink> on the home page
            to book a free consultation — this careers page is for joining the team.
          </S.PlatformNote> */}
          <S.PillRow
            variants={staggerFast}
            initial="hidden"
            animate="show"
            aria-label="Platform focus areas"
          >
            {focusAreas.map((area) => (
              <S.Pill key={area} $area={area} variants={popIn}>
                {area}
              </S.Pill>
            ))}
          </S.PillRow>
        </S.Hero>

        <S.RolesSection aria-labelledby="open-roles-heading">
          <Reveal>
            <S.RolesHeading id="open-roles-heading">Open roles on the platform</S.RolesHeading>
            <S.RolesIntro>
              Jobs, interviews, creative collaborations and community-led opportunities —
              explore directions below and apply when something aligns with your skills and
              passion for growth.
            </S.RolesIntro>
          </Reveal>
          <S.RoleList
            variants={staggerFast}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-6% 0px' }}
          >
            {careerRoles.map((role, index) => (
              <CareerRoleItem key={role.id} role={role} index={index} />
            ))}
          </S.RoleList>
        </S.RolesSection>

        <Reveal>
          <S.CtaBand>
            <S.CtaTitle>Not seeing the right role?</S.CtaTitle>
            <S.CtaText>
              Send a general career inquiry and tell us how you could contribute to the
              platform. We read every message and follow up when there is alignment.
            </S.CtaText>
            <S.CtaRow>
              <Button size="large" type="primary" href={links.generalCareerApply}>
                General career inquiry
              </Button>
              <Button size="large" href="/#work-with-me">
                Work With Me
              </Button>
            </S.CtaRow>
          </S.CtaBand>
        </Reveal>

        <Footer />
      </S.Main>
    </S.Page>
  );
}
