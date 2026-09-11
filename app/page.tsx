import { Hero } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { Destinations } from "@/components/sections/destinations";
import { Tours } from "@/components/sections/tours";
import { Experiences } from "@/components/sections/experiences";
import { Reviews } from "@/components/sections/reviews";
import { BookingCta } from "@/components/sections/booking-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Destinations />
      <Tours />
      <Experiences />
      <Reviews />
      <BookingCta />
    </>
  );
}
