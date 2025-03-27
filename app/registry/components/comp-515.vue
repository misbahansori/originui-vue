<script lang="ts" setup>
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "~/registry/components/ui/stepper";

const steps = [1, 2, 3, 4];
</script>

<template>
  <div class="mx-auto max-w-xl space-y-8 text-center">
    <Stepper :default-value="2">
      <StepperItem
        v-for="step in steps"
        :key="step"
        :step="step"
        class="not-last:flex-1"
      >
        <StepperTrigger>
          <StepperIndicator
            class="data-[state=active]:border-primary size-4 data-[state=active]:border-2 data-[state=active]:bg-transparent [&_span]:sr-only [&_svg]:size-3"
          />
        </StepperTrigger>
        <StepperSeparator v-if="step < steps.length" />
      </StepperItem>
    </Stepper>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Stepper with tiny buttons and checkmarks
    </p>
  </div>
</template>
