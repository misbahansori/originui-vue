<script lang="ts" setup>
import { Button } from "@/registry/default/ui/button";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTrigger,
} from "@/registry/default/ui/stepper";
import { ref } from "vue";

const steps = [1, 2, 3, 4];
const currentStep = ref(1);
</script>

<template>
  <div class="mx-auto max-w-xl space-y-8 text-center">
    <div class="space-y-3">
      <Stepper v-model="currentStep">
        <StepperItem v-for="step in steps" :key="step" :step="step" class="flex-1">
          <StepperTrigger class="w-full flex-col items-start gap-2" as-child>
            <StepperIndicator class="bg-border h-2 w-full rounded-none">
              <span class="sr-only">{{ step }}</span>
            </StepperIndicator>
          </StepperTrigger>
        </StepperItem>
      </Stepper>
      <div class="text-muted-foreground text-sm font-medium tabular-nums">
        Step {{ currentStep }} of {{ steps.length }}
      </div>
    </div>
    <div class="flex justify-center space-x-4">
      <Button
        variant="outline"
        class="w-32"
        @click="currentStep = currentStep - 1"
        :disabled="currentStep === 1"
      >
        Prev step
      </Button>
      <Button
        variant="outline"
        class="w-32"
        @click="currentStep = currentStep + 1"
        :disabled="currentStep >= steps.length"
      >
        Next step
      </Button>
    </div>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Progress stepper
    </p>
  </div>
</template>
