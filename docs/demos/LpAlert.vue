<script setup lang="ts">
import LibAlert from "../../src/lib/components/Alert/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibAlert v-bind="$attrs">
    <slot />
  </LibAlert>
</template>
