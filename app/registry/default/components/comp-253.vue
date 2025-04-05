<script setup lang="ts">
const value = ref([25, 50, 100]);

const formatTooltip = (val: number) => `${val}%`;
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Slider with multiple thumbs</Label>
    <Slider
      v-model="value"
      aria-label="Slider with multiple thumbs"
      :show-tooltip="true"
      :tooltip-content="formatTooltip"
    />
  </div>
</template>
