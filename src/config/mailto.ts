const CONTACT_EMAIL = 'jamaila@growwithlakes.com';

/** Encode mailto query params — use %20 not + so clients show spaces correctly. */
function encodeMailtoQuery(subject: string, body: string) {
  const params = new URLSearchParams();
  params.set('subject', subject);
  params.set('body', body.replace(/\n/g, '\r\n'));
  return params.toString().replace(/\+/g, '%20');
}

export function buildMailto(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?${encodeMailtoQuery(subject, body)}`;
}

export function careerApplicationMail(roleTitle: string) {
  return buildMailto(
    `Career application — ${roleTitle}`,
    [
      'Hello Grow With Lakes team,',
      '',
      `I would like to apply for the following role: ${roleTitle}`,
      '',
      'Name:',
      'Location:',
      'Portfolio / links:',
      'Availability:',
      '',
      'Brief introduction:',
      '',
      'Thank you for your consideration.',
    ].join('\n')
  );
}

export function workWithMeMail() {
  return buildMailto(
    'Work With Me — Grow With Lakes',
    [
      'Hello Dr Lakes / Grow With Lakes team,',
      '',
      'I would like to explore working together.',
      '',
      'Name:',
      'Organisation (if applicable):',
      'What I am looking for (collaboration, booking, project, etc.):',
      '',
      'Brief overview:',
      '',
      'Best regards,',
    ].join('\n')
  );
}

export function freeConsultationMail() {
  return buildMailto(
    'Free Consultation — Grow With Lakes',
    [
      'Hello Dr Lakes / Grow With Lakes team,',
      '',
      'I would like to book a free consultation.',
      '',
      'Name:',
      'Area of interest:',
      'Brief overview of what I am looking for:',
      '',
      'Best regards,',
    ].join('\n')
  );
}

export function viewEventsMail() {
  return buildMailto(
    'View Events — Grow With Lakes',
    [
      'Hello Grow With Lakes team,',
      '',
      'I would like to find out more about upcoming events.',
      '',
      'Name:',
      'What I am interested in:',
      '',
      'Thank you.',
    ].join('\n')
  );
}

export function enquiryMail(values: {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}) {
  const lines = [
    'Hello Grow With Lakes team,',
    '',
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : '',
    `Interest: ${values.interest}`,
    '',
    'Message:',
    values.message,
    '',
    'Thank you.',
  ].filter((line) => line !== '');

  return buildMailto(`Enquiry — ${values.interest}`, lines.join('\n'));
}

export function generalCareerInquiryMail() {
  return buildMailto(
    'Career inquiry — Grow With Lakes',
    [
      'Hello Grow With Lakes team,',
      '',
      'I am interested in career opportunities with Grow With Lakes / Dr Lakes.',
      '',
      'Name:',
      'Area of interest:',
      'Portfolio / links:',
      '',
      'Brief introduction:',
      '',
      'Thank you.',
    ].join('\n')
  );
}
