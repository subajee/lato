import { Sora } from "next/font/google";
import { FeatureIcon, StarIcon } from "@/components/icons";
import { CountUp } from "@/components/count-up";
import { stats } from "@/lib/data";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export function StatsStrip() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="container-page grid grid-cols-2 gap-x-4 gap-y-6 py-7 sm:grid-cols-4 sm:divide-x sm:divide-gray-100 sm:gap-0">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-4 sm:justify-center sm:px-5 sm:first:justify-start sm:first:pl-0"
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 text-white shadow-md shadow-brand-500/40 ring-1 ring-inset ring-white/25">
              {s.icon === "star" ? (
                <StarIcon className="h-7 w-7" />
              ) : (
                <FeatureIcon name={s.icon} className="h-7 w-7" />
              )}
            </span>
            <div className="min-w-0">
              <p
                className={`${sora.className} text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-[2rem]`}
              >
                <CountUp value={s.value} />
              </p>
              <p className="mt-1.5 text-sm font-semibold leading-tight text-gray-800">
                {s.label}
              </p>
              <p className="text-xs leading-tight text-gray-400">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
