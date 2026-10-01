<script setup lang="ts">
withDefaults(
  defineProps<{
    layout?: "grid" | "stack" | "default";
  }>(),
  { layout: "default" },
);
</script>

<template>
  <div class="vp-demo">
    <div
      class="vp-demo__preview"
      :class="{
        'vp-demo__preview--grid': layout === 'grid',
        'vp-demo__preview--stack': layout === 'stack',
      }"
    >
      <slot />
    </div>
  </div>
</template>
