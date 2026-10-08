/**
 * Image manifest. Every photo here is from Wikimedia Commons under a licence that
 * allows reuse with attribution (shown on /credits and as captions).
 * Replace any entry with client photography by changing `src` and `credit`.
 */
export type ImageKey =
  | "mill" | "castlefield" | "bridge" | "terraces"
  | "fittings" | "radiator" | "basin" | "drain" | "leak" | "frozen";

type Credit = { author: string; license: string; licenseUrl: string; source: string };
export type Img = { src: string; alt: string; w: number; h: number; credit: Credit | null };

const BY = "https://creativecommons.org/licenses/by/3.0/";
const BYSA3 = "https://creativecommons.org/licenses/by-sa/3.0/";

export const IMAGES: Record<ImageKey, Img> = {
  mill: {
    src: "/images/manchester-mill-canal.jpg", w: 1800, h: 1350,
    alt: "Red-brick mill buildings beside a canal in Ancoats, Manchester",
    credit: { author: "Clem Rutter", license: "CC BY-SA 3.0", licenseUrl: BYSA3, source: "https://commons.wikimedia.org/wiki/File:Ancoats_Redhill_Street-_4557.JPG" },
  },
  castlefield: {
    src: "/images/castlefield-canal.jpg", w: 1280, h: 960,
    alt: "Canal basin at Castlefield, Manchester, with Victorian brick buildings and the Beetham Tower behind",
    credit: { author: "Clem Rutter", license: "CC BY-SA 3.0", licenseUrl: BYSA3, source: "https://commons.wikimedia.org/wiki/File:Castlefield_Bridgewater_Deansgate_end4655.JPG" },
  },
  bridge: {
    src: "/images/canal-bridge.jpg", w: 1280, h: 960,
    alt: "Iron railway bridge over the Rochdale Canal in central Manchester",
    credit: { author: "Clem Rutter", license: "CC BY 3.0", licenseUrl: BY, source: "https://commons.wikimedia.org/wiki/File:Manchester_Rochdale_Canal_91_4586.JPG" },
  },
  terraces: {
    src: "/images/chorlton-terraces.jpg", w: 1800, h: 1350,
    alt: "Red-brick Victorian terraced houses on Albany Road, Chorlton",
    credit: { author: "WythenshaweMike", license: "CC BY 3.0", licenseUrl: BY, source: "https://commons.wikimedia.org/wiki/File:Albany_Road,_Chorlton_-_panoramio.jpg" },
  },
  fittings: {
    src: "/images/copper-fittings.jpg", w: 1800, h: 1200,
    alt: "Copper plumbing fittings: elbows, a tee and a reducer",
    credit: { author: "Torsten Bätge", license: "CC BY-SA 3.0", licenseUrl: BYSA3, source: "https://commons.wikimedia.org/wiki/File:Kupferfittings_4062.jpg" },
  },
  radiator: {
    src: "/images/radiator.jpg", w: 1800, h: 1195,
    alt: "Panel radiator with a thermostatic valve",
    credit: { author: "ri (Pixabay)", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", source: "https://commons.wikimedia.org/wiki/File:Radiator-250558_1280.jpg" },
  },
  basin: {
    src: "/images/bathroom-basin.jpg", w: 1800, h: 1350,
    alt: "White bathroom basin with a chrome mixer tap",
    credit: { author: "Smtzzz", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", source: "https://commons.wikimedia.org/wiki/File:Bathroom_basin_tap.jpg" },
  },
  drain: {
    src: "/images/drain-cover.jpg", w: 1400, h: 1050,
    alt: "Cast-iron surface drain cover with debris visible beneath",
    credit: { author: "A.-K. D.", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", source: "https://commons.wikimedia.org/wiki/File:Drain_cover_by_Tonge_%26_Taggart.jpg" },
  },
  frozen: {
    src: "/images/frozen-pipe.jpg", w: 1224, h: 1632,
    alt: "Ice formed where a frozen pipe has leaked",
    credit: { author: "Mark Nightingale", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", source: "https://commons.wikimedia.org/wiki/File:Ice_formed_from_trough_pipe_leak_-_geograph.org.uk_-_1747217.jpg" },
  },
  leak: {
    src: "/images/leaking-pipe.jpg", w: 1800, h: 1350,
    alt: "Close-up of corrosion and a slow leak on a metal water pipe",
    credit: { author: "Shamrock Lee", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/", source: "https://commons.wikimedia.org/wiki/File:Leak_in_rusted_pipe_side_view.jpg" },
  },
};
