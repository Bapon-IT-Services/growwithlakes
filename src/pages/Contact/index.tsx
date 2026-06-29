import Reveal from '../../components/Reveal';
import EnquiryForm from '../../components/EnquiryForm';
import SocialLinks from '../../components/SocialLinks';
import { links } from '../../config/links';
import * as S from './index.style';

const linkMotion = {
  whileHover: { y: -2, transition: { type: 'spring', stiffness: 400, damping: 24 } },
  whileTap: { scale: 0.98 },
} as const;

export default function Contact() {
  return (
    <S.Section id="contact">
      <Reveal sectionId="contact">
        <S.Inner>
          <S.IntroCol>
            <S.Rule aria-hidden />
            <S.Label>Contact</S.Label>
            <S.Title>Send an enquiry</S.Title>
            <S.Intro>
              Exploring opportunities, partnerships or collaboration? Share a few details and
              we&apos;ll be in touch.
            </S.Intro>
            <S.SideBlock>
              <S.SideLabel>Direct</S.SideLabel>
              <S.Details>
                <S.Link href={links.email} {...linkMotion}>
                growwithlakes@gmail.com
                </S.Link>
                <S.Phone href={links.phone} {...linkMotion}>
                  +44 0203 105 4511
                </S.Phone>


              </S.Details>
              <S.SocialWrap>
                <S.SideLabel>Follow the platform</S.SideLabel>
                <SocialLinks />
              </S.SocialWrap>
            </S.SideBlock>
          </S.IntroCol>
          <S.FormCol>
            <EnquiryForm />
          </S.FormCol>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
