<script lang="ts" setup>
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
        class="relative flex-1 flex-col!"
      >
        <StepperTrigger class="flex-col gap-3 rounded">
          <StepperIndicator />
          <div class="space-y-0.5 px-2">
            <StepperTitle>{{ title }}</StepperTitle>
            <StepperDescription class="max-sm:hidden">
              {{ description }}
            </StepperDescription>
          </div>
        </StepperTrigger>
        <StepperSeparator
          v-if="step < steps.length"
          class="absolute inset-x-0 top-3 left-[calc(50%+0.75rem+0.125rem)] -order-1 m-0 -translate-y-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none"
        />
      </StepperItem>
    </Stepper>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Stepper with titles and descriptions
    </p>
  </div>
</template>
