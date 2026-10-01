import type { ComponentSize } from "@/types";
import type { FlexAlign, FlexJustify } from "@/styles/layout";

export interface GroupCustomProps {
  gap?: ComponentSize;
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: boolean;
  class?: string;
}

export type GroupProps = GroupCustomProps;
