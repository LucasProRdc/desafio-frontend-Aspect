import { type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-lg px-5 font-medium flex items-center justify-center gap-2 bg-blue-300 text-blue-950 hover:bg-blue-400",
  variants: {
    size: {
      default: "py-2",
      full: "w-full h-11",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function Button({ children, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ size })}>
      {children}
    </button>
  );
}
