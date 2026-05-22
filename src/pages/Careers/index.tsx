import { Button } from 'antd';
import { useEffect } from 'react';
import Reveal from '../../components/Reveal';
import { careerRoles, focusAreas } from '../../config/careers';
import { links } from '../../config/links';
import { popIn, staggerFast } from '../../motion/variants';
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
            <S.HeroEyebrow>Open roles · Grow With Lakes</S.HeroEyebrow>
            <S.HeroTitle>Build the <S.HeroAccent>ecosystem</S.HeroAccent> with us</S.HeroTitle>
            <S.HeroLead>
              Grow With Lakes is building a team around media, music, community and
              partnerships. Explore open directions below — applying opens your email with a
              ready-to-send message so we can pick up the conversation quickly.
            </S.HeroLead>
          </Reveal>
          <S.PillRow
            variants={staggerFast}
            initial="hidden"
            animate="show"
            aria-label="Focus areas"
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
            <S.RolesHeading id="open-roles-heading">Open directions</S.RolesHeading>
          </Reveal>
          <S.RoleList
            variants={staggerFast}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-6% 0px' }}
          >
            {careerRoles.map((role, index) => (
              <S.RoleItem
                key={role.id}
                variants={popIn}
                whileHover={{
                  x: 4,
                  transition: { type: 'spring', stiffness: 400, damping: 28 },
                }}
              >
                <S.RoleIndex aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </S.RoleIndex>
                <S.RoleBody>
                  <S.RoleMeta>{role.type}</S.RoleMeta>
                  <S.RoleTitle>{role.title}</S.RoleTitle>
                  <S.RoleSummary>{role.summary}</S.RoleSummary>
                </S.RoleBody>
                <Button type="primary" href={role.applyHref}>
                  Apply
                </Button>
              </S.RoleItem>
            ))}
          </S.RoleList>
        </S.RolesSection>

        <Reveal>
          <S.CtaBand>
            <S.CtaTitle>Not seeing your fit?</S.CtaTitle>
            <S.CtaText>
              Send a general career inquiry or explore how we can work together — we read
              every message and follow up when there is alignment.
            </S.CtaText>
            <S.CtaRow>
              <Button size="large" type="primary" href={links.generalCareerApply}>
                General career inquiry
              </Button>
              <Button size="large" href={links.workWithMe}>
                Work With Me
              </Button>
            </S.CtaRow>
          </S.CtaBand>
        </Reveal>

        <S.PageFooter>
          <S.PageFooterLink to="/">← Return to Grow With Lakes</S.PageFooterLink>
        </S.PageFooter>
      </S.Main>
    </S.Page>
  );
}
