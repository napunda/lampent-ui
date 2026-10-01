<script setup lang="ts">
import { computed } from "vue";
import type { TextInputCustomProps } from "@/types/dom";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { getInputClasses } from "./inputClasses";

const props = withDefaults(defineProps<TextInputCustomProps>(), {
  modelValue: "",
  variant: "outline",
  color: "neutral",
  size: "md",
  radius: "md",
  disabled: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    getInputClasses(props.variant, props.color, props.size, props.radius),
    props.class,
  ),
);

function onInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    :class="classes"
    :placeholder="placeholder"
    :disabled="disabled"
    v-bind="restAttrs"
    @input="onInput"
  />
</template>
