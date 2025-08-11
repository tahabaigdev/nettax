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
          title: "What is NTN?",
          content:
            "NTN (National Tax Number) is a unique identification number issued by the Federal Board of Revenue (FBR) to individuals and  businesses for taxation purposes in Pakistan. Think of it as a tax identity that allows a person or entity to interact legally with the tax system.",
        },
        {
          title: "Legal Requirement",
          content:
            "Under Section 181 of the Income Tax Ordinance, 2001, every person who earns taxable income or conducts taxable transactions must register with FBR and obtain an NTN.",
        },
        {
          title: "Who Needs It?",
          content: (
            <ul className="list-inside list-disc">
              {[
                "Salaried persons earning taxable income",
                "Freelancers and service providers",
                "Business owners (sole proprietors, partnerships, companies)",
                "Importers/exporters",
                "Professionals like doctors, lawyers, consultants",
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ),
        },
        {
          title: "How NETTAX Helps",
          content:
            "NETTAX streamlines the NTN registration process by collecting basic information (CNIC, address, source of income), preparing the application, and submitting it to FBR. We ensure proper documentation and help you access your IRIS portal, which is the official FBR platform for tax matters.",
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
          title: "What is Sales Tax?",
          content:
            "Sales tax is an indirect tax imposed on the sale and purchase of goods and certain services in Pakistan. The registered seller collects it from the buyer and deposits it with the FBR.",
        },
        {
          title: "Legal Framework",
          content:
            "Governed by the Sales Tax Act, 1990, businesses with a taxable turnover exceeding the threshold (e.g. Rs. 10 million) must register for sales tax",
        },
        {
          title: "Sales Tax Return",
          content: (
            <div>
              <p className="mb-[1rem]">
                A sales tax return is a monthly statement filed with FBR that
                reports:
              </p>

              <ul className="list-inside list-disc">
                {[
                  "Output tax (tax collected on sales)",
                  "Input tax (tax paid on purchases)",
                  "Net payable/refundable amount",
                ].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ),
        },
        {
          title: "How NETTAX Helps",
          content:
            "NETTAX handles complete sales tax registration with FBR, applies for STRN (Sales Tax Registration Number), and files accurate monthly returns. We maintain records, match purchases/sales, and ensure clients stay compliant and penalty-free.",
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
          title: "What is an NGO/NPO?",
          content:
            "An NGO (Non-Governmental Organization) or NPO (Non-Profit Organization) is formed for charitable, educational, religious, or public welfare purposes without the intention of earning profit.",
        },
        {
          title: "Legal Options for Registration",
          content: (
            <>
              <p className="mb-[1rem]">
                Depending on the structure and objective, NGOs can be registered
                under:
              </p>

              <ul className="list-inside list-disc">
                {[
                  "Societies Registration Act, 1860",
                  "Trust Act, 1882",
                  "Section 42 of the Companies Act, 2017 (SECP)",
                  "Voluntary Social Welfare Agencies (Registration and Control) Ordinance, 1961",
                ].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </>
          ),
        },
        {
          title:
            "Voluntary Social Welfare Agencies (Registration and Control) Ordinance, 1961",
          content: (
            <ul className="list-inside list-disc">
              {[
                "Establishes legal identity",
                "Enables opening of bank accounts",
                "Helps apply for tax exemptions under Section 2(36) and 100C of the Income Tax Ordinance",
                "Builds trust with donors and regulatory bodies",
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ),
        },
        {
          title: "How NETTAX Helps",
          content:
            "NETTAX provides end-to-end legal consultation for the appropriate registration route, prepares your constitution/MoA/Bylaws, and gets your organization registered with SECP or other relevant bodies. We also help you apply for tax exemption certificates and comply with FBR and SECP regulations.",
        },
      ],
      reverse: false,
    },
    {
      number: "04",
      ref: step4Ref,
      inView: inView4,
      hash: "income-tax",
      heading: "Income Tax Return Filing",
      points: [
        {
          title: "What is an Income Tax Return?",
          content:
            "An income tax return (ITR) is a statement of your total annual income, deductions, and taxes paid, filed with FBR under the Income Tax Ordinance, 2001.",
        },
        {
          title: "Who is Required to File?",
          content: (
            <ul className="list-inside list-disc">
              {[
                "Individuals earning taxable income (salary, business, rent, capital gains)",
                "Companies and AOPs",
                "Freelancers and professionals",
                "Non-residents with Pakistan-source income",
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ),
        },
        {
          title: "Why It’s Important",
          content: (
            <ul className="list-inside list-disc">
              {[
                "Avoid penalties and notices from FBR",
                "Get included in the Active Taxpayer List (ATL)",
                "Claim refunds or exemptions",
                "Show proof of income for bank loans, visas, or government contracts",
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ),
        },
        {
          title: " How NETTAX Helps",
          content:
            "We collect your income documents (salary slips, profit & loss accounts, bank statements), prepare your tax file, and submit it via IRIS. NETTAX also helps with tax planning, minimizing liabilities, and maintaining your FBR profile.",
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
          title: "Trademark Registration",
          content:
            "A trademark protects your brand name, logo, or slogan from unauthorized use. It’s registered under the Trade Marks Ordinance, 2001 through IPO Pakistan.",
        },
        {
          title: "Why It Matters",
          content: (
            <ul className="list-inside list-disc">
              {[
                "Secures your brand identity",
                "Grants exclusive usage rights",
                "Enhances business credibility and valuation",
                "Legal protection against counterfeit or infringement",
              ].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ),
        },
        {
          title: "Company Registration",
          content: (
            <>
              <p className="mb-[1rem]">
                Company registration under SECP legally creates a separate
                business entity. This includes:
              </p>

              <ul className="list-inside list-disc">
                {[
                  "Private Limited Company",
                  "Single Member Company (SMC)",
                  "Public Limited Company",
                ].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <p className="mt-[1rem]">
                Registration is governed by the Companies Act, 2017.
              </p>
            </>
          ),
        },
        {
          title: "How NETTAX Helps",
          content:
            "NETTAX assists you in name reservation, document drafting, digital signatures, SECP filings, and IPO applications. We also help you understand whether sole proprietorship or Pvt. Ltd. suits your business goals best.",
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
          title: "What is SECP Compliance?",
          content: (
            <>
              <p className="mb-[1rem]">
                Once registered, companies are legally required to comply with
                regulations set by the Securities and Exchange Commission of
                Pakistan (SECP). These include:
              </p>

              <ul className="list-inside list-disc">
                {[
                  "Annual returns",
                  "Appointment/resignation of directors",
                  "Changes in capital or structure",
                  "Resolutions and disclosures",
                ].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <p className="mb-[1rem]">
                Non-compliance can lead to penalties, suspension, or legal
                actions.
              </p>
            </>
          ),
        },
        {
          title: "Role of Legal Advisory",
          content: (
            <>
              <p className="mb-[1rem]">Legal advisory ensures businesses:</p>

              <ul className="list-inside list-disc">
                {[
                  "Understand corporate laws",
                  "Remain updated with amendments",
                  "Follow lawful procedures in growth and governance",
                  "Protect their directors and stakeholders from legal risks",
                ].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </>
          ),
        },
        {
          title: "How NETTAX Helps",
          content:
            "NETTAX offers dedicated legal support for SECP filings, compliance audits, legal notices, and structural updates. We maintain your legal record and help your company remain active, transparent, and risk-free.",
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
                        className="flex flex-col gap-[1rem] text-[1.6rem] leading-[2.56rem] font-normal tracking-[-0.16px] text-(--base-color-01)"
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
