<script setup lang="ts">
const value = ref([25]);
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Slider with tiny thumb</Label>
    <Slider
      v-model="value"
      class="[&>:last-child]:border-background [&>:last-child]:bg-primary **:data-[slot=slider-thumb]:shadow-none [&>:last-child]:h-6 [&>:last-child]:w-2.5 [&>:last-child]:border-[3px] [&>:last-child]:ring-offset-0"
      aria-label="Slider with tiny thumb"
    />
  </div>
</template>
