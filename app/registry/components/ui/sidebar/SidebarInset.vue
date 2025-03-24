<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <main
    :class="
      cn(
        'bg-background relative flex min-h-svh flex-1 flex-col',
        'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2',
        props.class,
      )
    "
  >
    <slot />
  </main>
</template>
