import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  getPostBySlug,
  getWhatsNewPosts,
  getWhatsNextPosts,
} from "../api/wordpress";
import type { WpPost } from "@/types/wordpress";
import BreadCrumb from "@/components/ui/BreadCrumb";
import BlogPostHeader from "@/components/ui/BlogPostHeader";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import BlogCard from "@/components/ui/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MoonLoader } from "react-spinners";
import SocialShare from "@/components/ui/SocialShare";
import SubscribeForm from "@/components/ui/SubscribeForm";
import HelmetSeo from "@/components/layout/HelmetSeo";
import { NavHashLink } from "react-router-hash-link";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WpPost | null>(null);
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [whatsNewPosts, setWhatsNewPosts] = useState<WpPost[]>([]);
  const [whatsNextPosts, setWhatsNextPosts] = useState<WpPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (slug) {
      setIsLoading(true); // start loading
      getPostBySlug(slug)
        .then((data: WpPost) => setPost(data))
        .finally(() => setIsLoading(false)); // end loading
    }
  }, [slug]);

  // Parse headings from HTML
  useEffect(() => {
    if (!post) return;

    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(post.content.rendered, "text/html");
    const h2Elements = Array.from(htmlDoc.querySelectorAll("h2"));

    const extractedHeadings = h2Elements.map((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.id = id;
      return { id, text: heading.textContent || `Heading ${index + 1}` };
    });

    setHeadings(extractedHeadings);

    setPost((prev) =>
      prev
        ? {
            ...prev,
            content: {
              ...prev.content,
              rendered: htmlDoc.body.innerHTML,
            },
          }
        : null,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post?.content.rendered]);

  // Scroll-to-heading
  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(({ id }) =>
        document.getElementById(id),
      );

      let currentId = null;

      for (const headingEl of headingElements) {
        if (headingEl) {
          const { top } = headingEl.getBoundingClientRect();
          if (top < 150) {
            currentId = headingEl.id;
          }
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  useEffect(() => {
    getWhatsNewPosts().then(setWhatsNewPosts);
    getWhatsNextPosts().then(setWhatsNextPosts);
  }, []);

  useEffect(() => {
    if (isLoading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isLoading]);

  const frontendUrl = `${import.meta.env.VITE_SITE_URL}/blog/${slug}`;

  if (isLoading || !post) {
    return (
      <div className="fixed inset-0 z-[999] flex h-screen w-full items-center justify-center bg-[#ffffff]">
        <MoonLoader
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          color="#006bff"
          loading={true}
          speedMultiplier={0.5}
        />
      </div>
    );
  }

  return (
    <main className="py-[10rem]">
      <HelmetSeo
        title={post.title.rendered}
        description={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
        image={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
        url={post.link}
      />

      <div className="container px-[2rem] xl:px-[0rem]">
        <div>
          <BreadCrumb post={post} />
        </div>

        <div className="my-[4rem]">
          <BlogPostHeader post={post} />
        </div>

        <div className="flex flex-col gap-[2rem] md:flex-row md:gap-[4rem]">
          <article className="md:w-[65%]">
            <div
              ref={contentRef}
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>

          <aside className="hidden w-[35%] md:block">
            <div className="flex flex-col gap-[2rem]">
              <h4 className="text-[2.8rem] leading-[3.6rem]">
                Keep up with us
              </h4>

              <Button asChild>
                <NavHashLink smooth to="#subscribe-section">
                  Subscribe
                </NavHashLink>
              </Button>
            </div>

            <div className="my-[2rem] h-[1px] w-full bg-[#E7EDF6]" />

            <div className="sticky top-4 right-0">
              <div className="flex flex-col gap-[2rem]">
                <h4 className="text-[2.8rem] leading-[3.6rem]">
                  Table of contents
                </h4>

                <ul className="flex flex-col">
                  {headings.map((heading) => (
                    <li
                      key={heading.id}
                      className={`group border-l-[2px] px-[1.6rem] hover:border-(--primary-color) ${
                        activeId === heading.id
                          ? "border-(--primary-color)"
                          : "border-transparent"
                      }`}
                    >
                      <button
                        onClick={() => scrollToHeading(heading.id)}
                        className={clsx(
                          "line-clamp-2 inline-flex cursor-pointer items-center py-[.8rem] text-left text-[1.6rem] leading-[2.4rem] transition-opacity",
                          activeId === heading.id
                            ? "text-(--primary-color) opacity-100"
                            : "opacity-70 hover:text-(--primary-color) hover:opacity-100",
                        )}
                      >
                        {heading.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-[2rem] h-[1px] w-full bg-[#E7EDF6]" />

              <div className="flex flex-col gap-[2rem]">
                <h4 className="text-[2.8rem] leading-[3.6rem]">
                  Recommended for you
                </h4>

                <div>
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={false}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                  >
                    {whatsNewPosts.map((post) => (
                      <SwiperSlide key={post.id}>
                        <BlogCard post={post} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div className="my-[2rem] h-[1px] w-full bg-[#E7EDF6]" />

              <div className="flex flex-col gap-[2rem]">
                <h4 className="text-[2.8rem] leading-[3.6rem]">Share Post</h4>

                <div>
                  {/* <SocialShare title={post.title.rendered} url={post.link} /> */}

                  <SocialShare title={post.title.rendered} url={frontendUrl} />
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div
          id="subscribe-section"
          className="my-[4rem] flex flex-col gap-[2rem] border-y border-[#E7EDF6] py-[4rem] md:flex-row md:gap-[4rem]"
        >
          <div className="md:w-[60%]">
            <div className="flex flex-col justify-between gap-[2rem]">
              <h3 className="text-[4rem] leading-[5rem] md:text-[5.6rem] md:leading-[6.4rem]">
                Never miss a nettax post
              </h3>

              <p className="text-[1.8rem] leading-[2.4rem] opacity-70 md:text-[2rem] md:leading-[2.8rem]">
                Subscribe to the categories you care about and get the latest
                posts delivered to your inbox
              </p>
            </div>
          </div>

          <div className="md:w-[40%]">
            <SubscribeForm />
          </div>
        </div>

        <div className="flex flex-col gap-[4rem]">
          <h3 className="text-[4rem] leading-[5rem] md:text-[5.6rem] md:leading-[6.4rem]">
            What's Next?
          </h3>

          <div className="grid grid-cols-1 gap-[1rem] md:grid-cols-3 lg:gap-[3rem]">
            {whatsNextPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Post;
