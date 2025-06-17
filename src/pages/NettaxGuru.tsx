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
        title="Nettax Guru - Nettax"
        description="Welcome to the Nettax Dost."
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
