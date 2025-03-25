import { ref, computed } from "vue";

interface UseSliderWithInputProps {
  minValue?: number;
  maxValue?: number;
  initialValue?: number[];
  defaultValue?: number[];
}

export function useSliderWithInput({
  minValue = 0,
  maxValue = 100,
  initialValue = [minValue],
  defaultValue = [minValue],
}: UseSliderWithInputProps) {
  // Ensure defaultValue is always an array
  const defaultVals = defaultValue || [minValue];
  const sliderValue = ref(initialValue);
  const inputValues = ref(initialValue.map((v) => v.toString()));

  const showReset = computed(() => {
    return !sliderValue.value.every((val, i) => {
      const defaultVal = i < defaultVals.length ? defaultVals[i] : minValue;
      return val === defaultVal;
    });
  });

  const validateAndUpdateValue = (inputValue: string, index: number) => {
    let parsedValue = parseFloat(inputValue);

    if (isNaN(parsedValue)) {
      // Reset to current slider value if input is invalid
      inputValues.value[index] = sliderValue.value[index]?.toString() || "";
      return;
    }

    // Clamp value between min and max
    parsedValue = Math.max(minValue, Math.min(maxValue, parsedValue));

    // Update both the input field and slider
    inputValues.value[index] = parsedValue.toString();
    const newSliderValue = [...sliderValue.value];
    newSliderValue[index] = parsedValue;
    sliderValue.value = newSliderValue;
  };

  const handleInputChange = (event: Event, index: number) => {
    const target = event.target as HTMLInputElement;
    inputValues.value[index] = target.value;
  };

  const handleSliderChange = (newValue: number[]) => {
    sliderValue.value = newValue;
    inputValues.value = newValue.map((v) => v.toString());
  };

  const resetToDefault = () => {
    sliderValue.value = [...defaultVals];
    inputValues.value = defaultVals.map((v) => v.toString());
  };

  return {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
    resetToDefault,
    showReset,
  };
}
