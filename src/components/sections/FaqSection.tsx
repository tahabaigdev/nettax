import { Plus } from "lucide-react";
import rays03 from "/images/rays-03.svg";
import circle from "/images/circle.svg";
import SectionDescription from "../ui/SectionDescription";
import SectionTitle from "../ui/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const FaqSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="relative overflow-x-hidden bg-[#EEF8FF] px-[2rem] py-[6rem] lg:py-[9.6rem] xl:px-[0rem]">
      <div className="container grid gap-[6.4rem]">
        <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
          <div data-aos="fade-up" className="relative">
            <div className="absolute top-[-2rem] right-[1rem] w-[7%] md:top-[-3rem] md:right-[-3rem]">
              <img
                src={rays03}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <div className="absolute bottom-[0rem] left-[11rem] z-[-1] w-[25%] md:bottom-[-1rem] md:left-[18rem] md:w-[20%]">
              <img
                src={circle}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <div className="max-w-[30rem] md:max-w-[70rem]">
              <SectionTitle label="FAQs About nettax Dost" />
            </div>
          </div>

          <div data-aos="fade-up">
            <SectionDescription label="Find answers to frequently asked questions about using nettax Dost for smooth and easy tax filing." />
          </div>
        </div>

        <div data-aos="fade-up">
          <Accordion
            className="mx-auto w-full max-w-[80rem]"
            type="single"
            collapsible
          >
            <AccordionItem
              value="item-1"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>Do I need tax or legal knowledge?</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                <p>
                  No. You just submit client info —our certified experts handle
                  the technical side.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>Is it available all over Pakistan?</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                <p>Yes —completely online and open to everyone nationwide.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>Is there a registration fee?</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                <p>No, registration is 100% free.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>How and when will I get paid?</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                <p>
                  You’ll receive monthly payments through Easypaisa, JazzCash,
                  or bank transfer.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
