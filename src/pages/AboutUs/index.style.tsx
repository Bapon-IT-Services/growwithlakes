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
      radial-gradient(ellipse 55% 45% at 0% 20%, rgba(212, 175, 55, 0.08), transparent 70%),
      radial-gradient(ellipse 40% 35% at 100% 80%, rgba(212, 175, 55, 0.05), transparent 65%);
  }
`;

export const Inner = styled(PageContainer)`
  position: relative;
`;

export const Header = styled.header`
  // margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  // border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Label = styled(SectionLabel)``;

export const Rule = styled(SectionRule)``;

export const Title = styled(SectionTitle)`
  // margin-bottom: 1rem;
`;

export const Lead = styled(SectionLead)`
  max-width: 38rem;
  margin-bottom: 1.25rem;
`;

export const RoleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Role = styled.span`
  padding: 0.4rem 0.75rem;
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(212, 175, 55, 0.06);
`;

export const Opening = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem 1.35rem;
  border-left: 3px solid ${({ theme }) => theme.colors.gold};
  background: linear-gradient(
    90deg,
    rgba(212, 175, 55, 0.08) 0%,
    rgba(212, 175, 55, 0.02) 55%,
    transparent 100%
  );
`;

export const OpeningText = styled.p`
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.25rem, 2.5vw, 1.55rem);
  font-weight: 500;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.white};
`;

export const BodyGrid = styled.div`
  display: grid;
  gap: 0 2rem;
  margin-bottom: 2rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
`;

export const BodyCol = styled.div`
  font-size: 1.0625rem;
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.muted};

  p {
    margin: 0 0 1.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const MissionBlock = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const MissionLead = styled.p`
  margin: 0 auto 1rem;
  max-width: 36rem;
  font-size: 1.0625rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.muted};
`;

export const MissionStrip = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1.35rem 1.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.12) 0%,
    rgba(212, 175, 55, 0.04) 100%
  );
  border-top: 1px solid rgba(212, 175, 55, 0.35);
  border-bottom: 1px solid rgba(212, 175, 55, 0.35);
`;

export const MissionLabel = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

export const MissionText = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 500;
  font-style: italic;
  color: ${({ theme }) => theme.colors.white};
`;

export const Body = styled.div`
  width: 100%;
  font-size: 1.0625rem;
  line-height: 1.78;
  color: ${({ theme }) => theme.colors.muted};

  p {
    margin: 0 0 1.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Emphasis = styled.p`
  margin: 0 0 1.25rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.15rem, 2.2vw, 1.35rem);
  font-weight: 500;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.white};
`;

export const Standalone = styled.p`
  margin: 0 0 0.65rem;
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.92;
`;

export const Trio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin: 0 0 1.5rem;
  padding: 1.25rem 0 1.25rem 1.25rem;
  border-left: 2px solid rgba(212, 175, 55, 0.62);

  span {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(1.1rem, 2.2vw, 1.3rem);
    font-weight: 500;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const Signature = styled.p`
  margin: 2rem 0 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 500;
  font-style: italic;
  color: ${({ theme }) => theme.colors.gold};
`;
