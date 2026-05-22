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
  applyHref: string;
};

export const careerRoles: CareerRole[] = [
  {
    id: 'media-hosting',
    title: 'Media & Hosting Assistant',
    type: 'Media',
    summary:
      'Support show prep, guest coordination and content delivery for conversations that spotlight culture and community.',
    applyHref: careerApplicationMail('Media & Hosting Assistant'),
  },
  {
    id: 'ar-development',
    title: 'A&R & Artist Development',
    type: 'Music',
    summary:
      'Help scout talent, organise sessions and support artists with direction, taste and long-term growth strategy.',
    applyHref: careerApplicationMail('A&R & Artist Development'),
  },
  {
    id: 'community-partnerships',
    title: 'Community & Partnerships Coordinator',
    type: 'Partnerships',
    summary:
      'Connect creatives, businesses and community partners — keeping collaboration aligned with the Grow With Lakes mission.',
    applyHref: careerApplicationMail('Community & Partnerships Coordinator'),
  },
  {
    id: 'events-operations',
    title: 'Events & Studio Operations',
    type: 'Operations',
    summary:
      'Coordinate live sessions, workshops and studio logistics so every experience feels polished and on-brand.',
    applyHref: careerApplicationMail('Events & Studio Operations'),
  },
  {
    id: 'creative-social',
    title: 'Creative & Social Media',
    type: 'Creative',
    summary:
      'Shape visual storytelling and social campaigns that reflect Dr Lakes and the wider ecosystem with consistency and energy.',
    applyHref: careerApplicationMail('Creative & Social Media'),
  },
];
