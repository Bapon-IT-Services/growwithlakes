import { bootstrapDrLakesAutoplay, isCareersRoute } from './drlakesAudio';

if (!isCareersRoute()) {
  bootstrapDrLakesAutoplay();
}
