import { careerApplicationMail } from './mailto';

export const focusAreas = [
  'Media',
  'Music',
  'Community',
  'Partnerships',
  'Operations',
] as const;

export type FocusArea = (typeof focusAreas)[number];

export type CareerRole = {
  id: string;
  title: string;
  type: string;
  summary: string;
  description: string;
  applyHref: string;
};

export const careerRoles: CareerRole[] = [
  {
    id: 'media-hosting',
    title: 'Media & Hosting Assistant',
    type: 'Media',
    summary:
      'Support show prep, guest coordination and content delivery for conversations that spotlight culture and community.',
    description:
      'You will help research guests, shape talking points and keep sessions running smoothly — from pre-production through publish. Ideal if you are organised, curious about culture and comfortable behind the scenes and on set. Experience with podcasts, live streams or studio environments is a plus.',
    applyHref: careerApplicationMail('Media & Hosting Assistant'),
  },
  {
    id: 'ar-development',
    title: 'A&R & Artist Development',
    type: 'Music',
    summary:
      'Help scout talent, organise sessions and support artists with direction, taste and long-term growth strategy.',
    description:
      'This role is about spotting potential and helping artists grow with intention — booking sessions, tracking projects and offering honest creative feedback. You should have an ear for emerging talent and interest in development beyond a single release. Music industry, studio or artist-management exposure is welcome.',
    applyHref: careerApplicationMail('A&R & Artist Development'),
  },
  {
    id: 'community-partnerships',
    title: 'Community & Partnerships Coordinator',
    type: 'Partnerships',
    summary:
      'Connect creatives, businesses and community partners — keeping collaboration aligned with the Grow With Lakes mission.',
    description:
      'You will map opportunities across the ecosystem, nurture partner relationships and help turn introductions into real collaborations. Strong communication and follow-through matter more than a formal title. Experience in community building, partnerships or events within music and culture is valuable.',
    applyHref: careerApplicationMail('Community & Partnerships Coordinator'),
  },
  {
    id: 'events-operations',
    title: 'Events & Studio Operations',
    type: 'Operations',
    summary:
      'Coordinate live sessions, workshops and studio logistics so every experience feels polished and on-brand.',
    description:
      'From run-of-show planning to on-the-day coordination, you keep sessions and workshops moving without friction. You will liaise with talent, vendors and the core team so every touchpoint feels premium. Detail-oriented people with events, production or studio ops background fit well here.',
    applyHref: careerApplicationMail('Events & Studio Operations'),
  },
  {
    id: 'creative-social',
    title: 'Creative & Social Media',
    type: 'Creative',
    summary:
      'Shape visual storytelling and social campaigns that reflect Dr Lakes and the wider ecosystem with consistency and energy.',
    description:
      'You will concept and deliver short-form content, clips and campaign assets that carry the Grow With Lakes tone — bold, cultural and clear. Comfort with editing, captions and platform-native formats is key. A portfolio or examples of social, brand or music-related creative work helps us understand your eye.',
    applyHref: careerApplicationMail('Creative & Social Media'),
  },
];
