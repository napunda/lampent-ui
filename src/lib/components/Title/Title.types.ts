import type { ComponentSize } from "@/types";
import type { SemanticColor } from "@/types/theme";
import type { FontWeight } from "@/styles/typography";

export interface TitleCustomProps {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: ComponentSize;
  fw?: FontWeight;
  c?: SemanticColor;
  class?: string;
}

export type TitleProps = TitleCustomProps;
