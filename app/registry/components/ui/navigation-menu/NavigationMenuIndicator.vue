<script setup lang="ts">
import {
  NavigationMenuIndicator,
  type NavigationMenuIndicatorProps,
  useForwardProps,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  NavigationMenuIndicatorProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <NavigationMenuIndicator
    v-bind="forwardedProps"
    :class="
      cn(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        props.class,
      )
    "
  >
    <div
      class="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md"
    />
  </NavigationMenuIndicator>
</template>
