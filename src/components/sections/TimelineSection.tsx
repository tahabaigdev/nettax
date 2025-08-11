import SectionDescription from "../ui/SectionDescription";
import SectionTitle from "../ui/SectionTitle";
import ProcessTimeline from "../ui/ProcessTimeline";
import { useRef } from "react";
import mark01 from "/images/mark-01.svg";
import arrowDoodle4 from "/images/arrow-doodle-4.svg";
import rays03 from "/images/rays-03.svg";
import circle from "/images/circle.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="relative overflow-hidden px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]">
      <div className="absolute right-[30rem] bottom-[20rem] aspect-[1.1/1] w-[3%]">
        <img
          src={mark01}
          alt="Image"
          className="object-contain object-center"
        />
      </div>

      <div className="absolute bottom-[70rem] left-[30rem] aspect-[1.1/1] w-[5%]">
        <img
          src={arrowDoodle4}
          alt="Image"
          className="object-contain object-center"
        />
      </div>

      <div className="container grid gap-[6.4rem]">
        <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
          <div data-aos="fade-up" className="relative">
            <div className="absolute top-[-2rem] right-[1rem] w-[7%] md:top-[-3rem] md:right-[-3rem]">
              <img
                src={rays03}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <div className="absolute bottom-[0rem] left-[6rem] z-[-1] w-[25%] md:bottom-[-1rem] md:left-[30rem] md:w-[20%]">
              <img
                src={circle}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <div className="max-w-[30rem] md:max-w-[70rem]">
              <SectionTitle label="Strategic Legal Support for Financial Peace of Mind" />
            </div>
          </div>

          <div data-aos="fade-up">
            <SectionDescription label="Hyderabad’s leading taxation firm, delivering expert tax services to a diverse range of clients across Sindh." />
          </div>
        </div>

        <div>
          <ProcessTimeline ref={sectionRef} />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
