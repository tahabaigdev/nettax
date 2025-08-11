import { AnimatedTestimonials } from "../ui/animated-testimonials";
import jahangeer from "/images/jahangeer.webp";
import saiqa from "/images/saiqa.webp";
import awais from "/images/awais.webp";
import saqib from "/images/saqib.webp";
import kashaf from "/images/kashaf.webp";
import ahad from "/images/ahad.webp";
import { AudioWaveform, Boxes } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const testimonials = [
  {
    quote:
      "Jahangeer brings a clear vision and strong leadership to the firm. With a deep understanding of law and business.",
    name: "Jahangeer Ansari",
    alt: "Jahangeer, expert tax consultant in Hyderabad Sindh at Nettax",
    designation: "Co-Founder & CEO",
    src: jahangeer,
  },
  {
    quote:
      "Saiqa plays a key role in shaping the firm’s values, focusing on trust, professionalism, and client care at every step.",
    name: "Saiqa Ansari",
    alt: "Saiqa, expert tax consultant in Hyderabad Sindh at Nettax",
    designation: "Co-Founder & CEO",
    src: saiqa,
  },
  {
    quote:
      "Awais is dedicated to delivering solid legal support, handling each case with focus, integrity, and attention to detail.",
    name: "Awais Alam",
    alt: "Awais, expert tax consultant in Hyderabad Sindh at Nettax",
    designation: "Associate Lawyer",
    src: awais,
  },
  {
    quote:
      "Saqib Soomro is a Tax Litigation Associate skilled in resolving tax disputes and protecting client interests.",
    name: "Saqib soomro",
    alt: "Saqib, expert tax consultant in Hyderabad Sindh at Nettax",
    designation: "Tax Litigation Associate",
    src: saqib,
  },
  {
    quote:
      "Abdullah designs and delivers skill-based training programs to enhance team performance and client engagement. He applies psychological insights to improve communication, motivation, and workplace well-being.",
    name: " Abdullah Mangi",
    alt: "Abdullah Mangi, expert tax consultant in Hyderabad Sindh at Nettax",
    designation: "Trainer and Psychologist",
    src: ahad,
  },
  {
    quote:
      "Kashaf brings fresh ideas and energy to the team, making sure our services reach the right people with the right message.",
    name: "Kashaf Qadir",
    alt: "Kashaf Qadir, expert tax consultant in Hyderabad Sindh at Nettax",
    designation: "Marketing Executive",
    src: kashaf,
  },
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section
      id="our-team"
      className="relative overflow-hidden bg-[#EEF8FF] px-[2rem] py-[5rem] lg:py-[9.6rem] xl:px-[0rem]"
    >
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
