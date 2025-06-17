import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const WhoWeAreSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section
      id="who-we-are"
      className="overflow-hidden px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]"
    >
      <div className="container grid grid-cols-1 items-end gap-[4rem] lg:grid-cols-2">
        <div data-aos="fade-right">
          <div className="relative overflow-hidden rounded-[1.6rem]">
            <img
              src="/images/who-we-are-img.avif"
              alt="Image"
              className="size-full object-cover object-center"
            />

            <img
              src="/images/logo.svg"
              alt="Image"
              className="absolute right-0 bottom-0 max-w-[20rem] opacity-50"
            />
          </div>
        </div>

        <div data-aos="fade-left" className="flex flex-col gap-[1rem]">
          <h2 className="border-b border-[#E4E2E9] pb-[1rem] text-[3rem] leading-[4rem] font-medium tracking-[-0.48px] md:text-[4rem] md:leading-[5rem]">
            Who We Are
          </h2>

          <p className="md:text-[1.8rem] md:leading-[2.8rem]">
            nettax is a dynamic and forward-thinking tax consultancy firm
            founded in 2020, with the primary objective of revolutionizing the
            way individuals and businesses approach taxation in Pakistan. With a
            profound understanding of the intricate tax landscape and a passion
            for delivering excellence, nettax has emerged as a trusted partner
            for clients seeking comprehensive and reliable taxation services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
