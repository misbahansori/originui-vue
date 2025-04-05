<script setup lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from "reka-ui";
import { ComboboxItem, useForwardPropsEmits } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  ComboboxItemProps & { class?: HTMLAttributes["class"] }
>();
const emits = defineEmits<ComboboxItemEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <ComboboxItem
    v-bind="forwarded"
    :class="
      cn(
        'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
        props.class,
      )
    "
  >
    <slot />
  </ComboboxItem>
</template>
