import Reveal from '../../components/Reveal';
import * as S from './index.style';

const together = ['Learning together.', 'Building together.', 'Growing together.'] as const;

const honestLines = [
  'Not because I have all the answers.',
  'Not because I’ve got everything figured out.',
  'And certainly not because I’m perfect.',
] as const;

export default function AboutUs() {
  return (
    <S.Section id="about">
      <Reveal sectionId="about">
        <S.Inner>
          <S.Header>
            <S.Rule aria-hidden />
            <S.Title>About Dr Lakes</S.Title>
          </S.Header>

          <S.Layout>
            <S.Aside>
              <S.PortraitFrame>
                <S.PortraitPlaceholder>
                  <S.PortraitIcon aria-hidden>◇</S.PortraitIcon>
                  <S.PortraitLabel>photo placeholder</S.PortraitLabel>
                </S.PortraitPlaceholder>
              </S.PortraitFrame>
              <S.SideQuote>
                &ldquo;Growth has never been a straight line for me.&rdquo;
              </S.SideQuote>
            </S.Aside>

            <S.Main>
              <S.BodyText>
                Like many people, I&apos;ve faced challenges that could easily have caused me to
                stop, settle or give up on the things I believed were possible. Living with a
                chronic illness has forced me to view life differently it taught me resilience,
                adaptability and the importance of finding purpose, even during difficult seasons.
              </S.BodyText>
              <S.BodyText>
                There have been moments where my health, personal responsibilities and life
                circumstances have tested me in ways that few people see. Yet those experiences
                became the foundation of everything I do today.
              </S.BodyText>

              <S.Callout>
                <S.BodyText>
                  I didn&apos;t create Grow With Lakes because I wanted to become an influencer.
                </S.BodyText>
                <S.BodyText>
                  I created it because I understand what it feels like to need encouragement,
                  opportunity, guidance and someone who genuinely believes in your potential.
                </S.BodyText>
              </S.Callout>

              <S.SectionDivider />

              <S.BodyText>
              Throughout my career, whether working in hospitality, supporting community initiatives, developing talent, hosting conversations, organising events or mentoring others, I found the greatest fulfilment came from helping people recognise possibilities they couldn't yet see for themselves.
              </S.BodyText>
            </S.Main>
          </S.Layout>

          <S.MissionCenter>
            <S.GoldLead>That passion led me to create Grow With Lakes.</S.GoldLead>
            <S.CenteredText>
              A platform built to connect people to opportunity through conversation, creative
              development, business support and collaboration.
            </S.CenteredText>
            <S.RoleLine>
              As a community connector, podcast host, A&amp;R and coach,
            </S.RoleLine>

            <S.MissionPanel>
              <S.MissionRule aria-hidden />
              <S.MissionLabel>My mission</S.MissionLabel>
              <S.MissionTitle>To help people grow.</S.MissionTitle>
              <S.MissionAccent aria-hidden />
              <S.MissionRule aria-hidden />
            </S.MissionPanel>
          </S.MissionCenter>

          <S.Closing>
            <S.HonestGroup>
              {honestLines.map((line) => (
                <S.HonestLine key={line}>{line}</S.HonestLine>
              ))}
            </S.HonestGroup>
            <S.TruthLead>
              The truth is, I&apos;m still learning, still evolving and still growing myself.
            </S.TruthLead>

            <S.ApproachBand>          
              <S.ApproachQuote>
                Grow With Lakes isn&apos;t about me standing at the finish line telling others how
                to get there.
              </S.ApproachQuote>
              <S.ApproachHeader>
                <S.ApproachRule aria-hidden />
                <S.ApproachLabel>It's about walking the journey together</S.ApproachLabel>
                <S.ApproachRule aria-hidden />
              </S.ApproachHeader>
              <S.TogetherBand>
                {together.map((line) => (
                  <S.TogetherPhrase key={line}>{line}</S.TogetherPhrase>
                ))}
              </S.TogetherBand>
            </S.ApproachBand>

            <S.ProgressQuote>
              <em>Because growth isn&apos;t about perfection.</em>{' '}
              <strong>It&apos;s about progress.</strong>
            </S.ProgressQuote>
            <S.ClosingCta>
              So if you&apos;re ready to grow, let&apos;s build something meaningful together.
            </S.ClosingCta>
          </S.Closing>

          <S.Farewell>
            <S.WelcomeLine>Welcome to the journey.</S.WelcomeLine>
            <S.Signature>— Dr Lakes</S.Signature>
          </S.Farewell>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
