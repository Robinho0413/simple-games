import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-primary",
        "text-black",
        "border-transparent",
        "rounded-lg",
        "font-semibold"
      ],
      outline: [
        "bg-transparent",
        "text-primary",
        "border-2",
        "border-primary",
        "rounded-lg"
      ],
      ghost: [
        "bg-transparent",
        "text-primary",
        "rounded-lg"
      ],
    },
    size: {
      small: ["text-base", "py-1", "px-3"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-lg", "py-6", "px-10"],
      xl: ["text-3xl", "py-10", "px-32"],
      disabled: ["text-lg", "py-4", "px-6", "bg-opacity-20", "text-opacity-60", "text-primary"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;

