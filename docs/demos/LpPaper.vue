<script setup lang="ts">
import LibPaper from "../../src/lib/components/Paper/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibPaper v-bind="$attrs">
    <slot />
  </LibPaper>
</template>
