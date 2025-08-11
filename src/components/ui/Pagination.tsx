import { EllipsisIcon } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  totalPosts,
  onPageChange,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const showLeftEllipsis = currentPage > 3;
    const showRightEllipsis = currentPage < totalPages - 2;

    if (!showLeftEllipsis && showRightEllipsis) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    } else if (showLeftEllipsis && !showRightEllipsis) {
      pages.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );
    } else if (showLeftEllipsis && showRightEllipsis) {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      );
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[1rem]">
        <span className="text-[1.4rem] leading-[2rem] font-medium">Page</span>

        <ul className="flex items-center gap-[.4rem]">
          {pages.map((page, index) => (
            <li
              key={index}
              onClick={() => typeof page === "number" && onPageChange(page)}
              className={`inline-flex size-[3.2rem] cursor-pointer items-center justify-center rounded-[.5rem] text-[1.2rem] leading-[2rem] font-medium ${
                page === currentPage
                  ? "bg-(--primary-color) text-white"
                  : "bg-[#EDF2F8] hover:bg-(--primary-color) hover:text-white"
              } ${page === "..." ? "cursor-default" : ""} `}
            >
              {page === "..." ? (
                <EllipsisIcon className="size-[2rem] opacity-50" />
              ) : (
                page
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-[1.4rem] leading-[2rem]">
          Showing {(currentPage - 1) * 10 + 1} -{" "}
          {Math.min(currentPage * 10, totalPosts)} of {totalPosts} results
        </p>
      </div>
    </div>
  );
};

export default Pagination;
