<script setup lang="ts">
import { cn } from "@/lib/utils";
import { PaginationPrev, type PaginationPrevProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<PaginationPrevProps & { class?: HTMLAttributes["class"] }>(),
  {
    asChild: true,
  },
);
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <slot>
      <Button :class="cn('h-9 w-9 p-0', props.class)" variant="outline">
        <Icon name="lucide:chevron-left" aria-hidden="true" class="size-4" />
      </Button>
    </slot>
  </PaginationPrev>
</template>
