<script lang="ts" setup>
import { cn } from "@/lib/utils";
import type { StepperDescriptionProps } from "reka-ui";
import { StepperDescription, useForwardProps } from "reka-ui";

import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  StepperDescriptionProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <StepperDescription
    v-slot="slotProps"
    v-bind="forwarded"
    :class="cn('text-muted-foreground text-sm', props.class)"
  >
    <slot v-bind="slotProps" />
  </StepperDescription>
</template>
