<script lang="ts" setup>
import { cn } from "@/lib/utils";
import type { StepperItemProps } from "reka-ui";
import { StepperItem, useForwardProps } from "reka-ui";

import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  StepperItemProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <StepperItem
    v-slot="slotProps"
    v-bind="forwarded"
    :class="
      cn(
        'group/step flex items-center group-data-[orientation=horizontal]/stepper:flex-row group-data-[orientation=vertical]/stepper:flex-col',
        props.class,
      )
    "
  >
    <slot v-bind="slotProps" />
  </StepperItem>
</template>
