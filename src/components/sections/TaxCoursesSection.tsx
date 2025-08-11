import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const TaxCoursesSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section
      id="tax-courses"
      className="relative overflow-x-hidden bg-[#EEF8FF] px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]"
    >
      <div className="container grid grid-cols-1 items-center gap-[4rem] lg:grid-cols-2 lg:items-center">
        <div
          data-aos="fade-right"
          className="h-[40rem] w-full overflow-hidden rounded-[1.6rem]"
        >
          <img
            src="/images/tax-courses-img.avif"
            alt="Image"
            className="size-full object-cover object-center"
          />
        </div>

        <div
          data-aos="fade-left"
          className="flex flex-col items-center gap-[4rem] text-center lg:items-start lg:text-left"
        >
          <div className="flex flex-col gap-[1rem]">
            <h2 className="border-b border-[#E4E2E9] pb-[1rem] text-[3rem] leading-[4rem] font-medium tracking-[-0.48px] md:text-[4rem] md:leading-[5rem]">
              Nettax Guru
            </h2>

            <p className="md:text-[1.8rem] md:leading-[2.8rem]">
              Nettax Guru is our AI-driven learning platform, designed for
              Nettax Dost resellers, consultants, and students to:
            </p>

            <ul className="flex list-inside list-disc flex-col gap-[.5rem]">
              <li>Unlock expert-led tax courses and certifications</li>
              <li>
                Gain end-to-end support, mentorship, and smart tax planning
                techniques
              </li>
              <li>Accelerate career growth or start your own practice</li>
              <li>Receive personalized assistance every step of the way</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxCoursesSection;
