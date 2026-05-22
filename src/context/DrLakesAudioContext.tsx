// import {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
//   type ReactNode,
// } from 'react';
// import drlakesAudioUrl from '../assets/drlakes/drlakes_audio.mpeg?url';

// export const HERO_SECTION_ID = 'top';

// const HEADER_OFFSET_PX = 72;
// const HERO_VISIBLE_RATIO = 0.35;

// type DrLakesAudioContextValue = {
//   isPlaying: boolean;
//   togglePlayback: () => void;
//   registerHero: (element: HTMLElement) => () => void;
// };

// const DrLakesAudioContext = createContext<DrLakesAudioContextValue | null>(null);

// function canResumePlayback(audio: HTMLAudioElement) {
//   if (audio.ended) return false;
//   if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
//     return audio.paused;
//   }
//   return audio.currentTime < audio.duration - 0.25;
// }

// function isAutoplayPolicyError(error: unknown) {
//   return error instanceof DOMException && error.name === 'NotAllowedError';
// }

// /** Mirrors IntersectionObserver threshold + header rootMargin */
// function isHeroIntersecting(element: HTMLElement) {
//   const rect = element.getBoundingClientRect();
//   if (rect.height <= 0) return false;

//   const viewportHeight = window.innerHeight;
//   const visibleTop = Math.max(rect.top, HEADER_OFFSET_PX);
//   const visibleBottom = Math.min(rect.bottom, viewportHeight);
//   const visibleHeight = Math.max(0, visibleBottom - visibleTop);

//   return visibleHeight / rect.height >= HERO_VISIBLE_RATIO;
// }

// export function DrLakesAudioProvider({ children }: { children: ReactNode }) {
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const userPausedRef = useRef(false);
//   const heroInViewRef = useRef(false);
//   const autoplayBlockedRef = useRef(false);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const syncPlayingState = useCallback(() => {
//     const audio = audioRef.current;
//     setIsPlaying(Boolean(audio && !audio.paused && !audio.ended));
//   }, []);

//   const playAudio = useCallback(async () => {
//     const audio = audioRef.current;
//     if (!audio || userPausedRef.current || !heroInViewRef.current) return;

//     if (audio.ended) {
//       audio.currentTime = 0;
//     }

//     if (!canResumePlayback(audio)) return;

//     try {
//       await audio.play();
//       autoplayBlockedRef.current = false;
//     } catch (error) {
//       if (isAutoplayPolicyError(error)) {
//         autoplayBlockedRef.current = true;
//       }
//     }
//   }, []);

//   const pauseByUser = useCallback(() => {
//     const audio = audioRef.current;
//     if (!audio) return;
//     userPausedRef.current = true;
//     audio.pause();
//     syncPlayingState();
//   }, [syncPlayingState]);

//   const pauseForHeroLeave = useCallback(() => {
//     const audio = audioRef.current;
//     if (!audio || audio.paused) return;
//     audio.pause();
//     syncPlayingState();
//   }, [syncPlayingState]);

//   const setHeroInView = useCallback(
//     (inView: boolean) => {
//       heroInViewRef.current = inView;
//       if (inView) {
//         void playAudio();
//       } else {
//         pauseForHeroLeave();
//       }
//     },
//     [playAudio, pauseForHeroLeave]
//   );

//   useEffect(() => {
//     const audio = new Audio(drlakesAudioUrl);
//     audio.loop = false;
//     audio.preload = 'auto';
//     audioRef.current = audio;

//     const onPlay = () => syncPlayingState();
//     const onPause = () => syncPlayingState();
//     const onEnded = () => syncPlayingState();
//     const onCanPlay = () => {
//       if (heroInViewRef.current && !userPausedRef.current) {
//         void playAudio();
//       }
//     };

//     audio.addEventListener('play', onPlay);
//     audio.addEventListener('pause', onPause);
//     audio.addEventListener('ended', onEnded);
//     audio.addEventListener('canplay', onCanPlay);

//     if (audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
//       onCanPlay();
//     }

//     return () => {
//       audio.removeEventListener('play', onPlay);
//       audio.removeEventListener('pause', onPause);
//       audio.removeEventListener('ended', onEnded);
//       audio.removeEventListener('canplay', onCanPlay);
//       audio.pause();
//       audio.src = '';
//       audioRef.current = null;
//       heroInViewRef.current = false;
//       autoplayBlockedRef.current = false;
//     };
//   }, [playAudio, syncPlayingState]);

//   const registerHero = useCallback(
//     (element: HTMLElement) => {
//       const syncFromLayout = () => {
//         setHeroInView(isHeroIntersecting(element));
//       };

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (!entry) return;
//           setHeroInView(entry.isIntersecting);
//         },
//         {
//           threshold: [0, HERO_VISIBLE_RATIO],
//           rootMargin: `-${HEADER_OFFSET_PX}px 0px 0px 0px`,
//         }
//       );

