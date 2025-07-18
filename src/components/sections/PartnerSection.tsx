import { IdCard, MonitorCog } from "lucide-react";
import partnerLogo1 from "/images/partner-logo-1.svg";
import partnerLogo2 from "/images/partner-logo-2.svg";
import partnerLogo3 from "/images/partner-logo-3.svg";
import partnerLogo4 from "/images/partner-logo-4.svg";
import partnerLogo5 from "/images/partner-logo-5.svg";
import rays03 from "/images/rays-03.svg";
import blueHighlight03 from "/images/blue-highlight-bold-03.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const linkItem = [
  { id: 0, link: "", img: partnerLogo1 },
  { id: 1, link: "", img: partnerLogo2 },
  { id: 2, link: "", img: partnerLogo3 },
  { id: 3, link: "", img: partnerLogo4 },
  { id: 4, link: "", img: partnerLogo5 },
  { id: 5, link: "", img: partnerLogo1 },
  { id: 6, link: "", img: partnerLogo2 },
  { id: 7, link: "", img: partnerLogo3 },
  { id: 8, link: "", img: partnerLogo4 },
  { id: 9, link: "", img: partnerLogo5 },
  { id: 10, link: "", img: partnerLogo1 },
  { id: 11, link: "", img: partnerLogo2 },
  { id: 12, link: "", img: partnerLogo3 },
  { id: 13, link: "", img: partnerLogo4 },
  { id: 14, link: "", img: partnerLogo5 },
  { id: 15, link: "", img: partnerLogo5 },
];

// const integrationItems = [
//   {
//     title: "Google Suite",
//     description:
//       "Get your job done faster by connecting Calendly to Google Calendar, Meet, Analytics, and more.",
//     logo: "/images/google-logo.svg",
//     link: "#",
//   },
//   {
//     title: "Google Suite",
//     description:
//       "Get your job done faster by connecting Calendly to Google Calendar, Meet, Analytics, and more.",
//     logo: "/images/google-logo.svg",
//     link: "#",
//   },
// ];

const PartnerSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="relative z-[1] overflow-hidden px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]">
      <div className="absolute top-[40rem] left-[5rem] z-[-1] hidden rotate-12 xl:block">
        <MonitorCog className="size-[2rem] text-(--primary-color) md:size-[4rem]" />
      </div>

      <div className="absolute top-[20rem] right-[5rem]">
        <IdCard className="size-[4rem] stroke-[1.5px] text-(--primary-color)" />
      </div>

      <div className="container">
        <div className="grid gap-[4rem]">
          <div className="grid grid-cols-1 items-end gap-[2rem] md:gap-[4.8rem] lg:grid-cols-2">
            <div data-aos="fade-right" className="relative">
              <div className="absolute top-[-2rem] right-[7rem] w-[7%] md:right-[12rem] lg:right-[-2rem] xl:right-[-2rem]">
                <img
                  src={rays03}
                  alt="Image"
                  className="object-contain object-center"
                />
              </div>

              <div className="absolute top-[1rem] left-[9rem] z-[-1] w-[30%] -rotate-6 md:left-[14rem] md:w-[25%] lg:left-[16rem] lg:w-[30%] xl:left-[14rem]">
                <img
                  src={blueHighlight03}
                  alt="Image"
                  className="object-contain object-center"
                />
              </div>

              <h3 className="ibm-font max-w-[30rem] text-[3rem] leading-[4rem] font-medium tracking-[-2px] text-(--base-color-01) md:max-w-[60rem] md:text-[4.5rem] md:leading-[6rem]">
                Trusted Partners Built on trust and expertise.
              </h3>
            </div>

            <div data-aos="fade-left" className="flex flex-col gap-[1.6rem]">
              <span className="text-[1.4rem] leading-[2.4rem] text-(--base-color-01) md:text-[2rem] md:leading-[2.8rem]">
                We work alongside respected organizations who share our
                commitment to clarity, integrity, and results.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[2.4rem] md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {linkItem.map((item) => (
              <div data-aos="fade-up" key={item.id}>
                <a
                  href=""
                  className="shadow-02 flex aspect-[1/1] size-full items-center justify-center rounded-[1.2rem] border border-[#d4e0ed] bg-white transition-all duration-300 hover:scale-[1.125] hover:border-(--primary-color) hover:bg-[#f4f8ff]"
                >
                  <img
                    src={item.img}
                    alt="Icon"
                    className="h-[4rem] object-contain object-center"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-[2rem] grid grid-cols-1 gap-[3.2rem] lg:grid-cols-2">
          {integrationItems.map((item, index) => (
            <div key={index}>
              <a
                href={item.link}
                className="group grid gap-[1.2rem] overflow-hidden rounded-[2.4rem] border border-[#D4E0ED] bg-white p-[3.2rem]"
              >
                <div className="flex justify-between">
                  <img
                    src={item.logo}
                    alt={`${item.title} Logo`}
                    className="size-[4rem] object-contain object-center"
                    width={705}
                    height={720}
                  />

                  <ArrowUpRight className="size-[3rem] text-(--base-color-01) transition-all duration-300 group-hover:translate-x-[1rem] group-hover:translate-y-[-1rem]" />
                </div>

                <h3 className="text-[2rem] leading-[2.4rem] font-semibold text-(--base-color-01) md:text-[2.4rem] md:leading-[3.36rem]">
                  {item.title}
                </h3>

                <p className="text-[1.6rem] leading-[2.4rem] text-(--base-color-01) md:text-[1.8rem] md:leading-[2.88rem]">
                  {item.description}
                </p>
              </a>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default PartnerSection;
