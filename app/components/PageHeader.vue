<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  title: string;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('mb-16 text-center', props.class)">
    <h1
      class="font-heading text-foreground mb-3 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]"
    >
      {{ title }}
    </h1>
    <p class="text-muted-foreground mx-auto max-w-3xl text-lg">
      <slot></slot>
    </p>
  </div>
</template>
