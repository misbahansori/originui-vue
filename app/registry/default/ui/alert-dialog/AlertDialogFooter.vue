<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    data-slot="alert-dialog-footer"
    :class="
      cn('flex flex-col-reverse gap-3 sm:flex-row sm:justify-end', props.class)
    "
  >
    <slot />
  </div>
</template>
