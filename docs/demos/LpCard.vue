<script setup lang="ts">
import LibCard from "../../src/lib/components/Card/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibCard v-bind="$attrs">
    <slot />
  </LibCard>
</template>
