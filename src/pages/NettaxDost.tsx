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
        title="FBR Registration & Online NTN Check – Nettax Dost"
        description="NetTax Dost helps you register with FBR and check your NTN online with ease. Fast, secure, and simplified tax solutions — trusted by thousands in Pakistan."
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
