import SectionTitle from "../ui/SectionTitle";
import SectionDescription from "../ui/SectionDescription";
import { Button } from "../ui/button";
import {
  ChartLine,
  ChartNoAxesCombined,
  ChevronRight,
  Receipt,
} from "lucide-react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import rays03 from "/images/rays-03.svg";
import nettaxDostDash from "/images/nettax-dost-dash-main.webm";
import highlighter from "/images/highlighter.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const DostSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section
      id="dost-section"
      className="relative z-[1] overflow-hidden bg-[#EEF8FF] py-[5rem] lg:py-[9.6rem]"
    >
      <div className="bg-dot absolute inset-0 z-[-1] size-[100%] opacity-[0.05]"></div>

      <div className="absolute top-[2rem] left-[5rem] -rotate-45 md:top-[5rem]">
        <Receipt className="size-[3rem] text-(--primary-color) md:size-[4rem]" />
      </div>

      <div className="absolute bottom-[5rem] left-[5rem] rotate-45">
        <ChartLine className="size-[4rem] text-(--primary-color)" />
      </div>

      <div className="absolute top-[40rem] right-[2rem] rotate-12 md:right-[10rem]">
        <ChartNoAxesCombined className="size-[4rem] text-(--primary-color)" />
      </div>

      <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
        <div data-aos="fade-up" className="relative">
          <div className="absolute top-[-2rem] right-[1rem] w-[7%] md:top-[-3.5rem] md:right-[2rem]">
            <img
              src={rays03}
              alt="Image"
              className="object-contain object-center"
            />
          </div>

          <div className="absolute right-[10rem] bottom-[0rem] z-[-1] w-[20%] rotate-12 md:right-[18rem] md:bottom-[-1rem]">
            <img
              src={highlighter}
              alt="Image"
              className="object-contain object-center"
            />
          </div>

          <div className="max-w-[40rem] md:max-w-[70rem]">
            <SectionTitle label="Unleash the power of nettax Dost" />
          </div>
        </div>

        <div data-aos="fade-up">
          <SectionDescription label="nettax Dost is your personal tax buddy smart, simple, and always by your side. It empowers you to earn by helping your friends and network get their taxes filed through legitimate tax experts at nettax. Whether you're a student, freelancer, or just starting out, nettax Dost gives you the tools and support to grow, connect, and make a real impact." />
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

      <div
        data-aos="fade-up"
        className="mt-[-30rem] mb-[-33rem] flex flex-col overflow-hidden md:mt-[-22rem] md:mb-[-25rem] lg:mt-[-12rem] lg:mb-[-12rem] xl:mt-[-5rem] xl:mb-[-5rem]"
      >
        <ContainerScroll>
          <div className="relative size-full">
            <video
              autoPlay
              muted
              loop
              src={nettaxDostDash}
              className="size-full object-center"
              draggable={false}
            />
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default DostSection;
