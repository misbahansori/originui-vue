<script setup lang="ts">
import {
  MenubarTrigger,
  type MenubarTriggerProps,
  useForwardProps,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  MenubarTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <MenubarTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none select-none',
        props.class,
      )
    "
  >
    <slot />
  </MenubarTrigger>
</template>
