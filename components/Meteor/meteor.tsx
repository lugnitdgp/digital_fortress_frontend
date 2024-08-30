import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute rounded-[9999px] bg-light-green shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[100px] before:h-[1px] before:bg-gradient-to-r before:from-[#b9fbc0] before:to-transparent"
          )}
          style={{
            top: `${Math.random() * 40}vh`, // Random vertical position
            left: `${Math.random() * 75}vw`, // Random horizontal position
            height: `${Math.random() * (1 - 0.5) + 0.5}vh`, // Smaller meteor height
            width: `${Math.random() * (1 - 0.5) + 0.5}vw`, // Smaller meteor width
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`, // Random delay
            animationDuration: `${Math.random() * (10 - 2) + 2}s`, // Random duration
          }}
        ></span>
      ))}
    </div>
  );
};
