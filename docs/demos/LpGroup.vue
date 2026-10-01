<script setup lang="ts">
import LibGroup from "../../src/lib/components/Group/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibGroup v-bind="$attrs">
    <slot />
  </LibGroup>
</template>
