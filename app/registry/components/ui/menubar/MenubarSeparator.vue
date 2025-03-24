<script setup lang="ts">
import {
  MenubarSeparator,
  type MenubarSeparatorProps,
  useForwardProps,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  MenubarSeparatorProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <MenubarSeparator
    :class="cn('bg-muted -mx-1 my-1 h-px', props.class)"
    v-bind="forwardedProps"
  />
</template>
