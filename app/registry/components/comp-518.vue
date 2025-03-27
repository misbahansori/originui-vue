<template>
  <div class="mx-auto max-w-xl space-y-8 text-center">
    <Stepper :default-value="2">
      <StepperItem :step="1" class="not-last:flex-1">
        <StepperTrigger>
          <StepperIndicator as-child>
            <img
              class="rounded-full"
              src="/avatar-40-05.jpg"
              width="32"
              height="32"
              alt="Mike Palmer"
            />
          </StepperIndicator>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem :step="2" class="not-last:flex-1" loading>
        <StepperTrigger>
          <StepperIndicator />
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
      <StepperItem :step="3" class="not-last:flex-1">
        <StepperTrigger>
          <StepperIndicator as-child>
            <Icon name="lucide:shuffle" size="14" aria-hidden="true" />
            <span class="sr-only">Shuffle</span>
          </StepperIndicator>
        </StepperTrigger>
      </StepperItem>
    </Stepper>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Stepper with mixed elements
    </p>
  </div>
</template>
