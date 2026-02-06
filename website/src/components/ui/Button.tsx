"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-light" | "ghost" | "ghost-dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  // Black button — for light backgrounds
  primary:
    "bg-black text-white hover:bg-gray-800 shadow-lg shadow-black/15 hover:shadow-black/30",
  // Accent-colored button — works on both
  secondary:
    "bg-accent text-black font-bold hover:bg-accent-light shadow-lg shadow-accent/20",
  // Black outlined — for light backgrounds
  outline:
    "bg-transparent border-2 border-black/80 text-black hover:bg-black hover:text-white",
  // White outlined — for dark backgrounds
  "outline-light":
    "bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50",
  // Ghost on dark bg
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5",
  // Ghost on light bg
  "ghost-dark":
    "bg-transparent text-text-muted hover:text-text-dark hover:bg-black/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-9 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2";

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <a href={href} className={combinedStyles}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedStyles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
