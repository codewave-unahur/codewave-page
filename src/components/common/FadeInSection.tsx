import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = "" }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={
        `transition-all duration-1000 transform ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"} ${className}`
      }
    >
      {children}
    </div>
  );
};
