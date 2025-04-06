<script lang="ts" setup>
import {
  Stepper,
  StepperDescription,
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
    description: "Desc for step one",
  },
  {
    step: 2,
    title: "Step Two",
    description: "Desc for step two",
  },
  {
    step: 3,
    title: "Step Three",
    description: "Desc for step three",
  },
];
</script>

<template>
  <div class="space-y-8 text-center">
    <Stepper :default-value="2">
      <StepperItem
        v-for="{ step, title, description } in steps"
        :key="step"
        :step="step"
        class="max-md:items-start"
        :class="step !== steps.length ? 'flex-1' : ''"
      >
        <StepperTrigger class="gap-4 rounded max-md:flex-col">
          <StepperIndicator />
          <div class="text-center md:-order-1 md:text-left">
            <StepperTitle>{{ title }}</StepperTitle>
            <StepperDescription class="max-sm:hidden">
              {{ description }}
            </StepperDescription>
          </div>
        </StepperTrigger>
        <StepperSeparator
          v-if="step < steps.length"
          class="max-md:mt-3.5 md:mx-4"
        />
      </StepperItem>
    </Stepper>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Stepper with inline titles and descriptions
    </p>
  </div>
</template>
