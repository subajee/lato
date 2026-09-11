"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { StarIcon, ArrowIcon } from "@/components/icons";
import { reviews, socialProof, socialProofDisplay } from "@/lib/data";

/** Renders the quote with `highlight` bolded, if present. */
function HighlightedQuote({
  quote,
  highlight,
}: {
  quote: string;
  highlight: string;
}) {
  const idx = highlight ? quote.indexOf(highlight) : -1;
  if (idx === -1) return <>{quote}</>;
  return (
    <>
      {quote.slice(0, idx)}
      <span className="font-semibold text-gray-900">{highlight}</span>
      {quote.slice(idx + highlight.length)}
    </>
  );
}

function ReviewCard({
  review,
}: {
  review: (typeof reviews)[number];
}) {
  return (
    <figure className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-brand-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover sm:p-7">
      <span
        className="pointer-events-none absolute right-5 top-3 select-none font-serif text-7xl leading-none text-brand-200"
        aria-hidden="true"
      >
        &rdquo;
      </span>

      {/* Traveler header — prominent photo */}
      <figcaption className="relative flex items-center gap-4">
        <span className="relative shrink-0">
          <span className="relative block h-20 w-20 overflow-hidden rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src={review.avatar}
              alt={review.name}
              fill
              loading="lazy"
              quality={70}
              sizes="80px"
              className="object-cover"
            />
          </span>
          {/* Verified badge overlapping the photo */}
          <span
            className="absolute bottom-0 right-0 grid h-6 w-6 place-items-center rounded-full bg-brand-500 text-white shadow ring-2 ring-brand-50"
            title="Verified traveler"
          >
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
        </span>

        <div className="min-w-0">
          <p className="truncate text-base font-bold text-gray-900">
            {review.name}
          </p>
          <p className="truncate text-xs text-gray-500">{review.location}</p>
          <div className="mt-1 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, s) => (
              <StarIcon
                key={s}
                className={`h-3.5 w-3.5 ${
                  s < review.rating ? "text-amber-400" : "text-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </figcaption>

      <blockquote className="relative mt-5 flex-1 text-sm leading-relaxed text-gray-600">
        &ldquo;
        <HighlightedQuote quote={review.quote} highlight={review.highlight} />
        &rdquo;
      </blockquote>

      <div className="relative mt-5 flex items-center justify-between gap-3 border-t border-black/5 pt-4">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-brand-600 shadow-sm ring-1 ring-black/5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            className="h-3 w-3"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {review.trip}
        </span>
        <span className="shrink-0 text-xs text-gray-400">{review.date}</span>
      </div>
    </figure>
  );
}

export function Reviews() {
  const [perView, setPerView] = useState(3);
  const [page, setPage] = useState(0);

  // Responsive items-per-view.
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const pages = Math.max(1, Math.ceil(reviews.length / perView));
  const current = Math.min(page, pages - 1);

  const go = (dir: number) => setPage((p) => (p + dir + pages) % pages);

  const start = current * perView;
  const visible = reviews.slice(start, start + perView);
  // Pad the last page so the grid keeps its column count.
  while (visible.length < perView && reviews.length >= perView) {
    visible.push(reviews[visible.length % reviews.length]);
  }

  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-t border-gray-200 bg-white py-14 sm:py-20"
    >
      <div
        className="blob -left-20 bottom-0 h-72 w-72 bg-accent-400/15"
        aria-hidden="true"
      />
      <div
        className="blob -right-16 -top-10 h-64 w-64 bg-brand-100/50"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Traveler stories"
            title="What travelers say"
            description="Real reviews from travelers who explored Sri Lanka with us."
          />

          <div className="flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-gray-50 px-5 py-3">
            <span className="text-4xl font-extrabold tracking-tight text-gray-900">
              {socialProofDisplay.rating}
            </span>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(socialProof.rating)
                        ? "text-amber-400"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Based on{" "}
                <strong className="text-gray-700">
                  {socialProofDisplay.reviewCount}
                </strong>{" "}
                verified reviews
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-10">
          <div
            className={`grid gap-5 ${
              perView === 1
                ? "grid-cols-1"
                : perView === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            {visible.map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} review={review} />
            ))}
          </div>

          {pages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Previous reviews"
                onClick={() => go(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-brand-400 hover:text-brand-600"
              >
                <ArrowIcon className="h-4 w-4 rotate-180" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: pages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to review page ${i + 1}`}
                    onClick={() => setPage(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 bg-brand-500"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next reviews"
                onClick={() => go(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-brand-400 hover:text-brand-600"
              >
                <ArrowIcon className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
