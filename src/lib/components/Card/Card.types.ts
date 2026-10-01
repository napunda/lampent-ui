import type { ComponentRadius, ComponentSize } from "@/types";
import type { ShadowSize } from "@/styles/shadow";

export interface CardCustomProps {
  padding?: ComponentSize;
  radius?: ComponentRadius;
  shadow?: ShadowSize;
  class?: string;
}

export type CardProps = CardCustomProps;
