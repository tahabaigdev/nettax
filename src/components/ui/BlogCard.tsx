import type { WpPost } from "@/types/wordpress";
import { NavLink } from "react-router-dom";

interface BlogCardProps {
  post: WpPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;

  const category =
    post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Uncategorized"; // fallback

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

  return (
    <NavLink
      to={`/blog/${post.slug}`}
      className="group flex w-full flex-col gap-[1.2rem]"
    >
      <div>
        <div className="h-[20rem] w-full overflow-hidden bg-amber-200 md:h-[12rem] lg:h-[18rem]">
          {featuredImage && (
            <img
              src={featuredImage}
              alt={post.title.rendered}
              className="size-full object-cover object-center"
            />
          )}
        </div>

        <div className="border-l-[4px] border-(--primary-color) bg-[#EEEDE9] p-[.8rem] text-[1.4rem] leading-[1.2rem] font-medium uppercase transition-all duration-200 group-hover:border-l-[8px] md:px-[1.6rem] md:py-[1.2rem]">
          <span>{category}</span>
        </div>
      </div>

      <div className="flex flex-col gap-[.4rem]">
        <ul className="flex items-center gap-[8px] text-[1.2rem] leading-[2rem] font-medium text-[#5A6F77] uppercase">
          <li>{postDate}</li>

          <li>/</li>

          <li>{readingTime}</li>
        </ul>

        <h4
          className="line-clamp-2 text-[1.8rem] leading-[2.4rem] group-hover:underline lg:text-[2rem] lg:leading-[2.8rem]"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </div>
    </NavLink>
  );
};

export default BlogCard;
