const loremTwoLines =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const impactPillars = [
  'Conversation',
  'Community',
  'Opportunity',
  'Growth',
] as const;

export const testimonials = [
  {
    id: 't1',
    quote: loremTwoLines,
    name: 'Amara O.',
    role: 'Independent artist',
  },
  {
    id: 't2',
    quote: loremTwoLines,
    name: 'Jordan M.',
    role: 'Community organiser',
  },
  {
    id: 't3',
    quote: loremTwoLines,
    name: 'Priya K.',
    role: 'Small business founder',
  },
] as const;

export const caseStudies = [
  {
    id: 'cs1',
    tag: 'Artist development',
    title: 'From open mic to released single',
    challenge: loremTwoLines,
    result: loremTwoLines,
  },
  {
    id: 'cs2',
    tag: 'Community partnership',
    title: 'Youth programme local business network',
    challenge: loremTwoLines,
    result: loremTwoLines,
  },
  {
    id: 'cs3',
    tag: 'Business growth',
    title: 'Hospitality brand repositioning',
    challenge: loremTwoLines,
    result: loremTwoLines,
  },
] as const;

export const eventPhotos = [
  { id: 'ep1', caption: 'Soul Unity collaboration night', event: 'Community mixer', span: 'hero' as const },
  { id: 'ep2', caption: 'Networking at Bubblegum Lounge', event: 'Partner showcase', span: 'tall' as const, tilt: true },
  { id: 'ep3', caption: 'Creative development workshop', event: 'Workshop', span: 'compact' as const },
  { id: 'ep4', caption: 'On Air Off Script live session', event: 'Live show', span: 'wide' as const },
  { id: 'ep5', caption: 'Local business community day', event: 'Community event', span: 'compact' as const, tilt: true },
  { id: 'ep6', caption: 'Culture & cuisine evening', event: 'Pop-up event', span: 'wide' as const },
] as const;

export const impactStories = [
  {
    id: 'is1',
    headline: 'A room that changed everything',
    excerpt: loremTwoLines,
    person: 'Marcus T.',
    context: 'Coach & facilitator',
    stat: '2 opportunities within 30 days',
  },
  {
    id: 'is2',
    headline: 'Building in public, growing together',
    excerpt: loremTwoLines,
    person: 'Layla R.',
    context: 'Social enterprise founder',
    stat: 'Funded community pilot launched',
  },
  {
    id: 'is3',
    headline: 'From isolation to collaboration',
    excerpt: loremTwoLines,
    person: 'Dev S.',
    context: 'Musician & producer',
    stat: '5-artist collective formed',
  },
] as const;
