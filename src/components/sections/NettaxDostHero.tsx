import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import ExpandedCard from "../ui/ExpandedCard";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const NettaxDostHero = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="relative overflow-hidden px-[2rem] pt-[12rem] pb-[5rem] md:pt-[17rem] lg:pb-[8rem] xl:px-[0rem]">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-[4rem] text-center lg:grid-cols-2 lg:text-left">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <h1 className="text-[4rem] leading-[5rem] font-semibold tracking-[-0.74px] md:text-[5rem] md:leading-[6rem]">
              Earn With Pakistan’s Trusted Tax Experts
            </h1>

            <p className="mt-[1rem] font-normal tracking-[0.18px] md:text-[1.8rem] md:leading-[2.52rem] lg:max-w-[50rem]">
              Join our growing network of resellers, help people file their
              income tax returns, and earn guaranteed commissions on every case.
            </p>

            <div className="mt-[3.2rem] flex flex-col items-center justify-center gap-[2rem] md:flex-row lg:justify-start">
              <Button className="w-full md:w-auto" asChild>
                <a href="https://wa.me/923192421501" target="_blank">
                  <span>Sign Up for Nettax Dost</span>

                  <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                </a>
              </Button>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <ExpandedCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NettaxDostHero;
