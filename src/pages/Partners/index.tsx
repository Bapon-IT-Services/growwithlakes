import { Button, Space } from 'antd';
import Reveal from '../../components/Reveal';
import { links } from '../../config/links';
import { fadeUp, partnerNameIn, staggerFast } from '../../motion/variants';
import * as S from './index.style';

const partnerNames = [
  'PMP Records',
  'Code 7',
  'Juscoolradio',
  'Brixton Soup Kitchen',
  'Lambeth Careers Hub',
] as const;

export default function Partners() {
  return (
    <S.Section id="partners">
      <S.Inner>
        <Reveal>
          <S.Header>
            <S.Label>Partners</S.Label>
            <S.Title>Aligned collaborators</S.Title>
            <S.Intro>
              A growing network of organisations and platforms that share the values of
              community, culture and forward motion. Official partners are featured here as
              the ecosystem expands.
            </S.Intro>
          </S.Header>
        </Reveal>
        <S.PartnerMarqueeViewport
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          aria-label="Partner organisations"
        >
          <S.PartnerMarqueeTrack>
            <S.PartnerGroup aria-hidden>
              {partnerNames.map((name) => (
                <S.PartnerItem
                  key={`a-${name}`}
                  variants={partnerNameIn}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow:
                      '0 20px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(212, 175, 55, 0.35)',
                    transition: { type: 'spring', stiffness: 420, damping: 22 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {name}
                </S.PartnerItem>
              ))}
            </S.PartnerGroup>

            <S.PartnerGroup aria-hidden>
              {partnerNames.map((name) => (
                <S.PartnerItem
                  key={`b-${name}`}
                  variants={partnerNameIn}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow:
                      '0 20px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(212, 175, 55, 0.35)',
                    transition: { type: 'spring', stiffness: 420, damping: 22 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {name}
                </S.PartnerItem>
              ))}
            </S.PartnerGroup>
          </S.PartnerMarqueeTrack>
        </S.PartnerMarqueeViewport>
        <S.CtaRow
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-8% 0px' }}
        >
          <Space size="middle" wrap>
            <Button type="primary" size="large" href={links.becomePartner}>
              Become a Partner
            </Button>
            <Button size="large" href={links.registerInterest}>
              Register Interest
            </Button>
          </Space>
        </S.CtaRow>
      </S.Inner>
    </S.Section>
  );
}
