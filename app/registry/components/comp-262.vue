<script setup lang="ts">
// TODO: This is a simplified version without the full implementation of useSliderWithInput
const minValue = 0;
const maxValue = 100;
const sliderValue = ref([25]);
const inputValue = ref("25");

function handleInputChange(e: Event) {
  const target = e.target as HTMLInputElement;
  inputValue.value = target.value;
}

function validateAndUpdateValue() {
  const value = Number(inputValue.value);
  if (!isNaN(value) && value >= minValue && value <= maxValue) {
    sliderValue.value = [value];
  } else if (sliderValue.value.length > 0) {
    inputValue.value = sliderValue.value[0].toString();
  }
}

// Watch for slider value changes
function updateInputFromSlider() {
  if (sliderValue.value.length > 0) {
    inputValue.value = sliderValue.value[0].toString();
  }
}
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Vertical slider with input</Label>
    <div class="flex h-40 flex-col items-center justify-center gap-4">
      <Slider
        class="data-[orientation=vertical]:min-h-0"
        v-model="sliderValue"
        :min="minValue"
        :max="maxValue"
        orientation="vertical"
        aria-label="Slider with input"
        @update:model-value="updateInputFromSlider"
      />
      <Input
        class="h-8 w-12 px-2 py-1"
        type="text"
        inputmode="decimal"
        :value="inputValue"
        @input="handleInputChange"
        @blur="validateAndUpdateValue"
        @keydown.enter="validateAndUpdateValue"
        aria-label="Enter value"
      />
    </div>
  </div>
</template>
