<script setup lang="ts">
import { cn } from "@/lib/utils";
import { PaginationNext, type PaginationNextProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<PaginationNextProps & { class?: HTMLAttributes["class"] }>(),
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
  <PaginationNext v-bind="delegatedProps">
    <slot>
      <Button :class="cn('h-9 w-9 p-0', props.class)" variant="outline">
        <Icon name="lucide:chevron-right" aria-hidden="true" class="size-4" />
      </Button>
    </slot>
  </PaginationNext>
</template>
