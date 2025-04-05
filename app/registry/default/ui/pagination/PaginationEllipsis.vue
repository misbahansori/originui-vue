<script setup lang="ts">
import { cn } from "@/lib/utils";
import { PaginationEllipsis, type PaginationEllipsisProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  PaginationEllipsisProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationEllipsis
    v-bind="delegatedProps"
    :class="cn('flex h-9 w-9 items-center justify-center', props.class)"
  >
    <slot>
      <Icon name="lucide:ellipsis" aria-hidden="true" class="size-4" />
      <span class="sr-only">More pages</span>
    </slot>
  </PaginationEllipsis>
</template>
