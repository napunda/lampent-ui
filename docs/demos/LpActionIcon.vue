<script setup lang="ts">
import LibActionIcon from "../../src/lib/components/ActionIcon/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibActionIcon v-bind="$attrs">
    <slot />
  </LibActionIcon>
</template>
