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
        title="Tax on Salary in Pakistan – Pricing & Tax Services - Nettax"
        description="Explore Nettax’s updated price list for salary tax filing, NTN registration & consultancy. Transparent tax rates & expert services for individuals & businesses."
        url="https://nettax.org/price-list"
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
