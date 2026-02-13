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
    <Stepper :default-value="2" orientation="vertical">
      <StepperItem
        v-for="{ step, title, description } in steps"
        :key="step"
        :step="step"
        class="relative items-start not-last:flex-1"
      >
        <StepperTrigger class="items-start rounded pb-12 last:pb-0">
          <StepperIndicator />
          <div class="mt-0.5 space-y-0.5 px-2 text-left">
            <StepperTitle>{{ title }}</StepperTitle>
            <StepperDescription>{{ description }}</StepperDescription>
          </div>
        </StepperTrigger>
        <StepperSeparator
          v-if="step < steps.length"
          class="absolute inset-y-0 top-[calc(1.5rem+0.125rem)] left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]"
        />
      </StepperItem>
    </Stepper>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
      Vertical stepper with inline titles and descriptions
    </p>
  </div>
</template>
