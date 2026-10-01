import type { SemanticColor } from "./theme";

export const componentVariants = [
  "default",
  "filled",
  "outline",
  "light",
] as const;

export type ComponentVariant = (typeof componentVariants)[number];

export const componentSizes = ["xs", "md", "lg", "xl"] as const;

export type ComponentSize = (typeof componentSizes)[number];

export const componentRadius = ["xs", "md", "lg", "xl"] as const;

export type ComponentRadius = (typeof componentRadius)[number];

export interface ComponentStyleProps {
  variant?: ComponentVariant;
  color?: SemanticColor;
  size?: ComponentSize;
  radius?: ComponentRadius;
  class?: string;
}
