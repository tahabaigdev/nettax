import clsx from "clsx";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

const processItems = [
  {
    img: "/images/dost-hero-img-02.avif",
  },
  {
    img: "/images/dost-hero-img-01.avif",
  },
  {
    img: "/images/dost-hero-img-03.avif",
  },
];

const ExpandedCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div>
      <div className="flex justify-between gap-[1rem]">
        {processItems.map((item, idx) => {
          const isHovered = hoveredIndex === idx;

          const isOpen = isHovered;

          return (
            <NavHashLink
              smooth
              to="/nettax-dost#how-it-work"
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={clsx(
                "shadow-02 group flex h-[40rem] flex-col justify-between overflow-hidden rounded-[.8rem] bg-white transition-all duration-500 ease-[cubic-bezier(.77,0,.18,1)]",
                isOpen ? "w-[48.8rem] opacity-50" : "w-[24rem] opacity-100",
              )}
            >
              <img
                src={item.img}
                alt="Image"
                className="size-full object-cover object-center"
              />
            </NavHashLink>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandedCard;
