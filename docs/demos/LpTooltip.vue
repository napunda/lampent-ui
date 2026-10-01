<script setup lang="ts">
import LibTooltip from "../../src/lib/components/Tooltip/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibTooltip v-bind="$attrs">
    <slot />
  </LibTooltip>
</template>
