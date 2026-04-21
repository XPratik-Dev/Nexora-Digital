export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  hero: string;
  description: string;
  whoItsFor: string;
  expectedResult: string;
  startingPrice: string;
  intro: string;
  deliverables: string[];
  outcomes: string[];
  process: Array<{ title: string; detail: string }>;
  faqs: ServiceFaq[];
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "seo",
    title: "SEO",
    hero: "Build search visibility that compounds into qualified pipeline.",
    description:
      "We combine technical SEO, content planning, internal linking, and conversion-aware landing page improvements so search becomes an acquisition channel rather than a reporting vanity metric.",
    whoItsFor:
      "Growth-stage e-commerce and SaaS teams that already have product-market traction and want more high-intent traffic without relying only on paid media.",
    expectedResult:
      "Expect stronger non-brand visibility, better organic conversion paths, and a clearer editorial roadmap tied to services and revenue categories.",
    startingPrice: "$2,500/mo",
    intro:
      "SEO at Nexora starts with a revenue lens. We map search demand to business intent, prioritize technical cleanup, and publish content around the terms most likely to lead to pipeline.",
    deliverables: [
      "Technical SEO audit with prioritized fixes",
      "Keyword map for service, solution, and comparison intent",
      "Quarterly editorial calendar and content briefs",
      "On-page optimization for priority landing pages",
      "Internal-linking and schema recommendations",
      "Monthly reporting tied to rankings, traffic quality, and lead flow",
    ],
    outcomes: [
      "Improved crawlability and page indexation",
      "Higher rankings for low-competition, high-intent keywords",
      "More demo-ready visitors landing on service pages",
      "A repeatable content engine for long-term growth",
    ],
    process: [
      {
        title: "Audit",
        detail:
          "We review crawl health, existing content, site structure, page performance, and conversion paths to find the biggest blockers first.",
      },
      {
        title: "Strategy",
        detail:
          "We build a keyword and page architecture plan that prioritizes revenue-adjacent opportunities, not just volume.",
      },
      {
        title: "Execute",
        detail:
          "We coordinate optimization, briefs, publishing, and measurement so the work compounds instead of living in disconnected tasks.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most clients start seeing meaningful movement within 8 to 12 weeks, with stronger compounding gains as technical cleanup and content depth mature.",
      },
      {
        question: "Do you handle both strategy and implementation?",
        answer:
          "Yes. We can lead strategy, write briefs, support development tickets, and coordinate publishing so the plan does not stall after recommendations.",
      },
      {
        question: "Will SEO work for a newer website?",
        answer:
          "Yes, especially when the site architecture and service pages are set up correctly from launch. That is why this build includes metadata, schema, and structured service routes from day one.",
      },
    ],
    seoDescription:
      "Technical SEO, content strategy, and conversion-focused search growth for e-commerce, SaaS, and service brands.",
  },
  {
    slug: "ppc",
    title: "PPC",
    hero: "Paid media systems that scale faster and waste less.",
    description:
      "We build and manage paid search, paid social, and remarketing programs that connect campaign intent with landing-page clarity and CRM follow-up.",
    whoItsFor:
      "Brands with validated offers and a need to generate demand quickly while preserving budget efficiency and visibility into lead quality.",
    expectedResult:
      "Expect cleaner account structure, lower acquisition waste, and better signal between traffic quality, creative themes, and downstream conversion.",
    startingPrice: "$3,000/mo",
    intro:
      "Nexora treats PPC as a full-funnel coordination problem. Better targeting matters, but so do message match, landing-page friction, and conversion tracking.",
    deliverables: [
      "Channel audit for Google Ads, Meta, and LinkedIn",
      "Campaign rebuild or restructure plan",
      "Creative testing matrix and landing-page message match",
      "Conversion tracking QA and event mapping",
      "Weekly optimization and pacing adjustments",
      "Performance reporting tied to CPL, SQLs, and revenue signal",
    ],
    outcomes: [
      "Lower wasted spend on weak search terms and audiences",
      "Stronger ad-to-page continuity",
      "Faster iteration on audiences, hooks, and offers",
      "More reliable reporting for revenue decisions",
    ],
    process: [
      {
        title: "Audit",
        detail:
          "We review campaign structure, attribution, creative, search term quality, and landing-page behavior before touching budgets.",
      },
      {
        title: "Strategy",
        detail:
          "We rebuild around buying intent, clear offer paths, and reporting that distinguishes leads from qualified pipeline.",
      },
      {
        title: "Execute",
        detail:
          "We launch tests, tighten exclusions, improve conversion surfaces, and report changes in a weekly operating rhythm.",
      },
    ],
    faqs: [
      {
        question: "Which ad platforms do you manage?",
        answer:
          "Most engagements include Google Ads and either Meta or LinkedIn, depending on whether the buying motion is consumer-led or B2B.",
      },
      {
        question: "Do you also improve landing pages?",
        answer:
          "Yes. Landing-page improvements are part of the work because channel performance breaks when the page cannot carry intent forward.",
      },
      {
        question: "Can you work alongside an internal team?",
        answer:
          "Absolutely. We often plug into internal brand, creative, or demand-gen teams and handle the paid-media strategy and optimization layer.",
      },
    ],
    seoDescription:
      "Paid search and paid social management focused on acquisition efficiency, better conversion rates, and tighter reporting.",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    hero: "Stay visible in-feed without sounding interchangeable.",
    description:
      "We build social systems that blend organic content, paid amplification, and campaign messaging so your brand shows up consistently where audiences already spend attention.",
    whoItsFor:
      "Brands that need stronger channel consistency, a sharper point of view, and more efficient distribution across LinkedIn, Instagram, or Meta.",
    expectedResult:
      "Expect better engagement quality, stronger brand recall, and more content assets that support both acquisition and sales enablement.",
    startingPrice: "$2,000/mo",
    intro:
      "Social media is not just a posting calendar. We use it as a channel for brand demand, paid distribution support, and conversion storytelling.",
    deliverables: [
      "Channel positioning and content pillars",
      "Monthly campaign calendar with hooks and assets",
      "Paid amplification recommendations",
      "Performance review for engagement and downstream traffic",
      "Short-form creative concepts and post outlines",
      "Community management guidelines",
    ],
    outcomes: [
      "More consistent brand presence",
      "Better alignment between organic and paid messaging",
      "Higher engagement from relevant audiences",
      "Stronger social proof for the sales cycle",
    ],
    process: [
      {
        title: "Audit",
        detail:
          "We review content velocity, positioning, engagement quality, and the gap between what is being posted and what your audience actually cares about.",
      },
      {
        title: "Strategy",
        detail:
          "We define platform roles, content pillars, offers, and the types of stories that should move from awareness into action.",
      },
      {
        title: "Execute",
        detail:
          "We produce, schedule, iterate, and connect social insights back into paid messaging, case studies, and email nurture.",
      },
    ],
    faqs: [
      {
        question: "Do you create the content too?",
        answer:
          "Yes. We can develop the messaging, outlines, and creative direction, then coordinate production with your internal team or external creators.",
      },
      {
        question: "Can social drive leads directly?",
        answer:
          "It can, but its strongest effect is usually a mix of demand creation, remarketing support, and trust-building that improves every downstream conversion point.",
      },
      {
        question: "Which platforms are best for B2B?",
        answer:
          "LinkedIn usually leads for B2B. We also use Meta for remarketing and Instagram when the brand story benefits from more visual, lifestyle-oriented proof.",
      },
    ],
    seoDescription:
      "Strategic social media management for brands that want better engagement, stronger messaging, and tighter paid-organic alignment.",
  },
  {
    slug: "content-strategy",
    title: "Content Strategy",
    hero: "Editorial systems built for authority, discoverability, and conversion.",
    description:
      "We plan content around audience questions, commercial intent, and internal-linking opportunities so blog publishing supports both search and sales conversations.",
    whoItsFor:
      "Teams that have product expertise but need a clearer structure for turning that expertise into repeatable content assets.",
    expectedResult:
      "Expect a content roadmap with measurable priorities, stronger topical authority, and more assets that can be repurposed across the funnel.",
    startingPrice: "$2,200/mo",
    intro:
      "Good content strategy narrows the distance between what prospects are researching and what your services actually solve.",
    deliverables: [
      "Audience and keyword research",
      "Topic clusters for awareness, comparison, and decision-stage intent",
      "Blog outlines and editorial briefs",
      "Internal-linking and CTA strategy",
      "Repurposing guidance for social and email",
      "Performance review by traffic quality and assisted conversions",
    ],
    outcomes: [
      "More publish-ready clarity for your team",
      "Stronger topical authority in your niche",
      "Higher-value content assets that support sales enablement",
      "Clearer content-to-conversion paths",
    ],
    process: [
      {
        title: "Audit",
        detail:
          "We review existing assets, topical gaps, search opportunity, and the current relationship between content and conversion.",
      },
      {
        title: "Strategy",
        detail:
          "We design clusters, content pillars, CTA pathways, and a publishing sequence grounded in business goals.",
      },
      {
        title: "Execute",
        detail:
          "We brief, optimize, repurpose, and review content so the system produces momentum rather than isolated posts.",
      },
    ],
    faqs: [
      {
        question: "Do you only write SEO articles?",
        answer:
          "No. We shape thought leadership, solution explainers, comparison pages, nurture content, and other assets that help prospects trust the brand faster.",
      },
      {
        question: "Can content help sales directly?",
        answer:
          "Yes. Well-structured content shortens the education gap, gives sales teams proof assets to share, and improves objection handling.",
      },
      {
        question: "How many articles should we publish per month?",
        answer:
          "That depends on competition, domain strength, and production capacity. We typically recommend a sustainable cadence with depth over shallow volume.",
      },
    ],
    seoDescription:
      "Audience-led content strategy, topic clustering, and editorial planning built for SEO, thought leadership, and conversions.",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    hero: "Lifecycle automation that keeps leads warm and customers moving.",
    description:
      "We build email flows, nurture sequences, and campaign calendars that support lead qualification, retention, reactivation, and customer expansion.",
    whoItsFor:
      "Brands with inbound lead flow, product usage events, or existing customer data that is not yet being turned into reliable lifecycle revenue.",
    expectedResult:
      "Expect stronger lead nurturing, more consistent campaign revenue, and better continuity between acquisition and retention.",
    startingPrice: "$1,800/mo",
    intro:
      "Email should not be treated as an afterthought once acquisition is live. It is the connective tissue between traffic, sales follow-up, and repeat value.",
    deliverables: [
      "Lifecycle audit and flow gap analysis",
      "Welcome, nurture, and re-engagement flows",
      "Campaign calendar aligned with offers and launches",
      "Segmentation and personalization recommendations",
      "Subject line and conversion testing plan",
      "Reporting on open-quality, clicks, and attributed outcomes",
    ],
    outcomes: [
      "Better response from newly captured leads",
      "More consistent campaign revenue",
      "Stronger retention and win-back performance",
      "Reduced drop-off between acquisition and conversion",
    ],
    process: [
      {
        title: "Audit",
        detail:
          "We map the current lifecycle, identify dead zones, and review the quality of your list segmentation, flows, and campaign rhythm.",
      },
      {
        title: "Strategy",
        detail:
          "We build the nurture architecture, segmentation logic, and message structure around your actual customer journey.",
      },
      {
        title: "Execute",
        detail:
          "We launch key flows, plan sends, test messaging, and refine based on engagement and revenue contribution.",
      },
    ],
    faqs: [
      {
        question: "Which tools do you work with?",
        answer:
          "Most teams use Klaviyo, HubSpot, Mailchimp, or ConvertKit. The strategy works across platforms as long as segmentation and tracking are reliable.",
      },
      {
        question: "Is email still worth investing in for B2B?",
        answer:
          "Definitely. For B2B, email often plays a crucial role in nurturing longer decision cycles, coordinating follow-up, and improving sales readiness.",
      },
      {
        question: "Do you write the emails too?",
        answer:
          "Yes. We handle strategy, sequence structure, and the copy needed to keep the message aligned with your offer and brand voice.",
      },
    ],
    seoDescription:
      "Email marketing strategy, lifecycle automation, and campaign planning for lead nurture, retention, and revenue growth.",
  },
  {
    slug: "web-design",
    title: "Web Design",
    hero: "High-converting website and landing page experiences with brand confidence built in.",
    description:
      "We design and build websites that help paid traffic, search visitors, and referrals take the next step faster through better structure, copy flow, and visual hierarchy.",
    whoItsFor:
      "Brands that need a stronger digital front door, better lead capture, or landing pages that can support growth campaigns without leakage.",
    expectedResult:
      "Expect better conversion flow, cleaner storytelling, and stronger confidence from visitors within the first few seconds.",
    startingPrice: "$4,500/project",
    intro:
      "A website should do more than look polished. It should reduce friction, clarify the offer, and support the channels sending traffic into it.",
    deliverables: [
      "Conversion-focused sitemap and page wireframes",
      "Brand-aligned UI system and component library",
      "Landing-page copy structure and CTA strategy",
      "Responsive build with performance and SEO baked in",
      "Lead form, analytics, and booking integration setup",
      "Post-launch optimization recommendations",
    ],
    outcomes: [
      "Stronger first-impression credibility",
      "Higher conversion rates on key pages",
      "Better message match between acquisition and destination",
      "A reusable design system for future growth pages",
    ],
    process: [
      {
        title: "Audit",
        detail:
          "We assess current messaging, user flow, analytics, and content gaps to find where the journey loses confidence or momentum.",
      },
      {
        title: "Strategy",
        detail:
          "We translate the offer into page structure, narrative pacing, CTA hierarchy, and responsive design rules before development starts.",
      },
      {
        title: "Execute",
        detail:
          "We build the interface, launch the integrations, and make sure the site is fast, accessible, and ready for growth marketing from day one.",
      },
    ],
    faqs: [
      {
        question: "Can you redesign an existing website without starting over?",
        answer:
          "Yes. We can improve a current site incrementally or rebuild around a stronger architecture, depending on the state of the current foundation.",
      },
      {
        question: "Do you handle development too?",
        answer:
          "Yes. This project is implemented as a full-stack Next.js site with reusable components, route handlers, SEO metadata, and integration scaffolding.",
      },
      {
        question: "Will the new site be easy to expand later?",
        answer:
          "That is part of the goal. The component system and route structure make it easy to add more service pages, case studies, and blog content over time.",
      },
    ],
    seoDescription:
      "High-converting website design and development for brands that want stronger messaging, better user flow, and lead generation.",
  },
];
