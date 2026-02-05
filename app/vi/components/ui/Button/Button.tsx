import * as React from "react";
import clsx from "clsx";

// ===== Types =====
type Variant = "primary" | "warning" | "disable";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

// ===== Styles =====
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium \
   border border-transparent \
   transition-all duration-200 ease-out";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--blue-normal)] text-[var(--blue-light)] cursor-pointer hover:bg-[var(--blue-light)] hover:text-[var(--blue-normal)] hover:border-[var(--blue-normal)]",

  warning:
    "bg-[var(--red-normal)] text-[var(--red-light)] cursor-pointer hover:bg-[var(--red-light)] hover:text-[var(--red-normal)] hover:border-[var(--red-normal)]",

  disable:
    "bg-[var(--gray-normal)] text-[var(--gray-light)] cursor-not-allowed pointer-events-none opacity-80",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

// ===== Component =====
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          base,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";