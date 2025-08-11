import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NettaxAgentSection = () => {
  return (
    <section className="relative overflow-hidden px-[2rem] py-[6rem] xl:px-[0rem]">
      <div className="container grid grid-cols-1 items-center gap-[4rem] lg:grid-cols-2 lg:items-start">
        <div className="flex items-start justify-center">
          <div
            data-aos="fade-right"
            className="h-[33rem] w-full max-w-[55rem] overflow-hidden rounded-[1.2rem]"
          >
            <img
              src="/images/nettax-agent-img.avif"
              alt="Image"
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-[4rem] text-center lg:items-start lg:text-left">
          <div>
            <h5
              data-aos="fade-left"
              className="text-[2rem] leading-[1.6rem] font-medium text-[var(--primary-color)] uppercase"
            >
              Partner Opportunity
            </h5>

            <h2
              data-aos="fade-left"
              className="text-[2.8rem] leading-[4rem] font-normal tracking-[-0.8px]"
            >
              Become a Nettax Agent and Grow With Us
            </h2>
          </div>

          <Accordion
            data-aos="fade-left"
            className="w-full"
            type="single"
            collapsible
          >
            <AccordionItem
              value="item-1"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>Who Can Join?</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem]">
                <p>
                  Anyone with basic tax knowledge, internet access, and a drive
                  to assist clients.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>What’s the Benefit?</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem]">
                <p>
                  Earn commissions, gain clients, and access professional tools
                  to simplify their tax work.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>How to Get Started?</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem]">
                <p>
                  Fill out a short form, verify your details, and start
                  onboarding clients instantly.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default NettaxAgentSection;
