<script setup lang="ts">
import { cn } from "@/lib/utils";
import { NumberFieldInput } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <NumberFieldInput
    data-slot="input"
    :class="
      cn(
        'bg-background text-foreground flex-1 px-3 py-2 tabular-nums focus:outline-none',
        props.class,
      )
    "
  />
</template>
