<script setup lang="ts">
import { cn } from "@/lib/utils";

defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    data-slot="timeline-content"
    :class="cn('text-muted-foreground text-sm', $props.class)"
  >
    <slot />
  </div>
</template>
