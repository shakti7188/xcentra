import { type HTMLAttributes } from "react";

type CardVariant = "glass" | "solid" | "bordered" | "gradient";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const variantStyles: Record<CardVariant, string> = {
  glass: "glass rounded-2xl",
  solid: "bg-bg-secondary rounded-2xl border border-border-dark",
  bordered: "bg-transparent rounded-2xl border border-border-dark",
  gradient:
    "bg-gradient-to-br from-card-gradient-start to-card-gradient-end rounded-2xl border border-border-dark",
};

export default function Card({
  variant = "glass",
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`p-6 transition-all duration-300 hover:border-accent/30 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
