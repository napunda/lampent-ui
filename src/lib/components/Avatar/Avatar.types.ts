import type { ComponentRadius, ComponentSize } from "@/types";
import type { SemanticColor } from "@/types/theme";

export interface AvatarCustomProps {
  src?: string;
  alt?: string;
  size?: ComponentSize;
  radius?: ComponentRadius;
  color?: SemanticColor;
  class?: string;
}

export type AvatarProps = AvatarCustomProps;
