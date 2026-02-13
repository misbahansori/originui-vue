<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  DateFieldRoot,
  useForwardPropsEmits,
  type DateFieldRootEmits,
  type DateFieldRootProps,
} from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<DateFieldRootProps & { class?: HTMLAttributes["class"] }>();

const emits = defineEmits<DateFieldRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DateFieldRoot
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
  </DateFieldRoot>
</template>
