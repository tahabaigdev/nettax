import { Button } from "../ui/button";
import SectionDescription from "../ui/SectionDescription";
import SectionTitle from "../ui/SectionTitle";
import { ChevronRight } from "lucide-react";
import ProcessTimeline from "../ui/ProcessTimeline";
import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import mark01 from "/images/mark-01.svg";
import arrowDoodle4 from "/images/arrow-doodle-4.svg";
import rays03 from "/images/rays-03.svg";
import circle from "/images/circle.svg";

const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section className="relative overflow-x-hidden px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]">
      <div className="absolute right-[30rem] bottom-[20rem] aspect-[1.1/1] w-[3%]">
        <img
          src={mark01}
          alt="Image"
          className="object-contain object-center"
        />
      </div>

      <div className="absolute bottom-[70rem] left-[30rem] aspect-[1.1/1] w-[5%]">
        <img
          src={arrowDoodle4}
          alt="Image"
          className="object-contain object-center"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="container grid gap-[6.4rem]"
      >
        <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="relative"
          >
            <div className="absolute top-[-2rem] right-[1rem] w-[7%] md:top-[-3rem] md:right-[-3rem]">
              <img
                src={rays03}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <div className="absolute bottom-[0rem] left-[18rem] z-[-1] w-[20%] -rotate-6 md:bottom-[-1rem] md:left-[30rem]">
              <img
                src={circle}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <SectionTitle label="Strategic Legal Support for Financial Peace of Mind" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          >
            <SectionDescription label="Hyderabad’s leading taxation firm, delivering expert tax services to a diverse range of clients across Sindh." />
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

        <div>
          <ProcessTimeline ref={sectionRef} />
        </div>
      </motion.div>
    </section>
  );
};

export default TimelineSection;
