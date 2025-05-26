import { AnimatedTestimonials } from "../ui/animated-testimonials";
import jahangeer from "/images/jahangeer.webp";
import saiqa from "/images/saiqa.webp";
import awais from "/images/awais.webp";
import saqib from "/images/saqib.webp";
import kashaf from "/images/kashaf.webp";
import ahad from "/images/ahad.webp";
import { AudioWaveform, Boxes } from "lucide-react";

const testimonials = [
  {
    quote:
      "Jahangeer brings a clear vision and strong leadership to the firm. With a deep understanding of law and business.",
    name: "Jahangeer Ansari",
    designation: "Co-Founder & CEO",
    src: jahangeer,
  },
  {
    quote:
      "Saiqa plays a key role in shaping the firm’s values, focusing on trust, professionalism, and client care at every step.",
    name: "Saiqa Ansari",
    designation: "Co-Founder & CEO",
    src: saiqa,
  },
  {
    quote:
      "Awais is dedicated to delivering solid legal support, handling each case with focus, integrity, and attention to detail.",
    name: "Awais Alam",
    designation: "Associate Lawyer",
    src: awais,
  },
  {
    quote:
      "Kashaf brings fresh ideas and energy to the team, making sure our services reach the right people with the right message.",
    name: "Kashaf Qadir",
    designation: "Marketing Executive",
    src: kashaf,
  },
  {
    quote:
      "Abdul connects the firm with new opportunities, building strong relationships and helping the business grow with purpose.",
    name: "Abdul Ahad",
    designation: "Business Development",
    src: ahad,
  },
  {
    quote:
      "Saqib Soomro is a Tax Litigation Associate skilled in resolving tax disputes and protecting client interests.",
    name: "Saqib soomro",
    designation: "Tax Litigation Associate",
    src: saqib,
  },
];

const TeamSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#EEF8FF] px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]">
      <div className="absolute top-[38rem] left-[3rem] -rotate-12 md:top-[50rem]">
        <Boxes className="size-[3rem] stroke-[1px] text-(--primary-color) md:size-[4rem]" />
      </div>

      <div className="absolute top-[2rem] right-[1rem] -rotate-12 md:right-[5rem]">
        <AudioWaveform className="size-[3rem] stroke-[1px] text-(--primary-color) md:size-[4rem]" />
      </div>

      <div className="container">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TeamSection;
