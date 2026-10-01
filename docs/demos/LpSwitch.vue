<script setup lang="ts">
import LibSwitch from "../../src/lib/components/Switch/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibSwitch v-bind="$attrs">
    <slot />
  </LibSwitch>
</template>
