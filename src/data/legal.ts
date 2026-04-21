export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export const privacySections: LegalSection[] = [
  {
    heading: "Information We Collect",
    paragraphs: [
      "We collect the information you voluntarily submit through our contact and newsletter forms, including your name, email address, company name, selected service interest, budget range, and any project details you share.",
      "We may also collect technical usage information through analytics and tracking tools when you consent, including basic device, browser, and page interaction information used to improve marketing performance and site experience.",
    ],
  },
  {
    heading: "How We Use Information",
    paragraphs: [
      "We use your information to respond to inquiries, deliver requested strategy conversations, improve site performance, understand marketing attribution, and send insights or updates if you subscribe to our newsletter.",
      "We do not sell personal information. We only share data with service providers needed to operate the site and requested services, such as hosting, analytics, email delivery, and CRM or database tools.",
    ],
  },
  {
    heading: "Your Choices",
    paragraphs: [
      "You can request access, correction, or deletion of the information you have submitted to Nexora Digital by contacting hello@nexoradigital.com.",
      "You can also manage analytics preferences through the cookie consent banner and unsubscribe from email communications at any time.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: "Use of This Website",
    paragraphs: [
      "The content on this website is provided for general informational and marketing purposes. It does not create a client relationship on its own, and any project engagement begins only after a signed agreement between you and Nexora Digital.",
      "You agree not to misuse the website, attempt unauthorized access, or interfere with site availability, security, or the experience of other visitors.",
    ],
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "All website copy, branding, layouts, and original assets are owned by or licensed to Nexora Digital unless otherwise stated. You may not reproduce or republish them without written permission.",
      "Any third-party logos, trademarks, or referenced brand names remain the property of their respective owners and are used for identification or portfolio context only.",
    ],
  },
  {
    heading: "Limitations",
    paragraphs: [
      "We work to keep this site accurate and available, but we cannot guarantee uninterrupted service or that all content is free from errors. The website is provided on an as-is basis.",
      "To the maximum extent allowed by law, Nexora Digital is not liable for indirect or consequential damages related to your use of the website.",
    ],
  },
];

export const cookieSections: LegalSection[] = [
  {
    heading: "Essential Cookies",
    paragraphs: [
      "Essential storage helps the site remember basic interface preferences, including your cookie consent selection, so the website can function properly.",
    ],
  },
  {
    heading: "Analytics and Advertising Cookies",
    paragraphs: [
      "When you accept analytics cookies, the site may load tools such as Google Analytics, Google Tag Manager, Meta Pixel, LinkedIn Insight Tag, or Plausible, depending on the integrations configured for your deployment.",
      "These tools help measure campaign attribution, user journeys, and marketing performance. They are only loaded after consent in this implementation.",
    ],
  },
  {
    heading: "Managing Consent",
    paragraphs: [
      "You can accept or decline analytics cookies using the consent banner when you first visit the site. If you change your mind later, clearing local storage for this site will reset the banner.",
    ],
  },
];
