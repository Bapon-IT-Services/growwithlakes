/**
 * Typed access to Vite public env vars (VITE_*).
 * Fallbacks keep local/dev usable when a key is missing.
 */

function env(key: keyof ImportMetaEnv, fallback: string): string {
  const value = import.meta.env[key];
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : fallback;
}

export const appEnv = {
  contactEmail: env('VITE_CONTACT_EMAIL', 'growwithlakes@gmail.com'),
  /** Destination for application / enquiry mailto helpers */
  mailtoEmail: env('VITE_MAILTO_EMAIL', 'jamaila@growwithlakes.com'),
  /** Digits / E.164 for tel: links, e.g. +442031054511 */
  phone: env('VITE_PHONE', '+442031054511'),
  /** Human-readable phone shown in the UI */
  phoneDisplay: env('VITE_PHONE_DISPLAY', '+44 0203 105 4511'),
  calendly: env('VITE_CALENDLY_URL', 'https://calendly.com/'),
  eventbrite: env('VITE_EVENTBRITE_URL', 'https://www.eventbrite.com/'),
  freeConsultation: env('VITE_FREE_CONSULTATION_URL', 'https://calendly.com/'),
  viewEvents: env('VITE_VIEW_EVENTS_URL', 'https://www.eventbrite.com/'),
  instagram: env(
    'VITE_INSTAGRAM_URL',
    'https://www.instagram.com/dr.lakes2u?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
  ),
  youtube: env('VITE_YOUTUBE_URL', 'https://youtube.com/'),
  spotify: env('VITE_SPOTIFY_URL', 'https://open.spotify.com/'),
  eventbriteSocial: env('VITE_EVENTBRITE_SOCIAL_URL', 'https://www.eventbrite.com/'),
} as const;
