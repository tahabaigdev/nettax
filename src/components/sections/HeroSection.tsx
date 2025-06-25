import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import grid from "/images/grid.avif";
import heroImg01 from "/images/hero-img-01.avif";
import heroImg02 from "/images/hero-img-02.png";
import heroImg03 from "/images/hero-img-03.png";
import blueHighlight03 from "/images/blue-highlight-01.svg";
import rays from "/images/rays.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const words = [
  {
    text: "Tax",
  },
  {
    text: "Journey",
  },
];

const people = [
  {
    id: 1,
    name: "Hallar Azad",
    designation: "XR Product Leader",
    image: "/images/rating-img-01.jpeg",
  },
  {
    id: 2,
    name: "Vikram Kumar Devnani",
    designation: "Co-Founder at HostYD",
    image: "/images/rating-img-02.jpeg",
  },
  {
    id: 3,
    name: "Aakif Nazeer",
    designation: "Data & AI/ML Specialist",
    image: "/images/rating-img-03.jpeg",
  },
  {
    id: 4,
    name: "Abdul Haseeb",
    designation: "Founder & CEO at Verior",
    image: "/images/rating-img-04.jpeg",
  },
];

const HeroSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="relative overflow-hidden px-[2rem] pt-[12rem] pb-[5rem] md:pt-[17rem] lg:pb-[8rem] xl:px-[0rem]">
      <div className="absolute bottom-0 left-0 z-[-1]">
        <img
          src={grid}
          alt="Background Image"
          className="size-full object-cover object-center"
        />
      </div>

      <div className="container">
        <div className="flex flex-col items-center gap-[4rem] md:gap-[8rem] xl:flex-row">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="flex w-full flex-col items-center text-center xl:w-[42%] xl:items-start xl:text-left"
          >
            <h1 className="ibm-font text-[3.5rem] leading-[4rem] font-medium tracking-[-1px] text-(--base-color-01) md:text-[7.2rem] md:leading-[8.28rem] md:tracking-[-3px] xl:max-w-[50rem]">
              <span className="relative">
                Simplifying{" "}
                <div className="absolute top-[3rem] left-1/2 z-[-1] -translate-1/2 md:top-[5rem]">
                  <img
                    src={blueHighlight03}
                    alt="Image"
                    className="object-contain object-center"
                  />
                </div>
              </span>{" "}
              Your <TypewriterEffectSmooth words={words} />
            </h1>

            <p className="mt-[2.4rem] text-[1.6rem] leading-[2.4rem] text-(--base-color-01) md:text-[2rem] md:leading-[3.6rem]"></p>

            <div className="mt-[3.2rem] flex items-center gap-[2rem]">
              <div className="flex flex-row items-center">
                <AnimatedTooltip items={people} />
              </div>

              <h4 className="max-w-[10rem] text-[1.4rem] leading-[1.8rem] font-normal text-(--base-color-01)">
                Trusted by 6,287 users
              </h4>
            </div>

            <div className="mt-[3.2rem] flex flex-col items-center gap-[2rem] md:flex-row">
              <Button className="w-full md:w-auto" asChild>
                <a href="https://wa.me/923192421501" target="_blank">
                  <span>Get Free Consultation</span>

                  <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                </a>
              </Button>

              <Button className="w-full md:w-auto" variant="dark" asChild>
                <a href="/our-services">
                  <span>Become a Filer</span>

                  <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
                </a>
              </Button>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="order-[-1] xl:order-none xl:w-[51%]"
          >
            <div className="relative h-[33rem] min-w-[60rem] md:h-[49rem]">
              <div className="absolute top-0 right-[13rem] aspect-[.8/1] w-[28%] overflow-hidden rounded-[.8rem] md:right-0 md:w-[53%]">
                <img
                  src={heroImg01}
                  alt="Hero Bg"
                  className="size-full object-center"
                />
              </div>

              <div className="shadow-05 absolute bottom-[9.4rem] left-[13rem] aspect-[1/1] w-[28%] rounded-[.8rem] md:left-0 md:w-[44%]">
                <img
                  src={heroImg02}
                  alt="Hero Bg"
                  className="object-cover object-center"
                />

                <div className="absolute bottom-[-2.6rem] left-[-1.4rem] aspect-[1/1] w-[11%] md:left-[-2.6rem]">
                  <img
                    src={rays}
                    alt="Rays"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="shadow-05 absolute right-[20rem] bottom-[2rem] aspect-[3.8/1] w-[28%] rounded-[.8rem] md:right-[15.6rem] md:bottom-[-1.2rem] md:w-[50%]">
                <img
                  src={heroImg03}
                  alt="Hero Bg"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
