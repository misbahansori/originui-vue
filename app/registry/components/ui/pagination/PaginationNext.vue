<script setup lang="ts">
import { PaginationNext, type PaginationNextProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  PaginationNextProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationNext v-bind="delegatedProps">
    <slot />
  </PaginationNext>
</template>
