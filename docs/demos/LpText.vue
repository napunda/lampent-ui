<script setup lang="ts">
import LibText from "../../src/lib/components/Text/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibText v-bind="$attrs">
    <slot />
  </LibText>
</template>
