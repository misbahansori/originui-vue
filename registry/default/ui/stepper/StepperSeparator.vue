<script lang="ts" setup>
import type { StepperSeparatorProps } from "reka-ui";
import { StepperSeparator, useForwardProps } from "reka-ui";
import { cn } from "~/utils/utils";

import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  StepperSeparatorProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <StepperSeparator
    v-bind="forwarded"
    :class="
      cn(
        'bg-muted group-data-[state=completed]/step:bg-primary m-0.5 group-data-[orientation=horizontal]/stepper:h-0.5 group-data-[orientation=horizontal]/stepper:w-full group-data-[orientation=horizontal]/stepper:flex-1 group-data-[orientation=vertical]/stepper:h-12 group-data-[orientation=vertical]/stepper:w-0.5',
        props.class,
      )
    "
  />
</template>
