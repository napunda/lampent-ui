<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  href: string;
}>();
</script>

<template>
  <a :href="href" class="component-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </a>
</template>
