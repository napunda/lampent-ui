<script setup lang="ts">
import LibDivider from "../../src/lib/components/Divider/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibDivider v-bind="$attrs">
    <slot />
  </LibDivider>
</template>
