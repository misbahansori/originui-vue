<script setup lang="ts">
import { cn } from "@/lib/utils";
import { LucideChevronDown } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  hasChildren?: boolean;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <span
    data-slot="tree-item-label"
    :class="
      cn(
        'in-focus-visible:ring-ring/50 bg-background hover:bg-accent in-data-[selected]:bg-accent in-data-[selected]:text-accent-foreground in-data-[drag-target=true]:bg-accent flex items-center gap-1 rounded-sm px-2 py-1.5 text-sm transition-colors not-in-data-[folder=true]:ps-7 in-focus-visible:ring-[3px] in-data-[search-match=true]:bg-blue-50! [&_svg]:pointer-events-none [&_svg]:shrink-0',
        props.class,
      )
    "
  >
    <template v-if="hasChildren">
      <LucideChevronDown class="text-muted-foreground size-4 in-aria-[expanded=false]:-rotate-90" />
    </template>
    <slot />
  </span>
</template>
