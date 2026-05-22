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
import drlakesAudioUrl from '../assets/drlakes/drlakes_audio.mpeg?url';

export const HERO_SECTION_ID = 'top';

type DrLakesAudioContextValue = {
  isPlaying: boolean;
  togglePlayback: () => void;
  registerHero: (element: HTMLElement) => () => void;
};

const DrLakesAudioContext = createContext<DrLakesAudioContextValue | null>(null);

function canResumePlayback(audio: HTMLAudioElement) {
  if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
    return audio.paused && audio.currentTime === 0;
  }
  return audio.currentTime < audio.duration - 0.25;
}

export function DrLakesAudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef(false);
  const heroInViewRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const syncPlayingState = useCallback(() => {
    const audio = audioRef.current;
    setIsPlaying(Boolean(audio && !audio.paused && !audio.ended));
  }, []);

  const playAudio = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || userPausedRef.current || !heroInViewRef.current) return;

    if (audio.ended) {
      audio.currentTime = 0;
    }

    if (!canResumePlayback(audio)) return;

    try {
      await audio.play();
    } catch {
      /* Autoplay may be blocked until the user interacts */
    }
  }, []);

  const pauseByUser = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    userPausedRef.current = true;
    audio.pause();
    syncPlayingState();
  }, [syncPlayingState]);

  const pauseForHeroLeave = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audio.paused) return;
    audio.pause();
    syncPlayingState();
  }, [syncPlayingState]);

  useEffect(() => {
    const audio = new Audio(drlakesAudioUrl);
    audio.loop = false;
    audio.preload = 'auto';
    audioRef.current = audio;

    const onPlay = () => syncPlayingState();
    const onPause = () => syncPlayingState();
    const onEnded = () => syncPlayingState();

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
      heroInViewRef.current = false;
    };
  }, [syncPlayingState]);

  const registerHero = useCallback(
    (element: HTMLElement) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;

          heroInViewRef.current = entry.isIntersecting;

          if (entry.isIntersecting) {
            void playAudio();
          } else {
            pauseForHeroLeave();
          }
        },
        { threshold: 0.35, rootMargin: '-72px 0px 0px 0px' }
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
        heroInViewRef.current = false;
        pauseForHeroLeave();
      };
    },
    [playAudio, pauseForHeroLeave]
  );

  const togglePlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused && !audio.ended) {
      pauseByUser();
      return;
    }

    userPausedRef.current = false;

    if (audio.ended || !canResumePlayback(audio)) {
      audio.currentTime = 0;
    }

    if (!heroInViewRef.current) return;

    void audio.play().catch(() => {
      syncPlayingState();
    });
  }, [pauseByUser, syncPlayingState]);

  const value = useMemo(
    () => ({ isPlaying, togglePlayback, registerHero }),
    [isPlaying, togglePlayback, registerHero]
  );

  return (
    <DrLakesAudioContext.Provider value={value}>{children}</DrLakesAudioContext.Provider>
  );
}

/** Wire hero section visibility to audio — call from Hero only. */
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
