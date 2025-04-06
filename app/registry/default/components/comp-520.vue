<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTrigger,
} from "@/registry/default/ui/stepper";
import { ref } from "vue";

const steps = [1, 2, 3, 4];
const currentStep = ref(2);
</script>

<template>
  <div class="mx-auto max-w-xl space-y-8 text-center">
    <div class="flex items-center gap-2">
      <Button
        class="shrink-0"
        variant="ghost"
        size="icon"
        @click="currentStep = currentStep - 1"
        :disabled="currentStep === 1"
        aria-label="Prev step"
      >
        <Icon name="lucide:chevron-left" aria-hidden="true" class="size-4" />
      </Button>
      <Stepper v-model="currentStep" class="gap-1">
        <StepperItem
          v-for="step in steps"
          :key="step"
          :step="step"
          class="flex-1"
        >
          <StepperTrigger class="w-full flex-col items-start gap-2" as-child>
            <StepperIndicator class="bg-border h-1 w-full">
              <span class="sr-only">{{ step }}</span>
            </StepperIndicator>
          </StepperTrigger>
        </StepperItem>
      </Stepper>
      <Button
        class="shrink-0"
        variant="ghost"
        size="icon"
        @click="currentStep = currentStep + 1"
        :disabled="currentStep === steps.length"
        aria-label="Next step"
      >
        <Icon name="lucide:chevron-right" aria-hidden="true" class="size-4" />
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
