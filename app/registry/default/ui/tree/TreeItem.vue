<script setup lang="ts" generic="T">
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-vue-next";
import { injectTreeRootContext, TreeItem, type TreeItemProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const treeRootContext = injectTreeRootContext();

const props = defineProps<
  TreeItemProps<T> & { hasChildren?: boolean; class?: HTMLAttributes["class"] }
>();
</script>

<template>
  <TreeItem
    :class="
      cn(
        'z-10 ps-(--tree-padding) outline-hidden select-none not-last:pb-0.5 focus:z-20 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      )
    "
    :style="{
      '--tree-padding': `${props.level * 20}px`,
    }"
    :data-folder="props.hasChildren ?? false"
    v-bind="props"
  >
    <span
      class="in-focus-visible:ring-ring/50 bg-background hover:bg-accent in-data-[selected=true]:bg-accent in-data-[selected=true]:text-accent-foreground in-data-[drag-target=true]:bg-accent flex items-center gap-1 rounded-sm px-2 py-1.5 text-sm transition-colors not-in-data-[folder=true]:ps-7 in-focus-visible:ring-[3px] in-data-[search-match=true]:bg-blue-50! [&_svg]:pointer-events-none [&_svg]:shrink-0"
    >
      <template v-if="hasChildren">
        <ChevronDownIcon
          class="text-muted-foreground size-4 in-aria-[expanded=false]:-rotate-90"
        />
      </template>
      <slot />
    </span>
  </TreeItem>
</template>
