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
import { motion, type Variants } from "framer-motion";
import rays03 from "/images/rays-03.svg";
import netTaxDostDash from "/images/nettax-dost-dash.gif";
import highlighter from "/images/highlighter.svg";

const DostSection = () => {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // adjust time between each element
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-[1] overflow-hidden bg-[#EEF8FF] py-[5rem] lg:py-[9.6rem]"
    >
      <div className="bg-dot absolute inset-0 z-[-1] size-[100%] opacity-[0.05]"></div>

      <div className="absolute top-[2rem] left-[5rem] -rotate-45 md:top-[5rem]">
        <Receipt className="size-[4rem] text-(--primary-color)" />
      </div>

      <div className="absolute bottom-[5rem] left-[5rem] rotate-45">
        <ChartLine className="size-[4rem] text-(--primary-color)" />
      </div>

      <div className="absolute top-[40rem] right-[2rem] rotate-12 md:right-[10rem]">
        <ChartNoAxesCombined className="size-[4rem] text-(--primary-color)" />
      </div>

      <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
        <motion.div
          variants={fadeUp}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          className="relative"
        >
          <div className="absolute top-[-2rem] right-[1rem] w-[7%] md:top-[-3.5rem] md:right-[2rem]">
            <img
              src={rays03}
              alt="Image"
              className="object-contain object-center"
            />
          </div>

          <div className="absolute right-[17rem] bottom-[-1rem] z-[-1] w-[20%] rotate-12 md:right-[18rem]">
            <img
              src={highlighter}
              alt="Image"
              className="object-contain object-center"
            />
          </div>

          <SectionTitle label="Unleash the power of netTax Dost" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          <SectionDescription label="netTax Dost is your personal tax buddy smart, simple, and always by your side. It empowers you to earn by helping your friends and network get their taxes filed through legitimate tax experts at netTax. Whether you're a student, freelancer, or just starting out, netTax Dost gives you the tools and support to grow, connect, and make a real impact." />
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        >
          <Button asChild>
            <a href="/">
              <span>Get Free Consultation</span>

              <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="mt-[-30rem] mb-[-33rem] flex flex-col overflow-hidden md:mt-[-22rem] md:mb-[-25rem] lg:mt-[-12rem] lg:mb-[-12rem] xl:mt-[-5rem] xl:mb-[-5rem]"
      >
        <ContainerScroll>
          <div className="relative size-full">
            <img
              src={netTaxDostDash}
              alt="Image"
              className="size-full object-center"
              draggable={false}
            />
          </div>
        </ContainerScroll>
      </motion.div>
    </motion.section>
  );
};

export default DostSection;
