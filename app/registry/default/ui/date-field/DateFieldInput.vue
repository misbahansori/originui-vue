<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  DateFieldInput,
  useForwardProps,
  type DateFieldInputProps,
} from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  DateFieldInputProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <DateFieldInput
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
  </DateFieldInput>
</template>
