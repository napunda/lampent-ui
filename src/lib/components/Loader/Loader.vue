<script setup lang="ts">
import { computed } from "vue";
import type { LoaderProps } from "./Loader.types";
import { useForwardedAttrs } from "@/composables/useForwardedAttrs";
import { loaderSizeClasses } from "@/styles/layout";
import { textColorClasses } from "@/styles/typography";
import { cn } from "@/utils/cn";

const props = withDefaults(defineProps<LoaderProps>(), {
  size: "md",
  color: "primary",
  type: "oval",
});

defineOptions({ inheritAttrs: false });

const { restAttrs, mergeClasses } = useForwardedAttrs();

const classes = computed(() =>
  mergeClasses(
    cn("inline-flex items-center justify-center", loaderSizeClasses[props.size]),
    props.class,
  ),
);
</script>

<template>
  <span :class="classes" role="status" aria-label="Carregando" v-bind="restAttrs">
    <svg
      v-if="type === 'oval'"
      :class="cn('animate-spin', loaderSizeClasses[size])"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="opacity-25 stroke-current"
        :class="textColorClasses[color]"
        cx="12"
        cy="12"
        r="10"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        :class="textColorClasses[color]"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
    <span v-else class="flex gap-1">
      <span
        v-for="i in 3"
        :key="i"
        :class="cn('size-1.5 rounded-full animate-bounce', textColorClasses[color].replace('text-', 'bg-'))"
        :style="{ animationDelay: `${(i - 1) * 150}ms` }"
      />
    </span>
  </span>
</template>
