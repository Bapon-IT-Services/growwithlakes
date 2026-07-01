export const impactPillars = [
  'Conversation',
  'Community',
  'Opportunity',
  'Growth',
] as const;

export const testimonials = [
  {
    id: 't1',
    quote:
      'Grow With Lakes opened doors I did not know existed. Within weeks I was connected to collaborators, mentors and my first paid creative opportunity.',
    name: 'Amara O.',
    role: 'Independent artist',
  },
  {
    id: 't2',
    quote:
      'The platform feels human. It is not just networking it is genuine support, real conversations and people who actually show up for the community.',
    name: 'Jordan M.',
    role: 'Community organiser',
  },
  {
    id: 't3',
    quote:
      'From a single workshop to a full partnership Dr Lakes helped us structure our idea, find the right people and grow with confidence.',
    name: 'Priya K.',
    role: 'Small business founder',
  },
] as const;

export const caseStudies = [
  {
    id: 'cs1',
    tag: 'Artist development',
    title: 'From open mic to released single',
    challenge:
      'An emerging vocalist needed direction, production contacts and a clear path from local performances to a professional release.',
    result:
      'Connected with an A&R mentor, recorded a debut single and secured a slot at a Grow With Lakes live showcase.',
  },
  {
    id: 'cs2',
    tag: 'Community partnership',
    title: 'Youth programme local business network',
    challenge:
      'A community group wanted to run employability workshops but lacked venues, speakers and cross-sector buy-in.',
    result:
      'Three partner organisations co-hosted six sessions 40+ young people attended and five secured work placements.',
  },
  {
    id: 'cs3',
    tag: 'Business growth',
    title: 'Hospitality brand repositioning',
    challenge:
      'A family-run food business needed brand clarity, event presence and a strategy to reach new audiences beyond their local area.',
    result:
      'Refined brand story, launched at a networking event and grew social following by 120% over three months.',
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
    excerpt:
      'Marcus arrived at his first Grow With Lakes event unsure whether he belonged. He left with two introductions that led to a podcast feature and a paid coaching client.',
    person: 'Marcus T.',
    context: 'Coach & facilitator',
    stat: '2 opportunities within 30 days',
  },
  {
    id: 'is2',
    headline: 'Building in public, growing together',
    excerpt:
      'When Layla shared her business idea at a Sunday Growth Conversation, the feedback was honest and encouraging. Six months later her community project had funding and a volunteer team.',
    person: 'Layla R.',
    context: 'Social enterprise founder',
    stat: 'Funded community pilot launched',
  },
  {
    id: 'is3',
    headline: 'From isolation to collaboration',
    excerpt:
      'After years of working alone, Dev found a creative circle through the platform co-writing sessions, shared gigs and a collective that now books regular events across the city.',
    person: 'Dev S.',
    context: 'Musician & producer',
    stat: '5-artist collective formed',
  },
] as const;