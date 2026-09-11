import Image from "next/image";
import { destinations } from "@/lib/data";
import { ArrowIcon } from "@/components/icons";
import { TravelArtScatter } from "@/components/travel-art";

const fieldClass =
  "rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

export function BookingCta() {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-brand-600 py-14 sm:py-20"
    >
      {/* Modern travel background: topographic contour lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.06]"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="cta-topo"
            width="320"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M-20 60 C60 20 120 100 200 60 C260 30 320 90 360 60" />
              <path d="M-20 100 C60 60 120 140 200 100 C260 70 320 130 360 100" />
              <path d="M-20 140 C60 100 120 180 200 140 C260 110 320 170 360 140" />
              <path d="M-20 180 C60 140 120 220 200 180 C260 150 320 210 360 180" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-topo)" />
      </svg>

      {/* Modern travel line-art scatter */}
      <TravelArtScatter className="hidden sm:block" />

      {/* Dashed flight path with plane */}
      <svg
        className="pointer-events-none absolute right-6 top-8 hidden h-24 w-64 text-white/20 lg:block"
        viewBox="0 0 260 90"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 78 C70 30 150 20 240 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
        <circle cx="6" cy="78" r="3.5" fill="currentColor" />
        <path
          d="M238 8 l14 6 -13 5 -3 8 -3 -7 -9 -1 8 -4 z"
          fill="currentColor"
          transform="rotate(-20 240 14)"
        />
      </svg>

      <div
        className="blob -right-10 -top-10 h-72 w-72 bg-accent-400/25"
        aria-hidden="true"
      />
      <div
        className="blob -bottom-16 -left-10 h-72 w-72 bg-brand-700/40"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-2">
        <div className="text-white">
          <span className="chip bg-white/15 text-white ring-1 ring-white/25">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            48-hour reply, no obligation
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Plan your Sri Lanka trip
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/90">
            Tell us where you want to go and when. Our local team designs a
            tailored day-by-day itinerary and sends it straight to your inbox.
          </p>

          <ul className="mt-7 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Free custom itinerary",
              "Local expert guides",
              "No booking fees",
              "Flexible, editable plans",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm text-white/95"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/20 ring-1 ring-white/25">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    className="h-3.5 w-3.5 text-white"
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

          <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
              ].map((src) => (
                <span
                  key={src}
                  className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-brand-500"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    loading="lazy"
                    quality={70}
                    sizes="36px"
                    className="object-cover"
                  />
                </span>
              ))}
            </div>
            <p className="text-sm text-white/90">
              Joined by <strong className="font-semibold text-white">9,000+</strong>{" "}
              travelers
            </p>
          </div>
        </div>

        <form className="grid gap-4 rounded-2xl bg-white p-8 shadow-2xl shadow-brand-700/20 ring-1 ring-black/5 sm:p-10">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Get your free itinerary
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Takes under a minute. No credit card needed.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
              Name
              <input type="text" placeholder="Jane Doe" className={fieldClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
              Email
              <input
                type="email"
                placeholder="jane@email.com"
                className={fieldClass}
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
            Destination
            <select className={fieldClass}>
              <option value="">Where would you like to go?</option>
              {destinations.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.name}, {d.country}
                </option>
              ))}
              <option value="surprise">Surprise me</option>
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
            When
            <input
              type="text"
              placeholder="Approx. dates or month"
              className={fieldClass}
            />
          </label>

          <button type="submit" className="btn-primary mt-1 w-full">
            Request my itinerary
            <ArrowIcon className="h-4 w-4" />
          </button>
          <p className="text-center text-xs text-gray-400">
            We&apos;ll never share your details. No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}