//       observer.observe(element);

//       const scheduleLayoutSync = () => {
//         requestAnimationFrame(() => {
//           syncFromLayout();
//           requestAnimationFrame(syncFromLayout);
//         });
//       };

//       scheduleLayoutSync();

//       if (document.readyState === 'complete') {
//         scheduleLayoutSync();
//       } else {
//         window.addEventListener('load', syncFromLayout, { once: true });
//       }

//       if ('fonts' in document) {
//         void document.fonts.ready.then(syncFromLayout);
//       }

//       const unlockAutoplay = () => {
//         if (userPausedRef.current) return;
//         syncFromLayout();
//         if (!autoplayBlockedRef.current) return;

//         const audio = audioRef.current;
//         if (!audio || !heroInViewRef.current) return;

//         if (audio.ended) audio.currentTime = 0;
//         if (!canResumePlayback(audio)) return;

//         audio
//           .play()
//           .then(() => {
//             autoplayBlockedRef.current = false;
//             syncPlayingState();
//           })
//           .catch((error) => {
//             if (isAutoplayPolicyError(error)) {
//               autoplayBlockedRef.current = true;
//             }
//             syncPlayingState();
//           });
//       };

//       document.addEventListener('pointerdown', unlockAutoplay, { passive: true });
//       document.addEventListener('keydown', unlockAutoplay);

//       return () => {
//         observer.disconnect();
//         window.removeEventListener('load', syncFromLayout);
//         document.removeEventListener('pointerdown', unlockAutoplay);
//         document.removeEventListener('keydown', unlockAutoplay);
//         heroInViewRef.current = false;
//         pauseForHeroLeave();
//       };
//     },
//     [setHeroInView, playAudio, pauseForHeroLeave, syncPlayingState]
//   );

//   const togglePlayback = useCallback(() => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     if (!audio.paused && !audio.ended) {
//       pauseByUser();
//       return;
//     }

//     userPausedRef.current = false;
//     autoplayBlockedRef.current = false;

//     if (audio.ended || !canResumePlayback(audio)) {
//       audio.currentTime = 0;
//     }

//     if (!heroInViewRef.current) return;

//     void audio.play().catch((error) => {
//       if (isAutoplayPolicyError(error)) {
//         autoplayBlockedRef.current = true;
//       }
//       syncPlayingState();
//     });
//   }, [pauseByUser, syncPlayingState]);

//   const value = useMemo(
//     () => ({ isPlaying, togglePlayback, registerHero }),
//     [isPlaying, togglePlayback, registerHero]
//   );

//   return (
//     <DrLakesAudioContext.Provider value={value}>{children}</DrLakesAudioContext.Provider>
//   );
// }

// /** Wire hero section visibility to audio — call from Hero only. */
// export function useDrLakesHeroAudio() {
//   const { registerHero } = useDrLakesAudio();

//   useEffect(() => {
//     const hero = document.getElementById(HERO_SECTION_ID);
//     if (!hero) return;
//     return registerHero(hero);
//   }, [registerHero]);
// }

// export function useDrLakesAudio() {
//   const context = useContext(DrLakesAudioContext);
//   if (!context) {
//     throw new Error('useDrLakesAudio must be used within DrLakesAudioProvider');
//   }
//   return context;
// }
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

function canResumePlayback(audio: HTMLAudioElement) {
  if (audio.ended) return false;

  if (
    !Number.isFinite(audio.duration) ||
    audio.duration <= 0
  ) {
    return audio.paused;
  }

  return audio.currentTime < audio.duration - 0.25;
}

function isAutoplayPolicyError(error: unknown) {
  return (
    error instanceof DOMException &&
    error.name === 'NotAllowedError'
  );
}

function isHeroIntersecting(element: HTMLElement) {
  const rect = element.getBoundingClientRect();

  if (rect.height <= 0) return false;

  const viewportHeight = window.innerHeight;

  const visibleTop = Math.max(
    rect.top,
    HEADER_OFFSET_PX
  );

  const visibleBottom = Math.min(
    rect.bottom,
    viewportHeight
  );

  const visibleHeight = Math.max(
    0,
    visibleBottom - visibleTop
  );

  return (
    visibleHeight / rect.height >=
    HERO_VISIBLE_RATIO
  );
}

