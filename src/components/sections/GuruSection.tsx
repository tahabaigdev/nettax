import SectionTitle from "../ui/SectionTitle";
import SectionDescription from "../ui/SectionDescription";
import { Button } from "../ui/button";
import { BookOpenText, ChevronRight, GraduationCap } from "lucide-react";
import AccordionSlider from "../ui/AccordionSlider";
import { motion, type Variants } from "framer-motion";
import rays03 from "/images/rays-03.svg";
import blueHighlight01 from "/images/blue-highlight-01.svg";

const GuruSection = () => {
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
      className="relative overflow-hidden px-[2rem] py-[5rem] lg:py-[11.2rem] xl:px-[0rem]"
    >
      <div className="absolute right-[5rem] bottom-[40rem]">
        <GraduationCap className="size-[4rem] -rotate-45 stroke-[1.5px] text-(--primary-color)" />
      </div>

      <div className="md::left-[10rem] absolute bottom-[0rem] left-[30rem] lg:bottom-[2rem]">
        <BookOpenText className="size-[3rem] rotate-12 stroke-[1.5px] text-(--primary-color) md:size-[4rem]" />
      </div>

      <div className="container grid gap-[6.4rem]">
        <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="relative"
          >
            <div className="absolute top-[-2rem] right-[1rem] w-[7%] md:top-[-3rem] md:right-[-3rem]">
              <img
                src={rays03}
                alt="icon"
                className="object-contain object-center"
              />
            </div>

            <div className="absolute top-[1rem] left-[15rem] md:top-[5rem] md:left-[26rem]">
              <img
                src={blueHighlight01}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <SectionTitle label="Achieve Financial Success with Our Trusted Experts" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          >
            <SectionDescription label="netTax’s trusted experts provide clear advice and personalized support to help you manage taxes, grow your business, and plan for a secure financial future. Count on us to guide you every step of the way toward your financial goals." />
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
        >
          <AccordionSlider />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GuruSection;
