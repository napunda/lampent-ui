<script setup lang="ts">
import LibLoader from "../../src/lib/components/Loader/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibLoader v-bind="$attrs">
    <slot />
  </LibLoader>
</template>
