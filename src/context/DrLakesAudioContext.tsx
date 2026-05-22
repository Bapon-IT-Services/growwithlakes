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

const DRLAKES_AUDIO_URL = '/drlakes_audio.mpeg';

export const HERO_SECTION_ID = 'top';

const HEADER_OFFSET_PX = 72;
const HERO_VISIBLE_RATIO = 0.35;

type DrLakesAudioContextValue = {
  isPlaying: boolean;
  togglePlayback: () => void;
  registerHero: (element: HTMLElement) => () => void;
};

const DrLakesAudioContext =
  createContext<DrLakesAudioContextValue | null>(null);

function isHeroIntersecting(
  element: HTMLElement
) {
  const rect =
    element.getBoundingClientRect();

  if (rect.height <= 0)
    return false;

  const viewportHeight =
    window.innerHeight;

  const visibleTop =
    Math.max(
      rect.top,
      HEADER_OFFSET_PX
    );

  const visibleBottom =
    Math.min(
      rect.bottom,
      viewportHeight
    );

  const visibleHeight =
    Math.max(
      0,
      visibleBottom -
        visibleTop
    );

  return (
    visibleHeight /
      rect.height >=
    HERO_VISIBLE_RATIO
  );
}

export function DrLakesAudioProvider({
  children,
}: {
  children: ReactNode;
}) {
  const audioRef =
    useRef<HTMLAudioElement | null>(
      null
    );

  const heroInViewRef =
    useRef(false);

  const userPausedRef =
    useRef(false);

  const [isPlaying,
    setIsPlaying] =
    useState(false);

  const syncPlayingState =
    useCallback(() => {
      const audio =
        audioRef.current;

      setIsPlaying(
        !!audio &&
          !audio.paused &&
          !audio.ended
      );
    }, []);

  const playAudio =
    useCallback(async () => {
      const audio =
        audioRef.current;

      if (
        !audio ||
        !heroInViewRef.current ||
        userPausedRef.current
      )
        return;

      try {
        await audio.play();
      } catch {
        // browser blocked autoplay
      }

      syncPlayingState();
    }, [syncPlayingState]);

  const pauseAudio =
    useCallback(() => {
      const audio =
        audioRef.current;

      if (!audio)
        return;

      audio.pause();

      syncPlayingState();
    }, [syncPlayingState]);

  useEffect(() => {
    const audio =
      new Audio(
        DRLAKES_AUDIO_URL
      );

    audio.preload =
      'auto';

    audio.load();

    audioRef.current =
      audio;

    audio.addEventListener(
      'play',
      syncPlayingState
    );

    audio.addEventListener(
      'pause',
      syncPlayingState
    );

    audio.addEventListener(
      'ended',
      syncPlayingState
    );

    return () => {
      audio.pause();

      audio.removeEventListener(
        'play',
        syncPlayingState
      );

      audio.removeEventListener(
        'pause',
        syncPlayingState
      );

      audio.removeEventListener(
        'ended',
        syncPlayingState
      );

      audio.src = '';
    };
  }, [syncPlayingState]);

  const registerHero =
    useCallback(
      (
        element: HTMLElement
      ) => {
        const syncHero =
          () => {
            const visible =
              isHeroIntersecting(
                element
              );

            heroInViewRef.current =
              visible;

            if (
              visible
            ) {
              playAudio();
            } else {
              pauseAudio();
            }
          };

        const observer =
          new IntersectionObserver(
            (
              [entry]
            ) => {
              heroInViewRef.current =
                entry.isIntersecting;

              if (
                entry.isIntersecting
              ) {
                playAudio();
              } else {
                pauseAudio();
              }
            },
            {
              threshold:
                HERO_VISIBLE_RATIO,
            }
          );

        observer.observe(
          element
        );

        requestAnimationFrame(
          syncHero
        );

        window.addEventListener(
          'load',
          syncHero
        );

        // unlock after first interaction
        const unlock =
          async () => {
            const audio =
              audioRef.current;

            if (
              !audio
            )
              return;

            try {
              await audio.play();

              audio.pause();

              if (
                heroInViewRef.current
              ) {
                await playAudio();
              }
            } catch {}
          };

        document.addEventListener(
          'click',
          unlock,
          { once: true }
        );

        document.addEventListener(
          'touchstart',
          unlock,
          { once: true }
        );

        return () => {
          observer.disconnect();

          window.removeEventListener(
            'load',
            syncHero
          );

          document.removeEventListener(
            'click',
            unlock
          );

          document.removeEventListener(
            'touchstart',
            unlock
          );

          pauseAudio();
        };
      },
      [
        playAudio,
        pauseAudio,
      ]
    );

  const togglePlayback =
    useCallback(
      async () => {
        const audio =
          audioRef.current;

        if (!audio)
          return;

        if (
          !audio.paused
        ) {
          userPausedRef.current =
            true;

          pauseAudio();

          return;
        }

        userPausedRef.current =
          false;

        await playAudio();
      },
      [
        playAudio,
        pauseAudio,
      ]
    );

  const value =
    useMemo(
      () => ({
        isPlaying,
        togglePlayback,
        registerHero,
      }),
      [
        isPlaying,
        togglePlayback,
        registerHero,
      ]
    );

  return (
    <DrLakesAudioContext.Provider
      value={value}
    >
      {children}
    </DrLakesAudioContext.Provider>
  );
}

export function useDrLakesHeroAudio() {
  const {
    registerHero,
  } =
    useDrLakesAudio();

  useEffect(() => {
    const hero =
      document.getElementById(
        HERO_SECTION_ID
      );

    if (!hero)
      return;

    return registerHero(
      hero
    );
  }, [registerHero]);
}

export function useDrLakesAudio() {
  const context =
    useContext(
      DrLakesAudioContext
    );

  if (!context) {
    throw new Error(
      'useDrLakesAudio must be used within DrLakesAudioProvider'
    );
  }

  return context;
}