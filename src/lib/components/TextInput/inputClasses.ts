import type { ComponentRadius, ComponentSize, ComponentVariant, SemanticColor } from "@/types";
import { radiusClasses } from "@/styles/radius";
import { sizeClasses } from "@/styles/sizes";
import { inputVariantColorClasses } from "@/styles/variantColors";
import { cn } from "@/utils/cn";

export const inputBaseClasses =
  "w-full box-border border font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";

export function getInputClasses(
  variant: ComponentVariant,
  color: SemanticColor,
  size: ComponentSize,
  radius: ComponentRadius,
): string {
  return cn(
    inputBaseClasses,
    sizeClasses[size],
    radiusClasses[radius],
    inputVariantColorClasses[variant][color],
  );
}
