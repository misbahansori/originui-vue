<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { ChevronsLeft } from "lucide-vue-next";
import { PaginationFirst, type PaginationFirstProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<PaginationFirstProps & { class?: HTMLAttributes["class"] }>(),
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
  <PaginationFirst v-bind="delegatedProps">
    <slot>
      <Button :class="cn('h-9 w-9 p-0', props.class)" variant="outline">
        <ChevronsLeft class="h-4 w-4" />
      </Button>
    </slot>
  </PaginationFirst>
</template>
