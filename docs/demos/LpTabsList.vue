<script setup lang="ts">
import { TabsList } from "../../src/lib/components/Tabs/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <TabsList v-bind="$attrs">
    <slot />
  </TabsList>
</template>
