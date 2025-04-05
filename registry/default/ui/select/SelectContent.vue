<script setup lang="ts">
import {
  SelectContent,
  type SelectContentEmits,
  type SelectContentProps,
  SelectPortal,
  SelectViewport,
  useForwardPropsEmits,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";
import { SelectScrollDownButton, SelectScrollUpButton } from ".";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<SelectContentProps & { class?: HTMLAttributes["class"] }>(),
  {
    position: "popper",
  },
);
const emits = defineEmits<SelectContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SelectPortal>
    <SelectContent
      data-slot="select-content"
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'border-input bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-[min(24rem,var(--reka-select-content-available-height))] min-w-32 overflow-hidden rounded-md border shadow-lg [&_[role=group]]:py-1',
          position === 'popper' &&
            'w-full min-w-[var(--reka-select-trigger-width)] data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          props.class,
        )
      "
    >
      <SelectScrollUpButton />
      <SelectViewport
        :class="
          cn(
            'p-1',
            position === 'popper' && 'h-[var(--reka-select-trigger-height)]',
          )
        "
      >
        <slot />
      </SelectViewport>
      <SelectScrollDownButton />
    </SelectContent>
  </SelectPortal>
</template>
