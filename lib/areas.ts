import type { ServiceSlug } from "@/lib/services";

/**
 * Suggested coverage only: NOT confirmed with the client.
 * Set `confirmed: true` per area once agreed; unconfirmed areas show a banner on /areas.
 * Housing-stock notes are general and hedged. Edit freely.
 */
export type Area = {
  slug: string;
  name: string;
  borough: "Manchester" | "Salford" | "Trafford" | "Stockport";
  note: string;
  /** Map position, 0-100 (schematic, not to scale) */
  x: number;
  y: number;
  confirmed: boolean;
  /** Services most often needed here (general, hedged): edit freely */
  jobs: ServiceSlug[];
};

export const AREAS: Area[] = [
  { slug: "manchester", name: "Manchester", borough: "Manchester", x: 58, y: 38, confirmed: false, jobs: ["leak-detection", "blocked-drains", "bathroom-plumbing"],
    note: "City-centre apartments in converted mills and warehouses often share risers and stopcocks, and building management usually needs to know before work starts. Terraces around the centre tend to have older pipework." },
  { slug: "salford", name: "Salford", borough: "Salford", x: 36, y: 26, confirmed: false, jobs: ["leak-detection", "boiler-heating"],
    note: "A mix of Victorian terraces and newer apartments around the Quays. Older terraces often still have original pipework worth checking before it fails." },
  { slug: "stretford", name: "Stretford", borough: "Trafford", x: 38, y: 48, confirmed: false, jobs: ["boiler-heating", "bathroom-plumbing", "blocked-drains"],
    note: "Mostly interwar and postwar housing, with older terraces nearer the centre. Typical jobs include boilers, bathrooms and blocked drains." },
  { slug: "chorlton", name: "Chorlton", borough: "Manchester", x: 46, y: 60, confirmed: false, jobs: ["leak-detection", "burst-pipes", "boiler-heating"],
    note: "Victorian and Edwardian terraces and semis, many converted into flats. Older houses mean older pipework and more leaks hidden under floorboards." },
  { slug: "didsbury", name: "Didsbury", borough: "Manchester", x: 70, y: 74, confirmed: false, jobs: ["bathroom-plumbing", "boiler-heating"],
    note: "Large Victorian and Edwardian houses, 1930s semis and plenty of rentals. We see a lot of bathroom updates, heating work and landlord call-outs." },
  { slug: "wythenshawe", name: "Wythenshawe", borough: "Manchester", x: 70, y: 88, confirmed: false, jobs: ["leak-detection", "bathroom-plumbing"],
    note: "A large estate planned in the 1920s and 30s, with many homes now ninety-odd years old. Original pipework and old bathrooms are common jobs." },
  { slug: "sale", name: "Sale", borough: "Trafford", x: 32, y: 72, confirmed: false, jobs: ["leak-detection", "boiler-heating", "bathroom-plumbing"],
    note: "Interwar semis and Edwardian terraces, many extended over the years. Mixed-age pipework is common in extended houses." },
  { slug: "altrincham", name: "Altrincham", borough: "Trafford", x: 28, y: 88, confirmed: false, jobs: ["blocked-drains", "bathroom-plumbing", "boiler-heating"],
    note: "Edwardian villas and 1930s semis, plus a busy town centre of flats and shops. Both homes and small commercial premises." },
  { slug: "stockport", name: "Stockport", borough: "Stockport", x: 78, y: 60, confirmed: false, jobs: ["burst-pipes", "blocked-drains", "boiler-heating"],
    note: "Victorian terraces, mill conversions and interwar suburbs. Hilly streets can mean pressure and drainage quirks worth knowing about." },
];

export const BOROUGHS = ["Manchester", "Salford", "Trafford", "Stockport"] as const;
