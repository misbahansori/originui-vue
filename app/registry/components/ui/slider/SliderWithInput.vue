<script setup lang="ts">
const props = defineProps<{
  label: string;
  minValue: number;
  maxValue: number;
  initialValue: number[];
  defaultValue: number[];
}>();

const {
  sliderValues,
  inputValues,
  validateAndUpdateValue,
  handleInputChange,
  handleSliderChange,
  resetToDefault,
} = useSliderWithInput(props);

defineExpose({
  resetToDefault,
});
</script>

<template>
  <div class="flex items-center gap-2">
    <Label class="text-muted-foreground text-xs">{{ label }}</Label>
    <Slider
      :model-value="sliderValues"
      :min="minValue"
      :max="maxValue"
      @update:model-value="
        (newValue) => newValue && handleSliderChange(newValue)
      "
      class="grow [&>:last-child>span]:rounded"
    />
    <Input
      class="h-8 w-12 px-2 py-1 text-center"
      type="text"
      inputmode="decimal"
      :model-value="inputValues[0]"
      @update:model-value="(newValue) => handleInputChange(0, newValue)"
      @blur="() => validateAndUpdateValue(inputValues[0] ?? '', 0)"
      @keydown="
        (e: KeyboardEvent) => {
          if (e.key === 'Enter')
            validateAndUpdateValue(inputValues[0] ?? '', 0);
        }
      "
    />
  </div>
</template>
