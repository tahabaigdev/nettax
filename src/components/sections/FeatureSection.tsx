import {
  BookCheck,
  CircleFadingArrowUp,
  FastForward,
  Languages,
  MousePointerClick,
  Scale,
} from "lucide-react";
import TabSlider from "../ui/TabSlider";
import featureImg01 from "/images/feature-img-01.avif";
import featureImg02 from "/images/feature-img-02.avif";
import featureImg03 from "/images/feature-img-03.avif";
import featureImg04 from "/images/feature-img-04.avif";

const features = [
  { label: "Fast, Hassle-Free Service", icon: CircleFadingArrowUp },
  { label: "Legal Advisory & Compliance", icon: FastForward },
  { label: "Business Registration Support", icon: Languages },
  {
    label: "Affordable Plans for Individuals & Businesses",
    icon: MousePointerClick,
  },
];

const slides = [
  {
    heading: "Your Trusted Tax & Legal Consultant",
    subtext: "Let experts take the stress out of your taxes...",
    img: featureImg02,
  },
  {
    heading: "Accurate & Compliant Tax Filing",
    subtext: "Stay on the right side of the law...",
    img: featureImg03,
  },
  {
    heading: "Fast Business & NTN Registration",
    subtext: "We handle the paperwork quickly...",
    img: featureImg01,
  },
  {
    heading: "Personalized Legal Advice",
    subtext: "From tax planning to legal notices...",
    img: featureImg04,
  },
];

const FeatureSection = () => {
  return (
    <section className="relative z-[1] flex min-h-screen flex-col justify-center overflow-hidden bg-[#EEF8FF] px-[2rem] py-[5rem] lg:py-[7.2rem] xl:px-[0rem]">
      <div className="absolute top-[1rem] z-[-1] xl:top-[30rem] xl:left-[5rem]">
        <BookCheck className="size-[3rem] rotate-45 stroke-[1.5px] text-(--primary-color) xl:size-[4rem]" />
      </div>

      <div className="absolute right-[5rem] bottom-[2rem] z-[-1] md:bottom-[10rem]">
        <Scale className="size-[2rem] -rotate-12 stroke-[1.5px] text-(--primary-color) md:size-[4rem]" />
      </div>

      <div className="container">
        <TabSlider
          features={features}
          slides={slides}
          autoPlayInterval={10000}
          primaryBtn={{
            label: "Get Free Consultation",
            href: "https://wa.me/923192421501",
          }}
        />
      </div>
    </section>
  );
};

export default FeatureSection;
