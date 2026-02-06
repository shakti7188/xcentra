import { type HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  theme?: "dark" | "light";
  containerWidth?: "default" | "wide" | "full";
}

const themeStyles = {
  dark: "bg-bg-primary text-text-primary",
  light: "bg-bg-light text-text-dark",
};

const widthStyles = {
  default: "max-w-7xl",
  wide: "max-w-[1400px]",
  full: "max-w-full",
};

export default function SectionWrapper({
  theme = "dark",
  containerWidth = "default",
  className = "",
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={`py-20 md:py-28 ${themeStyles[theme]} ${className}`}
      {...props}
    >
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 ${widthStyles[containerWidth]}`}
      >
        {children}
      </div>
    </section>
  );
}
