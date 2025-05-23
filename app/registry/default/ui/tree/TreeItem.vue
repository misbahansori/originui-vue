<script setup lang="ts" generic="T extends Record<string, any>">
import {
  injectTreeRootContext,
  TreeItem as RekaTreeItem,
  type TreeItemProps,
} from "reka-ui"; // Renamed to avoid conflict
import { ChevronDownIcon } from "lucide-vue-next";

const props = withDefaults(defineProps<TreeItemProps<T>>(), {});
const rootContext = injectTreeRootContext();
const hasChildren = computed(() => !!rootContext.getChildren(props.value));
const indent = inject<number>("treeIndent")!;

provide<boolean>("itemHasChildren", hasChildren.value);
</script>

<template>
  <RekaTreeItem
    v-slot="{ isExpanded, isSelected, isIndeterminate }"
    v-bind="$props"
    as="button"
    :style="{ '--tree-padding': `${(props.level - 1) * indent}px` }"
    :data-select="$slots.isSelected"
    :data-folder="hasChildren"
    class="z- ps-(--tree-padding) outline-hidden select-none not-last:pb-0.5 focus:z-20 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
  >
    <span
      class="in-focus-visible:ring-ring/50 bg-background hover:bg-accent in-data-[selected=true]:bg-accent in-data-[selected=true]:text-accent-foreground in-data-[drag-target=true]:bg-accent flex items-center gap-1 rounded-sm px-2 py-1.5 text-sm transition-colors not-in-data-[folder=true]:ps-7 in-focus-visible:ring-[3px] in-data-[search-match=true]:bg-blue-400/20! [&_svg]:pointer-events-none [&_svg]:shrink-0"
    >
      <template v-if="hasChildren">
        <ChevronDownIcon
          class="text-muted-foreground size-4 in-aria-[expanded=false]:-rotate-90"
        />
      </template>
      <slot />
    </span>
  </RekaTreeItem>
</template>
