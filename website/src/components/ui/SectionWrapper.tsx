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
  default: "max-w-[1440px]",
  wide: "max-w-[1600px]",
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
        className={`mx-auto px-6 sm:px-10 lg:px-16 ${widthStyles[containerWidth]}`}
      >
        {children}
      </div>
    </section>
  );
}
