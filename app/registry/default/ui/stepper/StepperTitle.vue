<script lang="ts" setup>
import { cn } from "@/lib/utils";
import type { StepperTitleProps } from "reka-ui";
import { StepperTitle, useForwardProps } from "reka-ui";

import { computed, type HTMLAttributes } from "vue";

const props = defineProps<StepperTitleProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <StepperTitle v-bind="forwarded" :class="cn('text-sm font-medium', props.class)">
    <slot />
  </StepperTitle>
</template>
