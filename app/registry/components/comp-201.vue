<script setup lang="ts">
import { useId } from "vue";

const id = useId();
</script>

<template>
  <div class="group relative">
    <label
      :for="id"
      class="bg-background text-foreground absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-[select:disabled]:opacity-50"
    >
      Select with overlapping label (native)
    </label>
    <SelectNative :id="id" default-value="">
      <option value="" disabled>Select framework</option>
      <option value="1">Vue</option>
      <option value="2">Nuxt</option>
      <option value="3">Astro</option>
      <option value="4">Vitesse</option>
    </SelectNative>
  </div>
</template>
