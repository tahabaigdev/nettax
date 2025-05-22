import { AnimatedTestimonials } from "../ui/animated-testimonials";
import jahangeer from "/images/jahangeer.jpg";
import saiqa from "/images/saiqa.jpg";
import awais from "/images/awais.jpg";
import saqib from "/images/saqib.jpg";
import dummyFemale from "/images/dummy-female.jpg";
import dummyFemale2 from "/images/dummy-female-2.jpg";
import dummyMen from "/images/dummy-men.jpg";
import spring02 from "/images/spring-02.svg";

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
    src: dummyFemale2,
  },
  {
    quote:
      "Abdul connects the firm with new opportunities, building strong relationships and helping the business grow with purpose.",
    name: "Abdul Ahad",
    designation: "Business Development",
    src: dummyMen,
  },
  {
    quote:
      "Noama approaches every case with care and precision, committed to delivering thoughtful and effective legal solutions.",
    name: "Noama Khan",
    designation: "Associate Lawyer",
    src: dummyFemale,
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
      <div className="absolute top-[10rem] left-[5rem] aspect-[1.1/1] w-[4%]">
        <img
          src={spring02}
          alt="Image"
          className="object-contain object-center"
        />
      </div>

      <div className="container">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TeamSection;
