import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HotTours from "@/components/HotTours";
import TourSlider from "@/components/tourvisor/TourSlider";
import MinPrices from "@/components/tourvisor/MinPrices";
import StatsWhyUs from "@/components/StatsWhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HotTours />
      <TourSlider />
      <MinPrices />
      <StatsWhyUs />
      <Testimonials />
      <FAQ />
    </>
  );
}
