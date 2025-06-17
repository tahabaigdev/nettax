import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this

interface Feature {
  label: string;
  icon: React.ElementType;
}

interface HeroSlide {
  heading: string;
  subtext: string;
  img: string;
}

interface TabSliderProps {
  features: Feature[];
  slides: HeroSlide[];
  autoPlayInterval?: number;
  primaryBtn?: {
    label: string;
    href: string;
  };
  secondaryBtn?: {
    label: string;
    href: string;
  };
}

const TabSlider: React.FC<TabSliderProps> = ({
  features,
  slides,
  autoPlayInterval = 5000,
  primaryBtn,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoPlayInterval);

    return () => resetTimeout();
  }, [selectedIndex, slides.length, autoPlayInterval]);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      {/* Tabs */}
      <div
        data-aos="fade-up"
        className="mb-[6rem] grid grid-cols-2 overflow-hidden rounded-[.96rem] bg-white lg:grid-cols-4"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = selectedIndex === index;

          return (
            <div
              key={feature.label}
              onClick={() => {
                if (selectedIndex !== index) setSelectedIndex(index);
              }}
              className={`flex cursor-pointer flex-col items-start justify-between transition-all duration-300 lg:items-center ${
                isActive ? "bg-[#f3f3f3]" : ""
              }`}
            >
              <div className="my-[2rem] flex w-full items-center gap-[1.6rem] px-[1rem] text-[1.2rem] leading-[1.4rem] font-medium text-[--base-color-01] md:px-[2rem] md:text-[1.4rem] md:leading-[1.728rem]">
                <Icon
                  className={`min-w-[2.4rem] ${
                    isActive
                      ? "text-[--primary-color]"
                      : "text-[--base-color-01]"
                  }`}
                />
                <span className="max-w-[17rem]">{feature.label}</span>
              </div>

              <div
                className={`h-[.24rem] w-full ${
                  isActive ? "bg-[#d8d8d8]" : "bg-transparent"
                }`}
              >
                {isActive && (
                  <motion.div
                    key={`progress-${selectedIndex}`}
                    className="h-full bg-[var(--primary-color)]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: autoPlayInterval / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`slide-content`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-[3.2rem] xl:flex-row"
        >
          {/* Text */}
          <div
            data-aos="fade-right"
            className="flex w-full max-w-[60rem] flex-col items-center justify-center text-center xl:max-w-[46.8rem] xl:items-start xl:text-left"
          >
            <div className="relative">
              <h3 className="ibm-font mb-[2.4rem] text-[3rem] leading-[4rem] font-medium tracking-[-2px] text-[--base-color-01] capitalize md:text-[5rem] md:leading-[6rem]">
                {slides[selectedIndex].heading}
              </h3>
            </div>

            <p className="mb-[2.4rem] text-[1.6rem] leading-[2.4rem] font-normal text-[--base-color-01] md:text-[2rem] md:leading-[2.8rem]">
              {slides[selectedIndex].subtext}
            </p>

            <div className="flex flex-col items-start gap-[1rem] md:flex-row md:items-center md:gap-[2rem]">
              {primaryBtn && (
                <Button asChild className="w-full min-w-max">
                  <a
                    href={primaryBtn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{primaryBtn.label}</span>
                    <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Image with Animation */}
          <div data-aos="fade-left" className="flex w-full justify-center">
            <div className="relative max-w-[60rem] overflow-hidden rounded-[1.6rem]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slides[selectedIndex].img}
                  src={slides[selectedIndex].img}
                  alt="Slide Image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="size-full object-center"
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabSlider;
