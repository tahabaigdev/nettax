import { BadgeCheck, Book, ChevronRight, GraduationCap } from "lucide-react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const CertificationsSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#EEF8FF] px-[2rem] py-[5rem] lg:py-[11.2rem] xl:px-[0rem]"
    >
      <div className="container">
        <div className="flex max-w-[81rem] flex-col items-center gap-[1.8rem] px-[2rem] text-center sm:gap-[2.4rem] md:items-start md:px-[0rem] md:pr-[12rem] md:pl-[1.6rem] md:text-left">
          <h5
            data-aos="fade-left"
            className="text-[1.8rem] leading-[2.8rem] font-medium tracking-[0.2px] text-[var(--primary-color)]"
          >
            Get Certified
          </h5>

          <h3
            data-aos="fade-left"
            className="text-[2.6rem] leading-[3.6rem] font-medium tracking-[-0.2px] capitalize sm:text-[3.8rem] sm:leading-[4.8rem]"
          >
            Boost Your Career with Trusted Certifications
          </h3>

          <p
            data-aos="fade-left"
            className="text-[1.6rem] leading-[2.4rem] tracking-[0.2px] text-[#425466] sm:text-[1.8rem] sm:leading-[2.8rem]"
          >
            Gain recognized certifications from Nettax Guru to validate your tax
            knowledge, enhance your professional profile, and unlock new
            opportunities in finance, business, and taxation industries.
          </p>
        </div>

        <div className="mt-[6.4rem] grid grid-cols-1 gap-[3.2rem] px-[1.6rem] sm:grid-cols-2 lg:grid-cols-3">
          <div
            data-aos="fade-up"
            className="group shadow-01 flex h-[50rem] flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]"
          >
            <div className="h-full overflow-hidden rounded-[.4rem] bg-[pink] transition-all duration-200">
              <img
                src="/images/certification-img-01.avif"
                alt="Image"
                className="size-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-[.8rem] p-[1.6rem] transition-all duration-300 lg:h-[23.8rem] lg:group-hover:h-[28rem]">
              <div className="inline-flex w-max items-center gap-[1.2rem] rounded-[.4rem] bg-[#F8F9FB] px-[1.6rem] py-[1rem] text-[1.2rem] leading-[1.5rem] font-normal">
                <Book className="size-[2rem]" />
                <span>Basic Level</span>
              </div>

              <div className="flex flex-col items-start gap-[1.2rem]">
                <h4 className="text-[2.6rem] leading-[3.6rem] font-medium">
                  Tax Essentials
                </h4>

                <p className="text-[1.8rem] leading-[2.8rem] tracking-[0.2px] text-[#425466]">
                  fundamental tax concepts, GST rules, and return filing with
                  beginner-friendly guidance for students, tax advisor, and job
                  seeker.
                </p>

                <NavLink
                  to="/about"
                  className={`inline-flex justify-center rounded-[1.65rem] bg-[transparent] pt-[.3rem] pb-[.6rem] text-[1.5rem] font-normal text-[var(--primary-color)]`}
                >
                  <span>Learn about nettax</span>

                  <ChevronRight className="relative top-[6px] left-[.3rem] size-[1.5rem] stroke-3" />
                </NavLink>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="group shadow-01 flex h-[50rem] flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]"
          >
            <div className="h-full overflow-hidden rounded-[.4rem] bg-[pink] transition-all duration-200">
              <img
                src="/images/certification-img-02.avif"
                alt="Image"
                className="size-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-[.8rem] p-[1.6rem] transition-all duration-300 lg:h-[23.8rem] lg:group-hover:h-[28rem]">
              <div className="inline-flex w-max items-center gap-[1.2rem] rounded-[.4rem] bg-[#F8F9FB] px-[1.6rem] py-[1rem] text-[1.2rem] leading-[1.5rem] font-normal">
                <GraduationCap className="size-[2rem]" />
                <span>Intermediate</span>
              </div>

              <div className="flex flex-col items-start gap-[1.2rem]">
                <h4 className="text-[2.6rem] leading-[3.6rem] font-medium">
                  Tax Practitioner
                </h4>

                <p className="text-[1.8rem] leading-[2.8rem] tracking-[0.2px] text-[#425466]">
                  Gain hands-on experience with tax return preparation, and
                  compliance—ideal for working professionals or freelancers
                  handling real client cases.
                </p>

                <NavLink
                  to="/about"
                  className={`inline-flex justify-center rounded-[1.65rem] bg-[transparent] pt-[.3rem] pb-[.6rem] text-[1.5rem] font-normal text-[var(--primary-color)]`}
                >
                  <span>Learn about nettax</span>

                  <ChevronRight className="relative top-[6px] left-[.3rem] size-[1.5rem] stroke-3" />
                </NavLink>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="group shadow-01 flex h-[50rem] flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]"
          >
            <div className="h-full overflow-hidden rounded-[.4rem] bg-[pink] transition-all duration-200">
              <img
                src="/images/certification-img-03.avif"
                alt="Image"
                className="size-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-[.8rem] p-[1.6rem] transition-all duration-300 lg:h-[23.8rem] lg:group-hover:h-[28rem]">
              <div className="inline-flex w-max items-center gap-[1.2rem] rounded-[.4rem] bg-[#F8F9FB] px-[1.6rem] py-[1rem] text-[1.2rem] leading-[1.5rem] font-normal">
                <BadgeCheck className="size-[2rem]" />
                <span>Advanced Pro</span>
              </div>

              <div className="flex flex-col items-start gap-[1.2rem]">
                <h4 className="text-[2.6rem] leading-[3.6rem] font-medium">
                  Expert Certification
                </h4>

                <p className="text-[1.8rem] leading-[2.8rem] tracking-[0.2px] text-[#425466]">
                  Master high-level tax strategies, audits, and planning. This
                  certification is perfect for senior consultants, advisors, and
                  financial planning specialists.
                </p>

                <NavLink
                  to="/about"
                  className={`inline-flex justify-center rounded-[1.65rem] bg-[transparent] pt-[.3rem] pb-[.6rem] text-[1.5rem] font-normal text-[var(--primary-color)]`}
                >
                  <span>Learn about nettax</span>

                  <ChevronRight className="relative top-[6px] left-[.3rem] size-[1.5rem] stroke-3" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
