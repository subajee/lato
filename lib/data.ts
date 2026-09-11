export type DestinationCategory =
  | "Culture"
  | "Hill country"
  | "Beaches"
  | "Wildlife";

export type Destination = {
  slug: string;
  name: string;
  country: string;
  image: string;
  tagline: string;
  priceFrom: number;
  rating: number;
  category: DestinationCategory;
};

export type Tour = {
  slug: string;
  title: string;
  location: string;
  image: string;
  days: number;
  groupSize: string;
  price: number;
  category: string;
  rating: number;
  description: string;
};

export type Experience = {
  title: string;
  description: string;
  icon: string;
};

export type Review = {
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  trip: string;
  date: string;
  /** A short phrase within `quote` to visually highlight. */
  highlight: string;
};

const destinationData: Omit<Destination, "slug">[] = [
  {
    name: "Sigiriya",
    country: "Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1200&q=80",
    tagline: "The ancient rock fortress rising above the jungle",
    priceFrom: 320,
    rating: 4.9,
    category: "Culture",
  },
  {
    name: "Ella",
    country: "Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=1200&q=80",
    tagline: "Misty tea country, Nine Arch Bridge & hill walks",
    priceFrom: 280,
    rating: 4.8,
    category: "Hill country",
  },
  {
    name: "Kandy",
    country: "Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    tagline: "Sacred Temple of the Tooth by a serene lake",
    priceFrom: 260,
    rating: 4.7,
    category: "Culture",
  },
  {
    name: "Galle",
    country: "Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1200&q=80",
    tagline: "A Dutch colonial fort on the turquoise coast",
    priceFrom: 300,
    rating: 4.8,
    category: "Beaches",
  },
  {
    name: "Yala",
    country: "Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    tagline: "Leopards, elephants & wild safari plains",
    priceFrom: 390,
    rating: 4.9,
    category: "Wildlife",
  },
  {
    name: "Mirissa",
    country: "Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    tagline: "Palm-fringed beaches & blue whale watching",
    priceFrom: 270,
    rating: 4.7,
    category: "Beaches",
  },
];

export const destinations: Destination[] = destinationData.map((d) => ({
  ...d,
  slug: slugify(d.name),
}));

