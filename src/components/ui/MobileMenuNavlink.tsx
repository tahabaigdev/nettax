import { useMenuStore } from "@/stores/useMenuStore";
import clsx from "clsx";
import { NavHashLink } from "react-router-hash-link";

interface MobileMenuNavLinkProps {
  href: string;
  label: string;
}

const MobileMenuNavlink = ({ href, label }: MobileMenuNavLinkProps) => {
  const { setIsMenuOpen } = useMenuStore();

  return (
    <NavHashLink
      smooth
      onClick={() => {
        setIsMenuOpen(false);
      }}
      to={href}
      className={clsx(
        "flex py-[2rem] text-[1.6rem] leading-[2.56rem] font-medium transition-all duration-300 hover:text-(--primary-color)",
        // pathname === href ? "text-(--primary-color)" : "text-(--base-color-01)",
      )}
    >
      {label}
    </NavHashLink>
  );
};

export default MobileMenuNavlink;
