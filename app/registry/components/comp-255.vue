<script setup lang="ts">
import { ref } from "vue";

// TODO: Implement with useSliderWithInput composable
const value = ref([25]);
</script>

<template>
  <div class="*:not-first:mt-3">
    <Label>Slider with input</Label>
    <div class="flex items-center gap-4">
      <Slider
        class="grow"
        v-model="value"
        :min="0"
        :max="100"
        aria-label="Slider with input"
      />
      <Input
        class="h-8 w-12 px-2 py-1"
        type="text"
        inputmode="decimal"
        :value="value[0]"
        aria-label="Enter value"
      />
    </div>
  </div>
</template>
