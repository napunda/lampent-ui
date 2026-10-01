import { computed, useAttrs } from "vue";
import { cn } from "@/utils/cn";

export function useForwardedAttrs() {
  const attrs = useAttrs();

  const restAttrs = computed(() => {
    const { class: _, ...rest } = attrs;
    return rest;
  });

  function mergeClasses(...classValues: (string | undefined | null | false)[]) {
    return cn(...classValues, attrs.class as string | undefined);
  }

  return { restAttrs, mergeClasses, attrs };
}
