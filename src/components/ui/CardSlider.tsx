import {
  BanknoteArrowUp,
  Building,
  ClipboardX,
  CornerDownLeft,
  DiamondPercent,
  FilePenLine,
  FileStack,
  Handshake,
  ListTodo,
  MonitorCog,
  MonitorDown,
  MoveRight,
  Scale,
  ScrollText,
  Tag,
  Vote,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // or 'swiper/css/bundle' for modular CSS
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type
import { motion, type Variants } from "framer-motion";

const slideData = [
  {
    icon: FilePenLine,
    title: "NTN Registration",
    text: "NTN stands for National Tax Number, a unique identifier assigned by tax authorities to individuals and businesses for tax",
    link: "#",
    color: "#3A53A1",
  },
  {
    icon: ClipboardX,
    title: "Income Tax Return",
    text: "An income tax return is a formal document submitted to tax authorities detailing an individual or business's income, expenses,",
    link: "#",
    color: "#63A079",
  },
  {
    icon: Tag,
    title: "Sales Tax Return",
    text: "A sales tax return is a document filed by businesses to report the amount of sales tax collected from customers and remit it to ta",
    link: "#",
    color: "#9B81B0",
  },
  {
    icon: DiamondPercent,
    title: "Sales Tax Registration",
    text: "Sales tax registration is the process by which businesses register with tax authorities to collect and remit sales tax on",
    link: "#",
    color: "#719EB3",
  },
  {
    icon: MonitorDown,
    title: "Trademark Registration",
    text: "Trademark registration is the legal process of securing exclusive rights to a brand's name, logo, or slogan, protecting it from",
    link: "#",

    color: "#E68B30",
  },
  {
    icon: FileStack,
    title: "Company Registration in SECP",
    text: "Company registration with the Securities and Exchange Commission of Pakistan (SECP) involves formally establishing a",
    link: "#",
    color: "#8DB6B8",
  },
  {
    icon: BanknoteArrowUp,
    title: "DNFPB Registration",
    text: "Designated Non-Financial Businesses and Professions (DNFBPs) refer to sectors such as real estate, legal, and accounting",
    link: "#",
    color: "#289D72",
  },
  {
    icon: Building,
    title: "NGO / NPO Registration",
    text: "Non-Governmental Organization (NGO) or Non-Profit Organization (NPO) registration involves formally establishing an entity",
    link: "#",
    color: "#3A53A1",
  },
  {
    icon: Handshake,
    title: "Partnership deed Registration",
    text: "Partnership deed registration formalizes the agreement between partners outlining the terms of their business",
    link: "#",
    color: "#63A079",
  },
  {
    icon: CornerDownLeft,
    title: "Sindh Service Tax Return and Registration",
    text: "Sindh Service Tax registration is the process through which service providers in Sindh register to collect and remit service tax as",
    link: "#",
    color: "#9B81B0",
  },
  {
    icon: ListTodo,
    title: "SECP Compliance (All kinds of forms)",
    text: "SECP compliance involves adhering to the regulatory requirements set by the Securities and Exchange Commission of",
    link: "#",
    color: "#719EB3",
  },
  {
    icon: ScrollText,
    title: "Income Tax / Sales Tax cases (Appeals & notice Proceedings)",
    text: "Income tax and sales tax cases involve disputes between taxpayers and tax authorities, often arising from assessments,",
    link: "#",
    color: "#E68B30",
  },
  {
    icon: Scale,
    title: "Legal Advisory in Tax Matters",
    text: "Legal advisory in tax matters involves providing expert guidance on compliance with tax laws, structuring transactions, and",
    link: "#",
    color: "#8DB6B8",
  },
  {
    icon: MonitorCog,
    title: "PSEB Registration",
    text: "PSEB Registration empowers IT businesses with official recognition, access to incentives, and opportunities to grow globally.",
    link: "#",
    color: "#289D72",
  },
  {
    icon: Vote,
    title: "PSW Registration",
    text: "PSEB Registration empowers IT businesses with official recognition, access to incentives, and opportunities",
    link: "#",
    color: "#E68B30",
  },
];

type CardSliderProps = {
  swiperRef: React.MutableRefObject<SwiperType | null>;
  onSlideChange: () => void;
};

const CardSlider = ({ swiperRef, onSlideChange }: CardSliderProps) => {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
    >
      <Swiper
        modules={[Navigation]}
        navigation={false}
        slidesPerView={3}
        spaceBetween={32}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          onSlideChange(); // Call initially
        }}
        onSlideChange={onSlideChange}
        className="mySwiper launch-slider"
      >
        {slideData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <motion.a
              variants={fadeUp}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
              key={idx}
              href={item.link}
              className="group relative z-[1] grid h-full overflow-hidden rounded-[2.4rem] border border-[var(--primary-color)] px-[4rem] py-[3.2rem]"
            >
              <div className="relative">
                <div className="mb-[1rem]">
                  <item.icon className="size-[3rem] stroke-[1.5px] text-(--base-color-01) transition-all duration-200 group-hover:text-white" />
                </div>
              </div>

              <div className="mb-[8.8rem]">
                <h4 className="ibm-font text-[2rem] leading-[3rem] font-semibold text-(--base-color-01) transition-all duration-200 group-hover:text-white">
                  {item.title}
                </h4>
                <p className="mt-[1rem] line-clamp-2 text-[1.6rem] leading-[2.2rem] font-normal text-(--base-color-01) transition-all duration-200 group-hover:text-white">
                  {item.text}
                </p>
              </div>

              <div className="flex justify-end gap-[.8rem] text-[1.8rem] leading-[2.88rem] font-normal text-(--base-color-01) transition-all duration-200 group-hover:text-white">
                <span>Learn More</span>
                <MoveRight className="relative top-[3px] size-[2.4rem] stroke-1" />
              </div>

              <div
                style={{
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                className="absolute bottom-[-1rem] left-[-1rem] z-[-1] size-[15rem] rotate-[0deg] group-hover:bottom-[-26rem] group-hover:left-[-30rem] group-hover:size-[190rem] group-hover:rotate-[40deg]"
              >
                {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill={item.color}
                    d="M67,-37.6C81.2,-13.9,83.5,17.8,70.4,40.3C57.2,62.9,28.6,76.2,0.3,76C-27.9,75.8,-55.8,62,-69.2,39.4C-82.6,16.8,-81.4,-14.8,-67.5,-38.3C-53.5,-61.9,-26.8,-77.4,-0.2,-77.2C26.3,-77.1,52.7,-61.3,67,-37.6Z"
                    transform="translate(100 100)"
                  />
                </svg> */}

                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 46 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_87_2)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M39.32 9.39998V40.73H29.7L18.13 25.46L15.08 21.38V40.73H5.21001V9.39998H0.0400085V46.69H45.64V9.39998H39.32ZM28.73 18.67V23.79L17.83 9.39998L15.49 6.3H0V-1.52588e-05H45.6V6.28999H28.73V18.66V18.67Z"
                      fill={item.color}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_87_2">
                      <rect width="46" height="47" fill={item.color} />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </motion.a>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default CardSlider;
