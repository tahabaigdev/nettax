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
        title="About Nettax – Trusted Tax Experts Behind Dost & Guru"
        description="Discover how Nettax simplifies FBR registration, filer status, and tax education in Pakistan through expert-led services like Nettax Dost & Nettax Guru."
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
