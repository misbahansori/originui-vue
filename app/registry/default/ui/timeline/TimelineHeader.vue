<script setup lang="ts">
import { cn } from "@/lib/utils";

defineProps<{
  class?: string;
}>();
</script>

<template>
  <div data-slot="timeline-header" :class="cn($props.class)">
    <slot />
  </div>
</template>
