import Link from "next/link";
import { LotusMedallion } from "@/components/motifs";

const columns = [
  {
    title: "Explore",
    items: ["Destinations", "Tours", "Experiences", "Travel guides"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "Sustainability"],
  },
  {
    title: "Support",
    items: ["Contact", "FAQ", "Booking terms", "Privacy policy"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white">
      {/* Floral (lotus) background motifs */}
      <LotusMedallion
        className="pointer-events-none absolute -left-24 -top-16 h-72 w-72 text-brand-500/[0.05]"
        aria-hidden="true"
      />
      <LotusMedallion
        className="pointer-events-none absolute -bottom-28 right-[-4rem] h-96 w-96 text-brand-500/[0.05]"
        aria-hidden="true"
      />

      <div className="container-page relative py-12">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/#top" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 text-base font-extrabold text-white shadow-md shadow-brand-500/40 ring-1 ring-inset ring-white/30">
                L
              </span>
              <span className="text-lg font-bold text-gray-900">
                Lato Tours
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              A simpler way to browse and book handpicked tours across Sri
              Lanka, from the highlands to the coast.
            </p>
            <div className="mt-5 flex gap-2">
              {["Instagram", "Twitter", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-brand-400 hover:text-brand-500"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-gray-900">
                {col.title}
              </h4>
              <ul className="mt-3 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-brand-500"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Lato Tours. All rights reserved.</p>
          <p>Made for travelers, by travelers.</p>
        </div>
      </div>
    </footer>
  );
}
