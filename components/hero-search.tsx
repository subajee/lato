"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { destinations, tours } from "@/lib/data";
import { MapPinIcon } from "@/components/icons";

type Suggestion = {
  type: "Destination" | "Tour";
  label: string;
  sub: string;
  href: string;
};

// Flat, pre-built index of everything searchable.
const index: Suggestion[] = [
  ...destinations.map((d) => ({
    type: "Destination" as const,
    label: d.name,
    sub: `${d.category} · Sri Lanka`,
    href: `/destinations/${d.slug}`,
  })),
  ...tours.map((t) => ({
    type: "Tour" as const,
    label: t.title,
    sub: `${t.days} days · ${t.location}`,
    href: `/tours/${t.slug}`,
  })),
];

export function HeroSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return index
      .filter((s) => s.label.toLowerCase().includes(q) || s.sub.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  const submitFilter = (q: string) => {
    setOpen(false);
    window.dispatchEvent(new CustomEvent("tour-search", { detail: q.trim() }));
    document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open || results.length === 0) {
      if (e.key === "Enter") submitFilter(query);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIdx >= 0) {
        window.location.href = results[activeIdx].href;
      } else {
        submitFilter(query);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="relative mt-7 w-full max-w-2xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitFilter(query);
        }}
        className="flex items-center gap-2 rounded-full bg-white p-2 pl-3 shadow-2xl shadow-gray-900/25 ring-1 ring-black/5"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
          <MapPinIcon className="h-5 w-5" />
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActiveIdx(-1);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            blurTimer.current = setTimeout(() => setOpen(false), 150);
          }}
          onKeyDown={onKeyDown}
          placeholder="Search a destination or tour, e.g. Ella, safari, tea..."
          aria-label="Search destinations and tours"
          className="min-w-0 flex-1 bg-transparent text-sm font-medium text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-400 sm:text-base"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex h-11 shrink-0 items-center gap-2 rounded-full bg-brand-500 px-4 font-semibold text-white shadow-sm shadow-brand-500/30 transition-all hover:bg-brand-600 active:scale-[0.98] sm:px-6"
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
          <span className="hidden sm:inline">Search</span>
        </button>
      </form>

      {/* Autocomplete dropdown */}
      {open && results.length > 0 && (
        <div
          className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-2xl shadow-gray-900/20"
          onMouseDown={(e) => {
            // keep focus so the click registers before blur closes it
            e.preventDefault();
            if (blurTimer.current) clearTimeout(blurTimer.current);
          }}
        >
          {results.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              onMouseEnter={() => setActiveIdx(i)}
              className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                i === activeIdx ? "bg-brand-50" : "hover:bg-gray-50"
              }`}
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-500">
                <MapPinIcon className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-gray-900">
                  {s.label}
                </span>
                <span className="block truncate text-xs text-gray-500">
                  {s.sub}
                </span>
              </span>
              <span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                {s.type}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
