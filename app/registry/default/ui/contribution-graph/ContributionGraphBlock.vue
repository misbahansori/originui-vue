<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  level?: number;
  colors?: string[];
}>();

// Default color scheme (GitHub-style green)
const defaultColors = [
  "bg-muted", // level 0
  "bg-green-100 dark:bg-green-900/30", // level 1
  "bg-green-200 dark:bg-green-900/50", // level 2
  "bg-green-300 dark:bg-green-800/60", // level 3
  "bg-green-400 dark:bg-green-600/70", // level 4
  "bg-green-500 dark:bg-green-500/80", // level 5
  "bg-green-600 dark:bg-green-400", // level 6
];

// Inject colors from parent ContributionGraph (if provided)
const injectedColors = inject<string[] | undefined>(
  "contributionGraphColors",
  undefined,
);

const getColor = computed(() => {
  const level = props.level || 0;
  // Priority: prop colors > injected colors > default colors
  const colors = props.colors || injectedColors || defaultColors;
  return colors[level] || colors[colors.length - 1];
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
