<script lang="ts" setup>
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/default/ui/button";
import {
  CalendarCellTrigger,
  type CalendarCellTriggerProps,
  useForwardProps,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  CalendarCellTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarCellTrigger
    :class="
      cn(
        buttonVariants({ variant: 'ghost' }),
        'h-9 w-9 p-0 font-normal',
        // Today
        'data-today:after:bg-primary-foreground data-today:not-data-selected:after:bg-primary data-today:data-unavailable:after:bg-muted-foreground data-today:data-disabled:after:bg-muted-foreground data-today:after:absolute data-today:after:bottom-1 data-today:after:left-1/2 data-today:after:z-10 data-today:after:size-[3px] data-today:after:translate-x-[-50%] data-today:after:rounded-full data-today:after:transition-colors data-today:after:content-[\'\']',
        // Selected
        'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground data-[selected]:opacity-100',
        // Disabled
        'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
        // Unavailable
        'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
        // Outside months
        'data-[outside-view]:text-muted-foreground [&[data-outside-view][data-selected]]:bg-accent/50 [&[data-outside-view][data-selected]]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:opacity-30',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
