import type { WpPost } from "@/types/wordpress";
import { NavLink } from "react-router-dom";

interface BlogCardListProps {
  post: WpPost;
}

const BlogCardList = ({ post }: BlogCardListProps) => {
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;

  const author = post._embedded?.["author"]?.[0]?.name ?? "Unknown Author";

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
    <div className="group flex gap-[4rem] border-b border-[#DCE0E2] pb-[4rem] hover:border-(--primary-color)">
      <NavLink
        to={`/blog/${post.slug}`}
        className="inline-block h-[18rem] w-[32rem] bg-amber-200"
      >
        {featuredImage && (
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="size-full object-cover object-center"
          />
        )}
      </NavLink>

      <div className="flex flex-col justify-between">
        <ul className="flex items-center gap-[.8rem] text-[1.2rem] leading-[2rem] font-medium tracking-[.3px] uppercase">
          <li>{postDate}</li>

          <li>/</li>

          <li>
            <NavLink to="" className="text-(--primary-color) hover:underline">
              {category}
            </NavLink>
          </li>

          <li>/</li>

          <li>{readingTime}</li>
        </ul>

        <NavLink
          to={`/blog/${post.slug}`}
          className="flex items-center gap-[2rem]"
        >
          <h3
            className="line-clamp-3 w-[50rem] text-[2.8rem] leading-[3.6rem] font-medium group-hover:underline"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div className="h-[10rem] w-[1px] bg-[#DCE0E2]" />

          <p
            className="line-clamp-3 max-w-[30rem] text-[2rem] leading-[2.8rem]"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </NavLink>

        <div className="text-[1.2rem] leading-[2rem] tracking-[.3px]">
          <span>By</span>{" "}
          <a
            href=""
            className="text-(--primary-color) capitalize hover:underline"
          >
            {author}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCardList;
