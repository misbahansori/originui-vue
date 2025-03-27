<script lang="ts" setup>
import type { StepperTriggerProps } from "reka-ui";
import { StepperTrigger, useForwardProps } from "reka-ui";
import { cn } from "~/utils/utils";

import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  StepperTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <StepperTrigger
    v-bind="forwarded"
    :class="
      cn(
        'focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center gap-3 rounded-full outline-none focus-visible:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
        props.class,
      )
    "
  >
    <slot />
  </StepperTrigger>
</template>
