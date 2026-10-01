import type { ComponentRadius, ComponentSize, ComponentVariant } from "@/types";
import { radiusClasses } from "@/styles/radius";
import { paddingClasses } from "@/styles/padding";
import { shadowClasses, type ShadowSize } from "@/styles/shadow";
import { cn } from "@/utils/cn";

const paperVariantClasses: Record<ComponentVariant, string> = {
  filled: "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700",
  outline: "bg-transparent border border-neutral-200 dark:border-neutral-700",
  light: "bg-neutral-50 dark:bg-neutral-800",
  default: "bg-white dark:bg-neutral-900",
};

export function getPaperClasses(
  variant: ComponentVariant,
  padding: ComponentSize,
  radius: ComponentRadius,
  shadow: ShadowSize,
): string {
  return cn(
    paperVariantClasses[variant],
    paddingClasses[padding],
    radiusClasses[radius],
    shadowClasses[shadow],
  );
}
