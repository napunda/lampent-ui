<script setup lang="ts">
import LibTextInput from "../../src/lib/components/TextInput/index.ts";

defineOptions({ inheritAttrs: false });
</script>

<template>
  <LibTextInput v-bind="$attrs" />
</template>
