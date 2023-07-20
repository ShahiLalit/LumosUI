import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { classnames } from "../../utils";

const buttonTypes = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-200 text-black text-sm shadow-button border border-gray-400 p-5",
        primary: "bg-green-700",
        secondary: "",
        destructive: "",
      },
      modifier: {
        outlined: "",
        ghost: "",
        link: "",
      },
      size: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
      },
      disabled: {
        true: "",
      },
      fullWidth: {
        true: "",
      },
    },
  }
);
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonTypes> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      modifier,
      size,
      disabled,
      fullWidth,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={classnames(buttonTypes({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonTypes };
