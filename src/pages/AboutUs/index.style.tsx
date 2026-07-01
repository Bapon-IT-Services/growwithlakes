import styled from 'styled-components';
import {
  PageContainer,
  SectionLabel,
  SectionLead,
  SectionRule,
  SectionShell,
  SectionTitle,
} from '../../styles/sectionPrimitives';

export const Section = styled(SectionShell)`
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse 50% 42% at 0% 15%, rgba(212, 175, 55, 0.07), transparent 68%),
      radial-gradient(ellipse 38% 32% at 100% 85%, rgba(212, 175, 55, 0.04), transparent 65%);
  }
`;

export const Inner = styled(PageContainer)`
  position: relative;
`;

export const Header = styled.header`
  // margin-bottom: clamp(2rem, 4vw, 2.75rem);
  max-width: 50rem;
`;

export const Rule = styled(SectionRule)``;

export const Label = styled(SectionLabel)``;

export const Title = styled(SectionTitle)`
  margin-bottom: 0.75rem;
`;

export const Lead = styled(SectionLead)`
  margin: 0;
`;

export const Layout = styled.div`
  display: grid;
  gap: 2rem;
  align-items: start;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1fr) minmax(260px, 300px);
    gap: clamp(2rem, 4vw, 3rem);
  }
`;

export const Story = styled.div`
  min-width: 0;
`;

// export const LeadCard = styled.div`
//   margin-bottom: 1.5rem;
//   padding: clamp(1.35rem, 3vw, 1.75rem);
//   border: 1px solid ${({ theme }) => theme.colors.border};
//   border-radius: ${({ theme }) => theme.radius.lg};
//   background: linear-gradient(
//     145deg,
//     rgba(255, 255, 255, 0.035) 0%,
//     rgba(255, 255, 255, 0.01) 100%
//   );
// `;

export const LeadQuote = styled.p`
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.35rem, 2.8vw, 1.75rem);
  font-weight: 500;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.white};
`;

export const Paragraph = styled.p`
  margin: 0 0 1.15rem;
  font-size: 1rem;
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.muted};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PullQuote = styled.blockquote`
  margin: 0 0 1.5rem;
  padding: 1.15rem 0 1.15rem 1.25rem;
  // border-left: 2px solid ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.15rem, 2.2vw, 1.35rem);
  font-weight: 500;
  font-style: italic;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.white};
`;

export const ClosingBlock = styled.div`
  margin-top: 1.75rem;
  padding-top: 1.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HonestList = styled.ul`
  margin: 0 0 1.25rem;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    // padding: 0.35rem 0 0.35rem 1rem;
    font-size: 0.975rem;
    line-height: 1.55;
    color: ${({ theme }) => theme.colors.muted};

    // &::before {
    //   content: '';
    //   position: absolute;
    //   left: 0;
    //   top: 0.85rem;
    //   width: 4px;
    //   height: 4px;
    //   border-radius: 50%;
    //   background: ${({ theme }) => theme.colors.gold};
    // }
  }
`;

export const Signature = styled.p`
  margin: 1.5rem 0 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  color: ${({ theme }) => theme.colors.gold};
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 960px) {
    position: sticky;
    top: calc(${({ theme }) => theme.headerHeight} + 1.5rem);
  }
`;

export const MissionCard = styled.div`
  padding: 1.5rem 1.35rem;
  border: 1px solid rgba(212, 175, 55, 0.32);
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(
    160deg,
    rgba(212, 175, 55, 0.12) 0%,
    rgba(212, 175, 55, 0.03) 55%,
    rgba(0, 0, 0, 0.2) 100%
  );
`;

export const MissionLabel = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

export const MissionText = styled.p`
  margin: 0 0 0.75rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.5rem, 3vw, 1.85rem);
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};
`;

export const MissionNote = styled.p`
  margin: 0 0 1rem;
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.muted};
`;

export const RoleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const Role = styled.span`
  padding: 0.35rem 0.7rem;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(0, 0, 0, 0.2);
`;

export const TogetherCard = styled.div`
  padding: 1.25rem 1.35rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255, 255, 255, 0.02);
`;

export const TogetherLabel = styled.span`
  display: block;
  margin-bottom: 0.75rem;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedDark};
`;

export const TogetherItem = styled.p`
  margin: 0 0 0.45rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.gold};

  &:last-child {
    margin-bottom: 0;
  }
`;
