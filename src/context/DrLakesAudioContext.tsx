import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { useLocation } from 'react-router-dom';
import {
  attemptAutoplay,
  bootstrapDrLakesAutoplay,
  getDrLakesAudio,
  isCareersRoute,
  setDrLakesAutoplaySuppressed,
  stopAutoplayRetries,
} from '../audio/drlakesAudio';

export const HERO_SECTION_ID = 'top';

const HEADER_OFFSET_PX = 72;
const HERO_VISIBLE_RATIO = 0.35;
const AUTOPLAY_GRACE_MS = 3000;

type DrLakesAudioContextValue = {
  isPlaying: boolean;
  togglePlayback: () => void;
  registerHero: (element: HTMLElement) => () => void;
};

const DrLakesAudioContext = createContext<DrLakesAudioContextValue | null>(null);

function canResumePlayback(audio: HTMLAudioElement) {
  if (audio.ended) return false;
  if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
    return true;
  }
  return audio.currentTime < audio.duration - 0.25;
}

function isAudioReady(audio: HTMLAudioElement) {
  return audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA;
}

function isAtPageTop() {
  return window.scrollY < 16;
}

function isWithinAutoplayGrace(mountTime: number) {
  return Date.now() - mountTime < AUTOPLAY_GRACE_MS;
}

/** Mirrors IntersectionObserver threshold + header rootMargin */
function isHeroIntersecting(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  if (rect.height <= 0) return false;

  const viewportHeight = window.innerHeight;
  const visibleTop = Math.max(rect.top, HEADER_OFFSET_PX);
  const visibleBottom = Math.min(rect.bottom, viewportHeight);
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);

  return visibleHeight / rect.height >= HERO_VISIBLE_RATIO;
}

export function DrLakesAudioProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const onCareers = isCareersRoute(pathname);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const heroInViewRef = useRef(true);
  const heroHasBeenVisibleRef = useRef(false);
  const userPausedRef = useRef(false);
  const pendingPlayRef = useRef(false);
  const careersRouteRef = useRef(onCareers);
  const mountTimeRef = useRef(Date.now());
  const [isPlaying, setIsPlaying] = useState(false);

  careersRouteRef.current = onCareers;

  const syncPlayingState = useCallback(() => {
    const audio = audioRef.current;
    setIsPlaying(Boolean(audio && !audio.paused && !audio.ended));
  }, []);

  const shouldAllowPlayback = useCallback(() => {
    if (careersRouteRef.current) return false;
    if (heroInViewRef.current) return true;
    if (isAtPageTop() && isWithinAutoplayGrace(mountTimeRef.current)) return true;
    return false;
  }, []);

  const playAudio = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || userPausedRef.current || !shouldAllowPlayback()) {
      pendingPlayRef.current = false;
      return;
    }

    if (!isAudioReady(audio)) {
      pendingPlayRef.current = true;
      return;
    }

    pendingPlayRef.current = false;

    if (audio.ended) {
      audio.currentTime = 0;
    }

    if (!canResumePlayback(audio)) return;

    await attemptAutoplay(audio);
    syncPlayingState();
  }, [shouldAllowPlayback, syncPlayingState]);

  const pauseAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audio.paused) return;
    pendingPlayRef.current = false;
    audio.pause();
    syncPlayingState();
  }, [syncPlayingState]);

  const setHeroInView = useCallback(
    (inView: boolean) => {
      heroInViewRef.current = inView;

      if (inView) {
        heroHasBeenVisibleRef.current = true;
        void playAudio();
        return;
      }

      if (!heroHasBeenVisibleRef.current) return;
      if (isAtPageTop() && isWithinAutoplayGrace(mountTimeRef.current)) return;

      pauseAudio();
    },
    [playAudio, pauseAudio]
  );

  useEffect(() => {
    setDrLakesAutoplaySuppressed(onCareers);

    if (onCareers) {
      heroInViewRef.current = false;
      pauseAudio();
      return;
    }

    bootstrapDrLakesAutoplay();
    if (!userPausedRef.current) {
      void playAudio();
    }
  }, [onCareers, pauseAudio, playAudio]);

  useEffect(() => {
    const audio = getDrLakesAudio();
    audioRef.current = audio;

    const onMediaReady = () => {
      if (pendingPlayRef.current || (!userPausedRef.current && shouldAllowPlayback())) {
        void playAudio();
      }
    };

    const onMediaError = () => {
      const mediaError = audio.error;
      console.warn(
        'Dr Lakes audio failed to load:',
        mediaError?.message ?? 'unknown',
        audio.src
      );
    };

    audio.addEventListener('play', syncPlayingState);
    audio.addEventListener('pause', syncPlayingState);
    audio.addEventListener('ended', syncPlayingState);
    audio.addEventListener('canplay', onMediaReady);
    audio.addEventListener('canplaythrough', onMediaReady);
    audio.addEventListener('error', onMediaError);

    return () => {
      audio.removeEventListener('play', syncPlayingState);
      audio.removeEventListener('pause', syncPlayingState);
      audio.removeEventListener('ended', syncPlayingState);
      audio.removeEventListener('canplay', onMediaReady);
      audio.removeEventListener('canplaythrough', onMediaReady);
      audio.removeEventListener('error', onMediaError);
      stopAutoplayRetries();
      setDrLakesAutoplaySuppressed(false);
      audioRef.current = null;
      heroInViewRef.current = true;
      pendingPlayRef.current = false;
    };
  }, [playAudio, shouldAllowPlayback, syncPlayingState]);

  const registerHero = useCallback(
    (element: HTMLElement) => {
      const syncFromLayout = () => {
        setHeroInView(isHeroIntersecting(element));
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          setHeroInView(entry.isIntersecting);
        },
        {
          threshold: [0, HERO_VISIBLE_RATIO],
          rootMargin: `-${HEADER_OFFSET_PX}px 0px 0px 0px`,
        }
      );

      observer.observe(element);

      const scheduleLayoutSync = () => {
        requestAnimationFrame(() => {
          syncFromLayout();
          requestAnimationFrame(syncFromLayout);
        });
      };

      scheduleLayoutSync();

      if (document.readyState === 'complete') {
        scheduleLayoutSync();
      } else {
        window.addEventListener('load', scheduleLayoutSync, { once: true });
      }

      if ('fonts' in document) {
        void document.fonts.ready.then(scheduleLayoutSync);
      }

      return () => {
        observer.disconnect();
        window.removeEventListener('load', scheduleLayoutSync);
      };
    },
    [setHeroInView]
  );

  const togglePlayback = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused && !audio.ended) {
      userPausedRef.current = true;
      pauseAudio();
      return;
    }

    userPausedRef.current = false;
    heroInViewRef.current = true;
    await playAudio();
  }, [playAudio, pauseAudio]);

  const value = useMemo(
    () => ({ isPlaying, togglePlayback, registerHero }),
    [isPlaying, togglePlayback, registerHero]
  );

  return (
    <DrLakesAudioContext.Provider value={value}>{children}</DrLakesAudioContext.Provider>
  );
}

export function useDrLakesHeroAudio() {
  const { registerHero } = useDrLakesAudio();

  useEffect(() => {
    const hero = document.getElementById(HERO_SECTION_ID);
    if (!hero) return;
    return registerHero(hero);
  }, [registerHero]);
}

export function useDrLakesAudio() {
  const context = useContext(DrLakesAudioContext);
  if (!context) {
    throw new Error('useDrLakesAudio must be used within DrLakesAudioProvider');
  }
  return context;
}
