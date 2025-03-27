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
        :class="step !== steps.length ? 'flex-1' : ''"
      >
        <StepperTrigger>
          <StepperIndicator>{{ step }}</StepperIndicator>
        </StepperTrigger>
        <StepperSeparator v-if="step < steps.length" />
      </StepperItem>
    </Stepper>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Stepper with numbers only
    </p>
  </div>
</template>
