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
      'Support conversations, show prep and content across the Grow With Lakes media platform including The Wave Room and On Air Off Script.',
    description:
      'You will help research guests, shape talking points and keep sessions running smoothly from pre-production through publish. This role sits at the heart of the platform\'s media work: real conversations, cultural moments and stories that connect community. Ideal if you are organised, curious about culture and comfortable behind the scenes and on set. Podcast, live stream or studio experience is a plus.',
    applyHref: careerApplicationMail('Media & Hosting Assistant'),
  },
  {
    id: 'ar-development',
    title: 'A&R & Artist Development',
    type: 'Music',
    summary:
      'Support talent on the platform with direction, exposure and long-term growth helping artists recognise possibilities they cannot yet see for themselves.',
    description:
      'Grow With Lakes exists to open doors for creatives. In this role you will help scout talent, organise sessions and support artists with honest feedback and intentional development. You should have an ear for emerging talent and care about growth beyond a single release. Music industry, studio or artist-management experience is welcome.',
    applyHref: careerApplicationMail('A&R & Artist Development'),
  },
  {
    id: 'community-partnerships',
    title: 'Community & Partnerships Coordinator',
    type: 'Partnerships',
    summary:
      'Connect creatives, businesses and aligned partners across the Grow With Lakes network turning introductions into real collaboration.',
    description:
      'The platform is built on conversation, community, opportunity and growth. You will map opportunities across the ecosystem, nurture partner relationships and help collaborations move from idea to action. Strong communication and follow-through matter more than a formal title. Experience in community building, partnerships or events within music and culture is valuable.',
    applyHref: careerApplicationMail('Community & Partnerships Coordinator'),
  },
  {
    id: 'events-operations',
    title: 'Events & Studio Operations',
    type: 'Operations',
    summary:
      'Coordinate workshops, live shows and platform experiences including events listed through Grow With Lakes on Eventbrite.',
    description:
      'From run-of-show planning to on-the-day coordination, you help sessions, workshops and community events run without friction. You will liaise with talent, vendors and the core team so every touchpoint feels premium and on-brand. Detail-oriented people with events, production or studio operations background fit well here.',
    applyHref: careerApplicationMail('Events & Studio Operations'),
  },
  {
    id: 'creative-social',
    title: 'Creative & Social Media',
    type: 'Creative',
    summary:
      'Shape visual storytelling and social content that carries the Grow With Lakes platform tone, bold, cultural and community-driven.',
    description:
      'You will concept and deliver short-form content, clips and campaign assets that reflect the platform and the world around Dr Lakes — not just a personal brand page, but a growing ecosystem. Comfort with editing, captions and platform-native formats is key. A portfolio or examples of social, brand or music-related creative work helps us understand your eye.',
    applyHref: careerApplicationMail('Creative & Social Media'),
  },
];
