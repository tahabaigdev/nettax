import clsx from "clsx";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { forwardRef, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const ProcessTimeline = forwardRef<HTMLDivElement>((_, ref) => {
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
        <motion.div
          ref={step1Ref}
          className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
        >
          <div className="flex justify-center">
            <div
              className={clsx(
                "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                {
                  "border-[transparent] bg-(--primary-color) text-white":
                    inView1,
                  "border-[#e4e2e9] bg-white text-[#6F6C75]": !inView1,
                },
              )}
            >
              01
            </div>
          </div>

          <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
            <div className="hidden lg:block"> </div>

            <div
              data-aos="fade-left"
              className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]"
            >
              <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                <div className="grid gap-[2rem] md:gap-[4rem]">
                  <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                    Trustworthy Financial Experts.
                  </h3>

                  <hr className="w-full border-1 border-[#e4e2e9]" />
                </div>

                <ul className="grid gap-[2.4rem]">
                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Expertise and Experience:
                    </strong>{" "}
                    With extensive experience and expertise, our financial
                    experts deliver precise, compliant tax solutions tailored to
                    meet diverse client needs.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Personalized Approach:
                    </strong>{" "}
                    Our experts offer tailored tax solutions with a focus on
                    personalized service and compliance.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-[var(--base-color-01)]">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Comprehensive Services:
                    </strong>{" "}
                    We offer a complete suite of tax services tailored to ensure
                    compliance and meet the distinct needs of every client.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={step2Ref}
          className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
        >
          <div className="flex justify-center">
            <div
              className={clsx(
                "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                {
                  "border-[transparent] bg-(--primary-color) text-white":
                    inView2,
                  "border-[#e4e2e9] bg-white text-[#6F6C75]": !inView2,
                },
              )}
            >
              02
            </div>
          </div>

          <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
            <div
              data-aos="fade-right"
              className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]"
            >
              <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                <div className="grid gap-[2rem] md:gap-[4rem]">
                  <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                    Tailored solutions to simplify complex tax needs.
                  </h3>

                  <hr className="w-full border-1 border-[#e4e2e9]" />
                </div>

                <ul className="grid gap-[2.4rem]">
                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Personalized Consultation:
                    </strong>{" "}
                    Understand your unique financial situation and business
                    structure to tailor effective strategies.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Compliance Assurance:
                    </strong>{" "}
                    Ensure all filings, documentation, and tax strategies meet
                    the latest regulatory standards.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-[var(--base-color-01)]">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Optimized Planning:
                    </strong>{" "}
                    Identify opportunities for deductions and credits while
                    minimizing risk and maximizing returns.
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block"> </div>
          </div>
        </motion.div>

        <motion.div
          ref={step3Ref}
          className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
        >
          <div className="flex justify-center">
            <div
              className={clsx(
                "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                {
                  "border-[transparent] bg-(--primary-color) text-white":
                    inView3,
                  "border-[#e4e2e9] bg-white text-[#6F6C75]": !inView3,
                },
              )}
            >
              03
            </div>
          </div>

          <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
            <div className="hidden lg:block"> </div>

            <div
              data-aos="fade-left"
              className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]"
            >
              <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                <div className="grid gap-[2rem] md:gap-[4rem]">
                  <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                    Comprehensive tax services for clarity and confidence.
                  </h3>

                  <hr className="w-full border-1 border-[#e4e2e9]" />
                </div>

                <ul className="grid gap-[2.4rem]">
                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Full-Service Coverage:
                    </strong>{" "}
                    From corporate to personal taxes, our offerings span all
                    major areas to support your complete financial picture.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Client-Centric Approach:
                    </strong>{" "}
                    We tailor each engagement to match your specific goals,
                    industry, and financial priorities.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-[var(--base-color-01)]">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Regulatory Expertise:
                    </strong>{" "}
                    Stay ahead of local and international tax laws with
                    proactive guidance and compliance-focused strategies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={step4Ref}
          className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
        >
          <div className="flex justify-center">
            <div
              className={clsx(
                "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                {
                  "border-[transparent] bg-(--primary-color) text-white":
                    inView4,
                  "border-[#e4e2e9] bg-white text-[#6F6C75]": !inView4,
                },
              )}
            >
              04
            </div>
          </div>

          <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
            <div
              data-aos="fade-right"
              className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]"
            >
              <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                <div className="grid gap-[2rem] md:gap-[4rem]">
                  <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                    Clear, objective guidance you can trust in tax services.
                  </h3>

                  <hr className="w-full border-1 border-[#e4e2e9]" />
                </div>

                <ul className="grid gap-[2.4rem]">
                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Unbiased Recommendations:
                    </strong>{" "}
                    Every solution is designed with your best interests in
                    mind—free from conflict, pressure, or upselling.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Transparent Communication:
                    </strong>{" "}
                    We break down complex tax matters into clear, understandable
                    language so you can make informed decisions.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-[var(--base-color-01)]">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Ethical Standards:
                    </strong>{" "}
                    Our approach is rooted in integrity, professionalism, and
                    strict adherence to industry codes and legal frameworks.
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block"> </div>
          </div>
        </motion.div>

        <motion.div
          ref={step5Ref}
          className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
        >
          <div className="flex justify-center">
            <div
              className={clsx(
                "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                {
                  "border-[transparent] bg-(--primary-color) text-white":
                    inView5,
                  "border-[#e4e2e9] bg-white text-[#6F6C75]": !inView5,
                },
              )}
            >
              05
            </div>
          </div>

          <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
            <div className="hidden lg:block"> </div>

            <div
              data-aos="fade-left"
              className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]"
            >
              <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                <div className="grid gap-[2rem] md:gap-[4rem]">
                  <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                    Solutions built around your unique goals.
                  </h3>

                  <hr className="w-full border-1 border-[#e4e2e9]" />
                </div>

                <ul className="grid gap-[2.4rem]">
                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Needs-Driven Strategy:
                    </strong>{" "}
                    We begin by understanding your financial objectives,
                    business model, and long-term vision.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Tailored Tax Planning:
                    </strong>{" "}
                    Every recommendation is personalized to align with your
                    industry, risk tolerance, and growth ambitions.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-[var(--base-color-01)]">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Ongoing Support:
                    </strong>{" "}
                    We build lasting relationships by adapting solutions as your
                    needs evolve over time.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={step6Ref}
          className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
        >
          <div className="flex justify-center">
            <div
              className={clsx(
                "flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] transition-all duration-300",
                {
                  "border-[transparent] bg-(--primary-color) text-white":
                    inView6,
                  "border-[#e4e2e9] bg-white text-[#6F6C75]": !inView6,
                },
              )}
            >
              06
            </div>
          </div>

          <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
            <div
              data-aos="fade-right"
              className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]"
            >
              <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                <div className="grid gap-[2rem] md:gap-[4rem]">
                  <h3 className="text-[2rem] leading-[2.4rem] font-medium text-(--base-color-01) md:text-[2.4rem] md:leading-[2.88rem]">
                    Acting in your best interest, always.
                  </h3>

                  <hr className="w-full border-1 border-[#e4e2e9]" />
                </div>

                <ul className="grid gap-[2.4rem]">
                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Fiduciary Commitment:
                    </strong>{" "}
                    We prioritize your financial well-being above all, ensuring
                    every recommendation aligns with your best interest.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Integrity-Driven Decisions:
                    </strong>{" "}
                    Our team upholds the highest ethical standards, delivering
                    advice you can trust.
                  </li>

                  <li className="text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-[var(--base-color-01)]">
                    <strong className="leading-[2.16rem] font-medium text-black md:text-[1.8rem]">
                      Diligent Oversight:
                    </strong>{" "}
                    Every tax strategy is carefully reviewed and executed with
                    precision to protect your assets and reputation.
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block"> </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

ProcessTimeline.displayName = "ProcessTimeline";

export default ProcessTimeline;
