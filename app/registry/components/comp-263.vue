<script setup lang="ts">
const value = ref([2, 7]);
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Vertical dual range slider and tooltip</Label>
    <div class="flex h-40 justify-center">
      <Slider
        v-model="value"
        :max="10"
        orientation="vertical"
        aria-label="Vertical slider"
        show-tooltip
      />
    </div>
  </div>
</template>
