"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: React.ReactNode;
  readonly asChild?: boolean;
  readonly variant?: keyof typeof buttonVariants;
  readonly size?: keyof typeof buttonSizes;
}

// Variantes centralizadas
const buttonVariants = {
  primary: "bg-brand-pink text-white hover:bg-brand-white hover:text-brand-blue",
  outline: "bg-brand-white text-brand-blue hover:bg-brand-pink hover:text-white",
  ghost: "bg-transparent text-brand-blue hover:bg-brand-gray",
};

// Tamanhos centralizados
const buttonSizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export function Button({
  children,
  className,
  asChild = false,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      className={cn(
        // base
        "rounded-xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F28C38]",
        // aplica variantes
        buttonVariants[variant],
        // aplica tamanhos
        buttonSizes[size],
        // custom extra
        className
      )}
    >
      {children}
    </Comp>
  );
}
