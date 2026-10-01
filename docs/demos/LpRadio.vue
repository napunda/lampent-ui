<script setup lang="ts">
import LibRadio from "../../src/lib/components/Radio/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibRadio v-bind="$attrs">
    <slot />
  </LibRadio>
</template>
