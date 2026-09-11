"use client";

import { useEffect, useMemo, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { TourCard } from "@/components/tour-card";
import { FilterBar } from "@/components/filter-bar";
import { ArrowIcon } from "@/components/icons";
import { tours, type Tour } from "@/lib/data";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const categories = ["All", "Culture", "Scenic", "Wildlife", "Beaches"];

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "duration-asc", label: "Duration: shortest" },
  { value: "duration-desc", label: "Duration: longest" },
  { value: "rating-desc", label: "Rating: highest" },
];

const PER_PAGE = 6;

export function Tours() {
  const [active, setActive] = useState("All");
  const [sort, setSort] = useState("recommended");
  const [page, setPage] = useState(1);
  // Randomize order once on the client to avoid SSR hydration mismatch.
  const [ordered, setOrdered] = useState<Tour[]>(tours);

  useEffect(() => {
    setOrdered(shuffle(tours));
  }, []);

  // Reset to the first page whenever the filter or sort changes.
  useEffect(() => {
    setPage(1);
  }, [active, sort]);

  const visible = useMemo(() => {
    const filtered =
      active === "All"
        ? ordered
        : ordered.filter((t) => t.category === active);

    const sorted = [...filtered];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "duration-asc":
        sorted.sort((a, b) => a.days - b.days);
        break;
      case "duration-desc":
        sorted.sort((a, b) => b.days - a.days);
        break;
      case "rating-desc":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return sorted;
  }, [active, sort, ordered]);

  const totalPages = Math.max(1, Math.ceil(visible.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = visible.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  return (
    <section
      id="tours"
      className="relative overflow-hidden border-y border-gray-200 bg-gradient-to-b from-white to-brand-50/40 py-12 sm:py-16"
    >
      {/* Decorative background */}
      <div
        className="blob -right-16 top-1/4 h-72 w-72 bg-brand-200/40"
        aria-hidden="true"
      />
      <div
        className="blob -left-24 -bottom-10 h-72 w-72 bg-accent-400/10"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Signature trips"
          title="Tours on sale now"
          description="Handcrafted island itineraries led by local guides. Limited-time prices."
        />

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <FilterBar items={categories} active={active} onChange={setActive} />

          <div className="relative inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white py-1.5 pl-3.5 pr-2 shadow-sm">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-4 w-4 shrink-0 text-gray-400"
              aria-hidden="true"
            >
              <path d="M4 6h16M6 12h12M9 18h6" />
            </svg>
            <span className="shrink-0 text-sm text-gray-500">Sort</span>
            <div className="relative">
              <select
                aria-label="Sort tours"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="cursor-pointer appearance-none rounded-full bg-transparent py-1 pl-2 pr-7 text-sm font-semibold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-brand-200"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute right-1.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm text-gray-500">
          Showing{" "}
          <strong className="font-semibold text-gray-800">
            {pageItems.length}
          </strong>{" "}
          of {visible.length} {visible.length === 1 ? "tour" : "tours"}
        </p>

        {visible.length > 0 ? (
          <>
            <div className="mt-4 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((tour) => (
                <TourCard key={tour.title} tour={tour} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  type="button"
                  aria-label="Previous page"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-brand-400 hover:text-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowIcon className="h-4 w-4 rotate-180" />
                </button>

                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Page ${i + 1}`}
                    aria-current={currentPage === i + 1 ? "page" : undefined}
                    onClick={() => setPage(i + 1)}
                    className={`grid h-10 w-10 place-items-center rounded-full text-sm font-semibold transition-colors ${
                      currentPage === i + 1
                        ? "bg-brand-500 text-white shadow-sm shadow-brand-500/30"
                        : "border border-gray-300 bg-white text-gray-700 hover:border-brand-400 hover:text-brand-600"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  type="button"
                  aria-label="Next page"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-brand-400 hover:text-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowIcon className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="mt-4 text-sm text-gray-500">
            No tours match this filter. Try another category.
          </p>
        )}
      </div>
    </section>
  );
}
