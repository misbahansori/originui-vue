<script lang="ts" setup>
import { cn } from "@/lib/utils";
import { reactiveOmit } from "@vueuse/core";
import {
  CalendarHeader,
  type CalendarHeaderProps,
  useForwardProps,
} from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  CalendarHeaderProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarHeader
    data-slot="calendar-header"
    :class="
      cn('relative flex w-full items-center justify-center pt-1', props.class)
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeader>
</template>
