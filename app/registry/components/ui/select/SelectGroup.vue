<script setup lang="ts">
import { SelectGroup, type SelectGroupProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  SelectGroupProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <SelectGroup :class="cn('w-full p-1', props.class)" v-bind="delegatedProps">
    <slot />
  </SelectGroup>
</template>
