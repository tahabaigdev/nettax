import FilterAccordion from "../ui/FilterAccordion";
import rays03 from "/images/rays-03.svg";
import blueHighlight01 from "/images/blue-highlight-01.svg";
import SectionTitle from "../ui/SectionTitle";
import SectionDescription from "../ui/SectionDescription";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { accordionData, tabs } from "@/constants";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const WhyChooseSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section
      id="why-choose-nettax"
      className="overflow-hidden bg-[#EEF8FF] px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]"
    >
      <div className="container">
        <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
          <div data-aos="fade-up" className="relative">
            <div className="absolute top-[-2rem] right-[1rem] w-[7%] md:top-[-3rem] md:right-[7rem]">
              <img
                src={rays03}
                alt="icon"
                className="object-contain object-center"
              />
            </div>

            <div className="absolute top-[8.5rem] left-[10rem] w-[35%] md:top-[5rem] md:left-[40rem] md:w-auto">
              <img
                src={blueHighlight01}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <div className="max-w-[30rem] md:max-w-[70rem]">
              <SectionTitle label="Trusted by Clients, Powered by Expertise" />
            </div>
          </div>

          <div data-aos="fade-up">
            <SectionDescription label="At nettax, we blend deep industry expertise with a client-first approach to deliver reliable, personalized financial and tax solutions." />
          </div>

          <div data-aos="fade-up">
            <Button asChild>
              <a href="https://wa.me/923192421501" target="_blank">
                <span>Get Free Consultation</span>

                <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
              </a>
            </Button>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-[6rem]">
          <FilterAccordion tabs={tabs} accordionData={accordionData} />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
