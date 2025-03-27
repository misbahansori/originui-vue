<script lang="ts" setup>
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { ref } from "vue";
import { Button } from "~/registry/components/ui/button";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTrigger,
} from "~/registry/components/ui/stepper";

const steps = [1, 2, 3, 4];
const currentStep = ref(2);

const setCurrentStep = (step: number) => {
  currentStep.value = step;
};
</script>

<template>
  <div class="mx-auto max-w-xl space-y-8 text-center">
    <div class="flex items-center gap-2">
      <Button
        class="shrink-0"
        variant="ghost"
        size="icon"
        @click="setCurrentStep(currentStep - 1)"
        :disabled="currentStep === 1"
        aria-label="Prev step"
      >
        <ChevronLeft :size="16" aria-hidden="true" />
      </Button>
      <Stepper
        :value="currentStep"
        @value-change="setCurrentStep"
        class="gap-1"
      >
        <StepperItem
          v-for="step in steps"
          :key="step"
          :step="step"
          class="flex-1"
        >
          <StepperTrigger class="w-full flex-col items-start gap-2" as-child>
            <StepperIndicator as-child class="bg-border h-1 w-full">
              <span class="sr-only">{{ step }}</span>
            </StepperIndicator>
          </StepperTrigger>
        </StepperItem>
      </Stepper>
      <Button
        class="shrink-0"
        variant="ghost"
        size="icon"
        @click="setCurrentStep(currentStep + 1)"
        :disabled="currentStep === steps.length"
        aria-label="Next step"
      >
        <ChevronRight :size="16" aria-hidden="true" />
      </Button>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Paginated stepper
    </p>
  </div>
</template>
