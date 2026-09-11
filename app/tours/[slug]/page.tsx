import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tours, getTourBySlug, getTourDetails } from "@/lib/data";
import {
  ClockIcon,
  UsersIcon,
  MapPinIcon,
  StarIcon,
  ArrowIcon,
} from "@/components/icons";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tour not found — Lato Tours" };
  return {
    title: `${tour.title} — Lato Tours`,
    description: tour.description,
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const original = Math.round(tour.price * 1.25);
  const saving = original - tour.price;
  const { highlights, itinerary, includes, excludes } = getTourDetails(tour);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/45 to-gray-900/25" />

        <div className="container-page relative flex h-full flex-col justify-end pb-10">
          <Link
            href="/#tours"
            className="mb-auto mt-24 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/25"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
            All tours
          </Link>

          <div className="max-w-3xl text-white">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                {tour.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur">
                <StarIcon className="h-3.5 w-3.5 text-amber-400" />
                {tour.rating.toFixed(1)}
              </span>
              <span className="inline-flex items-center rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-gray-900 shadow-sm">
                Save ${saving.toLocaleString()}
              </span>
            </div>
            <h1 className="mt-3 text-3xl font-extrabold leading-[1.08] tracking-tight drop-shadow-sm sm:text-5xl">
              {tour.title}
            </h1>
            <p className="mt-3 max-w-xl text-lg text-white/90">
              {tour.description}
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
              <MapPinIcon className="h-4 w-4 text-accent-400" />
              {tour.location}
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts bar — overlaps hero */}
      <div className="container-page relative z-10 -mt-8">
        <div className="grid grid-cols-3 gap-2 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-hover sm:gap-4 sm:p-5">
          {[
            { icon: "clock", label: "Duration", value: `${tour.days} days` },
            { icon: "users", label: "Group size", value: tour.groupSize },
            {
              icon: "star",
              label: "Rating",
              value: `${tour.rating.toFixed(1)} / 5`,
            },
          ].map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-3 sm:text-left"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500">
                {f.icon === "clock" ? (
                  <ClockIcon className="h-5 w-5" />
                ) : f.icon === "users" ? (
                  <UsersIcon className="h-5 w-5" />
                ) : (
                  <StarIcon className="h-5 w-5 text-amber-400" />
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
          {/* Overview */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Overview
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            About this trip
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            {tour.description} Over {tour.days} unhurried days, our local team
            handles every detail, from boutique stays to private transport, so
            you can focus on the experience. Perfect for{" "}
            {tour.groupSize.toLowerCase()}.
          </p>

          {/* Highlights */}
          <span className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Trip highlights
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Highlights
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

          {/* Itinerary */}
          <span className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Your journey
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Day-by-day itinerary
          </h2>
          <ol className="mt-5 space-y-0">
            {itinerary.map((d, i) => (
              <li key={d.day} className="relative flex gap-4 pb-6 last:pb-0">
                {i < itinerary.length - 1 && (
                  <span className="absolute left-[18px] top-10 h-full w-px bg-gray-200" />
                )}
                <span className="z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-sm font-bold text-white shadow-sm shadow-brand-500/30">
                  {d.day}
                </span>
                <div className="pt-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-500">
                    Day {d.day}
                  </p>
                  <h3 className="font-bold text-gray-900">{d.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {d.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Includes / Excludes */}
          <span className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Good to know
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            What&apos;s included
          </h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {/* Included */}
            <div className="overflow-hidden rounded-2xl border border-brand-200/70 bg-brand-50/60">
              <div className="flex items-center gap-2.5 border-b border-brand-200/60 bg-brand-500/10 px-5 py-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    className="h-4 w-4"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="font-bold text-brand-700">Included</h3>
              </div>
              <ul className="divide-y divide-brand-200/50 px-5">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 py-2.5 text-sm text-gray-700"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-600">
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
            </div>

            {/* Not included */}
            <div className="overflow-hidden rounded-2xl border border-brand-200/70 bg-brand-50/60">
              <div className="flex items-center gap-2.5 border-b border-brand-200/60 bg-brand-500/10 px-5 py-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 text-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.6}
                    className="h-4 w-4"
                  >
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </span>
                <h3 className="font-bold text-brand-700">Not included</h3>
              </div>
              <ul className="divide-y divide-brand-200/50 px-5">
                {excludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 py-2.5 text-sm text-gray-700"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.6}
                        className="h-3 w-3"
                      >
                        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Booking sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-card">
            <div className="relative bg-gradient-to-br from-brand-600 to-brand-500 p-6 text-white">
              <span className="absolute right-4 top-4 rounded-full bg-accent-500 px-2.5 py-1 text-xs font-bold text-gray-900">
                Save ${saving.toLocaleString()}
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                From
              </p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold tracking-tight">
                  ${tour.price.toLocaleString()}
                </span>
                <span className="text-sm text-white/70 line-through">
                  ${original.toLocaleString()}
                </span>
              </p>
              <p className="text-sm text-white/80">per person</p>
              <div className="mt-2 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(tour.rating)
                        ? "text-accent-400"
                        : "text-white/30"
                    }`}
                  />
                ))}
                <span className="ml-1 text-sm text-white/90">
                  {tour.rating.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="p-6">
              <ul className="space-y-2.5 text-sm text-gray-600">
                {[
                  `${tour.days} days · ${tour.groupSize}`,
                  "Free custom itinerary",
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
                Request this tour
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <p className="mt-3 text-center text-xs text-gray-400">
                Trusted by 9,000+ travelers
              </p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
