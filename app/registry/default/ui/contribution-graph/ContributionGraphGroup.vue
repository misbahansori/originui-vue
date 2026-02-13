<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div data-slot="contribution-graph-group" :class="cn('flex flex-col gap-1', props.class)">
    <slot />
  </div>
</template>
