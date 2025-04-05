<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <h5 :class="cn('mb-1 leading-none font-medium tracking-tight', props.class)">
    <slot />
  </h5>
</template>
