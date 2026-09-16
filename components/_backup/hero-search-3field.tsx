"use client";

/**
 * BACKUP — the original 3-field hero search (Destination / When / Guests).
 * This is NOT used anywhere; it's kept as a reference/restore point after the
 * hero was switched to the single-field autocomplete search (HeroSearch).
 *
 * To restore: move this markup back into components/sections/hero.tsx in place
 * of <HeroSearch />, re-add the `query` state + `runTourSearch`, and re-import
 * FeatureIcon + MapPinIcon.
 */

import { FeatureIcon, MapPinIcon } from "@/components/icons";

export function HeroSearch3Field({
  query,
  setQuery,
  onSubmit,
}: {
  query: string;
  setQuery: (v: string) => void;
  onSubmit: (q: string) => void;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(query);
      }}
      className="group mt-7 w-full max-w-3xl rounded-[1.75rem] bg-white p-2 shadow-2xl shadow-gray-900/25 ring-1 ring-black/5 sm:rounded-full"
    >
      <div className="flex flex-col divide-y divide-gray-200 sm:flex-row sm:items-center sm:divide-x sm:divide-y-0">
        <label className="group/f flex flex-1 cursor-text items-center gap-3 rounded-full px-4 py-2.5 transition-colors hover:bg-brand-50/60">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500 ring-1 ring-inset ring-brand-100 transition-colors group-focus-within/f:bg-brand-500 group-focus-within/f:text-white">
            <MapPinIcon className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
              Destination
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ella, Yala, Galle..."
              className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-400"
            />
          </span>
        </label>

        <label className="group/f flex flex-1 cursor-text items-center gap-3 rounded-full px-4 py-2.5 transition-colors hover:bg-brand-50/60">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500 ring-1 ring-inset ring-brand-100 transition-colors group-focus-within/f:bg-brand-500 group-focus-within/f:text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
              When
            </span>
            <input
              type="text"
              placeholder="Any dates"
              className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-400"
            />
          </span>
        </label>

        <label className="group/f flex flex-1 cursor-text items-center gap-3 rounded-full px-4 py-2.5 transition-colors hover:bg-brand-50/60 sm:max-w-[9.5rem] sm:flex-initial">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500 ring-1 ring-inset ring-brand-100 transition-colors group-focus-within/f:bg-brand-500 group-focus-within/f:text-white">
            <FeatureIcon name="users" className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
              Guests
            </span>
            <input
              type="text"
              placeholder="2 adults"
              className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-400"
            />
          </span>
        </label>

        <div className="p-1.5 sm:pl-2">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 py-3 font-semibold text-white shadow-sm shadow-brand-500/30 transition-all hover:bg-brand-600 active:scale-[0.98] sm:h-12 sm:w-12 sm:py-0"
            aria-label="Search tours"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              className="h-5 w-5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4-4" strokeLinecap="round" />
            </svg>
            <span className="text-sm sm:hidden">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
