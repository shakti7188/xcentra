interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "live" | "coming" | "future";
  className?: string;
}

const variantStyles = {
  accent: "bg-accent/10 text-accent border-accent/20",
  live: "bg-green-500/10 text-green-400 border-green-500/20",
  coming: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  future: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function Badge({ children, variant = "accent", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
