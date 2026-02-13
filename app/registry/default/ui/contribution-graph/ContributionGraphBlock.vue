<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  level?: number;
  colors?: string[];
}>();

const defaultColors = [
  "bg-muted",
  "bg-green-100 dark:bg-green-900/30",
  "bg-green-200 dark:bg-green-900/50",
  "bg-green-300 dark:bg-green-800/60",
  "bg-green-400 dark:bg-green-600/70",
  "bg-green-500 dark:bg-green-500/80",
  "bg-green-600 dark:bg-green-400",
];

const getColor = computed(() => {
  const level = props.level || 0;
  const colors = props.colors || defaultColors;
  return colors[level] || colors[colors.length - 1];
});
</script>

<template>
  <div
    data-slot="contribution-graph-block"
    :class="cn('border-border/30 size-3 rounded border-[0.5px]', getColor, props.class)"
  >
    <slot />
  </div>
</template>
