<script setup lang="ts">
import LibButton from "../../src/lib/components/Button/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibButton v-bind="$attrs">
    <slot />
  </LibButton>
</template>
