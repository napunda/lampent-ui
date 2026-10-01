import type { ComponentRadius, ComponentSize, ComponentVariant } from "@/types";
import type { ShadowSize } from "@/styles/shadow";

export interface PaperCustomProps {
  variant?: ComponentVariant;
  padding?: ComponentSize;
  radius?: ComponentRadius;
  shadow?: ShadowSize;
  class?: string;
}

export type PaperProps = PaperCustomProps;
