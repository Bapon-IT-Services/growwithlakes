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
import drlakesAudioUrl from '../assets/drlakes_audio.mpeg?url';

export const HERO_SECTION_ID = 'top';

const HEADER_OFFSET_PX = 72;
const HERO_VISIBLE_RATIO = 0.35;

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

function isAutoplayPolicyError(error: unknown) {
  return error instanceof DOMException && error.name === 'NotAllowedError';
}

function isAudioReady(audio: HTMLAudioElement) {
  return audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA;
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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const heroInViewRef = useRef(true);
  const userPausedRef = useRef(false);
  const pendingPlayRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const syncPlayingState = useCallback(() => {
    const audio = audioRef.current;
    setIsPlaying(Boolean(audio && !audio.paused && !audio.ended));
  }, []);

  const playAudio = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || userPausedRef.current || !heroInViewRef.current) {
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

    try {
      await audio.play();
    } catch (error) {
      if (!isAutoplayPolicyError(error)) {
        console.warn('Dr Lakes audio playback failed:', error);
      }
    } finally {
      syncPlayingState();
    }
  }, [syncPlayingState]);

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
        void playAudio();
      } else {
        pauseAudio();
      }
    },
    [playAudio, pauseAudio]
  );

  useEffect(() => {
    const audio = new Audio(drlakesAudioUrl);
    audio.preload = 'auto';
    audioRef.current = audio;

    const onMediaReady = () => {
      if (pendingPlayRef.current || (heroInViewRef.current && !userPausedRef.current)) {
        void playAudio();
      }
    };

    const onMediaError = () => {
      const mediaError = audio.error;
      console.warn('Dr Lakes audio failed to load:', mediaError?.message ?? 'unknown', drlakesAudioUrl);
    };

    audio.addEventListener('play', syncPlayingState);
    audio.addEventListener('pause', syncPlayingState);
    audio.addEventListener('ended', syncPlayingState);
    audio.addEventListener('canplay', onMediaReady);
    audio.addEventListener('canplaythrough', onMediaReady);
    audio.addEventListener('error', onMediaError);

    audio.load();

    const unlockFromGesture = () => {
      if (userPausedRef.current) return;
      void playAudio();
    };

    document.addEventListener('pointerdown', unlockFromGesture, { passive: true });
    document.addEventListener('keydown', unlockFromGesture);
    document.addEventListener('touchstart', unlockFromGesture, { passive: true });

    return () => {
      audio.removeEventListener('play', syncPlayingState);
      audio.removeEventListener('pause', syncPlayingState);
      audio.removeEventListener('ended', syncPlayingState);
      audio.removeEventListener('canplay', onMediaReady);
      audio.removeEventListener('canplaythrough', onMediaReady);
      audio.removeEventListener('error', onMediaError);
      document.removeEventListener('pointerdown', unlockFromGesture);
      document.removeEventListener('keydown', unlockFromGesture);
      document.removeEventListener('touchstart', unlockFromGesture);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
      heroInViewRef.current = true;
      pendingPlayRef.current = false;
    };
  }, [playAudio, syncPlayingState]);

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
        heroInViewRef.current = true;
        pauseAudio();
      };
    },
    [setHeroInView, pauseAudio]
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
