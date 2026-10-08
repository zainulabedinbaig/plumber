/**
 * Single source of truth for business facts.
 * Anything wrapped in [SQUARE BRACKETS] is a placeholder awaiting client confirmation.
 * Never replace a placeholder with an invented claim.
 *
 * The phone number is from Ofcom's reserved drama range for Manchester (0161 496 0xxx):
 * it will never connect to a real customer. Replace before launch.
 */
export const SITE = {
  name: "[Business Name]",
  url: "https://www.example.co.uk", // TODO: real domain (used for canonical URLs and sitemap)
  phoneDisplay: "0161 496 0000",
  phoneHref: "tel:+441614960000",
  email: "[CLIENT EMAIL]",
  address: "[CLIENT ADDRESS]",
  companyNumber: "[INSERT COMPANY NUMBER]",
  hours: "[INSERT OPENING HOURS]",
  emergencyHours: "[CONFIRM EMERGENCY HOURS]",
  whatsapp: "[CONFIRM WHATSAPP NUMBER]",
  gasSafe: "[INSERT VERIFIED GAS SAFE INFORMATION]",
  insurance: "[INSERT INSURANCE DETAILS]",
  tagline: "Plumbers in Manchester & Greater Manchester",
  social: [
    { label: "Facebook", href: "[INSERT FACEBOOK URL]" },
    { label: "Instagram", href: "[INSERT INSTAGRAM URL]" },
    { label: "Google Business", href: "[INSERT GOOGLE BUSINESS URL]" },
  ],
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", mega: true },
  { href: "/services/emergency-plumbing", label: "Emergency" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const TRUST_SPEC = [
  { label: "Customer reviews", value: "[INSERT REAL REVIEW SCORE AND SOURCE]" },
  { label: "Insurance", value: SITE.insurance },
  { label: "Gas Safe", value: SITE.gasSafe },
  { label: "Other accreditations", value: "[INSERT ACCREDITATION]" },
  { label: "Experience", value: "[INSERT YEARS OF EXPERIENCE]" },
  { label: "Guarantee", value: "[INSERT GUARANTEE]" },
] as const;

/**
 * How the business says it works. These are statements about practice, not facts
 * about credentials: the client must confirm each one before launch.
 */
export const COMMITMENTS = [
  { title: "A person answers", body: "Call and you speak to someone who can tell you what to do next, not a menu of options." },
  { title: "Explained before it starts", body: "The problem, the fix and the cost in plain English, so you can say yes or no before work begins." },
  { title: "Tidy, every time", body: "Dust sheets down, mess cleared, and the water back on before we leave." },
  { title: "Honest about the small jobs", body: "If a washer will do, we won't sell you a new tap." },
] as const;

export const TESTIMONIALS = [
  { quote: "[REAL CUSTOMER REVIEW]", name: "[CUSTOMER NAME]", where: "[AREA]", source: "[GOOGLE REVIEW]" },
  { quote: "[REAL CUSTOMER REVIEW]", name: "[CUSTOMER NAME]", where: "[AREA]", source: "[GOOGLE REVIEW]" },
  { quote: "[REAL CUSTOMER REVIEW]", name: "[CUSTOMER NAME]", where: "[AREA]", source: "[GOOGLE REVIEW]" },
] as const;
