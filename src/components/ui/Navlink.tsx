import clsx from "clsx";

interface NavLinkProps {
  href: string;
  label: string;
}

const Navlink = ({ href, label }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={clsx(
        "text-[1.6rem] leading-[2.56rem] font-normal transition-all duration-300 hover:text-(--primary-color)",
        // pathname === href ? "text-(--primary-color)" : "text-(--base-color-01)",
      )}
    >
      {label}
    </a>
  );
};

export default Navlink;
