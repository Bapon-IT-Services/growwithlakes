import Reveal from '../../components/Reveal';
import * as S from './index.style';

const together = ['Learning together.', 'Building together.', 'Growing together.'] as const;

export default function AboutUs() {
  return (
    <S.Section id="about">
      <Reveal sectionId="about">
        <S.Inner>
          <S.Header>
            <S.Rule aria-hidden />
            <S.Label>About Dr Lakes</S.Label>
            <S.Title>Growth has never been a straight line for me</S.Title>
          </S.Header>

          <S.Layout>
            <S.Story>
              {/* <S.LeadCard> */}
                <S.Paragraph>
                  Like many people, I&apos;ve faced challenges that could easily have caused me
                  to stop, settle or give up on the things I believed were possible. Living with
                  a chronic illness has forced me to view life differently. It taught me
                  resilience, adaptability and the importance of finding purpose, even during
                  difficult seasons.
                </S.Paragraph>
              {/* </S.LeadCard> */}

              <S.Paragraph>
                There have been moments where my health, personal responsibilities and life
                circumstances have tested me in ways that few people see. Yet those experiences
                became the foundation of everything I do today.
              </S.Paragraph>

              <S.PullQuote>
                I didn&apos;t create Grow With Lakes because I wanted to become an influencer.
              </S.PullQuote>

              <S.Paragraph>
                I created it because I understand what it feels like to need encouragement,
                opportunity, guidance and someone who genuinely believes in your potential.
              </S.Paragraph>

              <S.Paragraph>
                Throughout my career, whether working in hospitality, supporting community
                initiatives, developing talent, hosting conversations, organising events or
                mentoring others, I found the greatest fulfilment came from helping people
                recognise possibilities they couldn&apos;t yet see for themselves.
              </S.Paragraph>

              <S.Paragraph>
                That passion led me to create Grow With Lakes — a platform built to connect
                people, create opportunities and encourage growth through meaningful
                conversations, creative development, business support and collaboration.
              </S.Paragraph>

              {/* <S.ClosingBlock> */}
                <S.HonestList>
                  <li>Not because I have all the answers.</li>
                  <li>Not because I&apos;ve got everything figured out.</li>
                  <li>And certainly not because I&apos;m perfect.</li>
                </S.HonestList>
                <S.Paragraph>
                  The truth is, I&apos;m still learning, still evolving and still growing
                  myself. Grow With Lakes isn&apos;t about me standing at the finish line
                  telling others how to get there. It&apos;s about walking the journey
                  together.
                </S.Paragraph>
                <S.Paragraph>
                  So if you&apos;re ready to grow, let&apos;s build something meaningful
                  together. Welcome to the journey.
                </S.Paragraph>
                <S.Signature>— Dr Lakes</S.Signature>
              {/* </S.ClosingBlock> */}
            </S.Story>

            <S.Aside>
              <S.MissionCard>
                <S.MissionLabel>My Mission</S.MissionLabel>
                <S.MissionText>To help people grow.</S.MissionText>
                <S.MissionNote>
                  As a community connector, podcast host, A&amp;R and coach
                </S.MissionNote>
            
              </S.MissionCard>

              <S.TogetherCard>
                <S.TogetherLabel>Together</S.TogetherLabel>
                {together.map((line) => (
                  <S.TogetherItem key={line}>{line}</S.TogetherItem>
                ))}
              </S.TogetherCard>
            </S.Aside>
          </S.Layout>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
