import React from "react";
import { clsx } from "clsx";

interface Props {
  variant?:
    | "h1"
    | "sub-title-md"
    | "sub-title-sm"
    | "body-lg"
    | "body-md"
    | "body-sm"
    | "price";
  component?: "h1" | "h2" | "h3" | "p";
  theme?: "black" | "gray" | "gray-md" | "gray-light" | "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "body-md",
  component: Component = "p",
  theme = "black",
  className,
  children,
}: Props) => {
  let variantStyles: string = "",
    colorStyles: string = "";
  switch (variant) {
    case "h1":
      variantStyles = "text-lg leading-lg tracking-widest"; //18px
      break;
    case "sub-title-md":
      variantStyles = "text-base leading-base tracking-wider"; //16px
      break;
    case "sub-title-sm":
      variantStyles = "text-sm leading-sm tracking-wider"; //14px
      break;
    case "body-lg":
      variantStyles = "text-base leading-base"; //16px
      break;
    case "body-md":
      variantStyles = "text-sm leading-base"; //14px
      break;
    case "body-sm":
      variantStyles = "text-xs leading-xs"; //12px
      break;
    case "price":
      variantStyles = "text-[15px] leading-base";
      break;
  }

  switch (theme) {
    case "black":
      colorStyles = "text-black";
      break;
    case "gray":
      colorStyles = "text-gray-900";
      break;
    case "gray-md":
      colorStyles = "text-gray-800";
      break;
    case "gray-light":
      colorStyles = "text-gray-700";
      break;
    case "primary":
      colorStyles = "text-primary";
      break;
    case "secondary":
      colorStyles = "text-secondary";
      break;
  }

  return (
    <Component className={clsx(variantStyles, colorStyles, className)}>{children}</Component>
  );
};
