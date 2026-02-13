<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

const minValue = 0;
const maxValue = 100;
const initialValue = [25];

const { sliderValues, inputValues, validateAndUpdateValue, handleInputChange, handleSliderChange } =
  useSliderWithInput({ minValue, maxValue, initialValue });
</script>

<template>
  <div class="*:not-first:mt-4">
    <Label>Vertical slider with input</Label>
    <div class="flex h-40 flex-col items-center justify-center gap-4">
      <Slider
        class="data-[orientation=vertical]:min-h-0"
        :model-value="sliderValues"
        :min="minValue"
        :max="maxValue"
        orientation="vertical"
        aria-label="Slider with input"
        @update:model-value="handleSliderChange"
      />
      <Input
        class="h-8 w-11 px-2 py-1 text-center"
        type="text"
        inputmode="decimal"
        :model-value="inputValues[0]"
        @update:model-value="(newValue) => handleInputChange(0, newValue)"
        @blur="() => validateAndUpdateValue(inputValues[0] ?? '', 0)"
        @keydown.enter="validateAndUpdateValue(inputValues[0] ?? '', 0)"
        aria-label="Enter value"
      />
    </div>
  </div>
</template>
