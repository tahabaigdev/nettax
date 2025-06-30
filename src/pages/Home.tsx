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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // No hash = scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100); // small delay to wait for DOM to mount

    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <main>
      <HelmetSeo
        title="Online NTN Verification & Filer Status Check – Nettax Pakistan"
        description=":Need to check FBR filer status or verify your NTN number online? Use Nettax to access e registration, filer check, and active taxpayer status in Pakistan."
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
