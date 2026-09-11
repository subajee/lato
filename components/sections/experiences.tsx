import Image from "next/image";
import { FeatureIcon, ArrowIcon, StarIcon } from "@/components/icons";
import { LotusMedallion } from "@/components/motifs";
import { experiences } from "@/lib/data";

export function Experiences() {
  const feature =
    experiences.find((e) => e.icon === "compass") ?? experiences[0];
  const rest = experiences.filter((e) => e !== feature);

  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-white py-16 sm:py-20"
    >
      {/* Single large traditional lotus medallion (Sri Lankan temple art) */}
      <LotusMedallion
        className="pointer-events-none absolute -right-40 top-1/2 h-[38rem] w-[38rem] -translate-y-1/2 text-brand-500/[0.06] sm:-right-32"
        aria-hidden="true"
      />
      <div
        className="blob -left-20 top-10 h-64 w-64 bg-accent-400/10"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">
          {/* Left: intro + CTA */}
          <div className="max-w-md">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Why Lato Tours
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
              Travel Sri Lanka the{" "}
              <span className="text-gradient">effortless</span> way.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              We handle the routes, the guides, the stays and the small stuff,
              so every day feels unhurried and every detail feels considered.
            </p>

            <div className="mt-6 flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-amber-400" />
              ))}
              <span className="ml-1 text-sm text-gray-500">
                4.9 from 2,400+ reviews
              </span>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <a href="#book" className="btn-primary">
                Plan my trip
                <ArrowIcon className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                  98%
                </span>
                <span className="text-xs leading-tight text-gray-500">
                  would book
                  <br />
                  with us again
                </span>
              </div>
            </div>
          </div>

          {/* Right: bento grid */}
          <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-3">
            {/* Large photo feature */}
            <a
              href="#book"
              aria-label={`${feature.title} — plan a guided trip`}
              className="group relative block overflow-hidden rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:row-span-3"
            >
              <div className="relative h-64 w-full sm:h-full sm:min-h-[24rem]">
                <Image
                  src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
                  alt="A local guide at the Temple of the Tooth in Kandy, Sri Lanka"
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
              </div>

              <span className="chip absolute left-5 top-5 bg-white/90 text-gray-800 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Meet your guide
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur">
                  <FeatureIcon name={feature.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-white/85">
                  {feature.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Plan a guided trip
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>

            {/* Supporting cards */}
            {rest.map((exp, i) => (
              <article
                key={exp.title}
                className="group relative flex items-start gap-4 overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-hover"
              >
                {/* Hover accent bar */}
                <span
                  className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-brand-400 to-brand-600 transition-transform duration-300 group-hover:scale-y-100"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute -right-2 -top-3 select-none text-5xl font-extrabold text-brand-100/70"
                  aria-hidden="true"
                >
                  0{i + 2}
                </span>

                <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-sm shadow-brand-500/30 transition-transform duration-300 group-hover:scale-105">
                  <FeatureIcon name={exp.icon} className="h-5 w-5" />
                </span>

                <div className="relative min-w-0">
                  <h3 className="font-semibold text-gray-900 transition-colors group-hover:text-brand-600">
                    {exp.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
