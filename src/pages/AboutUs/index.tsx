import Reveal from '../../components/Reveal';
import * as S from './index.style';


export default function AboutUs() {
  return (
    <S.Section id="about">
      <Reveal sectionId="about">
        <S.Inner>
          <S.Header>
            <S.Rule aria-hidden />
            <S.Label>About Dr Lakes</S.Label>
            <S.Title>Growth is about progress</S.Title>
            {/* <S.Lead>
              A platform built to connect people — not a personal brand page, but a place
              where conversation turns into opportunity.
            </S.Lead> */}
          </S.Header>

          <S.Opening>
            <S.OpeningText>Growth has never been a straight line for me.</S.OpeningText>
            <p>
            Like many people, I've faced challenges that could easily have caused me to stop, settle or give up on the things I believed were possible. Living with a chronic illness has forced me to view life differently. It taught me resilience, adaptability and the importance of finding purpose, even during difficult seasons.
            </p>
          </S.Opening>

          <S.BodyGrid>
            <S.BodyCol>
              <p>
              There have been moments where my health, personal responsibilities and life circumstances have tested me in ways that few people see. Yet those experiences became the foundation of everything I do today.
              </p>
              <S.Emphasis>
                I didn&apos;t create Grow With Lakes because I wanted to become an influencer.
              </S.Emphasis>
              <p>
              I created it because I understand what it feels like to need encouragement, opportunity, guidance and someone who genuinely believes in your potential.
              </p>
            </S.BodyCol>
            <S.BodyCol>
              <p>
              Throughout my career, whether working in hospitality, supporting community initiatives, developing talent, hosting conversations, organising events or mentoring others, I found the greatest fulfilment came from helping people recognise possibilities they couldn't yet see for themselves.
              </p>
              <p>That passion led me to create Grow With Lakes.</p>
              <p>
              A platform built to connect people, create opportunities and encourage growth through meaningful conversations, creative development, business support and collaboration.
              </p>
            </S.BodyCol>
          </S.BodyGrid>

          <S.MissionBlock>
            <S.MissionLead>
              As a community connector, podcast host, A&amp;R and coach
            </S.MissionLead>
            <S.MissionStrip>
              <S.MissionLabel>My Mission</S.MissionLabel>
              <S.MissionText>To help people grow.</S.MissionText>
            </S.MissionStrip>
          </S.MissionBlock>

          <S.Body>
            <S.Standalone>Not because I have all the answers.</S.Standalone>
            <S.Standalone>Not because I&apos;ve got everything figured out.</S.Standalone>
            <S.Standalone>And certainly not because I&apos;m perfect.</S.Standalone>
            <p>
            The truth is, I'm still learning, still evolving and still growing myself.

Grow With Lakes isn't about me standing at the finish line telling others how to get there.

It's about walking the journey together.
            </p>
            <S.Trio>
              <span>Learning together.</span>
              <span>Building together.</span>
              <span>Growing together.</span>
            </S.Trio>
            <p>
              So if you&apos;re ready to grow, let&apos;s build something meaningful together.
              Welcome to the journey.
            </p>
            <S.Signature>— Dr Lakes</S.Signature>
          </S.Body>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
