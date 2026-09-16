/**
 * Content access layer (CMS-ready boundary).
 *
 * Today these functions simply return the local data from `lib/data.ts`.
 * When you add a CMS (Sanity, Payload, WordPress, Keystatic, …), you only change
 * the *inside* of these functions to `fetch()` from the CMS and map the response
 * back into the existing `Tour` / `Destination` / … types. Pages and components
 * that call these functions do not change.
 *
 * Keep the return types identical to the app's domain types so the swap stays
 * type-safe end to end.
 */

import {
  destinations as destinationsData,
  tours as toursData,
  experiences as experiencesData,
  reviews as reviewsData,
  stats as statsData,
  heroSlides as heroSlidesData,
  partnerTypes as partnerTypesData,
  partnerBenefits as partnerBenefitsData,
  partnerStats as partnerStatsData,
  accreditations as accreditationsData,
  company as companyData,
  socialProof as socialProofData,
  socialProofDisplay as socialProofDisplayData,
  getTourBySlug as findTourBySlug,
  getDestinationBySlug as findDestinationBySlug,
  getTourDetails,
  getDestinationDetails,
  type Tour,
  type Destination,
} from "@/lib/data";

// --- Tours ---------------------------------------------------------------

export async function getTours(): Promise<Tour[]> {
  return toursData;
}

export async function getTour(slug: string): Promise<Tour | undefined> {
  return findTourBySlug(slug);
}

export async function getTourWithDetails(slug: string) {
  const tour = findTourBySlug(slug);
  if (!tour) return undefined;
  return { tour, details: getTourDetails(tour) };
}

// --- Destinations --------------------------------------------------------

export async function getDestinations(): Promise<Destination[]> {
  return destinationsData;
}

export async function getDestination(
  slug: string
): Promise<Destination | undefined> {
  return findDestinationBySlug(slug);
}

export async function getDestinationWithDetails(slug: string) {
  const dest = findDestinationBySlug(slug);
  if (!dest) return undefined;
  return { dest, details: getDestinationDetails(dest) };
}

// --- Home / marketing content -------------------------------------------

export async function getExperiences() {
  return experiencesData;
}

export async function getReviews() {
  return reviewsData;
}

export async function getStats() {
  return statsData;
}

export async function getHeroSlides() {
  return heroSlidesData;
}

export async function getSocialProof() {
  return { socialProof: socialProofData, display: socialProofDisplayData };
}

// --- Partners / company --------------------------------------------------

export async function getPartnerContent() {
  return {
    partnerTypes: partnerTypesData,
    partnerBenefits: partnerBenefitsData,
    partnerStats: partnerStatsData,
    accreditations: accreditationsData,
    company: companyData,
  };
}

export async function getCompany() {
  return companyData;
}
