<script setup lang="ts">
import type { RegistryItem } from "~/utils/component-utils";
import { cn } from "~/utils/utils";

interface Props {
  component: RegistryItem;
  isSearchPage?: boolean;
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    :class="
      cn(
        'group bg-card text-card-foreground relative flex flex-col overflow-hidden rounded-lg border shadow',
        props.class,
      )
    "
  >
    <div class="p-2">
      <slot></slot>
    </div>
  </div>
</template>
