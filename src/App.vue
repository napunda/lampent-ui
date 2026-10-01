<script setup lang="ts">
import { ref } from "vue";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import {
  componentRadius,
  componentSizes,
  componentVariants,
  semanticColors,
} from "@/types";

const email = ref("");
const search = ref("");
</script>

<template>
  <div id="app" class="p-8 space-y-8">
    <section class="space-y-3">
      <h2 class="text-sm font-semibold text-neutral-700">TextInput</h2>
      <div class="grid max-w-md gap-3">
        <TextInput v-model="email" placeholder="E-mail" variant="outline" color="primary" />
        <TextInput v-model="search" placeholder="Buscar..." variant="filled" color="neutral" />
        <TextInput
          placeholder="Classe customizada"
          variant="light"
          color="success"
          class="max-w-xs"
        />
      </div>
    </section>

    <section class="space-y-3">
      <h2 class="text-sm font-semibold text-neutral-700">Tamanhos</h2>
      <div class="flex flex-wrap items-center gap-3">
        <Button
          v-for="size in componentSizes"
          :key="size"
          variant="filled"
          color="primary"
          :size="size"
        >
          {{ size }}
        </Button>
      </div>
    </section>

    <section class="space-y-3">
      <h2 class="text-sm font-semibold text-neutral-700">Radius</h2>
      <div class="flex flex-wrap items-center gap-3">
        <Button
          v-for="radius in componentRadius"
          :key="radius"
          variant="filled"
          color="primary"
          :radius="radius"
        >
          {{ radius }}
        </Button>
      </div>
    </section>

    <section v-for="variant in componentVariants" :key="variant" class="space-y-3">
      <h2 class="text-sm font-semibold text-neutral-700 capitalize">
        {{ variant }}
      </h2>
      <div class="flex flex-wrap items-center gap-3">
        <Button
          v-for="color in semanticColors"
          :key="`${variant}-${color}`"
          :variant="variant"
          :color="color"
        >
          {{ color }}
        </Button>
      </div>
      <div class="grid max-w-2xl gap-3 sm:grid-cols-2">
        <TextInput
          v-for="color in semanticColors"
          :key="`input-${variant}-${color}`"
          :variant="variant"
          :color="color"
          :placeholder="`${variant} / ${color}`"
        />
      </div>
    </section>
  </div>
</template>
