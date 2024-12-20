import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  classname?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, classname }) => {
  return (
    <span
      className={cn(
        "w-fit bg-secondary-foreground px-2 py-1 text-xs text-yellow-100",
        classname,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
