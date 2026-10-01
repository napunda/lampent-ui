<script setup lang="ts">
import LibBadge from "../../src/lib/components/Badge/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibBadge v-bind="$attrs">
    <slot />
  </LibBadge>
</template>
