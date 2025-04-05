<script setup lang="ts">
import { cn } from "~/utils/utils";

defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    data-slot="timeline-indicator"
    :class="
      cn(
        'border-primary/20 group-data-completed/timeline-item:border-primary absolute size-4 rounded-full border-2 group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:left-0 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:top-0 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:-translate-x-1/2',
        $props.class,
      )
    "
    aria-hidden="true"
  >
    <slot />
  </div>
</template>
