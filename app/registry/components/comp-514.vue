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
          <StepperIndicator>
            <span
              class="transition-all group-data-loading/step:scale-0 group-data-loading/step:opacity-0 group-data-loading/step:transition-none group-data-[state=completed]/step:scale-0 group-data-[state=completed]/step:opacity-0"
            >
              {{ step }}
            </span>
            <Icon
              name="lucide:check"
              class="absolute size-4 scale-0 opacity-0 transition-all group-data-[state=completed]/step:scale-100 group-data-[state=completed]/step:opacity-100"
              aria-hidden="true"
            />
          </StepperIndicator>
        </StepperTrigger>
        <StepperSeparator v-if="step < steps.length" />
      </StepperItem>
    </Stepper>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Stepper with numbers and checkmarks
    </p>
  </div>
</template>
