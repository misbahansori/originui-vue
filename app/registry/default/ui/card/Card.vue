<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'bg-card text-card-foreground rounded-lg border shadow-sm',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
