<script setup lang="ts">
import { NumberFieldInput } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

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
