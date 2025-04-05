<script setup lang="ts">
import { cn } from "~/utils/utils";

defineProps<{
  class?: string;
}>();
</script>

<template>
  <h3
    data-slot="timeline-title"
    :class="cn('text-sm font-medium', $props.class)"
  >
    <slot />
  </h3>
</template>
