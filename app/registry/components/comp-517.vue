<script lang="ts" setup>
import { ref } from "vue";
import { Button } from "~/registry/components/ui/button";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "~/registry/components/ui/stepper";

const steps = [1, 2, 3, 4];
const currentStep = ref(2);
const isLoading = ref(false);

const setCurrentStep = (step: number) => {
  currentStep.value = step;
};

const handleNextStep = () => {
  isLoading.value = true;
  setTimeout(() => {
    setCurrentStep(currentStep.value + 1);
    isLoading.value = false;
  }, 1000);
};
</script>

<template>
  <div class="mx-auto max-w-xl space-y-8 text-center">
    <Stepper :value="currentStep" @value-change="setCurrentStep">
      <StepperItem
        v-for="step in steps"
        :key="step"
        :step="step"
        class="not-last:flex-1"
        :loading="isLoading"
      >
        <StepperTrigger as-child>
          <StepperIndicator />
        </StepperTrigger>
        <StepperSeparator v-if="step < steps.length" />
      </StepperItem>
    </Stepper>
    <div class="flex justify-center space-x-4">
      <Button
        variant="outline"
        class="w-32"
        @click="setCurrentStep(currentStep - 1)"
        :disabled="currentStep === 1"
      >
        Prev step
      </Button>
      <Button
        variant="outline"
        class="w-32"
        @click="handleNextStep"
        :disabled="currentStep > steps.length"
      >
        Next step
      </Button>
    </div>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Controlled stepper with checkmarks and loading state
    </p>
  </div>
</template>