const tourData: Omit<Tour, "slug">[] = [
  {
    title: "Cultural Triangle Explorer",
    location: "Sigiriya, Dambulla & Anuradhapura",
    image:
      "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1200&q=80",
    days: 6,
    groupSize: "6–12 people",
    price: 890,
    category: "Culture",
    rating: 4.8,
    description:
      "Climb the Lion Rock, explore cave temples and wander ancient royal cities.",
  },
  {
    title: "Hill Country & Tea Trails",
    location: "Kandy, Nuwara Eliya & Ella",
    image:
      "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=1200&q=80",
    days: 8,
    groupSize: "6–10 people",
    price: 1120,
    category: "Scenic",
    rating: 4.9,
    description:
      "Ride the scenic hill train through emerald tea estates and misty peaks.",
  },
  {
    title: "South Coast & Safari",
    location: "Yala, Mirissa & Galle",
    image:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    days: 7,
    groupSize: "6–14 people",
    price: 1040,
    category: "Wildlife",
    rating: 4.7,
    description:
      "Track leopards on safari, then unwind on golden southern beaches.",
  },
  {
    title: "Galle Fort & Beaches Getaway",
    location: "Galle, Unawatuna & Mirissa",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1200&q=80",
    days: 5,
    groupSize: "2–8 people",
    price: 640,
    category: "Beaches",
    rating: 4.6,
    description:
      "Wander the historic Dutch fort and laze on palm-fringed south-coast bays.",
  },
  {
    title: "Grand Sri Lanka Discovery",
    location: "Colombo to the south coast",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    days: 14,
    groupSize: "8–16 people",
    price: 1980,
    category: "Culture",
    rating: 5.0,
    description:
      "The complete island loop: ancient cities, tea country, safari and coast.",
  },
  {
    title: "Ella Tea Trails Short Break",
    location: "Ella & Haputale",
    image:
      "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=1200&q=80",
    days: 4,
    groupSize: "2–10 people",
    price: 520,
    category: "Scenic",
    rating: 4.8,
    description:
      "A relaxed hill-country escape with the Nine Arch Bridge and tea tastings.",
  },
  {
    title: "Northern Heritage & Jaffna",
    location: "Anuradhapura, Trincomalee & Jaffna",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    days: 9,
    groupSize: "6–12 people",
    price: 1290,
    category: "Culture",
    rating: 4.7,
    description:
      "Off-the-beaten-path temples, Tamil culture and the quiet northern coast.",
  },
  {
    title: "Whale Watching & Beach Escape",
    location: "Mirissa & Weligama",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    days: 4,
    groupSize: "2–10 people",
    price: 560,
    category: "Beaches",
    rating: 4.8,
    description:
      "Spot blue whales at dawn, then learn to surf on gentle southern breaks.",
  },
  {
    title: "Adam's Peak Pilgrim Trek",
    location: "Nallathanniya & Hatton",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
    days: 3,
    groupSize: "4–12 people",
    price: 410,
    category: "Scenic",
    rating: 4.9,
    description:
      "A pre-dawn climb to a sacred summit for one of Asia's finest sunrises.",
  },
  {
    title: "Wilpattu Wildlife Safari",
    location: "Wilpattu National Park",
    image:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    days: 5,
    groupSize: "4–10 people",
    price: 880,
    category: "Wildlife",
    rating: 4.6,
    description:
      "Leopards, sloth bears and lily-covered lakes in Sri Lanka's largest park.",
  },
  {
    title: "East Coast Surf & Sun",
    location: "Arugam Bay & Pasikuda",
    image:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1200&q=80",
    days: 6,
    groupSize: "2–12 people",
    price: 720,
    category: "Beaches",
    rating: 4.7,
    description:
      "World-class point breaks, lagoon kayaking and laid-back beach towns.",
  },
  {
    title: "Honeymoon Highlights",
    location: "Kandy, Ella & the south coast",
    image:
      "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=1200&q=80",
    days: 10,
    groupSize: "Private couple",
    price: 2450,
    category: "Scenic",
    rating: 5.0,
    description:
      "A romantic private journey of tea gardens, boutique villas and sunsets.",
  },
];

/** Turn a title into a URL-friendly slug. */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** All tours with a stable slug derived from the title. */
export const tours: Tour[] = tourData.map((t) => ({
  ...t,
  slug: slugify(t.title),
}));

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

/**
 * Presentable detail content derived from a destination.
 * (Placeholder about/highlights — swap for real content later.)
 */
/** Real per-destination copy + gallery, keyed by slug. */
const destinationContent: Record<
  string,
  { about: string; gallery: string[] }
