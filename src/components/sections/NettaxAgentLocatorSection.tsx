import { motion, type Variants } from "framer-motion";
import rays03 from "/images/rays-03.svg";
import circle from "/images/circle.svg";
import SectionDescription from "../ui/SectionDescription";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import FlipCard from "../ui/FlipCard";

const teamMembers = [
  {
    id: 1,
    image: "/images/agent-img-01.jpg",
    name: "Ayesha Khan",
    location: "Karachi, Sindh",
    contact: "+92 300 1234567",
    services: "Individual tax filing, NTN registration, and tax refunds",
  },
  {
    id: 2,
    image: "/images/agent-img-02.jpg",
    name: "Muhammad Ali",
    location: "Lahore, Punjab",
    contact: "+92 321 7654321",
    services: "Business tax returns, GST registration, and compliance support",
  },
  {
    id: 3,
    image: "/images/agent-img-03.jpg",
    name: "Sana Javed",
    location: "Islamabad Capital Territory",
    contact: "+92 333 1122334",
    services: "Freelancer tax filing, FBR portal setup, and documentation",
  },
  {
    id: 4,
    image: "/images/agent-img-04.jpg",
    name: "Usman Raza",
    location: "Faisalabad, Punjab",
    contact: "+92 345 5566778",
    services:
      "Tax consultancy for traders, FBR e-filing, and withholding tax services",
  },
  {
    id: 5,
    image: "/images/agent-img-05.jpg",
    name: "Fatima Noor",
    location: "Peshawar, Khyber Pakhtunkhwa",
    contact: "+92 302 9988776",
    services: "Salary tax filing, annual declarations, and refund assistance",
  },
  {
    id: 6,
    image: "/images/agent-img-06.jpg",
    name: "Bilal Ahmed",
    location: "Quetta, Balochistan",
    contact: "+92 344 6677889",
    services: "Business NTN, partnership registration, and e-filing compliance",
  },
];

const NettaxAgentLocatorSection = () => {
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
    <section className="relative overflow-x-hidden px-[2rem] py-[6rem] lg:py-[9.6rem] xl:px-[0rem]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="container flex flex-col gap-[6.4rem]"
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

            <div className="absolute bottom-[0rem] left-[6rem] z-[-1] w-[25%] md:bottom-[-1rem] md:left-[23rem] md:w-[20%]">
              <img
                src={circle}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <div className="max-w-[30rem] md:max-w-[70rem]">
              <SectionTitle label="Find a Verified Nettax Agent Near You Easily" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          >
            <SectionDescription label="Locate trusted tax agents across Pakistan to assist with filing, compliance, and personalized support." />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
          >
            <Button asChild>
              <a href="https://wa.me/923192421501" target="_blank">
                <span>Get Free Consultation</span>

                <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
              </a>
            </Button>
          </motion.div>
        </div>

        <div>
          <Swiper
            className="team-slider"
            modules={[Autoplay]} // 👈 Add Autoplay
            spaceBetween={10}
            autoplay={{
              delay: 3000, // Time between slides (in ms)
              disableOnInteraction: false, // Keeps autoplay running even after user interaction
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {teamMembers.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-[50rem]">
                  <FlipCard
                    front={
                      <div className="flex size-full flex-col items-center justify-center overflow-hidden rounded-[2rem] shadow-lg">
                        <img
                          src={item.image}
                          alt="Image"
                          className="size-full object-cover object-top"
                        />
                      </div>
                    }
                    back={
                      <div className="flex size-full flex-col items-center justify-center rounded-[2rem] bg-[#EEF8FF] shadow-lg">
                        <ul className="flex flex-col gap-[1rem] p-[2rem] text-[1.8rem] leading-[2.6rem]">
                          <li>
                            <strong>Name:</strong> {item.name}
                          </li>

                          <li>
                            <strong>Location:</strong> {item.location}
                          </li>

                          <li>
                            <strong>Contact:</strong> {item.contact}
                          </li>

                          <li>
                            <strong>Services:</strong> {item.services}
                          </li>
                        </ul>
                      </div>
                    }
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default NettaxAgentLocatorSection;
