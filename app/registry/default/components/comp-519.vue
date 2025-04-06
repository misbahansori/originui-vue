<script setup lang="ts">
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTitle,
  StepperTrigger,
} from "@/registry/default/ui/stepper";

const steps = [
  {
    step: 1,
    title: "Step One",
  },
  {
    step: 2,
    title: "Step Two",
  },
  {
    step: 3,
    title: "Step Three",
  },
  {
    step: 4,
    title: "Step Four",
  },
];
</script>

<template>
  <div class="mx-auto max-w-xl space-y-8 text-center">
    <Stepper :default-value="2" class="items-start gap-4">
      <StepperItem
        v-for="{ step, title } in steps"
        :key="step"
        :step="step"
        class="flex-1"
      >
        <StepperTrigger class="w-full flex-col items-start gap-2 rounded">
          <StepperIndicator class="bg-border h-1 w-full">
            <span class="sr-only">{{ step }}</span>
          </StepperIndicator>
          <div class="space-y-0.5">
            <StepperTitle>{{ title }}</StepperTitle>
          </div>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Stepper with labels
    </p>
  </div>
</template>