> = {
  sigiriya: {
    about:
      "Rising 200 metres from the surrounding jungle, Sigiriya is a 5th-century rock fortress built by King Kashyapa as a palace and stronghold. Climb past the famous frescoes and the giant Lion's Paws to a summit crowned with the ruins of a royal citadel and sweeping views over the Cultural Triangle. Nearby Dambulla's cave temples and Pidurangala rock make this one of the island's richest historical corners.",
    gallery: [
      "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=800&q=75",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=75",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=75",
    ],
  },
  ella: {
    about:
      "Tucked into the misty southern hills, Ella is a laid-back town surrounded by tea plantations, waterfalls and cloud forest. It's home to the iconic Nine Arch Bridge, gentle hikes up Little Adam's Peak, and some of the most beautiful train journeys in the world. Cool evenings, cosy cafes and endless green make it a favourite slow-travel base.",
    gallery: [
      "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=800&q=75",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=75",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=75",
    ],
  },
  kandy: {
    about:
      "The last capital of the Sinhalese kings, Kandy sits around a serene lake ringed by hills. Its heart is the Temple of the Sacred Tooth Relic, one of Buddhism's most important sites, where drummers and evening rituals draw pilgrims from across the island. Add the botanical gardens, a cultural dance show and a walkable old town, and Kandy is the cultural soul of the hill country.",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=75",
      "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=800&q=75",
      "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=800&q=75",
    ],
  },
  galle: {
    about:
      "Galle is a beautifully preserved Dutch colonial fort town on the south coast, its ramparts wrapping around cobbled lanes, boutique hotels, cafes and art galleries. Watch the sunset from the walls, browse independent shops, and use it as a base for the palm-fringed beaches of Unawatuna and Mirissa just down the coast.",
    gallery: [
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=75",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=800&q=75",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=75",
    ],
  },
  yala: {
    about:
      "Yala National Park protects a wild mosaic of scrub, lagoons and coastline that holds one of the highest leopard densities in the world. On a guided jeep safari you might also spot elephants, sloth bears, crocodiles and hundreds of bird species. Early-morning and late-afternoon drives offer the best sightings and the softest light.",
    gallery: [
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=75",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=75",
      "https://images.unsplash.com/photo-1554990772-0bea55d510d5?auto=format&fit=crop&w=800&q=75",
    ],
  },
  mirissa: {
    about:
      "Mirissa is the south coast's easy-going beach town, a crescent of golden sand backed by palms and small guesthouses. It's the island's premier launch point for blue whale and dolphin watching between November and April, and its warm, gentle waves make it a fine spot to learn to surf or simply unwind at a beachfront cabana.",
    gallery: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=75",
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=75",
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=75",
    ],
  },
};

export function getDestinationDetails(dest: Destination) {
  const content = destinationContent[dest.slug];
  const about =
    content?.about ??
    `${dest.name} is one of Sri Lanka's most-loved ${dest.category.toLowerCase()} destinations. ${dest.tagline}. Our local guides know it inside out, from the well-known highlights to the quiet corners most travelers miss.`;
  const gallery = content?.gallery ?? [];

  const highlightsByCategory: Record<DestinationCategory, string[]> = {
    Culture: [
      "Guided visits to ancient temples & heritage sites",
      "Stories and history from a local expert",
      "Traditional food tastings",
      "Sunrise or sunset at an iconic viewpoint",
    ],
    "Hill country": [
      "Scenic train ride through the tea hills",
      "Tea estate & factory tour with tastings",
      "Gentle walks to waterfalls and viewpoints",
      "Cool-climate boutique bungalow stay",
    ],
    Beaches: [
      "Golden-sand beaches and turquoise bays",
      "Whale or dolphin watching by boat",
      "Fresh seafood at a beachfront table",
      "Sunset over the Indian Ocean",
    ],
    Wildlife: [
      "Guided safari with an expert tracker",
      "Leopard, elephant & birdlife spotting",
      "Small-group jeeps for the best sightings",
      "Nature-lodge stay inside the wild",
    ],
  };

  const highlights = highlightsByCategory[dest.category];

  // Tours that pass through this destination.
  const relatedTours = tours
    .filter((t) => t.location.toLowerCase().includes(dest.name.toLowerCase()))
    .slice(0, 3);

  return { about, highlights, gallery, relatedTours };
}

/**
 * Generic, presentable detail content derived from a tour.
 * (Placeholder itinerary/includes — swap for real content per tour later.)
 */
export function getTourDetails(tour: Tour) {
  const stops = tour.location.split(/,|&/).map((s) => s.trim()).filter(Boolean);

  const highlights = [
    `Explore ${stops[0] ?? "the island"} with a local expert guide`,
    "Handpicked boutique stays and comfortable private transport",
    stops[1]
      ? `Discover ${stops[1]} at an unhurried, personal pace`
      : "Authentic local food and cultural experiences",
    "All the logistics handled, so you just show up",
  ];

  const itinerary = Array.from({ length: tour.days }).map((_, i) => {
    const day = i + 1;
    const place = stops[i % Math.max(stops.length, 1)] ?? "Sri Lanka";
    let title = `Explore ${place}`;
    let body = `A full day discovering ${place} with your guide, at a relaxed pace.`;
    if (day === 1) {
      title = "Arrival & welcome";
      body = `Meet your guide, transfer to your first stay near ${place}, and settle in.`;
    } else if (day === tour.days) {
      title = "Farewell & departure";
      body = "A relaxed morning before your onward journey or airport transfer.";
    }
    return { day, title, body };
  });

  const includes = [
    "Local expert guide",
    "Private air-conditioned transport",
    "Boutique accommodation",
    "Daily breakfast",
    "All entrance fees",
    "24/7 on-ground support",
  ];

  const excludes = ["International flights", "Travel insurance", "Personal expenses"];

  return { highlights, itinerary, includes, excludes };
}

