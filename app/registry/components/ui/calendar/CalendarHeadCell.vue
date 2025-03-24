<script lang="ts" setup>
import {
  CalendarHeadCell,
  type CalendarHeadCellProps,
  useForwardProps,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  CalendarHeadCellProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <CalendarHeadCell
    :class="
      cn(
        'text-muted-foreground w-9 rounded-md text-[0.8rem] font-normal',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeadCell>
</template>
