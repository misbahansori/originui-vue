<script setup lang="ts">
const value = ref([3]);
const emojis = ["😡", "🙁", "😐", "🙂", "😍"];
const labels = ["Awful", "Poor", "Okay", "Good", "Amazing"];

const formatTooltip = (val: number) => labels[val - 1];
</script>

<template>
  <div class="*:not-first:mt-3">
    <Label>Rate your experience</Label>
    <div class="flex items-center gap-2">
      <Slider
        v-model="value"
        :min="1"
        :max="5"
        :show-tooltip="true"
        :tooltip-content="formatTooltip"
        aria-label="Rate your experience"
      />
      <span class="text-2xl">{{ emojis[(value[0] || 1) - 1] }}</span>
    </div>
  </div>
</template>
