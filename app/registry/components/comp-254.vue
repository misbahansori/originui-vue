<script setup lang="ts">
import { useSliderWithInput } from "~/composables/useSliderWithInput";
import { cn } from "~/utils/utils";

const minValue = 0;
const maxValue = 2;
const initialValue = [1.25];
const defaultValue = [1];

const {
  sliderValue,
  inputValues,
  validateAndUpdateValue,
  handleInputChange,
  handleSliderChange,
  resetToDefault,
  showReset,
} = useSliderWithInput({ minValue, maxValue, initialValue, defaultValue });
</script>

<template>
  <div class="space-y-3">
    <div class="flex items-center justify-between gap-2">
      <Label>Temperature</Label>
      <div class="flex items-center gap-1">
        <TooltipProvider :delay-duration="0">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button
                size="icon"
                variant="ghost"
                :class="
                  cn(
                    'size-7 transition-opacity',
                    showReset ? 'opacity-100' : 'opacity-0',
                  )
                "
                aria-label="Reset"
                @click="resetToDefault"
              >
                <Icon name="lucide:rotate-ccw" size="16" aria-hidden="true" />
              </Button>
            </TooltipTrigger>
            <TooltipContent class="px-2 py-1 text-xs">
              Reset to default
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Input
          class="h-7 w-12 px-2 py-0"
          type="text"
          inputmode="decimal"
          :value="inputValues[0]"
          @input="(e: Event) => handleInputChange(e, 0)"
          @blur="() => validateAndUpdateValue(inputValues[0] ?? '', 0)"
          @keydown="
            (e: KeyboardEvent) => {
              if (e.key === 'Enter')
                validateAndUpdateValue(inputValues[0] ?? '', 0);
            }
          "
          aria-label="Enter value"
        />
      </div>
    </div>
    <div class="flex items-center gap-4">
      <Slider
        class="grow"
        v-model="sliderValue"
        :min="minValue"
        :max="maxValue"
        :step="0.01"
        aria-label="Temperature"
      />
    </div>
  </div>
</template>
