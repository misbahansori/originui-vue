<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { PrimitiveProps } from "reka-ui";
import { Primitive } from "reka-ui";
import type { HTMLAttributes } from "vue";

interface Props extends PrimitiveProps {
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
});
</script>

<template>
  <Primitive
    data-slot="snippet-header"
    :as="as"
    :as-child="asChild"
    :class="
      cn('bg-secondary flex flex-row items-center justify-between border-b p-1.5', props.class)
    "
  >
    <slot />
  </Primitive>
</template>
