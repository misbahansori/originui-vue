<script setup lang="ts">
import { cn } from "~/utils/utils";

defineProps<{
  class?: string;
}>();
</script>

<template>
  <time
    data-slot="timeline-date"
    :class="
      cn(
        'text-muted-foreground mb-1 block text-xs font-medium group-data-[orientation=vertical]/timeline:max-sm:h-4',
        $props.class,
      )
    "
  >
    <slot />
  </time>
</template>
