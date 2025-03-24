<script setup lang="ts">
import { cn } from "~/utils/utils";

interface Props {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="overflow-hidden">
    <div
      :class="
        cn(
          'grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
          props.class,
        )
      "
    >
      <slot></slot>
    </div>
  </div>
</template>
