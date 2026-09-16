import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDestinations,
  getDestination,
  getDestinationWithDetails,
} from "@/lib/content";
import { TourCard } from "@/components/tour-card";
import { StarIcon, MapPinIcon, ArrowIcon } from "@/components/icons";

export async function generateStaticParams() {
  const destinations = await getDestinations();
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = await getDestination(slug);
  if (!dest) return { title: "Destination not found — Lato Tours" };
  return {
    title: `${dest.name}, Sri Lanka — Lato Tours`,
    description: dest.tagline,
  };
}

const bestTimeByCategory: Record<string, string> = {
  Culture: "Year-round",
  "Hill country": "Jan – Mar",
  Beaches: "Nov – Apr",
  Wildlife: "Feb – Jul",
};

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getDestinationWithDetails(slug);
  if (!data) notFound();
  const { dest, details } = data;

  const { about, highlights, gallery, relatedTours } = details;
  const bestTime = bestTimeByCategory[dest.category] ?? "Year-round";

  return (
    <>
      {/* Hero */}
      <section className="relative h-[62vh] min-h-[440px] w-full overflow-hidden">
        <Image
          src={dest.image}
          alt={`${dest.name}, Sri Lanka`}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/45 to-gray-900/25" />

        <div className="container-page relative flex h-full flex-col justify-end pb-10">
          <Link
            href="/#destinations"
            className="mb-auto mt-24 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/25"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
            All destinations
          </Link>

          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
              {dest.category}
            </span>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight drop-shadow-sm sm:text-6xl">
              {dest.name}
            </h1>
            <p className="mt-3 max-w-xl text-lg text-white/90">
              {dest.tagline}
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
              <MapPinIcon className="h-4 w-4 text-accent-400" />
              {dest.country}
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts bar — overlaps hero */}
      <div className="container-page relative z-10 -mt-8">
        <div className="grid grid-cols-3 gap-2 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-hover sm:gap-4 sm:p-5">
          {[
            {
              label: "Rating",
              value: `${dest.rating.toFixed(1)} / 5`,
              icon: "star",
            },
            { label: "Best time", value: bestTime, icon: "pin" },
            {
              label: "Tours from",
              value: `$${dest.priceFrom.toLocaleString()}`,
              icon: "tag",
            },
          ].map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-3 sm:text-left"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500">
                {f.icon === "star" ? (
                  <StarIcon className="h-5 w-5 text-amber-400" />
                ) : f.icon === "pin" ? (
                  <MapPinIcon className="h-5 w-5" />
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0l-7.2-7.2a2 2 0 01-.6-1.4V4a1 1 0 011-1h8a2 2 0 011.4.6l7.2 7.2a2 2 0 010 2.8z" />
                    <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
                  </svg>
                )}
              </span>
              <div>
                <p className="text-base font-extrabold tracking-tight text-gray-900">
                  {f.value}
                </p>
                <p className="text-xs text-gray-500">{f.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <section className="container-page grid gap-10 py-12 lg:grid-cols-[1.6fr_1fr] lg:py-16">
        <div>
          {/* About */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Overview
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            About {dest.name}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            {about}
          </p>

          {/* Highlights */}
          <h2 className="mt-10 text-2xl font-extrabold tracking-tight text-gray-900">
            Things to do
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 rounded-2xl border border-gray-200/80 bg-white p-4 text-sm text-gray-700 transition-colors hover:border-brand-200"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-sm shadow-brand-500/30">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    className="h-3.5 w-3.5"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="pt-0.5 font-medium">{h}</span>
              </li>
            ))}
          </ul>

          {/* Gallery */}
          {gallery.length > 0 && (
            <>
              <h2 className="mt-10 text-2xl font-extrabold tracking-tight text-gray-900">
                Gallery
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {gallery.map((src, i) => (
                  <div
                    key={src}
                    className={`group relative overflow-hidden rounded-2xl ring-1 ring-black/5 ${
                      i === 0 ? "col-span-2 row-span-2 sm:col-span-2" : ""
                    }`}
                  >
                    <div
                      className={`relative w-full ${
                        i === 0 ? "h-52 sm:h-full sm:min-h-[16rem]" : "h-32"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${dest.name} photo ${i + 1}`}
                        fill
                        loading="lazy"
                        quality={70}
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-card">
            <div className="bg-gradient-to-br from-brand-600 to-brand-500 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                Plan your visit to {dest.name}
              </p>
              <p className="mt-2 text-3xl font-extrabold tracking-tight">
                ${dest.priceFrom.toLocaleString()}
                <span className="ml-1 text-sm font-medium text-white/80">
                  /person
                </span>
              </p>
              <div className="mt-2 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(dest.rating)
                        ? "text-accent-400"
                        : "text-white/30"
                    }`}
                  />
                ))}
                <span className="ml-1 text-sm text-white/90">
                  {dest.rating.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="p-6">
              <ul className="space-y-2.5 text-sm text-gray-600">
                {[
                  "Free custom itinerary",
                  "Local expert guides",
                  "Free cancellation",
                  "48-hour reply, no obligation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        className="h-3 w-3"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/#book" className="btn-primary mt-5 w-full">
                Plan a trip here
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <p className="mt-3 text-center text-xs text-gray-400">
                Trusted by 9,000+ travelers
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* Related tours */}
      {relatedTours.length > 0 && (
        <section className="border-t border-gray-200 bg-gray-50 py-14 sm:py-16">
          <div className="container-page">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Ready to go
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Tours visiting {dest.name}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedTours.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
