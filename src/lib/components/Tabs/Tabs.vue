<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";
import type { TabsProps } from "./Tabs.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { tabsContextKey } from "./tabsContext";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<TabsProps>(), {
  orientation: "horizontal",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const internalValue = ref(props.defaultValue);

const activeTab = computed({
  get: () => props.modelValue ?? internalValue.value,
  set: (value: string) => {
    internalValue.value = value;
    emit("update:modelValue", value);
  },
});

const orientation = computed(() => props.orientation);

function setActiveTab(value: string) {
  activeTab.value = value;
}

provide(tabsContextKey, {
  activeTab,
  setActiveTab,
  orientation,
});

watch(
  () => props.modelValue,
  (value) => {
    if (value !== undefined) internalValue.value = value;
  },
);

const classes = computed(() =>
  mergeClasses(
    cn(
      "flex",
      orientation.value === "vertical" ? "flex-row gap-4" : "flex-col gap-2",
    ),
    props.class,
  ),
);
</script>

<template>
  <div :class="classes" v-bind="restAttrs">
    <slot></slot>
  </div>
</template>
