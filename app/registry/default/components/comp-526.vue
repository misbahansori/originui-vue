<script lang="ts" setup>
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/registry/default/ui/stepper";

const steps = [1, 2, 3, 4];
</script>

<template>
  <div class="space-y-8 text-center">
    <Stepper :default-value="2" orientation="vertical">
      <StepperItem
        v-for="step in steps"
        :key="step"
        :step="step"
        class="not-last:flex-1"
      >
        <StepperTrigger>
          <StepperIndicator />
        </StepperTrigger>
        <StepperSeparator v-if="step < steps.length" />
      </StepperItem>
    </Stepper>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Vertical stepper with numbers and checkmarks
    </p>
  </div>
</template>
