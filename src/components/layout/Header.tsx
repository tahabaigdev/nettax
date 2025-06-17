import Navbar from "../ui/Navbar";
import { Button } from "../ui/button";
import { ChevronRight, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import clsx from "clsx";
import { useEffect } from "react";
import { useMenuStore } from "@/stores/useMenuStore";
import logo from "/images/logo.svg";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenuStore();

  // 👉 Lock/unlock body scroll when hamburger menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Optional cleanup in case component unmounts while menu is open
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1150px)").matches) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call it once on mount in case the screen is already > 1025
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMenuOpen]);

  return (
    <div className="absolute top-0 left-0 z-[998] w-full border-b border-[#e7edf6] bg-white">
      <div className="relative mx-auto flex h-[7.8rem] max-w-[128rem] items-center justify-between px-[2rem] py-[1.4rem] sm:px-[4rem]">
        <div className="flex items-center">
          <a href="/" className="inline-flex max-w-[14rem] sm:max-w-[18rem]">
            <img
              src={logo}
              alt="Brand Logo"
              className="size-full object-cover object-center"
            />
          </a>
        </div>

        <div className="hidden xl:block">
          <Navbar />
        </div>

        <div className="pointer-events-none hidden items-center gap-[2rem] opacity-0 xl:flex">
          <Button asChild variant="transparent">
            <a href="/">Login</a>
          </Button>

          <Button asChild>
            <a href="/">
              <span>Register</span>

              <ChevronRight className="relative top-[3px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
            </a>
          </Button>
        </div>

        <div className="block xl:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex h-[3.2rem] w-[4.8rem] cursor-pointer items-center justify-center rounded-[1.6rem] bg-(--primary-color) transition-all duration-200 hover:opacity-80"
          >
            <Menu className="size-[2.2rem] text-white" />
          </button>
        </div>

        <div
          className={clsx(
            "fixed top-0 left-0 z-[999] w-full bg-[pink] transition-all duration-200",
            isMenuOpen
              ? "pointer-events-auto visible opacity-100"
              : "pointer-events-none invisible opacity-0",
          )}
        >
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