export const experiences: Experience[] = [
  {
    title: "Small groups",
    description:
      "Travel with no more than 14 companions for a personal, unhurried pace.",
    icon: "users",
  },
  {
    title: "Local guides",
    description:
      "Every trip is led by Sri Lankans who know the island's hidden corners.",
    icon: "compass",
  },
  {
    title: "Handpicked stays",
    description:
      "Boutique villas, tea bungalows and beach cabanas, never generic chains.",
    icon: "bed",
  },
  {
    title: "Carbon conscious",
    description:
      "We offset every journey and partner with community-run operators.",
    icon: "leaf",
  },
];

export const reviews: Review[] = [
  {
    name: "Elena Rossi",
    location: "Milan, Italy",
    quote:
      "Sunrise atop Sigiriya, then tea country by train. Lato planned every detail and our guide made the island feel like home.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    trip: "Cultural Triangle Explorer",
    date: "March 2026",
    highlight: "made the island feel like home",
  },
  {
    name: "James Carter",
    location: "Austin, USA",
    quote:
      "The Yala safari was unreal, we spotted a leopard at dawn. Small group, zero logistics stress, endless great food.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    trip: "South Coast & Safari",
    date: "February 2026",
    highlight: "we spotted a leopard at dawn",
  },
  {
    name: "Aya Tanaka",
    location: "Tokyo, Japan",
    quote:
      "The train ride to Ella through the tea hills was the most beautiful journey of my life. Truly special experiences.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    trip: "Hill Country & Tea Trails",
    date: "January 2026",
    highlight: "the most beautiful journey of my life",
  },
  {
    name: "Sophie Laurent",
    location: "Lyon, France",
    quote:
      "Whale watching in Mirissa at dawn, then Galle Fort at sunset. Beautifully paced and our guide's local tips were priceless.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
    trip: "Galle Fort & Beaches Getaway",
    date: "December 2025",
    highlight: "our guide's local tips were priceless",
  },
  {
    name: "Daniel Meyer",
    location: "Berlin, Germany",
    quote:
      "Two weeks that flowed effortlessly, from ancient cities to the coast. A couple of long drives, but every stop was worth it.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    trip: "Grand Sri Lanka Discovery",
    date: "November 2025",
    highlight: "flowed effortlessly",
  },
  {
    name: "Priya Nair",
    location: "Bengaluru, India",
    quote:
      "The tea trails short break was the perfect long weekend. Cool hills, cozy bungalows, and the friendliest guides.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    trip: "Ella Tea Trails Short Break",
    date: "October 2025",
    highlight: "the perfect long weekend",
  },
];

/**
 * Site-wide social-proof figures — the single source of truth so every
 * section tells one consistent story. The `reviews` array above holds a
 * small set of *featured* testimonials; these numbers represent the full
 * (sample) totals shown across the site.
 */
export const socialProof = {
  /** Headline traveler rating shown site-wide. */
  rating: 4.9,
  /** Total reviews the rating is based on. */
  reviewCount: 2400,
  /** Total happy travelers to date. */
  travelers: 9000,
};

/** Formatted "9,000+" style strings for display. */
export const socialProofDisplay = {
  rating: socialProof.rating.toFixed(1),
  reviewCount: `${socialProof.reviewCount.toLocaleString()}+`,
  travelers: `${socialProof.travelers.toLocaleString()}+`,
};

