import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Root = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

export const Mesh = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.4;
  background-image:
    linear-gradient(rgba(212, 175, 55, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212, 175, 55, 0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 75% 60% at 50% 0%, black 20%, transparent 70%);
`;

export const Blob = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  will-change: transform;
`;

export const BlobGold = styled(Blob)`
  width: min(52vw, 420px);
  height: min(52vw, 420px);
  background: radial-gradient(
    circle,
    rgba(212, 175, 55, 0.35) 0%,
    rgba(212, 175, 55, 0.08) 45%,
    transparent 70%
  );
`;

export const BlobMist = styled(Blob)`
  width: min(42vw, 360px);
  height: min(42vw, 360px);
  background: radial-gradient(
    circle,
    rgba(250, 250, 250, 0.06) 0%,
    rgba(212, 175, 55, 0.05) 45%,
    transparent 68%
  );
`;

export const Noise = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
`;
