import { type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

export interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  direction?: "horizontal" | "vertical";
  className?: string;
  isFlippable?: boolean;
}

export const FlipCard = ({
  front,
  back,
  direction = "horizontal",
  className,
  isFlippable = true,
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (isFlippable) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={cn(
        "flip-card-container perspective-1000 relative h-full w-full",
        className,
      )}
      onMouseEnter={() => isFlippable && setIsFlipped(true)}
      onMouseLeave={() => isFlippable && setIsFlipped(false)}
      onClick={handleFlip}
    >
      <div
        className={cn(
          "flip-card transform-style-3d relative h-full w-full transition-transform duration-500",
          isFlipped
            ? direction === "horizontal"
              ? "rotate-y-180"
              : "rotate-x-180"
            : "",
        )}
      >
        <div className="flip-card-front absolute h-full w-full backface-hidden">
          {front}
        </div>
        <div
          className={cn(
            "flip-card-back absolute h-full w-full backface-hidden",
            direction === "horizontal" ? "rotate-y-180" : "rotate-x-180",
          )}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
