/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_MAILTO_EMAIL?: string;
  readonly VITE_PHONE?: string;
  readonly VITE_PHONE_DISPLAY?: string;
  readonly VITE_CALENDLY_URL?: string;
  readonly VITE_EVENTBRITE_URL?: string;
  readonly VITE_FREE_CONSULTATION_URL?: string;
  readonly VITE_VIEW_EVENTS_URL?: string;
  readonly VITE_INSTAGRAM_URL?: string;
  readonly VITE_YOUTUBE_URL?: string;
  readonly VITE_SPOTIFY_URL?: string;
  readonly VITE_EVENTBRITE_SOCIAL_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.mpeg' {
  const src: string;
  export default src;
}
