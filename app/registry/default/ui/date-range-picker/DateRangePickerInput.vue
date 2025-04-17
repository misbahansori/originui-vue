<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  DateRangePickerInput,
  type DateRangePickerInputProps,
  useForwardProps,
} from "reka-ui";
import { type HTMLAttributes, computed } from "vue";

const props = defineProps<
  DateRangePickerInputProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DateRangePickerInput
    :class="
      cn(
        props.part === 'literal'
          ? 'text-muted-foreground/70'
          : 'data-[placeholder]:text-muted-foreground/70 focus:bg-muted rounded p-0.5 text-sm focus:shadow-black focus:outline-none',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </DateRangePickerInput>
</template>
