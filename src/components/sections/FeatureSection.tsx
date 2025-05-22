import { BookCheck, Scale } from "lucide-react";
import TabSlider from "../ui/TabSlider";
import { motion, type Variants } from "framer-motion";

const FeatureSection = () => {
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
      className="relative z-[1] bg-[#EEF8FF] px-[2rem] py-[5rem] lg:py-[7.2rem] xl:px-[0rem]"
    >
      <div className="absolute top-[1rem] left-[5rem] z-[-1] md:top-[30rem]">
        <BookCheck className="size-[4rem] rotate-45 stroke-[1.5px] text-(--primary-color)" />
      </div>

      <div className="absolute right-[5rem] bottom-[10rem] z-[-1]">
        <Scale className="size-[4rem] -rotate-12 stroke-[1.5px] text-(--primary-color)" />
      </div>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="container"
      >
        <TabSlider />
      </motion.div>
    </motion.section>
  );
};

export default FeatureSection;
