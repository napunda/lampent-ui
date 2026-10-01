<script setup lang="ts">
import LibCheckbox from "../../src/lib/components/Checkbox/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibCheckbox v-bind="$attrs">
    <slot />
  </LibCheckbox>
</template>
