<script setup lang="ts">
import LibTextarea from "../../src/lib/components/Textarea/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibTextarea v-bind="$attrs">
    <slot />
  </LibTextarea>
</template>
