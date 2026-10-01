import type { ComponentRadius, ComponentSize, ComponentVariant, SemanticColor } from "@/types";
import { radiusClasses } from "@/styles/radius";
import { inlineSizeClasses } from "@/styles/sizes";
import { buttonVariantColorClasses } from "@/styles/variantColors";
import { cn } from "@/utils/cn";

export const buttonBaseClasses =
  "inline-flex items-center justify-center box-border border border-transparent font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

export function getButtonClasses(
  variant: ComponentVariant,
  color: SemanticColor,
  size: ComponentSize,
  radius: ComponentRadius,
): string {
  return cn(
    buttonBaseClasses,
    inlineSizeClasses[size],
    radiusClasses[radius],
    buttonVariantColorClasses[variant][color],
  );
}
