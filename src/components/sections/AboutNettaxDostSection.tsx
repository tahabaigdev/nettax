import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const AboutNettaxDostSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section
      id="about-nettax-dost"
      className="relative overflow-hidden bg-[#EEF8FF] px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]"
    >
      <div className="container grid grid-cols-1 items-center gap-[4rem] lg:grid-cols-2 lg:items-center">
        <div data-aos="fade-right" className="flex items-start justify-center">
          <div className="overflow-hidden rounded-[1.2rem]">
            <video
              autoPlay
              muted
              loop
              src="/images/nettax-dost-dash.webm"
              className="size-full"
            />
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="flex flex-col items-center gap-[4rem] text-center lg:items-start lg:text-left"
        >
          <div className="flex flex-col gap-[1rem]">
            <h2 className="border-b border-[#E4E2E9] pb-[1rem] text-[3rem] leading-[4rem] font-medium tracking-[-0.48px] md:text-[4rem] md:leading-[5rem]">
              What Is Nettax Dost?
            </h2>

            <p className="md:text-[1.8rem] md:leading-[2.8rem]">
              NetTax Dost is our referral program designed for individuals eager
              to help clients file tax returns through Pakistan’s reputable tax
              firm.
              <br />
              <br />
              Nettax Dost is a unique reseller and affiliate program by a
              leading taxation company in Pakistan, serving thousands of clients
              for over 5 years. Through this program, you can earn by assisting
              individuals and businesses in filing their Income Tax Returns via
              our dedicated platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNettaxDostSection;
