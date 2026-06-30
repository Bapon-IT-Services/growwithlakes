import Reveal from '../../components/Reveal';
import {
  caseStudies,
  eventPhotos,
  impactPillars,
  impactStories,
  testimonials,
} from '../../config/impactCommunity';
import * as S from './index.style';

const STAR_COUNT = 5;

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function ImpactCommunity() {
  return (
    <S.Section id="impact">
      <Reveal sectionId="impact">
        <S.Inner>
          <S.Header>
            <S.Rule aria-hidden />
            <S.Label>Impact &amp; Community</S.Label>
            <S.Title>Where connection becomes momentum</S.Title>
            <S.Body>
              Supporting artists, entrepreneurs, businesses and community projects through
              conversation, opportunity, connection and collaboration.
            </S.Body>
            <S.Pillars aria-label="Platform pillars">
              {impactPillars.map((pillar) => (
                <S.Pillar key={pillar}>{pillar}</S.Pillar>
              ))}
            </S.Pillars>
          </S.Header>

          <S.Block aria-labelledby="impact-testimonials-heading">
            <S.BlockHeader>
              <S.BlockTitle id="impact-testimonials-heading">Testimonials</S.BlockTitle>
              <S.BlockHint>What people are saying</S.BlockHint>
            </S.BlockHeader>
            <S.TestimonialGrid>
              {testimonials.map((item) => (
                <S.ReviewCard key={item.id}>
                  <S.StarRow aria-label="5 out of 5 stars">
                    {Array.from({ length: STAR_COUNT }, (_, i) => (
                      <span key={i} aria-hidden>
                        ★
                      </span>
                    ))}
                  </S.StarRow>
                  <S.ReviewQuote>&ldquo;{item.quote}&rdquo;</S.ReviewQuote>
                  <S.ReviewFooter>
                    <S.Avatar aria-hidden>{initials(item.name)}</S.Avatar>
                    <S.AuthorBlock>
                      <S.AuthorName>{item.name}</S.AuthorName>
                      <S.AuthorRole>{item.role}</S.AuthorRole>
                    </S.AuthorBlock>
                  </S.ReviewFooter>
                </S.ReviewCard>
              ))}
            </S.TestimonialGrid>
          </S.Block>

          <S.Divider />

          <S.Block aria-labelledby="impact-case-studies-heading">
            <S.BlockHeader>
              <S.BlockTitle id="impact-case-studies-heading">Case studies</S.BlockTitle>
              <S.BlockHint>Challenge → result</S.BlockHint>
            </S.BlockHeader>
            <S.CaseStudyList>
              {caseStudies.map((study) => (
                <S.CaseStudyCard key={study.id}>
                  <S.CaseStudyHeader>
                    <S.CaseTag>{study.tag}</S.CaseTag>
                    <S.CaseTitle>{study.title}</S.CaseTitle>
                  </S.CaseStudyHeader>
                  <S.CaseFlow>
                    <S.CaseStep $variant="challenge">
                      <S.StepLabel>
                        <S.StepIcon $variant="challenge" aria-hidden>
                          ?
                        </S.StepIcon>
                        The challenge
                      </S.StepLabel>
                      <S.StepText>{study.challenge}</S.StepText>
                    </S.CaseStep>
                    <S.CaseArrowMobile aria-hidden>How we helped</S.CaseArrowMobile>
                    <S.CaseArrow aria-hidden>→</S.CaseArrow>
                    <S.CaseStep $variant="result">
                      <S.StepLabel>
                        <S.StepIcon $variant="result" aria-hidden>
                          ✓
                        </S.StepIcon>
                        The result
                      </S.StepLabel>
                      <S.StepText>{study.result}</S.StepText>
                    </S.CaseStep>
                  </S.CaseFlow>
                </S.CaseStudyCard>
              ))}
            </S.CaseStudyList>
          </S.Block>

          <S.Divider />

          <S.Block aria-labelledby="impact-event-photos-heading">
            <S.BlockHeader>
              <S.BlockTitle id="impact-event-photos-heading">Event photos</S.BlockTitle>
              <S.BlockHint>Photos coming soon</S.BlockHint>
            </S.BlockHeader>
            <S.PhotoMosaic>
              {eventPhotos.map((photo) => (
                <S.PhotoTile key={photo.id} $span={photo.span} $tilt={'tilt' in photo && photo.tilt}>
                  <S.PhotoPlaceholder aria-hidden>
                    <S.PhotoIcon>◇</S.PhotoIcon>
                    <S.PhotoPlaceholderLabel>Photo placeholder</S.PhotoPlaceholderLabel>
                  </S.PhotoPlaceholder>
                  <S.PhotoCaption>
                    <S.PhotoTitle>{photo.caption}</S.PhotoTitle>
                    <S.PhotoEvent>{photo.event}</S.PhotoEvent>
                  </S.PhotoCaption>
                </S.PhotoTile>
              ))}
            </S.PhotoMosaic>
          </S.Block>

          <S.Divider />

          <S.Block aria-labelledby="impact-stories-heading">
            <S.BlockHeader>
              <S.BlockTitle id="impact-stories-heading">Community impact stories</S.BlockTitle>
              <S.BlockHint>Journeys that matter</S.BlockHint>
            </S.BlockHeader>
            <S.StoryList>
              {impactStories.map((story, index) => (
                <S.StoryRow key={story.id} $alternate={index % 2 === 1}>
                  <S.StoryLead>
                    <S.StoryIndex>Story {String(index + 1).padStart(2, '0')}</S.StoryIndex>
                    <S.StoryHeadline>{story.headline}</S.StoryHeadline>
                    <S.StoryStat>{story.stat}</S.StoryStat>
                  </S.StoryLead>
                  <S.StoryContent>
                    <S.StoryExcerpt>{story.excerpt}</S.StoryExcerpt>
                    <S.StoryByline>
                      <S.StoryPerson>{story.person}</S.StoryPerson>
                      <S.StoryContext>{story.context}</S.StoryContext>
                    </S.StoryByline>
                  </S.StoryContent>
                </S.StoryRow>
              ))}
            </S.StoryList>
          </S.Block>
        </S.Inner>
      </Reveal>
    </S.Section>
  );
}
