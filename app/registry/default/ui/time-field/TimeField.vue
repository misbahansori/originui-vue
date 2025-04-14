<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  TimeFieldRoot,
  useForwardPropsEmits,
  type TimeFieldRootEmits,
  type TimeFieldRootProps,
} from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  TimeFieldRootProps & {
    class?: HTMLAttributes["class"];
  }
>();

const emits = defineEmits<TimeFieldRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>
<template>
  <TimeFieldRoot
    v-bind="forwarded"
    v-slot="slotProps"
    :class="
      cn(
        'border-input bg-background text-foreground focus-within:border-ring focus-within:ring-ring/50 flex h-9 items-center rounded-md border px-3 shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]',
        props.class,
      )
    "
  >
    <slot v-bind="slotProps" />
  </TimeFieldRoot>
</template>
