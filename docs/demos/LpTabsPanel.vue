<script setup lang="ts">
import { TabsPanel } from "../../src/lib/components/Tabs/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <TabsPanel v-bind="$attrs">
    <slot />
  </TabsPanel>
</template>
