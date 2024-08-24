import React from "react";
import { cn } from "../lib/cn";

type TCharacterCountProps = {
  text: string;
  maxCount: number;
  className?: string;
};

const CharacterCount = ({
  text,
  maxCount,
  className,
}: TCharacterCountProps) => {
  return (
    <div className={cn("w-full gap-1 text-sm", className)}>
      <span
        className={
          text.split("").length > maxCount
            ? "text-red-600 font-semibold"
            : "text-black"
        }
      >
        {text.split("").length}
      </span>
      <span>/ {maxCount} characters</span>
    </div>
  );
};

export default CharacterCount;
