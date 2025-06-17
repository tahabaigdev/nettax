import HelmetSeo from "@/components/layout/HelmetSeo";
import AboutNettaxDostSection from "@/components/sections/AboutNettaxDostSection";
import FaqSection from "@/components/sections/FaqSection";
import HowItWorkSection from "@/components/sections/HowItWorkSection";
import NettaxDostHero from "@/components/sections/NettaxDostHero";
import StartEarningSection from "@/components/sections/StartEarningSection";
import WhoCanJoinSection from "@/components/sections/WhoCanJoinSection";

const NettaxDost = () => {
  return (
    <main>
      <HelmetSeo
        title="Nettax Dost - Nettax"
        description="Welcome to the Nettax Dost."
      />

      <NettaxDostHero />

      <AboutNettaxDostSection />

      <WhoCanJoinSection />

      <HowItWorkSection />

      <StartEarningSection />

      <FaqSection />
    </main>
  );
};

export default NettaxDost;
