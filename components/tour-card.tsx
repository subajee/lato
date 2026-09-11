import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/lib/data";
import {
  ClockIcon,
  UsersIcon,
  MapPinIcon,
  StarIcon,
  ArrowIcon,
} from "@/components/icons";

export function TourCard({ tour }: { tour: Tour }) {
  const original = Math.round(tour.price * 1.25);

  return (
    <article className="card group relative flex flex-col">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          loading="lazy"
          quality={70}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Always-on gradient for badge legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <span className="chip absolute left-3 top-3 bg-white/95 text-gray-800 shadow-sm backdrop-blur">
          {tour.category}
        </span>
        <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-extrabold text-brand-600 shadow-sm ring-1 ring-black/5 backdrop-blur">
          -20%
        </span>

        {/* Rating pill on the image */}
        <span className="chip absolute bottom-3 left-3 gap-1 bg-black/45 text-white ring-1 ring-white/15 backdrop-blur">
          <StarIcon className="h-3.5 w-3.5 text-amber-400" />
          {tour.rating.toFixed(1)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600">
          <MapPinIcon className="h-3.5 w-3.5" />
          {tour.location}
        </div>

        <h3 className="mt-2 line-clamp-2 text-xl font-extrabold leading-tight tracking-tight text-gray-900 transition-colors group-hover:text-brand-600 sm:text-2xl">
          <Link
            href={`/tours/${tour.slug}`}
            className="before:absolute before:inset-0 before:z-0 before:content-[''] focus:outline-none"
          >
            {tour.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {tour.description}
        </p>

        {/* Meta chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-gray-700">
            <ClockIcon className="h-4 w-4 text-brand-500" />
            {tour.days} days
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-gray-700">
            <UsersIcon className="h-4 w-4 text-brand-500" />
            {tour.groupSize}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                From
              </span>
              <span className="text-xs font-medium text-gray-400 line-through">
                ${original.toLocaleString()}
              </span>
            </div>
            <p className="text-2xl font-extrabold tracking-tight text-gray-900">
              ${tour.price.toLocaleString()}
              <span className="ml-1 text-xs font-medium text-gray-500">
                /person
              </span>
            </p>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            aria-label={`View ${tour.title}`}
            className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-500 text-white shadow-sm shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-md group-hover:scale-105 active:scale-95"
          >
            <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
