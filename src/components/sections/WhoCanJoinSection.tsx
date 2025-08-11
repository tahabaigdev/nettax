import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const WhoCanJoinSection = () => {
  const userTypes = [
    "Students",
    "Freelancers",
    "Job seekers",
    "Housewives",
    "Small business owners",
    "Tuition teachers",
    "Digital marketers",
    "Anyone in Pakistan looking to earn from home",
  ];

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section
      id="who-can-join"
      className="relative overflow-hidden px-[2rem] py-[6rem] xl:px-[0rem]"
    >
      <div className="container">
        <h2
          data-aos="fade-up"
          className="mb-4 text-[3rem] leading-[4rem] font-bold text-gray-800"
        >
          Who Can Join?
        </h2>

        <p data-aos="fade-up" className="mb-10 max-w-[60rem] text-gray-600">
          Passionate individuals—resellers, consultants, gig-economy workers—can
          join from anywhere and start earning from home.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {userTypes.map((type, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="rounded-xl border border-gray-200 bg-[#FAF8F5] p-6 shadow-sm transition duration-300 hover:shadow-md"
            >
              <p className="font-medium text-gray-800">{type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoinSection;
