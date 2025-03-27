<script lang="ts" setup>
import type { StepperIndicatorProps } from "reka-ui";
import { StepperIndicator, useForwardProps } from "reka-ui";
import { cn } from "~/utils/utils";

import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  StepperIndicatorProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <StepperIndicator
    v-bind="forwarded"
    :class="
      cn(
        'bg-muted text-muted-foreground data-[state=active]:bg-primary data-[state=completed]:bg-primary data-[state=active]:text-primary-foreground data-[state=completed]:text-primary-foreground relative flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium',
        props.class,
      )
    "
  >
    <slot />
  </StepperIndicator>
</template>
