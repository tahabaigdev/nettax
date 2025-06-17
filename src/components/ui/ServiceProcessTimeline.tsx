import clsx from "clsx";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { forwardRef, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const ServiceProcessTimeline = forwardRef<HTMLDivElement>((_, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>, // cast needed for Framer Motion
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["-10%", "120%"]);

  // Individual refs for each step
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);
  const step5Ref = useRef<HTMLDivElement>(null);
  const step6Ref = useRef<HTMLDivElement>(null);

  const inView1 = useInView(step1Ref, {
    amount: 0.5,
  });
  const inView2 = useInView(step2Ref, {
    amount: 0.5,
  });
  const inView3 = useInView(step3Ref, {
    amount: 0.5,
  });
  const inView4 = useInView(step4Ref, {
    amount: 0.5,
  });
  const inView5 = useInView(step5Ref, {
    amount: 0.5,
  });
  const inView6 = useInView(step6Ref, {
    amount: 0.5,
  });

  const stepsData = [
    {
      number: "01",
      ref: step1Ref,
      inView: inView1,
      hash: "ntn-registration",
      heading: "NTN Registration",
      points: [
        {
          title: "",
          content: "Personal & Business NTN Registration",
        },
        {
          title: "",
          content: "Guidance on Required Documents",
        },
        {
          title: "",
          content: "FBR Profile Creation & Verification",
        },
      ],
      reverse: false,
    },
    {
      number: "02",
      ref: step2Ref,
      inView: inView2,
      hash: "sales-tax",
      heading: "Sales Tax Return & Registration",
      points: [
        {
          title: "",
          content: "Sales Tax Registration with FBR",
        },
        {
          title: "",
          content: "Monthly Return Filing",
        },
        {
          title: "",
          content: "Record Maintenance & Audit Support",
        },
      ],
      reverse: true,
    },
    {
      number: "03",
      ref: step3Ref,
      inView: inView3,
      hash: "ngo-npo",
      heading: "NGO/NPO Registration",
      points: [
        {
          title: "",
          content: "Trust, Society, or Section 42 Company Registration",
        },
        {
          title: "",
          content: "Documentation & Legal Structure Advice",
        },
        {
          title: "",
          content: "Tax Exemption Certificate Assistance",
        },
      ],
      reverse: false,
    },
    {
      number: "04",
      ref: step4Ref,
      inView: inView4,
      hash: "income-tax",
      heading: "Income Tax Return",
      points: [
        {
          title: "",
          content: "Individual, Business, and Corporate Returns",
        },
        {
          title: "",
          content: "Tax Planning & Consultation",
        },
        {
          title: "",
          content: "Wealth Statements & FBR Profile Updates",
        },
      ],
      reverse: true,
    },
    {
      number: "05",
      ref: step5Ref,
      inView: inView5,
      hash: "trademark-company",
      heading: "Trademark & Company Registration",
      points: [
        {
          title: "",
          content: "Trademark Search & Registration",
        },
        {
          title: "",
          content: "Private Limited & Sole Proprietor Company Registration",
        },
        {
          title: "",
          content: "SECP Filing & Documentation",
        },
      ],
      reverse: false,
    },
    {
      number: "06",
      ref: step6Ref,
      inView: inView6,
      hash: "legal-advisory",
      heading: "Legal Advisory & SECP Compliance",
      points: [
        {
          title: "",
          content: "Company Law Advisory",
        },
        {
          title: "",
          content: "Annual Filing & Compliance with SECP",
        },
        {
          title: "",
          content: "Corporate Governance & Regulatory Updates",
        },
      ],
      reverse: true,
    },
  ];

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="relative z-[1]">
      <div className="process-line absolute top-0 left-[1.6rem] z-[-1] h-[100%] w-[.8rem] overflow-hidden rounded-[2.8rem] border-[1px] border-[#e4e2e9] bg-white lg:left-[50%] lg:translate-x-[-50%]">
        <motion.div
          className="w-[100%] rounded-[2.8rem] bg-(--primary-color)"
          style={{ height }}
        ></motion.div>
      </div>

      <div ref={ref} className="grid gap-[2.4rem] lg:block">
        {stepsData.map((step, idx) => (
          <motion.div
            key={idx}
            ref={step.ref}
            className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
          >
            <div className="flex justify-center">
              <div
                className={clsx(
                  "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                  {
                    "border-[transparent] bg-(--primary-color) text-white":
                      step.inView,
                    "border-[#e4e2e9] bg-white text-[#6F6C75]": !step.inView,
                  },
                )}
              >
                {step.number}
              </div>
            </div>

            <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
              {step.reverse && <div className="hidden lg:block" />}

              <motion.div
                data-aos="fade-up"
                id={step.hash}
                transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
                className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]"
              >
                <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                  <div className="grid gap-[2rem] md:gap-[4rem]">
                    <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                      {step.heading}
                    </h3>
                    <hr className="w-full border-1 border-[#e4e2e9]" />
                  </div>

                  <ul className="grid gap-[2.4rem]">
                    {step.points.map((point, pointIdx) => (
                      <li
                        key={pointIdx}
                        className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)"
                      >
                        <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                          {point.title}
                        </strong>{" "}
                        {point.content}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {!step.reverse && <div className="hidden lg:block" />}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

ServiceProcessTimeline.displayName = "ServiceProcessTimeline";

export default ServiceProcessTimeline;
