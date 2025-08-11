import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this

export type AccordionItemType = {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
};

type AccordionSliderProps = {
  items: AccordionItemType[];
  imageMap: Record<string, React.ReactNode>;
  autoRotateInterval?: number;
};

const AccordionSlider: React.FC<AccordionSliderProps> = ({
  items,
  imageMap,
  autoRotateInterval = 10000,
}) => {
  const [activeItem, setActiveItem] = useState(items[0]?.id || "");

  const handleChange = (value: string) => {
    setActiveItem(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = items.findIndex((i) => i.id === activeItem);
      const nextIndex = (currentIndex + 1) % items.length;
      setActiveItem(items[nextIndex].id);
    }, autoRotateInterval);

    return () => clearTimeout(timer);
  }, [activeItem, items, autoRotateInterval]);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="flex flex-col items-center justify-between gap-[3.2rem] xl:flex-row xl:items-start">
      <div data-aos="fade-right" className="w-full xl:max-w-[45%]">
        <Accordion
          type="single"
          className="w-full"
          value={activeItem}
          onValueChange={handleChange}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="relative border-none py-[2.4rem] data-[state=open]:pb-[1.2rem]"
              >
                <AccordionTrigger className="ibm-font group flex items-center justify-start gap-[1.2rem] text-[2rem] leading-[2.8rem] font-semibold text-(--base-color-01) !no-underline data-[state=open]:text-(--heading-color-01) md:data-[state=open]:text-[2.8rem]">
                  <Icon className="size-[3.2rem] !rotate-none stroke-[0.5px] text-(--primary-color) transition-all duration-300 group-data-[state=open]:size-[4rem] group-data-[state=open]:fill-(--primary-color) group-data-[state=open]:text-white" />
                  <span>{item.title}</span>
                </AccordionTrigger>

                <AccordionContent className="px-[.4rem] py-[1.2rem]">
                  <p className="text-[1.6rem] leading-[2.56rem] font-normal text-(--base-color-01)">
                    {item.desc}
                  </p>
                </AccordionContent>

                {activeItem === item.id && (
                  <div className="absolute bottom-0 left-0 h-[3px] w-full overflow-hidden bg-[#D4E0ED]">
                    <motion.div
                      key={item.id}
                      className="h-full bg-(--primary-color)"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: autoRotateInterval / 1000,
                        ease: "linear",
                      }}
                    />
                  </div>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      <div
        data-aos="fade-left"
        className="-order-1 flex h-[35rem] w-full items-start justify-center md:h-[55rem] md:max-w-[80%] lg:h-[45.7rem] lg:max-w-[50%] xl:order-none xl:max-w-[38%]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            className="relative size-full overflow-hidden rounded-[2.4rem]"
          >
            {imageMap[activeItem]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AccordionSlider;
