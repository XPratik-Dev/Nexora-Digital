export type CaseStudy = {
  slug: string;
  clientName: string;
  industry: string;
  service: string;
  summary: string;
  heroMetric: string;
  duration: string;
  challenge: string[];
  strategy: string[];
  results: string[];
  metrics: Array<{ label: string; value: string }>;
  quote: string;
  contactOutcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "signalstack-seo-rebuild",
    clientName: "SignalStack",
    industry: "B2B SaaS",
    service: "SEO",
    summary:
      "A technical SEO and content rebuild that turned an underperforming resource center into a qualified demo source.",
    heroMetric: "+240% organic traffic",
    duration: "6 months",
    challenge: [
      "SignalStack had strong product demand but poor non-brand visibility and an outdated resource hub.",
      "Important pages were difficult to crawl, article targeting was inconsistent, and content was not pushing readers toward demo-ready pages.",
    ],
    strategy: [
      "Ran a technical SEO audit and fixed indexation, duplicate metadata, and internal-linking gaps.",
      "Built service-adjacent topic clusters around integration, automation, and workflow search intent.",
      "Reworked CTA placement so educational content flowed into solution pages and demo pathways.",
    ],
    results: [
      "Organic traffic grew by 240 percent while maintaining healthy engagement quality.",
      "Demo requests from organic sessions increased 118 percent, giving the sales team a steadier stream of qualified prospects.",
      "The internal content team gained a usable editorial framework instead of a backlog of disconnected article ideas.",
    ],
    metrics: [
      { label: "Organic traffic", value: "+240%" },
      { label: "Demo requests", value: "+118%" },
      { label: "Top-20 keywords", value: "+43" },
    ],
    quote:
      "Nexora gave us a roadmap we could actually execute, and every change connected back to pipeline, not just rankings.",
    contactOutcome:
      "The growth team now uses the content engine as a predictable source of demo-ready traffic.",
  },
  {
    slug: "meridian-commerce-ppc-scale",
    clientName: "Meridian Commerce",
    industry: "E-commerce",
    service: "PPC",
    summary:
      "A paid acquisition reset that improved creative-message match and reduced wasted spend across search and Meta.",
    heroMetric: "-34% cost per lead",
    duration: "10 weeks",
    challenge: [
      "Campaign spend was increasing, but the business could not tell which ad sets and search terms were producing qualified leads.",
      "Landing pages were generic, creative was not segmented by audience stage, and CRM handoff was inconsistent.",
    ],
    strategy: [
      "Restructured campaigns around product category intent and customer awareness stage.",
      "Aligned landing-page sections and offers to the exact promise made in each ad group.",
      "Cleaned up conversion tracking and added clearer lead qualification reporting.",
    ],
    results: [
      "Cost per lead dropped by 34 percent while qualified demo volume doubled over the same period.",
      "Meta remarketing became a stronger closer once creative and page continuity improved.",
      "Leadership finally had reporting that separated cheap leads from meaningful sales opportunities.",
    ],
    metrics: [
      { label: "Cost per lead", value: "-34%" },
      { label: "Qualified demos", value: "2x" },
      { label: "Landing-page CVR", value: "+41%" },
    ],
    quote:
      "The change was not just in the ad account. Nexora fixed the flow from click to handoff, which is why performance held.",
    contactOutcome:
      "Meridian now uses one reporting system for spend, conversion rate, and qualified pipeline.",
  },
  {
    slug: "northshore-advisors-web-redesign",
    clientName: "Northshore Advisors",
    industry: "Professional Services",
    service: "Web Design",
    summary:
      "A full website redesign that clarified the offer, strengthened trust signals, and improved inquiry quality.",
    heroMetric: "+68% consultation requests",
    duration: "12 weeks",
    challenge: [
      "Northshore's existing site looked dated, buried its strongest credibility signals, and relied on vague copy that did little to guide action.",
      "Visitors bounced quickly and form submissions often lacked context or seriousness.",
    ],
    strategy: [
      "Rebuilt the sitemap around core services, outcomes, and real-world proof instead of internal jargon.",
      "Introduced stronger CTA hierarchy, case-study style proof sections, and a better-structured contact experience.",
      "Improved mobile responsiveness, page speed, and metadata so the site could support both referrals and search.",
    ],
    results: [
      "Consultation requests grew 68 percent and the average session duration increased substantially.",
      "Bounce rate dropped as visitors reached the right pages faster and found more relevant proof points.",
      "The firm now has a scalable design system for future landing pages and service expansions.",
    ],
    metrics: [
      { label: "Consultation requests", value: "+68%" },
      { label: "Bounce rate", value: "-21%" },
      { label: "Avg. session duration", value: "+54%" },
    ],
    quote:
      "The redesign made us sound as credible online as we do in the room. That changed the quality of conversations immediately.",
    contactOutcome:
      "Northshore now uses the website as its primary conversion hub for paid and referral traffic.",
  },
  {
    slug: "atlasflow-lifecycle-email",
    clientName: "AtlasFlow",
    industry: "SaaS",
    service: "Email Marketing",
    summary:
      "A lifecycle automation program that turned dormant free-trial leads into a more reliable pipeline segment.",
    heroMetric: "+31% trial-to-demo rate",
    duration: "8 weeks",
    challenge: [
      "AtlasFlow had a steady stream of signups, but very little nurture after the first week of activity.",
      "Sales follow-up was inconsistent and product education was not sequenced in a way that matched user behavior.",
    ],
    strategy: [
      "Mapped user actions across signup, activation, dormant trial, and re-engagement stages.",
      "Built segmented nurture flows with product value education, case-study proof, and stronger CTA timing.",
      "Connected campaign insights back to the CRM so sales could prioritize more engaged leads.",
    ],
    results: [
      "Trial-to-demo conversion increased 31 percent as the nurture sequence reduced the education gap.",
      "Re-engagement emails created a meaningful second chance path for users who would previously have gone cold.",
      "Marketing and sales gained a shared view of which lifecycle behaviors actually signaled readiness.",
    ],
    metrics: [
      { label: "Trial-to-demo rate", value: "+31%" },
      { label: "Re-engagement CTR", value: "+46%" },
      { label: "Qualified nurture leads", value: "+29%" },
    ],
    quote:
      "Nexora turned lifecycle from an afterthought into a real revenue lever. The nurture logic finally matched how buyers actually decide.",
    contactOutcome:
      "AtlasFlow now uses email automation as a bridge between signup activity and sales-ready demand.",
  },
];
