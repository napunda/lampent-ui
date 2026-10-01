<script setup lang="ts">
import LibModal from "../../src/lib/components/Modal/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibModal v-bind="$attrs">
    <slot />
  </LibModal>
</template>
