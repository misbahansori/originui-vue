<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  level?: number;
}>();

const getColor = computed(() => {
  const level = props.level || 0;
  if (level === 0) return "bg-muted";
  if (level === 1) return "bg-green-100 dark:bg-green-900/30";
  if (level === 2) return "bg-green-200 dark:bg-green-900/50";
  if (level === 3) return "bg-green-300 dark:bg-green-800/60";
  if (level === 4) return "bg-green-400 dark:bg-green-600/70";
  if (level === 5) return "bg-green-500 dark:bg-green-500/80";
  return "bg-green-600 dark:bg-green-400";
});
</script>

<template>
  <div
    data-slot="contribution-graph-block"
    :class="
      cn(
        'border-border/30 size-3 rounded border-[0.5px]',
        getColor,
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
