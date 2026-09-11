"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { DestinationCard } from "@/components/destination-card";
import { FilterBar } from "@/components/filter-bar";
import { ArrowIcon } from "@/components/icons";
import { destinations } from "@/lib/data";

const categories = ["All", "Culture", "Hill country", "Beaches", "Wildlife"];

export function Destinations() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? destinations
        : destinations.filter((d) => d.category === active),
    [active]
  );

  return (
    <section id="destinations" className="relative overflow-hidden py-12 sm:py-16">
      <div
        className="blob -right-24 -top-16 h-80 w-80 bg-brand-100/50"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Explore the island"
            title="Popular destinations"
            description="Handpicked corners of Sri Lanka, from ancient cities to the southern coast."
          />
          <a
            href="#book"
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-brand-600 shadow-sm transition-colors hover:border-brand-300 hover:bg-brand-50"
          >
            View all {destinations.length}
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-7">
          <FilterBar items={categories} active={active} onChange={setActive} />
        </div>

        {filtered.length > 0 ? (
          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((destination) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
              />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-sm text-gray-500">
            No destinations in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
