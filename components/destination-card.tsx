import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/data";
import { StarIcon, MapPinIcon } from "@/components/icons";

export function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative flex h-72 flex-col overflow-hidden rounded-3xl shadow-card ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      {/* Background image + overlays */}
      <Image
        src={destination.image}
        alt={`${destination.name}, ${destination.country}`}
        fill
        loading="lazy"
        quality={70}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      {/* Bottom scrim keeps text readable while showing more of the photo */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-700/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

      {/* Top row: category + rating */}
      <div className="relative flex items-start justify-between p-4">
        <span className="chip bg-brand-500 text-white shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
          {destination.category}
        </span>
        <span className="chip items-center gap-1 bg-black/40 text-white ring-1 ring-white/15 backdrop-blur">
          <StarIcon className="h-3.5 w-3.5 text-amber-400" />
          {destination.rating.toFixed(1)}
        </span>
      </div>

      {/* Spacer pushes content to the bottom */}
      <div className="flex-1" />

      {/* Bottom content over the image */}
      <div className="relative p-5 text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-400">
          <MapPinIcon className="h-3.5 w-3.5" />
          {destination.country}
        </p>
        <h3 className="mt-1.5 text-2xl font-extrabold leading-tight tracking-tight">
          {destination.name}
        </h3>
        {/* Animated accent underline */}
        <span
          className="mt-2 block h-1 w-10 origin-left rounded-full bg-gradient-to-r from-brand-400 to-accent-400 transition-all duration-300 group-hover:w-16"
          aria-hidden="true"
        />

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/90">
          {destination.tagline}
        </p>
      </div>
    </Link>
  );
}
