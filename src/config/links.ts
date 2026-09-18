import { appEnv } from './env';
import {
  generalCareerInquiryMail,
  workWithMeMail,
} from './mailto';

/**
 * Central place for site links.
 * External URLs and contact details come from Vite env (`VITE_*`) via `appEnv`.
 */
export const links = {
  careers: '/careers',
  contactSection: '/#contact',
  opportunitiesSection: '/#opportunities',
  workWithMe: workWithMeMail(),
  applyNow: generalCareerInquiryMail(),
  viewOpportunities: `mailto:${appEnv.contactEmail}?subject=View%20Opportunities`,
  postOpportunity: `mailto:${appEnv.contactEmail}?subject=Post%20an%20Opportunity`,
  becomePartner: `mailto:${appEnv.contactEmail}?subject=Partner%20%2F%20Collaborator%20Interest`,
  registerInterest: `mailto:${appEnv.contactEmail}?subject=Register%20Interest`,
  joinNetwork: `mailto:${appEnv.contactEmail}?subject=Join%20the%20Network`,
  calendly: appEnv.calendly,
  eventbrite: appEnv.eventbrite,
  freeConsultation: appEnv.freeConsultation,
  viewEvents: appEnv.viewEvents,
  generalCareerApply: '/#contact',
  /** Display address (Contact section) */
  email: appEnv.contactEmail,
  /** mailto: href for the display address */
  emailHref: `mailto:${appEnv.contactEmail}`,
  phone: `tel:${appEnv.phone}`,
  phoneDisplay: appEnv.phoneDisplay,
  instagram: appEnv.instagram,
  youtube: appEnv.youtube,
  spotify: appEnv.spotify,
  eventbriteSocial: appEnv.eventbriteSocial,
} as const;
