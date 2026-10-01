<script setup lang="ts">
import { Tabs } from "../../src/lib/components/Tabs/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <Tabs v-bind="$attrs">
    <slot />
  </Tabs>
</template>
