<script setup lang="ts">
import LibStack from "../../src/lib/components/Stack/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibStack v-bind="$attrs">
    <slot />
  </LibStack>
</template>
