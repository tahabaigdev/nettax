import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import bgNoise from "/images/bg-noise.avif";
import logoIcon from "/images/logo-icon.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const StartEarningSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section
      id="start-earning"
      className="relative overflow-x-hidden px-[2rem] py-[6rem] lg:py-[9.6rem] xl:px-[0rem]"
    >
      <div className="container">
        <div className="relative z-[1] overflow-hidden rounded-[2.4rem] bg-(--secondary-color) p-12 text-white md:pl-[9rem]">
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

          <h2
            data-aos="fade-up"
            className="text-[3rem] leading-[4rem] font-bold md:text-[4rem]"
          >
            Start Earning Today
          </h2>

          <p data-aos="fade-up" className="my-8 opacity-90">
            Become a nettax Dost now and unlock unlimited earning potential.
          </p>

          <ul data-aos="fade-up">
            <li>✔ No investment. No technical skills needed.</li>
            <li>✔ Only dedication and the will to earn.</li>
            <li>
              ✔ PKR 500 to PKR 3,000 per case depending on the service type and
              volume.
            </li>
            <li>
              ✔ The more clients you bring in —the higher your monthly income
              potential.
            </li>
          </ul>

          <div className="mt-[3.2rem] flex flex-col items-center justify-start gap-[2rem] md:flex-row">
            <Button className="w-full md:w-auto" asChild>
              <a href="" target="_blank">
                <span>Join Now</span>

                <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartEarningSection;
