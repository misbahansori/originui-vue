<script setup lang="ts">
import { cn } from "@/lib/utils";
import { ToastAction, type ToastActionProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  ToastActionProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <ToastAction
    v-bind="delegatedProps"
    :class="
      cn(
        !props.asChild &&
          'hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 hover:group-[.destructive]:border-destructive/30 hover:group-[.destructive]:bg-destructive focus:group-[.destructive]:ring-destructive focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-[color,box-shadow] outline-none hover:group-[.destructive]:text-white focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50',
        props.class,
      )
    "
  >
    <slot />
  </ToastAction>
</template>
