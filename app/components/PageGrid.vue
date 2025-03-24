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
          '-m-px grid grid-cols-12 *:px-1 *:py-12 *:not-first:-ms-px *:not-first:-mt-px sm:*:px-8 xl:*:px-12',
          props.class,
        )
      "
    >
      <slot></slot>
    </div>
  </div>
</template>
