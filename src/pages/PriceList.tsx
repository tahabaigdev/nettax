import HelmetSeo from "@/components/layout/HelmetSeo";
import PriceListSection from "@/components/sections/PriceListSection";
import PageHero from "@/components/ui/PageHero";
import { useEffect } from "react";

const PriceList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HelmetSeo
        title="Price List - Nettax"
        description="Welcome to the Price List of Nettax."
      />

      <PageHero
        backgroundImageUrl="/images/page-hero-img-02.avif"
        heading="Transparent Fees, Legal Costs"
        subheading="Clear pricing for every service—no hidden fees, just professional solutions tailored to you."
      />

      <PriceListSection />
    </main>
  );
};

export default PriceList;
