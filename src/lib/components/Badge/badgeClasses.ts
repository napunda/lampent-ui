import type {
  ComponentRadius,
  ComponentSize,
  ComponentVariant,
  SemanticColor,
} from "@/types";
import { radiusClasses } from "@/styles/radius";
import { badgeSizeClasses } from "@/styles/layout";
import { badgeVariantColorClasses } from "@/styles/variantColors";
import { cn } from "@/utils/cn";

export const badgeBaseClasses =
  "inline-flex items-center justify-center font-medium whitespace-nowrap";

export function getBadgeClasses(
  variant: ComponentVariant,
  color: SemanticColor,
  size: ComponentSize,
  radius: ComponentRadius,
): string {
  return cn(
    badgeBaseClasses,
    badgeSizeClasses[size],
    radiusClasses[radius],
    badgeVariantColorClasses[variant][color],
  );
}
