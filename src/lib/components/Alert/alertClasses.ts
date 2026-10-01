import type {
  ComponentRadius,
  ComponentVariant,
  SemanticColor,
} from "@/types";
import { radiusClasses } from "@/styles/radius";
import { alertVariantColorClasses } from "@/styles/variantColors";
import { cn } from "@/utils/cn";

export const alertBaseClasses = "border p-4 text-sm";

export function getAlertClasses(
  variant: ComponentVariant,
  color: SemanticColor,
  radius: ComponentRadius,
): string {
  return cn(
    alertBaseClasses,
    radiusClasses[radius],
    alertVariantColorClasses[variant][color],
  );
}
