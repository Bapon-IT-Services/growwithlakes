import {
  generalCareerInquiryMail,
  workWithMeMail,
} from './mailto';

/**
 * Central place to update outbound URLs when streams, forms, or partner pages go live.
 */
export const links = {
  careers: '/careers',
  contactSection: '/#contact',
  opportunitiesSection: '/#opportunities',
  workWithMe: workWithMeMail(),
  applyNow: generalCareerInquiryMail(),
  viewOpportunities:
    'mailto:growwithlakes@gmail.com?subject=View%20Opportunities',
  postOpportunity:
    'mailto:growwithlakes@gmail.com?subject=Post%20an%20Opportunity',
  becomePartner:
    'mailto:growwithlakes@gmail.com?subject=Partner%20%2F%20Collaborator%20Interest',
  registerInterest:
    'mailto:growwithlakes@gmail.com?subject=Register%20Interest',
  joinNetwork:
    'mailto:growwithlakes@gmail.com?subject=Join%20the%20Network',
  /** Replace with live Calendly URL for Sunday Growth Conversations */
  calendly: 'https://calendly.com/',
  /** Replace with live Eventbrite organiser or collection URL */
  eventbrite: 'https://www.eventbrite.com/',
  freeConsultation: 'https://calendly.com/',
  viewEvents: 'https://www.eventbrite.com/',
  generalCareerApply:'/#contact',
  email: 'growwithlakes@gmail.com',
  phone: 'tel:+442031054511',
  /** Social placeholders — update when profiles go live */
  instagram: 'https://www.instagram.com/dr.lakes2u?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  youtube: 'https://youtube.com/',
  spotify: 'https://open.spotify.com/',
  eventbriteSocial: 'https://www.eventbrite.com/',
} as const;
