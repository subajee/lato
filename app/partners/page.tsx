import type { Metadata } from "next";
import Image from "next/image";
import { FeatureIcon, ArrowIcon } from "@/components/icons";
import {
  partnerTypes,
  partnerBenefits,
  partnerStats,
  accreditations,
  company,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Partner with Lato Tours — Sri Lanka B2B travel",
  description:
    "Grow your travel business with Lato Tours. Competitive net rates, up to 15% commission, dedicated support and white-label tools for agents, corporates, hotels and OTAs.",
};

const fieldClass =
  "rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 pt-28 pb-16 sm:pb-20">
        <Image
          src="https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/40" />

        <div className="container-page relative">
          <div className="max-w-2xl text-white">
            <span className="chip bg-white/15 text-white ring-1 ring-white/25">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              For travel businesses
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Grow your business with{" "}
              <span className="text-gradient">Sri Lanka&apos;s</span> local
              experts.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">
              Resell handcrafted island tours with competitive net rates,
              generous commission, and a team that handles everything on the
              ground.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#apply" className="btn-primary text-base">
                Become a partner
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${company.email}`}
                className="btn-ghost border-white/30 bg-white/10 text-base text-white hover:bg-white/20"
              >
                Talk to our team
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur sm:grid-cols-4">
            {partnerStats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-white/75">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner types */}
      <section className="container-page py-16 sm:py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Who we work with
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Built for every kind of travel partner
          </h2>
          <p className="mt-3 text-gray-500">
            Whatever your model, we make it easy to add authentic Sri Lanka
            experiences to your portfolio.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partnerTypes.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-gray-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-hover"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-sm shadow-brand-500/30">
                <FeatureIcon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Partner benefits
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why partners choose Lato
            </h2>
            <p className="mt-3 text-gray-500">
              Real margins, real support, and tools that make reselling
              effortless.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerBenefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-gray-200/80 bg-white p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-500">
                  <FeatureIcon name={b.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration form */}
      <section id="apply" className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Get started
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Become a partner
            </h2>
            <p className="mt-4 max-w-md text-gray-500">
              Tell us about your business and our partnerships team will reach
              out within one business day with rates and next steps.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              {[
                "No setup fees or minimum commitment",
                "Net rates and commission on approval",
                "Dedicated onboarding & account manager",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
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
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <form className="grid gap-4 rounded-2xl border border-gray-200/80 bg-white p-6 shadow-card sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
                Company name
                <input type="text" placeholder="Acme Travel" className={fieldClass} />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
                Contact name
                <input type="text" placeholder="Jane Doe" className={fieldClass} />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
                Work email
                <input
                  type="email"
                  placeholder="jane@acmetravel.com"
                  className={fieldClass}
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
                Country
                <input type="text" placeholder="United Kingdom" className={fieldClass} />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
                Business type
                <select className={fieldClass}>
                  <option value="">Select…</option>
                  <option>Travel agent / tour operator</option>
                  <option>Corporate / MICE</option>
                  <option>Hotel / DMC</option>
                  <option>Affiliate / OTA</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
                Expected monthly bookings
                <select className={fieldClass}>
                  <option value="">Select…</option>
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>51–200</option>
                  <option>200+</option>
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700">
              IATA / registration number (optional)
              <input type="text" placeholder="e.g. 12345678" className={fieldClass} />
            </label>

            <button type="submit" className="btn-primary mt-1 w-full">
              Submit application
              <ArrowIcon className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-gray-400">
              We&apos;ll only use your details to process this application.
            </p>
          </form>
        </div>
      </section>

      {/* Trust band */}
      <section className="relative overflow-hidden border-t border-gray-200 bg-gradient-to-b from-white via-brand-50/40 to-white py-14 sm:py-16">
        {/* Decorative glows */}
        <div
          className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-200/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-accent-400/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-page relative">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 ring-1 ring-brand-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  d="M9 12l2 2 4-4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
              </svg>
              Licensed & accredited
            </span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Trusted by the industry
            </h2>
            <p className="mt-2 max-w-md text-sm text-gray-500">
              A registered, licensed Sri Lanka tour operator working with
              recognised travel and payment partners.
            </p>
          </div>

          <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {accreditations.map((p) => (
              <li
                key={p.name}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-gray-200/80 bg-white p-4 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-hover"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 12l2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
                  </svg>
                </span>
                <span className="text-sm font-bold leading-tight tracking-tight text-gray-800">
                  {p.name}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  {p.kind}
                </span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 w-fit rounded-full bg-white px-4 py-2 text-center text-xs text-gray-500 ring-1 ring-gray-200">
            {company.legalName} · {company.license} · Company Reg.{" "}
            {company.regNo}
          </p>
        </div>
      </section>
    </>
  );
}
