import type { ComponentSize } from "@/types";
import type { SemanticColor } from "@/types/theme";
import type { FontWeight } from "@/styles/typography";

export interface TextCustomProps {
  size?: ComponentSize;
  fw?: FontWeight;
  c?: SemanticColor;
  component?: "p" | "span" | "div";
  class?: string;
}

export type TextProps = TextCustomProps;
