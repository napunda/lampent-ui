<script setup lang="ts">
import LibTitle from "../../src/lib/components/Title/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibTitle v-bind="$attrs">
    <slot />
  </LibTitle>
</template>
