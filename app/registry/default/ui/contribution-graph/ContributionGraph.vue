<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  colors?: string[];
}>();

// Provide colors to child components
provide("contributionGraphColors", props.colors);
</script>

<template>
  <div
    data-slot="contribution-graph"
    :class="cn('flex flex-1 gap-1', props.class)"
  >
    <slot />
  </div>
</template>
