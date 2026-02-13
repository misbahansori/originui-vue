<script lang="ts" setup>
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
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
];
</script>

<template>
  <div class="space-y-8 text-center">
    <Stepper :default-value="2">
      <StepperItem
        v-for="{ step, title } in steps"
        :key="step"
        :step="step"
        class="max-md:items-start"
        :class="step !== steps.length ? 'flex-1' : ''"
      >
        <StepperTrigger class="rounded max-md:flex-col">
          <StepperIndicator />
          <div class="text-center md:text-left">
            <StepperTitle>{{ title }}</StepperTitle>
          </div>
        </StepperTrigger>
        <StepperSeparator v-if="step < steps.length" class="max-md:mt-3.5 md:mx-4" />
      </StepperItem>
    </Stepper>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Stepper with inline titles
    </p>
  </div>
</template>
