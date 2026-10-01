<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { CheckboxCustomProps } from "@/types/dom";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<CheckboxCustomProps>(), {
  modelValue: false,
  indeterminate: false,
  disabled: false,
  size: "md",
  color: "primary",
});

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();
const inputRef = ref<HTMLInputElement | null>(null);

const sizeClasses = {
  xs: "size-3.5",
  md: "size-4",
  lg: "size-5",
  xl: "size-6",
};

const colorClasses = {
  primary: "accent-primary-500",
  success: "accent-success-500",
  warning: "accent-warning-500",
  danger: "accent-danger-500",
  neutral: "accent-neutral-500",
};

const wrapperClasses = computed(() =>
  mergeClasses(
    cn(
      "inline-flex items-center gap-2 cursor-pointer",
      props.disabled && "opacity-50 cursor-not-allowed",
    ),
    props.class,
  ),
);

const inputClasses = computed(() =>
  cn(sizeClasses[props.size], colorClasses[props.color], "rounded-sm shrink-0"),
);

function onChange(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).checked);
}

watch(
  () => props.indeterminate,
  (value) => {
    if (inputRef.value) inputRef.value.indeterminate = value;
  },
  { immediate: true },
);
</script>

<template>
  <label :class="wrapperClasses">
    <input
      ref="inputRef"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      :class="inputClasses"
      v-bind="restAttrs"
      @change="onChange"
    />
    <span v-if="label || $slots.default" class="text-sm select-none">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
