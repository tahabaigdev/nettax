import { ChevronRight } from "lucide-react";
import { Button } from "./button";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

interface PageHeroProps {
  backgroundImageUrl: string;
  heading: string;
  subheading: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  backgroundImageUrl,
  heading,
  subheading,
}) => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="page-hero relative z-[1] h-screen w-full overflow-hidden px-[2rem] xl:px-[0rem]">
      <div className="absolute inset-0 z-[-1] size-full bg-linear-(--gradient-01)" />

      <div className="absolute inset-0 z-[-2]">
        <img
          src={backgroundImageUrl}
          alt="Hero Background"
          className="size-full object-cover object-center"
        />
      </div>

      <div className="container flex h-full flex-col items-center justify-center gap-[3rem] pt-[6rem] text-center lg:items-start lg:text-left">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="max-w-[45rem] text-[4rem] leading-[5rem] font-semibold tracking-[-0.74px] text-white md:text-[7.4rem] md:leading-[8.14rem]"
        >
          {heading}
        </h1>

        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="max-w-[50rem] font-medium tracking-[0.18px] text-white md:text-[1.8rem] md:leading-[2.52rem]"
        >
          {subheading}
        </p>

        <Button
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          className="w-full md:w-auto"
          asChild
          variant="dark"
        >
          <a href="https://wa.me/923192421501" target="_blank">
            <span>Get Free Consultation</span>

            <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default PageHero;
