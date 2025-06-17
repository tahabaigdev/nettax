import SectionTitle from "../ui/SectionTitle";
import SectionDescription from "../ui/SectionDescription";

import {
  BookOpenText,
  Cross,
  Cuboid,
  GraduationCap,
  Pyramid,
} from "lucide-react";
import AccordionSlider, { type AccordionItemType } from "../ui/AccordionSlider";
import rays03 from "/images/rays-03.svg";
import blueHighlight01 from "/images/blue-highlight-01.svg";
import aboutSectionBg from "/images/hero-bg.avif";
import nettaxGuruImg01 from "/images/nettax-guru-img-01.png";
import nettaxGuruImg02 from "/images/nettax-guru-img-02.png";
import nettaxGuruImg03 from "/images/nettax-guru-img-03.png";
import circle01 from "/images/circle-01.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const accordionItems: AccordionItemType[] = [
  {
    id: "item-1",
    title: "Efficient Tax Savings",
    desc: "Strategic, compliant tax planning designed to optimize returns and reduce liabilities.",
    icon: Cuboid,
  },
  {
    id: "item-2",
    title: "Complete Tax Profile Management",
    desc: "We manage everything for you: registration, returns, and records—accurately, securely, and on time.",
    icon: Pyramid,
  },
  {
    id: "item-3",
    title: "Tax Education & Insights",
    desc: "Empowering you with expert knowledge and actionable insights for smarter financial decisions.",
    icon: Cross,
  },
];

const imageMap = {
  "item-1": (
    <div className="relative size-full">
      <img src={aboutSectionBg} alt="" className="size-full object-contain" />
      <div className="absolute top-1/2 left-1/2 aspect-[.9/1] w-[70%] translate-[-50%]">
        <img src={nettaxGuruImg03} alt="" className="object-cover" />
      </div>
      <div className="absolute right-[-1rem] bottom-[-1rem] aspect-[2/1] w-[50%]">
        <img src={circle01} alt="" className="object-contain" />
      </div>
    </div>
  ),
  "item-2": (
    <div className="relative size-full">
      <img src={aboutSectionBg} alt="" className="size-full object-contain" />
      <div className="absolute top-1/2 left-1/2 aspect-[.9/1] w-[70%] translate-[-50%]">
        <img src={nettaxGuruImg02} alt="" className="object-cover" />
      </div>
      <div className="absolute right-[-1rem] bottom-[-1rem] aspect-[2/1] w-[50%]">
        <img src={circle01} alt="" className="object-contain" />
      </div>
    </div>
  ),
  "item-3": (
    <div className="relative size-full">
      <img src={aboutSectionBg} alt="" className="size-full object-contain" />
      <div className="absolute top-1/2 left-1/2 aspect-[.9/1] w-[70%] translate-[-50%]">
        <img src={nettaxGuruImg01} alt="" className="object-cover" />
      </div>
      <div className="absolute right-[-1rem] bottom-[-1rem] aspect-[2/1] w-[50%]">
        <img src={circle01} alt="" className="object-contain" />
      </div>
    </div>
  ),
};

const GuruSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="relative overflow-hidden px-[2rem] py-[5rem] lg:py-[11.2rem] xl:px-[0rem]">
      <div className="absolute right-[5rem] bottom-[40rem]">
        <GraduationCap className="size-[4rem] -rotate-45 stroke-[1.5px] text-(--primary-color)" />
      </div>

      <div className="md::left-[10rem] absolute bottom-[0rem] left-[30rem] lg:bottom-[2rem]">
        <BookOpenText className="size-[3rem] rotate-12 stroke-[1.5px] text-(--primary-color) md:size-[4rem]" />
      </div>

      <div className="container grid gap-[6.4rem]">
        <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
          <div data-aos="fade-up" className="relative">
            <div className="absolute top-[-2rem] right-[1rem] w-[7%] md:top-[-3rem] md:right-[-3rem]">
              <img
                src={rays03}
                alt="icon"
                className="object-contain object-center"
              />
            </div>

            <div className="absolute top-[8.5rem] left-[4rem] w-[35%] md:top-[5rem] md:left-[26rem] md:w-auto">
              <img
                src={blueHighlight01}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <div className="max-w-[30rem] md:max-w-[70rem]">
              <SectionTitle label="Achieve Financial Success with Our Trusted Experts" />
            </div>
          </div>

          <div data-aos="fade-up">
            <SectionDescription label="nettax’s trusted experts provide clear advice and personalized support to help you manage taxes, grow your business, and plan for a secure financial future. Count on us to guide you every step of the way toward your financial goals." />
          </div>
        </div>

        <div>
          <AccordionSlider items={accordionItems} imageMap={imageMap} />
        </div>
      </div>
    </section>
  );
};

export default GuruSection;
