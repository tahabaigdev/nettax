import { Check, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  individualBusinessPersonServices,
  nonProfitOrganizationServices,
  partnershipBusinessServices,
  salariedPersonServices,
  salesTaxServices,
  serviceList,
} from "@/constants";
import SectionTitle from "../ui/SectionTitle";
import rays03 from "/images/rays-03.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const PriceListSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]">
      <div className="container flex flex-col gap-[6rem]">
        <div data-aos="fade-up" className="grid grid-cols-1 gap-[2rem]">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="grid w-full grid-cols-1 gap-[4rem] rounded-[.8rem] border-[1px] border-[#E6E4DF] bg-[#FAF8F5] px-[2.4rem] py-[3.2rem] lg:grid-cols-3"
            >
              {/* Left Column */}
              <div className="flex flex-col gap-[2rem]">
                <div className="flex flex-col gap-[.5rem]">
                  <h4 className="text-[3.6rem] leading-[4.32rem]">
                    {service.title}
                  </h4>

                  <h5 className="text-[2.6rem] leading-[3.32rem] font-medium">
                    {service.price}{" "}
                    <span className="text-[1.6rem] leading-[2.4rem] font-normal">
                      {service.note}
                    </span>
                  </h5>
                </div>

                <div className="h-[1px] w-full bg-[#8b8b8b] opacity-30" />

                <div className="w-full">
                  <Button asChild>
                    <a href="https://wa.me/923192421501" target="_blank">
                      <span>Get Free Consultation</span>
                      <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Middle Column */}
              <div className="flex flex-col gap-[1.6rem]">
                <h5 className="text-[2.4rem] leading-[3.2rem] font-medium">
                  Requirements:
                </h5>
                <ul className="flex flex-col gap-[1rem]">
                  {service.requirements.map((item, idx) => (
                    <li
                      key={idx}
                      className="white flex items-center gap-[.8rem]"
                    >
                      <Check className="size-[1.6rem]" /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-[1.6rem]">
                <div className="flex flex-col gap-[.5rem]">
                  <h5 className="text-[2.4rem] leading-[3.2rem] font-medium">
                    Completion Time:
                  </h5>
                  <p>{service.duration}</p>
                </div>

                <div className="flex flex-col gap-[.5rem]">
                  <h5 className="text-[2.4rem] leading-[3.2rem] font-medium">
                    Notes*
                  </h5>
                  <p>{service.additionalNote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="flex flex-col gap-[6rem]">
          <div className="relative flex justify-center">
            <SectionTitle label="For Salaried Person" />

            <div className="absolute top-[-1rem] right-[4rem] w-[6%] md:top-[-2rem] md:right-[8rem] lg:right-[22rem] lg:w-[4%] xl:right-[31rem]">
              <img
                src={rays03}
                alt="Image"
                className="object-contain object-center"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[2.4rem] lg:grid-cols-2">
            {salariedPersonServices.map((service, idx) => (
              <div
                key={idx}
                className="flex w-full flex-col gap-[2.4rem] rounded-[.8rem] border-[1px] border-[#E6E4DF] bg-[#efeeea] px-[2.4rem] py-[3.2rem]"
              >
                <div className="flex flex-col gap-[.5rem]">
                  <h4 className="text-[3.6rem] leading-[4.32rem]">
                    {service.title}
                  </h4>
                  <h5 className="text-[2.6rem] leading-[3.32rem] font-medium">
                    {service.price}{" "}
                    <span className="text-[1.6rem] leading-[2.4rem] font-normal">
                      ({service.note})
                    </span>
                  </h5>
                </div>

                <div className="h-[1px] w-full bg-[#8b8b8b] opacity-30" />

                <div className="flex flex-col gap-[1rem]">
                  <h5 className="text-[2.4rem] leading-[3.2rem] font-medium">
                    Requirements
                  </h5>
                  <ul className="flex flex-col gap-[1rem]">
                    {service.requirements.map((req, reqIdx) => (
                      <li
                        key={reqIdx}
                        className="white flex items-center gap-[.8rem]"
                      >
                        <Check className="size-[1.6rem]" /> <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full">
                  <Button asChild>
                    <a href="https://wa.me/923192421501" target="_blank">
                      <span>Get Free Consultation</span>
                      <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col gap-[6rem]">
          <div className="relative flex justify-center text-center">
            <SectionTitle label="For Individual Business Person" />

            <div className="absolute top-[-2rem] right-[2rem] w-[6%] md:right-[4rem] lg:right-[16rem] lg:w-[4%] xl:right-[26rem]">
              <img
                src={rays03}
                alt="Image"
                className="object-contain object-center"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[2.4rem] lg:grid-cols-2">
            {individualBusinessPersonServices.map((service, idx) => (
              <div
                key={idx}
                className="flex w-full flex-col gap-[2.4rem] rounded-[.8rem] border-[1px] border-[#E6E4DF] bg-[#efeeea] px-[2.4rem] py-[3.2rem]"
              >
                <div className="flex flex-col gap-[.5rem]">
                  <h4 className="text-[3.6rem] leading-[4.32rem]">
                    {service.title}
                  </h4>
                  <h5 className="text-[2.6rem] leading-[3.32rem] font-medium">
                    {service.price}{" "}
                    <span className="text-[1.6rem] leading-[2.4rem] font-normal">
                      ({service.note})
                    </span>
                  </h5>
                </div>

                <div className="h-[1px] w-full bg-[#8b8b8b] opacity-30" />

                <div className="flex flex-col gap-[1rem]">
                  <h5 className="text-[2.4rem] leading-[3.2rem] font-medium">
                    Requirements
                  </h5>
                  <ul className="flex flex-col gap-[1rem]">
                    {service.requirements.map((req, reqIdx) => (
                      <li
                        key={reqIdx}
                        className="white flex items-center gap-[.8rem]"
                      >
                        <Check className="size-[1.6rem]" /> <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full">
                  <Button asChild>
                    <a href="https://wa.me/923192421501" target="_blank">
                      <span>Get Free Consultation</span>
                      <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col gap-[6rem]">
          <div className="relative flex justify-center">
            <SectionTitle label="Sales Tax" />

            <div className="absolute top-[-2rem] right-[11rem] w-[6%] md:right-[22rem] lg:right-[35rem] lg:w-[4%] xl:right-[43rem]">
              <img
                src={rays03}
                alt="Image"
                className="object-contain object-center"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[2.4rem] lg:grid-cols-2">
            {salesTaxServices.map((service, idx) => (
              <div
                key={idx}
                className="flex w-full flex-col gap-[2.4rem] rounded-[.8rem] border-[1px] border-[#E6E4DF] bg-[#efeeea] px-[2.4rem] py-[3.2rem]"
              >
                <div className="flex flex-col gap-[.5rem]">
                  <h4 className="text-[3.6rem] leading-[4.32rem]">
                    {service.title}
                  </h4>
                  <h5 className="text-[2.6rem] leading-[3.32rem] font-medium">
                    {service.price}{" "}
                    <span className="text-[1.6rem] leading-[2.4rem] font-normal">
                      {service.note}
                    </span>
                  </h5>
                </div>

                <div className="h-[1px] w-full bg-[#8b8b8b] opacity-30" />

                <div className="flex flex-col gap-[1rem]">
                  <h5 className="text-[2.4rem] leading-[3.2rem] font-medium">
                    Requirements
                  </h5>
                  <ul className="flex flex-col gap-[1rem]">
                    {service.requirements.map((req, reqIdx) => (
                      <li
                        key={reqIdx}
                        className="white flex items-center gap-[.8rem]"
                      >
                        <Check className="size-[1.6rem]" /> <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full">
                  <Button asChild>
                    <a href="https://wa.me/923192421501" target="_blank">
                      <span>Get Free Consultation</span>
                      <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col gap-[6rem]">
          <div className="relative flex justify-center">
            <SectionTitle label="For Partnership Business" />

            <div className="absolute top-[-2rem] right-[1rem] w-[6%] md:right-[2rem] lg:right-[14rem] lg:w-[4%] xl:right-[23rem]">
              <img
                src={rays03}
                alt="Image"
                className="object-contain object-center"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[2.4rem] lg:grid-cols-2">
            {partnershipBusinessServices.map((service, idx) => (
              <div
                key={idx}
                className="flex w-full flex-col gap-[2.4rem] rounded-[.8rem] border-[1px] border-[#E6E4DF] bg-[#efeeea] px-[2.4rem] py-[3.2rem]"
              >
                <div className="flex flex-col gap-[.5rem]">
                  <h4 className="text-[3.6rem] leading-[4.32rem]">
                    {service.title}
                  </h4>
                  <h5 className="text-[2.6rem] leading-[3.32rem] font-medium">
                    {service.price}{" "}
                    <span className="text-[1.6rem] leading-[2.4rem] font-normal">
                      ({service.note})
                    </span>
                  </h5>
                </div>

                <div className="h-[1px] w-full bg-[#8b8b8b] opacity-30" />

                <div className="flex flex-col gap-[1rem]">
                  <h5 className="text-[2.4rem] leading-[3.2rem] font-medium">
                    Requirements
                  </h5>
                  <ul className="flex flex-col gap-[1rem]">
                    {service.requirements.map((req, reqIdx) => (
                      <li
                        key={reqIdx}
                        className="white flex items-center gap-[.8rem]"
                      >
                        <Check className="size-[1.6rem]" /> <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full">
                  <Button asChild>
                    <a href="https://wa.me/923192421501" target="_blank">
                      <span>Get Free Consultation</span>
                      <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col gap-[6rem]">
          <div className="relative flex justify-center">
            <SectionTitle label="Non - Profit Organization" />

            <div className="absolute top-[-2rem] right-[1rem] w-[6%] md:right-[2rem] lg:right-[15rem] lg:w-[4%] xl:right-[25rem]">
              <img
                src={rays03}
                alt="Image"
                className="object-contain object-center"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[2.4rem] lg:grid-cols-2">
            {nonProfitOrganizationServices.map((service, idx) => (
              <div
                key={idx}
                className="flex w-full flex-col gap-[2.4rem] rounded-[.8rem] border-[1px] border-[#E6E4DF] bg-[#efeeea] px-[2.4rem] py-[3.2rem]"
              >
                <div className="flex flex-col gap-[.5rem]">
                  <h4 className="text-[3.6rem] leading-[4.32rem]">
                    {service.title}
                  </h4>
                  <h5 className="text-[2.6rem] leading-[3.32rem] font-medium">
                    {service.price}{" "}
                    <span className="text-[1.6rem] leading-[2.4rem] font-normal">
                      ({service.note})
                    </span>
                  </h5>
                </div>

                <div className="h-[1px] w-full bg-[#8b8b8b] opacity-30" />

                <div className="flex flex-col gap-[1rem]">
                  <h5 className="text-[2.4rem] leading-[3.2rem] font-medium">
                    Requirements
                  </h5>
                  <ul className="flex flex-col gap-[1rem]">
                    {service.requirements.map((req, reqIdx) => (
                      <li
                        key={reqIdx}
                        className="white flex items-center gap-[.8rem]"
                      >
                        <Check className="size-[1.6rem]" /> <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full">
                  <Button asChild>
                    <a href="https://wa.me/923192421501" target="_blank">
                      <span>Get Free Consultation</span>
                      <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceListSection;
