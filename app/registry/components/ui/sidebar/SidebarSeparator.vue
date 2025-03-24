<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Separator } from "~/registry/components/ui/separator";
import { cn } from "~/utils/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Separator
    data-sidebar="separator"
    :class="cn('bg-sidebar-border mx-2 w-auto', props.class)"
  >
    <slot />
  </Separator>
</template>
