<script setup lang="ts">
const value = ref([25, 75]);
</script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between gap-2">
      <Label class="leading-6">Dual range slider with output</Label>
      <output class="text-sm font-medium tabular-nums">
        {{ value[0] }} - {{ value[1] }}
      </output>
    </div>
    <Slider v-model="value" aria-label="Dual range slider with output" />
  </div>
</template>
