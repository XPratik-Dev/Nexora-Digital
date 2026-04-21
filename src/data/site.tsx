import type { Route } from "next";
import { BarChart3, Globe2, MailCheck, Megaphone, MonitorSmartphone, Search } from "lucide-react";

const navItems = [
  { href: "/" as Route, label: "Home" },
  { href: "/services" as Route, label: "Services" },
  { href: "/about" as Route, label: "About" },
  { href: "/case-studies" as Route, label: "Case Studies" },
  { href: "/blog" as Route, label: "Blog" },
  { href: "/contact" as Route, label: "Contact" },
];

export const siteConfig = {
  name: "Nexora Digital",
  shortName: "Nexora",
  tagline: "We Scale Brands. Digitally.",
  description:
    "Results-focused digital marketing agency for e-commerce, SaaS, and professional services brands.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexoradigital.com",
  email: "hello@nexoradigital.com",
  phone: "+1 (512) 555-0149",
  location: "Bengaluru, Karnataka, India",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  navItems,
  socialLinks: [
    {
      href: "https://www.linkedin.com/company/nexoradigital",
      label: "LinkedIn",
    },
    {
      href: "https://x.com/nexoradigital",
      label: "X",
    },
    {
      href: "https://www.instagram.com/nexoradigital",
      label: "Instagram",
    },
  ],
};

export const siteStats = [
  {
    label: "Average blended ROI",
    value: 3.2,
    decimals: 1,
    suffix: "x",
    subtext: "targeted efficiency",
  },
  {
    label: "Pipeline influenced",
    value: 4,
    prefix: "$",
    suffix: "M+",
    subtext: "reported by clients",
  },
  {
    label: "Partner brands supported",
    value: 50,
    suffix: "+",
    subtext: "across launch and scale-up",
  },
];

export const serviceCards = [
  {
    slug: "seo",
    title: "SEO",
    summary:
      "Technical fixes, content systems, and authority-building programs that turn search into recurring revenue.",
    startingAt: "at $2.5k/mo",
    icon: <Search className="h-5 w-5" />,
  },
  {
    slug: "ppc",
    title: "PPC",
    summary:
      "High-intent Google, Meta, and LinkedIn campaigns engineered to reduce waste and scale what works.",
    startingAt: "at $3k/mo",
    icon: <Megaphone className="h-5 w-5" />,
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    summary:
      "Content, paid amplification, and channel systems that keep your brand visible where buying decisions start.",
    startingAt: "at $2k/mo",
    icon: <Globe2 className="h-5 w-5" />,
  },
  {
    slug: "content-strategy",
    title: "Content Strategy",
    summary:
      "Audience-led content planning that aligns thought leadership, demand capture, and conversion pathways.",
    startingAt: "at $2.2k/mo",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    summary:
      "Lifecycle automation, nurture sequences, and high-performing campaigns that move leads faster.",
    startingAt: "at $1.8k/mo",
    icon: <MailCheck className="h-5 w-5" />,
  },
  {
    slug: "web-design",
    title: "Web Design",
    summary:
      "Conversion-led websites and landing pages built to support paid traffic, search growth, and sales follow-up.",
    startingAt: "at $4.5k",
    icon: <MonitorSmartphone className="h-5 w-5" />,
  },
];

export const testimonials = [
  {
    quote:
      "Nexora helped us unify paid search, landing pages, and CRM follow-up. In 10 weeks we cut CPL by 34% and doubled qualified demos.",
    name: "Alyssa Brooks",
    role: "VP Growth",
    company: "SignalStack",
  },
  {
    quote:
      "What stood out was the clarity. Every weekly review tied spend, content, and conversion changes back to pipeline so our team always knew the next move.",
    name: "Rohan Mehta",
    role: "Founder",
    company: "Meridian Commerce",
  },
  {
    quote:
      "The redesign did more than look better. Bounce rate dropped, average session duration climbed, and inbound leads finally started sounding informed.",
    name: "Claire Huang",
    role: "Marketing Director",
    company: "Northshore Advisors",
  },
];

export const partnerLogos = [
  "SignalStack",
  "Meridian Commerce",
  "Northshore Advisors",
  "PeakLedger",
  "AtlasFlow",
  "Brightlane Health",
];

export const teamMembers = [
  {
    name: "Ariana Silva",
    role: "Founder & Growth Strategist",
    bio: "Ariana leads strategy across SEO, paid media, and conversion systems. She built Nexora to give growth-stage brands the senior-level attention they usually only get from in-house teams.",
  },
  {
    name: "Dev Patel",
    role: "Performance Marketing Lead",
    bio: "Dev owns media planning, bid strategy, creative testing, and reporting frameworks. He is obsessed with cutting waste and scaling only what can prove commercial value.",
  },
  {
    name: "Maya Thompson",
    role: "Content & Lifecycle Director",
    bio: "Maya connects messaging, editorial planning, and email automation so campaigns feel cohesive from first click to customer retention.",
  },
  {
    name: "Jonah Reed",
    role: "Design & CRO Lead",
    bio: "Jonah translates research into pages that convert. He blends UX, brand systems, and experimentation so every screen earns its place in the funnel.",
  },
];

export const values = [
  {
    title: "Evidence over ego",
    description:
      "We use data to focus creative energy where it can create movement, not to justify doing more for the sake of it.",
  },
  {
    title: "Clarity is a service",
    description:
      "Our reporting, roadmaps, and decisions are designed so clients understand what changed, why it matters, and what happens next.",
  },
  {
    title: "Momentum compounds",
    description:
      "We favor systems that stack over time: SEO foundations, lifecycle automation, testing loops, and reusable content assets.",
  },
  {
    title: "Approachable expertise",
    description:
      "High standards should still feel collaborative. We lead decisively without making our clients work to keep up.",
  },
];

export const timeline = [
  {
    year: "2019",
    title: "The operator-to-agency leap",
    description:
      "Nexora began as a consultancy helping B2B SaaS founders clean up paid acquisition and landing-page conversion leaks.",
  },
  {
    year: "2021",
    title: "Expanded into content and lifecycle",
    description:
      "We added SEO content strategy and lifecycle email so acquisition programs could convert and retain better downstream.",
  },
  {
    year: "2023",
    title: "Built a full-funnel delivery model",
    description:
      "Nexora formalized its Audit -> Strategy -> Execute framework for e-commerce, SaaS, and professional services brands.",
  },
  {
    year: "2026",
    title: "Launch-ready digital presence",
    description:
      "The current website package turns the roadmap into a conversion-ready system with case studies, lead capture, SEO, and content publishing from day one.",
  },
];

export const pricingTiers = [
  {
    name: "Momentum",
    price: "$2.5k/mo",
    audience: "Best for startups validating one primary channel",
    features: [
      "1 core growth channel",
      "Monthly strategy sprint",
      "Dashboard and reporting",
      "Landing-page recommendations",
    ],
  },
  {
    name: "Scale",
    price: "$5k/mo",
    audience: "Best for teams ready to coordinate SEO, paid media, and CRO",
    features: [
      "2-3 integrated channels",
      "Weekly optimization cadence",
      "Creative and conversion testing",
      "Sales handoff insights",
    ],
    featured: true,
  },
  {
    name: "Custom",
    price: "Custom",
    audience: "Best for multi-market, multi-brand, or high-growth teams",
    features: [
      "Custom sprint structure",
      "Executive reporting",
      "Advanced attribution support",
      "Embedded growth partnership",
    ],
  },
];

export const budgetRanges = [
  "Under $2,500",
  "$2,500-$5,000",
  "$5,000-$10,000",
  "$10,000-$20,000",
  "$20,000+",
];
