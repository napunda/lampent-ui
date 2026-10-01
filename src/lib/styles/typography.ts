import type { ComponentSize } from "@/types";
import type { SemanticColor } from "@/types/theme";

export const textSizeClasses: Record<ComponentSize, string> = {
  xs: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

export const titleSizeClasses: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
  1: "text-4xl font-bold",
  2: "text-3xl font-bold",
  3: "text-2xl font-semibold",
  4: "text-xl font-semibold",
  5: "text-lg font-medium",
  6: "text-base font-medium",
};

export const fontWeightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

export type FontWeight = keyof typeof fontWeightClasses;

export const textColorClasses: Record<SemanticColor, string> = {
  primary: "text-primary-600",
  success: "text-success-600",
  warning: "text-warning-800",
  danger: "text-danger-600",
  neutral: "text-neutral-700",
};
