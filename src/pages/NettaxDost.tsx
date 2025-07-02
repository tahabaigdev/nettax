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
        title="Salary Tax Calculator | FBR NTN Verification Tool"
        description="Use Nettax Dost to calculate your salary tax in Pakistan. Check FBR NTN, eFBR status & verify tax info easily. Fast, accurate & trusted by tax experts."
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
