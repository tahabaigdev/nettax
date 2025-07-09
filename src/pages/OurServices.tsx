import HelmetSeo from "@/components/layout/HelmetSeo";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/ui/PageHero";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ServiceProcessTimeline from "@/components/ui/ServiceProcessTimeline";
import bgNoise from "/images/bg-noise.avif";
import logoIcon from "/images/logo-icon.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this

const OurServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // No hash = scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100); // small delay to wait for DOM to mount

    return () => clearTimeout(timeout);
  }, [location]);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <main>
      <HelmetSeo
        title="FBR Online Verification & NTN Services | Nettax Services"
        description="Access FBR online verification, NTN search, and tax services in one place. NetTax Pakistan offers fast, secure, and accurate FBR verification solutions."
        url="https://www.nettax.org/nettax.org/our-services"
      />

      <PageHero
        backgroundImageUrl="/images/page-hero-img-04.avif"
        heading="Smart Tax Solutions for Every Need"
        subheading="Expert registration, compliance, and advisory services to grow your business legally right."
      />

      <div className="container my-[6rem] flex flex-col gap-[6rem] px-[2rem] xl:px-[0rem]">
        <div>
          <ServiceProcessTimeline ref={sectionRef} />
        </div>

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
            Ready to Get Started?
          </h2>

          <p data-aos="fade-up" className="my-8 max-w-[50rem] opacity-90">
            Contact us today for a free consultation and let us help you
            navigate the complexities of tax compliance and business
            registration.
          </p>

          <div
            data-aos="fade-up"
            className="mt-[3.2rem] flex flex-col items-center gap-[2rem] md:flex-row"
          >
            <Button className="w-full md:w-auto" asChild>
              <a href="https://wa.me/923192421501" target="_blank">
                <span>Get Free Consultation</span>

                <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurServices;
