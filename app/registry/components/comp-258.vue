<script setup lang="ts">


// TODO: Implement with useSliderWithInput composable
const value = ref([50, 150]);
</script>

<template>
  <div class="*:not-first:mt-3">
    <Label>Dual range slider with input</Label>
    <div class="flex items-center gap-4">
      <Input
        class="h-8 w-12 px-2 py-1"
        type="text"
        inputmode="decimal"
        :value="value[0]"
        aria-label="Enter minimum value"
      />
      <Slider
        class="grow"
        v-model="value"
        :min="0"
        :max="200"
        aria-label="Dual range slider with input"
      />
      <Input
        class="h-8 w-12 px-2 py-1"
        type="text"
        inputmode="decimal"
        :value="value[1]"
        aria-label="Enter maximum value"
      />
    </div>
  </div>
</template>
