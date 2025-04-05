<script setup lang="ts">
import { SelectLabel, type SelectLabelProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { cn } from "~/utils/utils";

const props = defineProps<
  SelectLabelProps & { class?: HTMLAttributes["class"] }
>();
</script>

<template>
  <SelectLabel
    data-slot="select-label"
    :class="
      cn(
        'text-muted-foreground py-1.5 ps-8 pe-2 text-xs font-medium',
        props.class,
      )
    "
  >
    <slot />
  </SelectLabel>
</template>
