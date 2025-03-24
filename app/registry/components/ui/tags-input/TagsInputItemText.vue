<script setup lang="ts">
import {
  TagsInputItemText,
  type TagsInputItemTextProps,
  useForwardProps,
} from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  TagsInputItemTextProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <TagsInputItemText
    v-bind="forwardedProps"
    :class="cn('rounded bg-transparent px-2 py-1 text-sm', props.class)"
  />
</template>