export type HeroSlide = {
  image: string;
  place: string;
  alt: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=2000&q=80",
    place: "Nine Arch Bridge, Ella",
    alt: "A train crossing the Nine Arch Bridge through the tea hills of Ella, Sri Lanka",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=2000&q=80",
    place: "Sigiriya Rock Fortress",
    alt: "The ancient Sigiriya rock fortress rising above the Sri Lankan jungle",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=2000&q=80",
    place: "Yala National Park",
    alt: "A leopard resting on a branch in the wild plains of Yala, Sri Lanka",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=2000&q=80",
    place: "Galle & the south coast",
    alt: "Palm-fringed turquoise beaches along the southern coast of Sri Lanka",
  },
];

export type Stat = {
  value: string;
  label: string;
  sub: string;
  icon: string;
};

export const stats: Stat[] = [
  {
    value: "4.9",
    label: "Traveler rating",
    sub: "from 2,400+ reviews",
    icon: "star",
  },
  {
    value: "9,000+",
    label: "Happy travelers",
    sub: "since 2013",
    icon: "users",
  },
  {
    value: "25+",
    label: "Island routes",
    sub: "coast to hill country",
    icon: "compass",
  },
  {
    value: "100%",
    label: "Local guides",
    sub: "born on the island",
    icon: "leaf",
  },
];

/**
 * B2B / partner data for the /partners page.
 * NOTE: placeholder figures — replace with your real commercial terms.
 */
export type PartnerType = {
  title: string;
  description: string;
  icon: string;
};

export const partnerTypes: PartnerType[] = [
  {
    title: "Travel agents & tour operators",
    description:
      "Resell our curated Sri Lanka tours at competitive net rates with generous commission.",
    icon: "compass",
  },
  {
    title: "Corporate & MICE",
    description:
      "Incentive trips, retreats and events, planned end to end by our on-ground team.",
    icon: "users",
  },
  {
    title: "Hotels & DMCs",
    description:
      "Extend your guests' stays with seamless excursions and multi-day itineraries.",
    icon: "bed",
  },
  {
    title: "Affiliates & OTAs",
    description:
      "Plug into our inventory with clean assets, tracked links and reliable payouts.",
    icon: "globe",
  },
];

export type PartnerBenefit = {
  title: string;
  description: string;
  icon: string;
};

export const partnerBenefits: PartnerBenefit[] = [
  {
    title: "Up to 15% commission",
    description: "Tiered rates that grow with your booking volume.",
    icon: "star",
  },
  {
    title: "Live net rates",
    description: "Real-time agent pricing and instant availability.",
    icon: "compass",
  },
  {
    title: "Dedicated account manager",
    description: "One point of contact and 24/7 on-ground support.",
    icon: "users",
  },
  {
    title: "White-label & marketing kit",
    description: "Logos, imagery and sample itineraries ready to share.",
    icon: "camera",
  },
];

export const partnerStats = [
  { value: "120+", label: "Active partners" },
  { value: "15", label: "Countries" },
  { value: "48h", label: "Quote turnaround" },
  { value: "15%", label: "Max commission" },
];

/**
 * Accreditations & company details.
 * NOTE: placeholder values — replace with your real registrations & partners.
 */
export type Partner = {
  name: string;
  kind: string;
};

export const accreditations: Partner[] = [
  { name: "Sri Lanka Tourism", kind: "Licensed operator" },
  { name: "SLTDA", kind: "Registered" },
  { name: "PATA", kind: "Member" },
  { name: "Tripadvisor", kind: "Travellers' Choice" },
  { name: "IATA", kind: "Accredited" },
  { name: "Stripe", kind: "Secure payments" },
];

export const company = {
  legalName: "Lato Tours (Pvt) Ltd",
  regNo: "PV 00123456",
  license: "SLTDA Reg. No. SLTDA/SQA/TA/0123",
  address: "42 Galle Road, Colombo 03, Sri Lanka",
  phone: "+94 11 234 5678",
  whatsapp: "94112345678",
  email: "hello@latotours.example",
  hours: "Mon–Sat, 9am–6pm (GMT+5:30)",
};
