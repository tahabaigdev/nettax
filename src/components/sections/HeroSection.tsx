import { motion, type Variants } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import grid from "/images/grid.avif";
import heroImg01 from "/images/hero-img-01.png";
import heroImg02 from "/images/hero-img-02.png";
import heroImg03 from "/images/hero-img-03.png";
import blueHighlight03 from "/images/blue-highlight-01.svg";
import rays from "/images/rays.svg";

const words = [
  {
    text: "Tax",
  },
  {
    text: "Journey",
  },
];

const people = [
  {
    id: 1,
    name: "Hallar Azad",
    designation: "XR Product Leader",
    image: "/images/rating-img-01.jpeg",
  },
  {
    id: 2,
    name: "Vikram Kumar Devnani",
    designation: "Co-Founder at HostYD",
    image: "/images/rating-img-02.jpeg",
  },
  {
    id: 3,
    name: "Aakif Nazeer",
    designation: "Data & AI/ML Specialist",
    image: "/images/rating-img-03.jpeg",
  },
  {
    id: 4,
    name: "Abdul Haseeb",
    designation: "Founder & CEO at Verior",
    image: "/images/rating-img-04.jpeg",
  },
];

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

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-[2rem] pt-[12rem] pb-[5rem] md:pt-[17rem] lg:pb-[8rem] xl:px-[0rem]">
      <div className="absolute bottom-0 left-0 z-[-1]">
        <img
          src={grid}
          alt="Background Image"
          className="size-full object-cover object-center"
        />
      </div>

      <div className="container">
        <div className="flex flex-col items-center gap-[8rem] xl:flex-row">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex w-full flex-col items-center text-center xl:w-[42%] xl:items-start xl:text-left"
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="ibm-font text-[3.5rem] leading-[4rem] font-medium tracking-[-1px] text-(--base-color-01) md:text-[7.2rem] md:leading-[8.28rem] md:tracking-[-3px] xl:max-w-[50rem]"
            >
              <span className="relative">
                Simplifying{" "}
                <div className="absolute top-[3rem] left-1/2 z-[-1] -translate-1/2 md:top-[5rem]">
                  <img
                    src={blueHighlight03}
                    alt="Image"
                    className="object-contain object-center"
                  />
                </div>
              </span>{" "}
              Your <TypewriterEffectSmooth words={words} />
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="mt-[2.4rem] text-[1.6rem] leading-[2.4rem] text-(--base-color-01) md:text-[2rem] md:leading-[3.6rem]"
            >
              Your tax journey made simple with netTax. Quick, reliable, and
              stress-free from start to finish.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="mt-[3.2rem] flex items-center gap-[2rem]"
            >
              <div className="flex flex-row items-center">
                <AnimatedTooltip items={people} />
              </div>

              <h4 className="max-w-[10rem] text-[1.4rem] leading-[1.8rem] font-normal text-(--base-color-01)">
                Trusted by 6,287 users
              </h4>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="mt-[3.2rem] flex flex-col items-center gap-[2rem] md:flex-row"
            >
              <Button className="w-full md:w-auto" asChild>
                <a href="/">
                  <span>Get Free Consultation</span>

                  <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                </a>
              </Button>

              <Button className="w-full md:w-auto" variant="dark" asChild>
                <a href="/">
                  <span>Become a Filer</span>

                  <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="order-[-1] xl:order-none xl:w-[51%]"
          >
            <div className="relative h-[26rem] min-w-[32rem] md:h-[49rem] md:min-w-[60rem]">
              <div className="absolute top-0 right-0 aspect-[.8/1] w-[53%] overflow-hidden rounded-[.8rem]">
                <img
                  src={heroImg01}
                  alt="Hero Bg"
                  className="size-full object-center"
                />
              </div>

              <div className="shadow-05 absolute bottom-[9.4rem] left-0 aspect-[1/1] w-[44%] rounded-[.8rem]">
                <img
                  src={heroImg02}
                  alt="Hero Bg"
                  className="object-contain object-center"
                />

                <div className="absolute bottom-[-2.6rem] left-[-2.6rem] aspect-[1/1] w-[11%]">
                  <img
                    src={rays}
                    alt="Rays"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="shadow-05 absolute right-[15.6rem] bottom-[-1.2rem] aspect-[3.5/1] w-[50%] rounded-[.8rem]">
                <img
                  src={heroImg03}
                  alt="Hero Bg"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
