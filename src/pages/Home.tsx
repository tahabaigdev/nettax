import HelmetSeo from "@/components/layout/HelmetSeo";
import ContactSection from "@/components/sections/ContactSection";
import DostSection from "@/components/sections/DostSection";
import FeatureSection from "@/components/sections/FeatureSection";
import GuruSection from "@/components/sections/GuruSection";
import HeroSection from "@/components/sections/HeroSection";
import PartnerSection from "@/components/sections/PartnerSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";
import TimelineSection from "@/components/sections/TimelineSection";

const Home = () => {
  return (
    <main>
      <HelmetSeo
        title="Home - Nettax"
        description="Welcome to the homepage of Nettax."
      />

      <HeroSection />

      <DostSection />

      <GuruSection />

      <FeatureSection />

      <TimelineSection />

      <TeamSection />

      <PartnerSection />

      <ServiceSection />

      <ContactSection />
    </main>
  );
};

export default Home;
