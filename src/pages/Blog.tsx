import { getFeaturedPost, getPosts, getWhatsNewPosts } from "@/api/wordpress";
import BlogCard from "@/components/ui/BlogCard";
import BlogCardList from "@/components/ui/BlogCardList";
import { Button } from "@/components/ui/button";
import CategoryLinks from "@/components/ui/CategoryLinks";
import FeatureBlogCard from "@/components/ui/FeatureBlogCard";
import { MoonLoader } from "react-spinners";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { WpPost } from "@/types/wordpress";
import { AlignJustify, LayoutGrid } from "lucide-react";
import { useEffect, useState } from "react";
import Pagination from "@/components/ui/Pagination";
import SubscribeForm from "@/components/ui/SubscribeForm";
import HelmetSeo from "@/components/layout/HelmetSeo";

const Blog = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [posts, setPosts] = useState<WpPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<WpPost | null>(null);
  const [whatsNewPosts, setWhatsNewPosts] = useState<WpPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const postsPerPage = 10;

  useEffect(() => {
    setIsLoading(true);
    getPosts(currentPage, postsPerPage)
      .then((data) => {
        setPosts(data.posts);
        setTotalPosts(data.total);
      })
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  useEffect(() => {
    getFeaturedPost().then(setFeaturedPost);
    getWhatsNewPosts().then(setWhatsNewPosts);
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

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1280); // 1280px = '2xl'
    };

    checkScreenSize(); // initial check
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!isLargeScreen) {
      setViewMode("list");
    }
  }, [isLargeScreen]);

  return (
    <main className="pt-[10rem] pb-[4rem] lg:py-[10rem]">
      <HelmetSeo
        title="Latest FBR & Tax Consultancy Article | Nettax"
        description="Stay updated with FBR tax news, e-payment guides, registration"
        url="https://nettax.org/blog"
      />

      {isLoading ? (
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
      ) : (
        <div className="container px-[2rem] xl:px-[0rem]">
          <div className="flex flex-col gap-[2rem] md:flex-row lg:gap-[4rem]">
            <div className="flex basis-[70%] flex-col justify-between gap-[2rem]">
              <h3 className="text-[4rem] leading-[5rem] lg:text-[5.6rem] lg:leading-[6.4rem]">
                Blog
              </h3>

              <div className="flex flex-col gap-[1rem]">
                <h5 className="text-[1.2rem] leading-[2rem] font-medium tracking-[.4px] text-[#5A6F77] uppercase">
                  Fetured Story
                </h5>

                <div>
                  {featuredPost && <FeatureBlogCard post={featuredPost} />}
                </div>
              </div>
            </div>

            <div className="flex basis-[30%] flex-col gap-[1rem]">
              <h5 className="text-[1.2rem] leading-[2rem] font-medium tracking-[.4px] text-[#5A6F77] uppercase">
                What's New
              </h5>

              <div className="flex flex-col gap-[2rem]">
                {whatsNewPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[6rem] lg:mt-[8rem]">
            <div>
              <CategoryLinks />
            </div>

            <div className="mt-[4rem] flex flex-col gap-[4rem]">
              <div className="flex items-center justify-between">
                <h3 className="text-[3rem] leading-[4rem] font-medium md:text-[4.8rem] md:leading-[5.6rem]">
                  Recent Post
                </h3>

                <div className="flex items-center gap-[2rem]">
                  <div className="w-[12rem]">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Blog Archive" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="2025">2025</SelectItem>

                        <SelectItem value="2024">2024</SelectItem>

                        <SelectItem value="2023">2023</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-[1rem]">
                    {isLargeScreen && (
                      <div className="flex items-center gap-[1rem]">
                        <button
                          onClick={() => setViewMode("grid")}
                          className={`inline-flex size-[4rem] cursor-pointer items-center justify-center ${
                            viewMode === "grid"
                              ? "text-(--primary-color) opacity-100"
                              : "opacity-60"
                          }`}
                        >
                          <LayoutGrid className="size-[3rem]" />
                        </button>

                        <button
                          onClick={() => setViewMode("list")}
                          className={`inline-flex size-[4rem] cursor-pointer items-center justify-center ${
                            viewMode === "list"
                              ? "text-(--primary-color) opacity-100"
                              : "opacity-60"
                          }`}
                        >
                          <AlignJustify className="size-[3rem]" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {isLargeScreen ? (
                viewMode === "grid" ? (
                  <div className="grid grid-cols-3 gap-[3rem]">
                    {posts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-x-[3rem] gap-y-[4rem]">
                    {posts.map((post) => (
                      <BlogCardList key={post.id} post={post} />
                    ))}
                  </div>
                )
              ) : (
                // Small screen: Always show grid
                <div className="grid grid-cols-1 gap-x-[1rem] gap-y-[3rem] md:grid-cols-3 xl:gap-x-[3rem]">
                  {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              )}

              <div className="my-[2rem] md:my-[4rem]">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(totalPosts / postsPerPage)}
                  totalPosts={totalPosts}
                  onPageChange={(page) => {
                    setCurrentPage(page);
                  }}
                />
              </div>

              <div className="text-center">
                <Button asChild>
                  <a href="">See all posts</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="my-[4rem] flex flex-col gap-[2rem] border-y border-[#E7EDF6] py-[4rem] md:flex-row md:gap-[4rem]">
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
        </div>
      )}
    </main>
  );
};

export default Blog;
