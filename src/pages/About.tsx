import HelmetSeo from "@/components/layout/HelmetSeo";
import ContactSection from "@/components/sections/ContactSection";
import OurMissionSection from "@/components/sections/OurMissionSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import PageHero from "@/components/ui/PageHero";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
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
        title="Why Choose Nettax | Trusted FBR Tax Consultants in Pakistan"
        description="Nettax is Pakistan’s trusted FBR partner for NTN checks, tax returns & eFBR updates. Discover why thousands trust our expert tax consultants & services."
      />

      <PageHero
        backgroundImageUrl="/images/page-hero-img-01.avif"
        heading="Trusted Experts in Tax Solutions"
        subheading="Delivering reliable, personalized tax services with integrity, accuracy, and expert guidance."
      />

      <WhoWeAreSection />

      <TeamSection />

      <OurMissionSection />

      <WhyChooseSection />

      <ServiceSection />

      <div className="bg-[#EEF8FF]">
        <ContactSection />
      </div>
    </main>
  );
};

export default About;
