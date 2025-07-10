import HelmetSeo from "@/components/layout/HelmetSeo";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import GuruSection from "@/components/sections/GuruSection";
import NettaxGuruHero from "@/components/sections/NettaxGuruHero";
import TaxCoursesSection from "@/components/sections/TaxCoursesSection";

const NettaxGuru = () => {
  return (
    <main>
      <HelmetSeo
        title="FBR Tax Return Filing | Become a Filer - Nettax"
        description="E-file your FBR tax return with Nettax Guru. Learn how to become a filer in Pakistan using IRIS FBR system. Simple, secure, and guided filing—start now!"
        url="https://nettax.org/nettax-guru"
      />

      <NettaxGuruHero />

      <TaxCoursesSection />

      <div id="learning-modes">
        <GuruSection />
      </div>

      <CertificationsSection />

      <div id="support">
        <ContactSection />
      </div>
    </main>
  );
};

export default NettaxGuru;
