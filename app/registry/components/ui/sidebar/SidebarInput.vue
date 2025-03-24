<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Input } from "~/registry/components/ui/input";
import { cn } from "~/utils/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Input
    data-sidebar="input"
    :class="
      cn(
        'bg-background focus-visible:ring-sidebar-ring h-8 w-full shadow-none focus-visible:ring-2',
        props.class,
      )
    "
  >
    <slot />
  </Input>
</template>
