import type { ComponentSize } from "@/types";
import type { SemanticColor } from "@/types/theme";

export interface LoaderCustomProps {
  size?: ComponentSize;
  color?: SemanticColor;
  type?: "oval" | "dots";
  class?: string;
}

export type LoaderProps = LoaderCustomProps;
