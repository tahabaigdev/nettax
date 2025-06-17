import { Button } from "../ui/button";
import rays03 from "/images/rays-03.svg";
import blueHighlight01 from "/images/blue-highlight-01.svg";
import SectionTitle from "../ui/SectionTitle";
import SectionDescription from "../ui/SectionDescription";
import {
  ChevronRight,
  Handshake,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import InfoCard from "../ui/InfoCard";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const OurMissionSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section
      id="our-mission"
      className="overflow-hidden px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]"
    >
      <div className="container">
        <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
          <div data-aos="fade-up" className="relative">
            <div className="absolute top-[-2rem] right-[-1rem] w-[7%] md:top-[-3rem] md:right-[4rem]">
              <img
                src={rays03}
                alt="icon"
                className="object-contain object-center"
              />
            </div>

            <div className="absolute top-[8.5rem] left-[10rem] w-[35%] md:top-[5rem] md:left-[47rem] md:w-auto">
              <img
                src={blueHighlight01}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <div className="max-w-[30rem] md:max-w-[70rem]">
              <SectionTitle label="Empowering Clarity Through Trusted Guidance" />
            </div>
          </div>

          <div data-aos="fade-up">
            <SectionDescription label="Our mission is to simplify tax processes, ensure compliance, and empower clients with clear, accurate financial solutions tailored to their unique goals and needs." />
          </div>

          <div data-aos="fade-up">
            <Button asChild>
              <a href="https://wa.me/923192421501" target="_blank">
                <span>Get Free Consultation</span>

                <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-[6rem] grid grid-cols-1 gap-[2rem] md:grid-cols-2">
          <div data-aos="fade-right">
            <InfoCard
              icon={<UserCheck className="size-[3rem] stroke-[1.5px]" />}
              title="Reliable Tax Support"
              description="Count on our experienced professionals to deliver accurate, timely, and compliant tax filing every time."
            />
          </div>

          <div data-aos="fade-left">
            <InfoCard
              icon={<ShieldCheck className="size-[3rem] stroke-[1.5px]" />}
              title="Personalized Financial Solutions"
              description="We tailor every service to your specific financial situation, goals, and compliance needs—no one-size-fits-all."
            />
          </div>

          <div data-aos="fade-right">
            <InfoCard
              icon={<Scale className="size-[3rem] stroke-[1.5px]" />}
              title="Transparent Expert Guidance"
              description="Clear, honest advice you can trust—ensuring you understand your taxes and make informed decisions confidently."
            />
          </div>

          <div data-aos="fade-left">
            <InfoCard
              icon={<Handshake className="size-[3rem] stroke-[1.5px]" />}
              title="Compliance Made Simple"
              description="Navigate tax laws effortlessly with our streamlined processes designed to reduce stress and maximize accuracy."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
