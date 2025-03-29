<script setup lang="ts">
import { PaginationPrev, type PaginationPrevProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  PaginationPrevProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <slot />
  </PaginationPrev>
</template>
