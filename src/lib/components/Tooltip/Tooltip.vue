<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useFloating, autoUpdate, offset, flip, shift, arrow } from "@floating-ui/vue";
import type { TooltipProps } from "./Tooltip.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<TooltipProps>(), {
  position: "top",
  openDelay: 200,
  disabled: false,
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const referenceRef = ref<HTMLElement | null>(null);
const floatingRef = ref<HTMLElement | null>(null);
const arrowRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);
let openTimer: ReturnType<typeof setTimeout> | null = null;

const placementMap = {
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
  "top-start": "top-start",
  "top-end": "top-end",
  "bottom-start": "bottom-start",
  "bottom-end": "bottom-end",
} as const;

const { floatingStyles, middlewareData, placement } = useFloating(referenceRef, floatingRef, {
  placement: computed(() => placementMap[props.position]),
  whileElementsMounted: autoUpdate,
  middleware: [offset(8), flip(), shift({ padding: 8 }), arrow({ element: arrowRef })],
});

const tooltipClasses = computed(() =>
  mergeClasses(
    cn(
      "z-50 px-2 py-1 text-xs font-medium rounded-sm",
      "bg-neutral-900 text-white dark:bg-neutral-700",
      "pointer-events-none",
    ),
    props.class,
  ),
);

const arrowStyle = computed(() => {
  const { x, y } = middlewareData.value.arrow ?? {};
  const staticSide = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
  }[placement.value.split("-")[0] as "top" | "bottom" | "left" | "right"];

  return {
    left: x != null ? `${x}px` : "",
    top: y != null ? `${y}px` : "",
    [staticSide]: "-4px",
  };
});

function show() {
  if (props.disabled) return;
  openTimer = setTimeout(() => {
    isOpen.value = true;
  }, props.openDelay);
}

function hide() {
  if (openTimer) clearTimeout(openTimer);
  isOpen.value = false;
}

watch(
  () => props.disabled,
  (value) => {
    if (value) hide();
  },
);
</script>

<template>
  <span
    ref="referenceRef"
    class="inline-flex"
    v-bind="restAttrs"
    @mouseenter="show"
    @mouseleave="hide"
    @focus="show"
    @blur="hide"
  >
    <slot></slot>
  </span>
  <Teleport to="body">
    <div
      v-if="isOpen && (label || $slots.label)"
      ref="floatingRef"
      role="tooltip"
      :class="tooltipClasses"
      :style="floatingStyles"
    >
      <slot name="label">{{ label }}</slot>
      <div
        ref="arrowRef"
        class="absolute size-2 rotate-45 bg-neutral-900 dark:bg-neutral-700"
        :style="arrowStyle"
      />
    </div>
  </Teleport>
</template>
