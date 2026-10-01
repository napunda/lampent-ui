<script setup lang="ts">
import { computed } from "vue";
import type { TextareaCustomProps } from "@/types/dom";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { getInputClasses } from "@/components/TextInput/inputClasses";

const props = withDefaults(defineProps<TextareaCustomProps>(), {
  modelValue: "",
  variant: "outline",
  color: "neutral",
  size: "md",
  radius: "md",
  disabled: false,
  autosize: false,
  rows: 3,
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    getInputClasses(props.variant, props.color, props.size, props.radius),
    props.autosize && "resize-none overflow-hidden",
    props.class,
  ),
);

function onInput(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  emit("update:modelValue", target.value);
  if (props.autosize) {
    target.style.height = "auto";
    target.style.height = `${target.scrollHeight}px`;
  }
}
</script>

<template>
  <textarea
    :value="modelValue"
    :class="classes"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows"
    v-bind="restAttrs"
    @input="onInput"
  />
</template>
