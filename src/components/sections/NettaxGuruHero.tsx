import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import ExpandedCard2 from "../ui/ExpandedCard2";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const NettaxGuruHero = () => {
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
              Learn, Master, and Get Certified
            </h1>

            <p className="mt-[1rem] font-normal tracking-[0.18px] md:text-[1.8rem] md:leading-[2.52rem] lg:max-w-[50rem]">
              Understand taxation deeply and earn official certification from
              Nettax Guru’s expert-led platform.
            </p>

            <div className="mt-[3.2rem] flex flex-col items-center justify-center gap-[2rem] md:flex-row lg:justify-start">
              <Button className="w-full md:w-auto" asChild>
                <a href="https://wa.me/923192421501" target="_blank">
                  <span>Get Free Consultation</span>

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
            <ExpandedCard2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NettaxGuruHero;
