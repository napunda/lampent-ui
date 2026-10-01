<script setup lang="ts">
import { TabsTab } from "../../src/lib/components/Tabs/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <TabsTab v-bind="$attrs">
    <slot />
  </TabsTab>
</template>
