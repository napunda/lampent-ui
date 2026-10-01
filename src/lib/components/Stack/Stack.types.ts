import type { ComponentSize } from "@/types";
import type { FlexAlign, FlexJustify } from "@/styles/layout";

export interface StackCustomProps {
  gap?: ComponentSize;
  align?: FlexAlign;
  justify?: FlexJustify;
  class?: string;
}

export type StackProps = StackCustomProps;
