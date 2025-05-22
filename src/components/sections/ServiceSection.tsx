"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type
import CardSlider from "../ui/CardSlider";
import { motion, type Variants } from "framer-motion";
import mark01 from "/images/mark-01.svg";
import rays03 from "/images/rays-03.svg";
import highlighter from "/images/highlighter.svg";

const ServiceSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperUpdate = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  // Animation Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // adjust time between each element
      },
    },
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      className="relative z-[1] overflow-hidden bg-[#EEF8FF] px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]"
    >
      <div className="absolute bottom-[2rem] left-[70rem] aspect-[1.1/1] w-[3%]">
        <img
          src={mark01}
          alt="Image"
          className="object-contain object-center"
        />
      </div>

      <div className="container">
        <div className="flex flex-col gap-[4rem]">
          <div className="grid grid-cols-1 items-center gap-[4.8rem] lg:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="relative"
            >
              <div className="absolute top-[-2rem] right-[1rem] w-[7%] md:right-[13rem] lg:top-[-3rem] lg:right-[0rem]">
                <img
                  src={rays03}
                  alt="Image"
                  className="object-contain object-center"
                />
              </div>

              <div className="absolute top-[-2rem] left-[2rem] z-[-1] w-[25%] rotate-12">
                <img
                  src={highlighter}
                  alt="Image"
                  className="object-contain object-center"
                />
              </div>

              <h3 className="ibm-font text-[3rem] leading-[4rem] font-medium tracking-[-2px] text-(--base-color-01) md:max-w-[60rem] md:text-[4.5rem] md:leading-[6rem]">
                Strategic Legal Solutions for Individuals and Businesses
              </h3>
            </motion.div>

            <motion.div
              variants={fadeRight}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              className="flex flex-col gap-[1.6rem]"
            >
              <span className="text-[1.4rem] leading-[2.4rem] text-(--base-color-01) md:text-[2rem] md:leading-[2.8rem]">
                We help you navigate legal matters with confidence and focus.
                Our approach is straightforward, informed, and built on a clear
                understanding of the law and your goals.
              </span>

              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="flex gap-[.8rem] text-[1.6rem] leading-[2.88rem] font-medium text-(--base-color-01) md:text-[1.8rem]"
                >
                  <span>View all services</span>
                  <MoveRight className="relative top-[3px] size-[2.4rem] stroke-1" />
                </a>

                <div className="flex items-center gap-[1.2rem]">
                  <button
                    disabled={isBeginning}
                    onClick={() => {
                      swiperRef.current?.slidePrev();
                      handleSwiperUpdate();
                    }}
                    className={`group inline-flex size-[3.6rem] items-center justify-center rounded-full transition-all duration-200 ${
                      isBeginning
                        ? "cursor-not-allowed bg-gray-200"
                        : "cursor-pointer bg-[#E7EDF6] hover:bg-[#f4f8ff]"
                    }`}
                  >
                    <ArrowLeft
                      className={`size-[2rem] transition-all duration-200 ${
                        isBeginning
                          ? "text-gray-400"
                          : "text-[var(--base-color-01)] group-hover:text-(--primary-color)"
                      }`}
                    />
                  </button>

                  <button
                    disabled={isEnd}
                    onClick={() => {
                      swiperRef.current?.slideNext();
                      handleSwiperUpdate();
                    }}
                    className={`group inline-flex size-[3.6rem] items-center justify-center rounded-full transition-all duration-200 ${
                      isEnd
                        ? "cursor-not-allowed bg-gray-200"
                        : "cursor-pointer bg-[#E7EDF6] hover:bg-[#f4f8ff]"
                    }`}
                  >
                    <ArrowRight
                      className={`size-[2rem] transition-all duration-200 ${
                        isEnd
                          ? "text-gray-400"
                          : "text-[var(--base-color-01)] group-hover:text-[var(--primary-color)]"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <CardSlider
              swiperRef={swiperRef}
              onSlideChange={handleSwiperUpdate}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceSection;
