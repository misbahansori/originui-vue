<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn('flex flex-col-reverse gap-3 sm:flex-row sm:justify-end', props.class)
    "
  >
    <slot />
  </div>
</template>
