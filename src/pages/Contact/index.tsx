import Reveal from '../../components/Reveal';
import { links } from '../../config/links';
import * as S from './index.style';

const linkMotion = {
  whileHover: { y: -2, transition: { type: 'spring', stiffness: 400, damping: 24 } },
  whileTap: { scale: 0.98 },
} as const;

export default function Contact() {
  return (
    <S.Section id="contact">
      <Reveal>
        <S.Inner>
          <S.Label>Contact</S.Label>
          <S.Title>Let&apos;s talk</S.Title>
          <S.Details>
            <S.Link href={links.email} {...linkMotion}>
              jamaila@growwithlakes.com
            </S.Link>
            <S.Phone href={links.phone} {...linkMotion}>
            +44 0208 193 1234
            </S.Phone>
          </S.Details>
          <S.Footnote>Grow With Lakes · Powered by Dr Lakes</S.Footnote>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
