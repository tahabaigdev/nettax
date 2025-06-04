import { ArrowUpRight } from "lucide-react";

const tabItems = [
  {
    link: "",
    label: "All",
  },
  {
    link: "",
    label: "Advice",
  },
  {
    link: "",
    label: "Corporate",
  },
  {
    link: "",
    label: "Family",
  },
  {
    link: "",
    label: "Updates",
  },
  {
    link: "",
    label: "Cases",
  },
  {
    link: "",
    label: "Industries",
  },
];

const CategoryLinks = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center lg:gap-[2rem]">
      {tabItems.map((item, idx) => (
        <li key={idx}>
          <a
            href={item.link}
            className="group inline-flex items-center gap-[.4rem] px-[.8rem] py-[.5rem] text-[1.8rem] leading-[2.4rem] font-medium opacity-60 hover:text-(--primary-color) hover:underline hover:opacity-100 lg:px-[1.2rem] lg:py-[1rem] lg:text-[2rem] lg:leading-[2.8rem]"
          >
            <span>{item.label}</span>{" "}
            <ArrowUpRight className="size-[1.8rem] opacity-0 group-hover:opacity-100 lg:size-[2rem]" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CategoryLinks;
