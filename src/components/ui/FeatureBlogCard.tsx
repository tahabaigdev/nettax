import type { WpPost } from "@/types/wordpress";
import { NavLink } from "react-router-dom";

interface FeatureBlogCardProps {
  post: WpPost;
}

const FeatureBlogCard = ({ post }: FeatureBlogCardProps) => {
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
      <div className="relative">
        <div className="h-[28rem] w-full bg-amber-200 md:h-[35rem] lg:h-[50rem]">
          {featuredImage && (
            <img
              src={featuredImage}
              alt={post.title.rendered}
              className="size-full object-cover object-center"
            />
          )}
        </div>

        <div className="absolute right-0 bottom-0 flex w-full flex-col gap-[1.2rem] bg-white md:w-[70%]">
          <div className="border-l-[4px] border-(--primary-color) bg-[#EEEDE9] p-[.8rem] text-[1.4rem] leading-[1.2rem] font-medium uppercase transition-all duration-200 group-hover:border-l-[8px] md:px-[1.6rem] md:py-[1.2rem]">
            <span>{category}</span>
          </div>

          <div className="flex flex-col gap-[.4rem] md:px-[2rem] md:pt-[.5rem] md:pb-[1rem]">
            <ul className="flex items-center gap-[8px] text-[1.2rem] leading-[2rem] font-medium text-[#5A6F77] uppercase">
              <li>{postDate}</li>

              <li>/</li>

              <li>{readingTime}</li>
            </ul>

            <h4
              className="line-clamp-2 text-[1.8rem] leading-[2.4rem] lg:text-[2rem] lg:leading-[2.8rem]"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default FeatureBlogCard;
