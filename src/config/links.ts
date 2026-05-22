import { generalCareerInquiryMail, workWithMeMail } from './mailto';

/**
 * Central place to update outbound URLs when streams, forms, or partner pages go live.
 */
export const links = {
  careers: '/careers',
  workWithMe: workWithMeMail(),
  viewOpportunities:
    'mailto:jamaila@growwithlakes.com?subject=View%20Opportunities',
  postOpportunity:
    'mailto:jamaila@growwithlakes.com?subject=Post%20an%20Opportunity',
  becomePartner:
    'mailto:jamaila@growwithlakes.com?subject=Partner%20%2F%20Collaborator%20Interest',
  registerInterest:
    'mailto:jamaila@growwithlakes.com?subject=Register%20Interest',
  generalCareerApply: generalCareerInquiryMail(),
  email: 'mailto:jamaila@growwithlakes.com',
  phone: 'tel:+442031054511',
} as const;
