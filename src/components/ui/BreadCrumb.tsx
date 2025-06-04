import type { WpPost } from "@/types/wordpress";
import { NavLink } from "react-router-dom";

interface BreadCrumbProps {
  post: WpPost;
}

const BreadCrumb = ({ post }: BreadCrumbProps) => {
  const category =
    post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Uncategorized"; // fallback

  return (
    <ul className="flex items-center gap-[.5rem] text-[1.4rem] leading-[2rem]">
      <li className="opacity-70 hover:text-(--primary-color) hover:underline">
        <NavLink to="/blog">Blog</NavLink>
      </li>

      <li className="opacity-70">/</li>

      <li className="opacity-70 hover:text-(--primary-color) hover:underline">
        <NavLink to="">{category}</NavLink>
      </li>

      <li className="opacity-70">/</li>

      <li className="opacity-100">Article</li>
    </ul>
  );
};

export default BreadCrumb;
