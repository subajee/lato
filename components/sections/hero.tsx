"use client";
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { StarIcon, MapPinIcon } from "@/components/icons";
import { HeroSearch } from "@/components/hero-search";
import { heroSlides, socialProofDisplay } from "@/lib/data";

const quickSearches = ["Sigiriya", "Ella", "Yala", "Galle", "Kandy"];

const trustBadges = [
  "Free cancellation",
  "Local expert guides",
  "48-hour reply",
];

function runTourSearch(query: string) {
  const q = query.trim();
  // Broadcast to the Tours section, then scroll to it.
  window.dispatchEvent(new CustomEvent("tour-search", { detail: q }));
  document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let id: ReturnType<typeof setInterval>;

    const start = () => {
      id = setInterval(
        () => setActive((i) => (i + 1) % heroSlides.length),
        5500
      );
    };
    const stop = () => clearInterval(id);

    const onVisibility = () => {
      stop();
      if (!document.hidden) start();
    };

    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <section id="top" className="relative">
      <div className="relative h-[560px] w-full sm:h-[600px]">
        {/* Slideshow */}
        {heroSlides.map((slide, i) => {
          const isActive = i === active;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={i === 0}
                loading={i === 0 ? undefined : "lazy"}
                quality={75}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/45 to-gray-900/25" />

        {/* Location tag */}
        <div className="absolute bottom-4 right-4 z-10 hidden items-center gap-1.5 rounded-full bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur sm:flex">
          <MapPinIcon className="h-3.5 w-3.5 text-accent-400" />
          {heroSlides[active].place}
        </div>

        <div className="container-page relative flex h-full flex-col justify-center pb-10">
          <div className="max-w-2xl">
            <span className="chip bg-white/15 text-white ring-1 ring-white/25 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Up to 20% off island tours this season
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              See the real Sri Lanka,{" "}
              <span className="text-gradient">without the planning.</span>
            </h1>

            <p className="mt-4 max-w-xl text-lg text-white/90">
              Rock fortresses, tea-country trains, leopard safaris and southern
              beaches, hand-planned by local guides. You just show up.
            </p>

            {/* Social proof */}
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/90">
              <span className="flex items-center gap-1.5">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-accent-400" />
                  ))}
                </span>
                <strong className="font-semibold text-white">
                  {socialProofDisplay.rating}
                </strong>
                from {socialProofDisplay.reviewCount} reviews
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
              <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                {trustBadges.map((b) => (
                  <span key={b} className="flex items-center gap-1.5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.4}
                      className="h-3.5 w-3.5 text-accent-400"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {b}
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* Search with autocomplete */}
          <HeroSearch />

          {/* Quick search chips */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-white/70">Popular:</span>
            {quickSearches.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => runTourSearch(q)}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur transition-colors hover:border-white/50 hover:bg-white/20"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Slide dots */}
          <div className="mt-8 flex gap-2">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Show ${slide.place}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
