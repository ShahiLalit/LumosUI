import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonTypes: (props?: ({
    variant?: "default" | "primary" | "secondary" | "destructive" | null | undefined;
    modifier?: "link" | "outlined" | "ghost" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
    disabled?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">, VariantProps<typeof buttonTypes> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

export { Button, ButtonProps, buttonTypes };
