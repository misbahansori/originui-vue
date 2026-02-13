<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { LucideRotateCcw } from "lucide-vue-next";

const minValue = 0;
const maxValue = 2;
const initialValue = [1.25];
const defaultValue = [1];

const {
  sliderValues,
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
                :class="cn('size-7 transition-opacity', showReset ? 'opacity-100' : 'opacity-0')"
                aria-label="Reset"
                @click="resetToDefault"
              >
                <LucideRotateCcw :size="16" aria-hidden="true" />
              </Button>
            </TooltipTrigger>
            <TooltipContent class="px-2 py-1 text-xs">Reset to default</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Input
          class="h-7 w-12 px-2 py-0"
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
    <div class="flex items-center gap-4">
      <Slider
        class="grow"
        :model-value="sliderValues"
        @update:model-value="handleSliderChange"
        :min="minValue"
        :max="maxValue"
        :step="0.01"
        aria-label="Temperature"
      />
    </div>
  </div>
</template>
