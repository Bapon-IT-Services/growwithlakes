import drlakesAudioUrl from '../assets/drlakes_audio.mp3?url';

export const AUDIO_BOOTSTRAP_ID = 'drlakes-audio-bootstrap';
export const CAREERS_ROUTE = '/careers';

const AUTOPLAY_RETRY_MS = [0, 50, 120, 250, 500, 1000, 2000, 3500] as const;

let audioInstance: HTMLAudioElement | null = null;
let bootstrapStarted = false;
let retriesScheduled = false;
let autoplaySuppressed = false;
const retryTimers = new Set<number>();

export function isCareersRoute(pathname = window.location.pathname) {
  return pathname === CAREERS_ROUTE || pathname === `${CAREERS_ROUTE}/`;
}

export function setDrLakesAutoplaySuppressed(suppressed: boolean) {
  autoplaySuppressed = suppressed;
  if (!suppressed) return;

  stopAutoplayRetries();
  const audio = audioInstance ?? getBootstrapElement();
  if (audio && !audio.paused) {
    audio.pause();
  }
}

function isAutoplayPolicyError(error: unknown) {
  return error instanceof DOMException && error.name === 'NotAllowedError';
}

function isAudioReady(audio: HTMLAudioElement) {
  return audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA;
}

function getBootstrapElement(): HTMLAudioElement | null {
  const existing = document.getElementById(AUDIO_BOOTSTRAP_ID);
  return existing instanceof HTMLAudioElement ? existing : null;
}

function attachHiddenAudio(audio: HTMLAudioElement) {
  audio.id = AUDIO_BOOTSTRAP_ID;
  audio.preload = 'auto';
  audio.autoplay = true;
  audio.setAttribute('playsinline', 'true');
  audio.style.cssText =
    'position:absolute;width:0;height:0;opacity:0;pointer-events:none;clip:rect(0,0,0,0)';
  if (!audio.isConnected) {
    document.body.appendChild(audio);
  }
}

export function getDrLakesAudio(): HTMLAudioElement {
  if (audioInstance) return audioInstance;

  const existing = getBootstrapElement();
  if (existing) {
    audioInstance = existing;
    return audioInstance;
  }

  audioInstance = new Audio(drlakesAudioUrl);
  attachHiddenAudio(audioInstance);
  return audioInstance;
}

export async function attemptAutoplay(audio: HTMLAudioElement): Promise<boolean> {
  if (autoplaySuppressed) return false;

  if (audio.ended) {
    audio.currentTime = 0;
  }

  try {
    await audio.play();
    if (!audio.paused) return true;
  } catch (error) {
    if (!isAutoplayPolicyError(error)) {
      console.warn('Dr Lakes audio playback failed:', error);
    }
  }

  const wasMuted = audio.muted;
  try {
    audio.muted = true;
    await audio.play();
    if (!audio.paused) {
      audio.muted = wasMuted;
      if (!wasMuted && audio.muted) {
        audio.muted = false;
      }
      return !audio.paused;
    }
    audio.muted = wasMuted;
  } catch {
    audio.muted = wasMuted;
  }

  return false;
}

function scheduleAutoplayRetries(audio: HTMLAudioElement) {
  if (retriesScheduled) return;
  retriesScheduled = true;

  for (const delay of AUTOPLAY_RETRY_MS) {
    const timer = window.setTimeout(() => {
      retryTimers.delete(timer);
      if (!autoplaySuppressed) {
        void attemptAutoplay(audio);
      }
    }, delay);
    retryTimers.add(timer);
  }
}

function clearAutoplayRetries() {
  for (const timer of retryTimers) {
    window.clearTimeout(timer);
  }
  retryTimers.clear();
}

export function bootstrapDrLakesAutoplay() {
  if (bootstrapStarted) return;
  bootstrapStarted = true;

  const audio = getDrLakesAudio();
  audio.load();

  const tryStart = () => {
    if (autoplaySuppressed) return;
    void attemptAutoplay(audio);
  };

  const onReady = () => {
    tryStart();
    scheduleAutoplayRetries(audio);
  };

  audio.addEventListener('canplay', tryStart);
  audio.addEventListener('canplaythrough', tryStart);
  audio.addEventListener('loadeddata', tryStart);

  if (isAudioReady(audio)) {
    onReady();
  } else {
    scheduleAutoplayRetries(audio);
  }

  window.addEventListener('pageshow', (event) => {
    if (event.persisted || audio.paused) {
      tryStart();
      scheduleAutoplayRetries(audio);
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && audio.paused) {
      tryStart();
    }
  });
}

export function stopAutoplayRetries() {
  clearAutoplayRetries();
  retriesScheduled = false;
}
