import rays03 from "/images/rays-03.svg";
import circle from "/images/circle.svg";
import SectionDescription from "../ui/SectionDescription";
import { Button } from "../ui/button";
import {
  Briefcase,
  ChevronRight,
  FileText,
  LayoutDashboard,
  ShieldCheck,
  UserPlus,
  Wallet,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import { useEffect } from "react";

const HowItWorkSection = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section
      id="how-it-work"
      className="relative overflow-hidden bg-[#EEF8FF] px-[2rem] py-[6rem] lg:py-[9.6rem] xl:px-[0rem]"
    >
      <div className="container grid gap-[6.4rem]">
        <div className="relative z-[1] flex flex-col items-center gap-[2.4rem] text-center">
          <div data-aos="fade-up" className="relative">
            <div className="absolute top-[-2rem] right-[1rem] w-[7%] md:top-[-3rem] md:right-[-3rem]">
              <img
                src={rays03}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <div className="absolute bottom-[0rem] left-[6rem] z-[-1] w-[25%] md:bottom-[-1rem] md:left-[18rem] md:w-[20%]">
              <img
                src={circle}
                alt="Image"
                className="object-contain object-center"
              />
            </div>

            <div className="max-w-[30rem] md:max-w-[70rem]">
              <SectionTitle label="Get Started with Your nettax Dost Account Today" />
            </div>
          </div>

          <div data-aos="fade-up">
            <SectionDescription label="Register in minutes and unlock a powerful, secure dashboard to simplify your entire tax process." />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[3.2rem] md:grid-cols-2">
          <div
            data-aos="fade-right"
            className="shadow-02 hover:shadow-shadow3 flex flex-col items-start gap-[1rem] border-b border-[var(--primary-color)] bg-white p-[2rem] pb-[4rem] transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da] md:flex-row md:items-center"
          >
            <div>
              <UserPlus className="size-[5rem] stroke-1 text-[var(--primary-color)]" />
            </div>

            <div className="flex flex-col gap-[.5rem] text-left">
              <h3 className="text-[2rem] leading-[3rem] font-medium tracking-[-0.36px]">
                Free registration
              </h3>

              <p className="text-[1.4rem] leading-[2rem] md:max-w-[40rem]">
                Sign up as a Nettax Dost and manage client referrals through
                your personalized dashboard.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="shadow-02 hover:shadow-shadow3 flex flex-col items-start gap-[1rem] border-b border-[var(--primary-color)] bg-white p-[2rem] pb-[4rem] transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da] md:flex-row md:items-center"
          >
            <div>
              <LayoutDashboard className="size-[5rem] stroke-1 text-[var(--primary-color)]" />
            </div>

            <div className="flex flex-col gap-[.5rem] text-left">
              <h3 className="text-[2rem] leading-[3rem] font-medium tracking-[-0.36px]">
                Access Your Personal Dashboard
              </h3>

              <p className="text-[1.4rem] leading-[2rem] md:max-w-[40rem]">
                Track your earnings, view your client submissions, and get
                updates.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="shadow-02 hover:shadow-shadow3 flex flex-col items-start gap-[1rem] border-b border-[var(--primary-color)] bg-white p-[2rem] pb-[4rem] transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da] md:flex-row md:items-center"
          >
            <div>
              <FileText className="size-[5rem] stroke-1 text-[var(--primary-color)]" />
            </div>

            <div className="flex flex-col gap-[.5rem] text-left">
              <h3 className="text-[2rem] leading-[3rem] font-medium tracking-[-0.36px]">
                Submit Client Details
              </h3>

              <p className="text-[1.4rem] leading-[2rem] md:max-w-[40rem]">
                Collect client information and documents —fill and submit the
                forms through your reseller dashboard.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="shadow-02 hover:shadow-shadow3 flex flex-col items-start gap-[1rem] border-b border-[var(--primary-color)] bg-white p-[2rem] pb-[4rem] transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da] md:flex-row md:items-center"
          >
            <div>
              <Briefcase className="size-[5rem] stroke-1 text-[var(--primary-color)]" />
            </div>

            <div className="flex flex-col gap-[.5rem] text-left">
              <h3 className="text-[2rem] leading-[3rem] font-medium tracking-[-0.36px]">
                Our Experts Handle the Filing
              </h3>

              <p className="text-[1.4rem] leading-[2rem] md:max-w-[40rem]">
                No tax knowledge required. Our experienced team handles all the
                technical and legal work.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="shadow-02 hover:shadow-shadow3 flex flex-col items-start gap-[1rem] border-b border-[var(--primary-color)] bg-white p-[2rem] pb-[4rem] transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da] md:flex-row md:items-center"
          >
            <div>
              <Wallet className="size-[5rem] stroke-1 text-[var(--primary-color)]" />
            </div>

            <div className="flex flex-col gap-[.5rem] text-left">
              <h3 className="text-[2rem] leading-[3rem] font-medium tracking-[-0.36px]">
                Earn Per Case
              </h3>

              <p className="text-[1.4rem] leading-[2rem] md:max-w-[40rem]">
                Get guaranteed commissions for every successfully filed return
                —directly to your preferred payment method.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="shadow-02 hover:shadow-shadow3 flex flex-col items-start gap-[1rem] border-b border-[var(--primary-color)] bg-white p-[2rem] pb-[4rem] transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da] md:flex-row md:items-center"
          >
            <div>
              <ShieldCheck className="size-[5rem] stroke-1 text-[var(--primary-color)]" />
            </div>

            <div className="flex flex-col gap-[.5rem] text-left">
              <h3 className="text-[2rem] leading-[3rem] font-medium tracking-[-0.36px]">
                Guaranteed earnings
              </h3>

              <p className="text-[1.4rem] leading-[2rem] md:max-w-[40rem]">
                Earn up to PKR 3,000 per case—no investment required—as our
                experts complete filings.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="text-center">
          <Button asChild>
            <a href="https://wa.me/923192421501" target="_blank">
              <span>Sign up Today</span>

              <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;
