import { CalendarClock, PhoneOutgoing } from "lucide-react";
import ContactForm from "../ui/ContactForm";
import { motion, type Variants } from "framer-motion";
import bgNoise from "/images/bg-noise.avif";
import logoIcon from "/images/logo-icon.svg";

const ContactSection = () => {
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
      viewport={{ once: true, amount: 0 }}
      className="relative overflow-hidden px-[2rem] py-[5rem] lg:py-[7rem] xl:px-[0rem]"
    >
      <div className="absolute top-[.5rem] right-[2rem] lg:top-[2rem] xl:top-[20rem] xl:right-[5rem]">
        <CalendarClock className="size-[4rem] -rotate-45 stroke-[1.5px] text-(--primary-color)" />
      </div>

      <div className="absolute bottom-[1rem] left-[5rem] lg:bottom-[10rem]">
        <PhoneOutgoing className="size-[2rem] text-(--primary-color) lg:size-[4rem]" />
      </div>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="container"
      >
        <div className="relative z-[1] grid grid-cols-1 items-end gap-[4rem] overflow-hidden rounded-[2.4rem] bg-(--secondary-color) px-[1rem] pt-[3rem] md:px-[4.8rem] lg:grid-cols-2">
          <div className="absolute inset-0 z-[-1] opacity-40">
            <img
              src={bgNoise}
              alt="Background Noise"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute top-[0rem] right-[0rem] z-[-1] size-[50rem] opacity-20">
            <img
              src={logoIcon}
              alt="Image"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute top-[-50rem] right-[-50rem] z-[-1] aspect-[2.5/1] w-[125rem] rounded-[100%] bg-[#5868fb] blur-[17.2rem]"></div>

          <div>
            <ContactForm />
          </div>

          <div className="order-[-1] flex flex-col gap-[2.4rem] pb-[3rem] lg:order-none">
            <h3 className="text-[3rem] leading-[3.5rem] font-medium tracking-[-2px] text-white md:text-[3.6rem] md:leading-[4.33rem]">
              We&apos;re Here to Help
            </h3>

            <p className="max-w-[50rem] text-[1.6rem] leading-[2.4rem] text-[#B3B3B3] md:text-[2rem]">
              Legal matters can feel overwhelming, but you&apos;re not alone.
              Contact us today for trusted, personalized support.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
