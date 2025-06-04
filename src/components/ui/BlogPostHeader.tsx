import type { WpPost } from "@/types/wordpress";
import { NavLink } from "react-router-dom";

interface BlogPostHeaderProps {
  post: WpPost;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;

  const category =
    post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Uncategorized"; // fallback

  const author = post._embedded?.["author"]?.[0]?.name ?? "Unknown Author";

  const postDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getReadingTime = (html: string) => {
    const plainText = html.replace(/<[^>]+>/g, ""); // Strip HTML tags
    const wordCount = plainText.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} Min Read`;
  };

  const readingTime = getReadingTime(post.content.rendered);

  const decodeHtml = (html: string) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="grid grid-cols-1 gap-[2rem] md:grid-cols-2 lg:gap-[4rem]">
        <div className="flex flex-col gap-[3rem]">
          <h3 className="text-[3rem] leading-[4rem] font-medium lg:text-[4.8rem] lg:leading-[5.6rem]">
            {decodeHtml(post.title.rendered)}
          </h3>

          <p className="text-[2rem] leading-[2.8rem] font-light opacity-80 md:text-[2.4rem] md:leading-[3rem] lg:text-[2.8rem] lg:leading-[3.6rem]">
            {decodeHtml(post.acf?.hero_subtitle || "")}
          </p>
        </div>

        <div className="h-[25rem] w-full bg-amber-200 md:h-[30rem] lg:h-[35rem]">
          {featuredImage && (
            <img
              src={featuredImage}
              alt={post.title.rendered}
              className="size-full object-cover object-center"
            />
          )}
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#E7EDF6]" />

      <ul className="flex items-center justify-between gap-[1rem] text-[1rem] leading-[1.6rem] md:justify-start md:gap-[2rem] md:text-[1.4rem] md:leading-[2rem]">
        <li>Published: {postDate}</li>

        <li className="h-[2rem] w-[1px] bg-[#E7EDF6]"></li>

        <li className="text-(--primary-color) hover:underline">
          <NavLink to="">{category}</NavLink>
        </li>

        <li className="h-[2rem] w-[1px] bg-[#E7EDF6]"></li>

        <li>{readingTime}</li>

        <li className="h-[2rem] w-[1px] bg-[#E7EDF6]"></li>

        <li className="flex items-center gap-[.4rem]">
          <span>By</span>
          <NavLink
            to=""
            className="text-(--primary-color) capitalize hover:underline"
          >
            {author}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BlogPostHeader;
