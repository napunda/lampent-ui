<script setup lang="ts">
import LibAvatar from "../../src/lib/components/Avatar/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibAvatar v-bind="$attrs">
    <slot />
  </LibAvatar>
</template>
