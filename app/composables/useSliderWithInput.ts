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
  const sliderValues = ref(initialValue);
  const inputValues = ref(initialValue.map((v) => v.toString()));

  const showReset = computed(() => {
    return (
      sliderValues.value.length === defaultValue.length &&
      !sliderValues.value.every((value, index) => value === defaultValue[index])
    );
  });

  const validateAndUpdateValue = (rawValue: string, index: number) => {
    if (rawValue === "" || rawValue === "-") {
      const newInputValues = [...inputValues.value];
      newInputValues[index] = "0";
      inputValues.value = newInputValues;

      const newSliderValues = [...sliderValues.value];
      newSliderValues[index] = 0;
      sliderValues.value = newSliderValues;
      return;
    }

    const numValue = parseFloat(rawValue);

    if (isNaN(numValue)) {
      const newInputValues = [...inputValues.value];
      newInputValues[index] = sliderValues.value[index]!.toString();
      inputValues.value = newInputValues;
      return;
    }

    let clampedValue = Math.min(maxValue, Math.max(minValue, numValue));

    if (sliderValues.value.length > 1) {
      if (index === 0) {
        clampedValue = Math.min(clampedValue, sliderValues.value[1]!);
      } else {
        clampedValue = Math.max(clampedValue, sliderValues.value[0]!);
      }
    }

    const newSliderValues = [...sliderValues.value];
    newSliderValues[index] = clampedValue;
    sliderValues.value = newSliderValues;

    const newInputValues = [...inputValues.value];
    newInputValues[index] = clampedValue.toString();
    inputValues.value = newInputValues;
  };

  const handleInputChange = (index: number, newValue: string | number) => {
    if (newValue === "" || /^-?\d*\.?\d*$/.test(newValue.toString())) {
      const newInputValues = [...inputValues.value];
      newInputValues[index] = newValue.toString();
      inputValues.value = newInputValues;
    }
  };

  const handleSliderChange = (newValue: number[]) => {
    sliderValues.value = newValue;
    inputValues.value = newValue.map((v) => v.toString());
  };

  const resetToDefault = () => {
    sliderValues.value = [...defaultValue];
    inputValues.value = defaultValue.map((v) => v.toString());
  };

  return {
    sliderValues,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
    resetToDefault,
    showReset,
  };
}
