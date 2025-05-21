<script setup lang="ts" generic="T extends Record<string, any>">
import { Icon } from "@iconify/vue";
import { TreeItem as RekaTreeItem, type TreeItemProps } from "reka-ui"; // Renamed to avoid conflict

const props = withDefaults(defineProps<TreeItemProps<T>>(), {})

const indent = inject<number>("treeIndent") || 20;
</script>

<template>
  <RekaTreeItem
    v-slot="{ isExpanded, isSelected, isIndeterminate }"
    v-bind="$props"
    as="button"
    :style="{ '--tree-padding': `${(props.level - 1) * indent}px` }"
    :data-select="$slots.isSelected"
    :data-folder="$slots.isIndeterminate"
    class="z- ps-(--tree-padding) outline-hidden select-none not-last:pb-0.5 focus:z-20 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
  > 
  
    <Icon
      v-if="isIndeterminate"
      icon="mdi:chevron-right"
      class="h-4 w-4 transition-transform duration-200"
      :class="{ 'rotate-90': isExpanded }"
    />
    <span>{{ props.value.title }}</span>
  </RekaTreeItem>
</template>