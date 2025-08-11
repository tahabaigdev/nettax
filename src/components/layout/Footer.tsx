import { Facebook, Instagram, Linkedin } from "lucide-react";
import ToTopButton from "../ui/ToTopButton";
import logoWhite from "/images/logo-white.svg";
import { NavLink } from "react-router-dom";
import {
  aboutLinks,
  nettaxDostLinks,
  nettaxGuruLinks,
  resourcesLinks,
  servicesLinks,
} from "@/constants";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-(--primary-color)">
      <div className="container px-[2rem] pt-[6rem] lg:pt-[10rem] xl:px-[0rem]">
        <div className="flex flex-col gap-[6rem] xl:flex-row">
          <div className="flex flex-col gap-[2rem]">
            <NavLink to="/" className="inline-flex w-[18rem]">
              <img
                src={logoWhite}
                alt="Brand Logo"
                className="object-cover object-center"
              />
            </NavLink>
          </div>

          <div className="relative grid w-full grid-cols-1 gap-y-[6rem] md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-[1.5rem]">
              <h5 className="text-[1.8rem] font-medium text-white">About Us</h5>

              <ul className="flex flex-col gap-[1rem] text-white">
                {aboutLinks.map((item, idx) => (
                  <li key={idx}>
                    <NavHashLink
                      smooth
                      to={item.link}
                      className="text-[1.6rem] font-normal transition-all duration-200 hover:opacity-70"
                    >
                      {item.label}
                    </NavHashLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-[1.5rem]">
              <h5 className="text-[1.8rem] font-medium text-white">
                Nettax Dost
              </h5>

              <ul className="flex flex-col gap-[1rem] text-white">
                {nettaxDostLinks.map((item, idx) => (
                  <li key={idx}>
                    <NavHashLink
                      smooth
                      to={item.link}
                      className="text-[1.6rem] font-normal transition-all duration-200 hover:opacity-70"
                    >
                      {item.label}
                    </NavHashLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-[1.5rem]">
              <h5 className="text-[1.8rem] font-medium text-white">
                Nettax Guru
              </h5>

              <ul className="flex flex-col gap-[1rem] text-white">
                {nettaxGuruLinks.map((item, idx) => (
                  <li key={idx}>
                    <NavHashLink
                      smooth
                      to={item.link}
                      className="text-[1.6rem] font-normal transition-all duration-200 hover:opacity-70"
                    >
                      {item.label}
                    </NavHashLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-[1.5rem]">
              <h5 className="text-[1.8rem] font-medium text-white">
                Our Services
              </h5>

              <ul className="flex flex-col gap-[1rem] text-white">
                {servicesLinks.map((item, idx) => (
                  <li key={idx}>
                    <NavHashLink
                      smooth
                      to={item.link}
                      className="text-[1.6rem] font-normal transition-all duration-200 hover:opacity-70"
                    >
                      {item.label}
                    </NavHashLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-[1.5rem]">
              <h5 className="text-[1.8rem] font-medium text-white">
                Resources
              </h5>

              <ul className="flex flex-col gap-[1rem] text-white">
                {resourcesLinks.map((item, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={item.link}
                      className="text-[1.6rem] font-normal transition-all duration-200 hover:opacity-70"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-[1.5rem]">
              <h5 className="text-[1.8rem] font-medium text-white">
                Follow us
              </h5>

              <ul className="flex items-center gap-[1rem]">
                <li>
                  <a
                    href="https://www.facebook.com/netaxpvtltd"
                    className="group"
                  >
                    <Facebook className="size-[2rem] stroke-white stroke-[1.5px] opacity-70 group-hover:opacity-100" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/nettaxpvtltd"
                    className="group"
                  >
                    <Instagram className="size-[2rem] stroke-white stroke-[1.5px] opacity-70 group-hover:opacity-100" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/company/nettaxpk"
                    className="group"
                  >
                    <Linkedin className="size-[2rem] stroke-white stroke-[1.5px] opacity-70 group-hover:opacity-100" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="big-logo apect-[3.8/1] container mx-auto mt-[10rem] w-full opacity-40">
        <img
          src={logoWhite}
          alt="Brand Logo"
          className="relative bottom-[-2rem] size-full object-contain md:bottom-[-4rem]"
        />
      </div>

      <div className="flex flex-col items-center justify-between gap-[2rem] border-t border-[#ffffff1f] px-[4.8rem] py-[1rem] md:flex-row">
        <p className="text-[1.6rem] leading-[1.26rem] font-normal text-white">
          All rights reserved 2025 © Nettax
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[2rem] md:justify-end">
          <ul className="flex gap-[1rem] text-[1.6rem] leading-[1.26rem] font-normal text-white">
            <li>
              <NavLink
                to="/privacy-policy"
                className="text-[1.6rem] font-normal transition-all duration-200 hover:opacity-70"
              >
                Privacy Policy
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/terms-condition"
                className="text-[1.6rem] font-normal transition-all duration-200 hover:opacity-70"
              >
                Terms and Condition
              </NavLink>
            </li>
          </ul>

          <ToTopButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
