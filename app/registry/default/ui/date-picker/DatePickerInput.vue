<script setup lang="ts">
import { cn } from "@/lib/utils";
import { DatePickerInput, type DatePickerInputProps, useForwardProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<DatePickerInputProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <DatePickerInput
    v-bind="forwarded"
    :class="
      cn(
        props.part === 'literal'
          ? 'text-muted-foreground/70'
          : 'data-[placeholder]:text-muted-foreground/70 focus:bg-muted rounded p-0.5 text-sm focus:shadow-black focus:outline-none',
        props.class,
      )
    "
  >
    <slot />
  </DatePickerInput>
</template>