export function DrLakesAudioProvider({
  children,
}: {
  children: ReactNode;
}) {
  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const userPausedRef = useRef(false);

  const heroInViewRef = useRef(false);

  const autoplayBlockedRef =
    useRef(false);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const syncPlayingState = useCallback(() => {
    const audio = audioRef.current;

    setIsPlaying(
      Boolean(
        audio &&
          !audio.paused &&
          !audio.ended
      )
    );
  }, []);

  const playAudio = useCallback(async () => {
    const audio = audioRef.current;

    if (
      !audio ||
      userPausedRef.current ||
      !heroInViewRef.current
    )
      return;

    if (audio.ended) {
      audio.currentTime = 0;
    }

    if (!canResumePlayback(audio))
      return;

    try {
      await audio.play();

      autoplayBlockedRef.current =
        false;
    } catch (error) {
      if (
        isAutoplayPolicyError(error)
      ) {
        autoplayBlockedRef.current =
          true;
      }
    }

    syncPlayingState();
  }, [syncPlayingState]);

  const pauseByUser =
    useCallback(() => {
      const audio =
        audioRef.current;

      if (!audio) return;

      userPausedRef.current =
        true;

      audio.pause();

      syncPlayingState();
    }, [syncPlayingState]);

  const pauseForHeroLeave =
    useCallback(() => {
      const audio =
        audioRef.current;

      if (!audio) return;

      audio.pause();

      syncPlayingState();
    }, [syncPlayingState]);

  useEffect(() => {
    // public folder audio
    const audio =
      new Audio(
        '/drlakes_audio.mpeg'
      );

    audio.preload = 'auto';

    audio.load();

    audioRef.current =
      audio;

    const onPlay = () =>
      syncPlayingState();

    const onPause = () =>
      syncPlayingState();

    const onEnded = () =>
      syncPlayingState();

    const onCanPlay = () => {
      if (
        heroInViewRef.current &&
        !userPausedRef.current
      ) {
        playAudio();
      }
    };

    audio.addEventListener(
      'play',
      onPlay
    );

    audio.addEventListener(
      'pause',
      onPause
    );

    audio.addEventListener(
      'ended',
      onEnded
    );

    audio.addEventListener(
      'canplay',
      onCanPlay
    );

    return () => {
      audio.pause();

      audio.removeEventListener(
        'play',
        onPlay
      );

      audio.removeEventListener(
        'pause',
        onPause
      );

      audio.removeEventListener(
        'ended',
        onEnded
      );

      audio.removeEventListener(
        'canplay',
        onCanPlay
      );

      audio.src = '';
    };
  }, [playAudio, syncPlayingState]);

  const registerHero =
    useCallback(
      (element: HTMLElement) => {
        const syncFromLayout =
          () => {
            const inView =
              isHeroIntersecting(
                element
              );

            heroInViewRef.current =
              inView;

            if (
              inView &&
              !userPausedRef.current
            ) {
              playAudio();
            } else {
              pauseForHeroLeave();
            }
          };

        const observer =
          new IntersectionObserver(
            ([entry]) => {
              if (!entry)
                return;

              heroInViewRef.current =
                entry.isIntersecting;

              if (
                entry.isIntersecting
              ) {
                playAudio();
              } else {
                pauseForHeroLeave();
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

        // deployment timing fix
        setTimeout(
          syncFromLayout,
          500
        );

        window.addEventListener(
          'load',
          syncFromLayout
        );

        const unlockAutoplay =
          () => {
            if (
              autoplayBlockedRef.current
            ) {
              playAudio();
            }
          };

        document.addEventListener(
          'pointerdown',
          unlockAutoplay
        );

        document.addEventListener(
          'keydown',
          unlockAutoplay
        );

        return () => {
          observer.disconnect();

          window.removeEventListener(
            'load',
            syncFromLayout
          );

          document.removeEventListener(
            'pointerdown',
            unlockAutoplay
          );

          document.removeEventListener(
            'keydown',
            unlockAutoplay
          );
        };
      },
      [
        playAudio,
        pauseForHeroLeave,
      ]
    );

  const togglePlayback =
    useCallback(() => {
      const audio =
        audioRef.current;

      if (!audio) return;

      if (!audio.paused) {
        pauseByUser();

        return;
      }

      userPausedRef.current =
        false;

      autoplayBlockedRef.current =
        false;

      audio
        .play()
        .catch((err) =>
          console.log(err)
        );
    }, [pauseByUser]);

  const value = useMemo(
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
  const { registerHero } =
    useDrLakesAudio();

  useEffect(() => {
    const hero =
      document.getElementById(
        HERO_SECTION_ID
      );

    if (!hero) return;

    return registerHero(hero);
  }, [registerHero]);
}

export function useDrLakesAudio() {
  const context = useContext(
    DrLakesAudioContext
  );

  if (!context) {
    throw new Error(
      'useDrLakesAudio must be used within DrLakesAudioProvider'
    );
  }

  return context;
}