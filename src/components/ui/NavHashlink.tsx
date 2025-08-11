import clsx from "clsx";
import { NavHashLink } from "react-router-hash-link";

interface NavHashlinkProps {
  href: string;
  label: string;
}

const NavHashlink = ({ href, label }: NavHashlinkProps) => {
  return (
    <NavHashLink
      smooth
      to={href}
      className={clsx(
        "text-[1.6rem] leading-[2.56rem] font-normal transition-all duration-300 hover:text-(--primary-color)",
      )}
    >
      {label}
    </NavHashLink>
  );
};

export default NavHashlink;
