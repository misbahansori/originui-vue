<script setup lang="ts">
const value = ref([25]);
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between gap-2">
      <Label class="leading-6">Slider with output</Label>
      <output class="text-sm font-medium tabular-nums">{{ value[0] }}</output>
    </div>
    <Slider v-model="value" aria-label="Slider with output" />
  </div>
</template>
