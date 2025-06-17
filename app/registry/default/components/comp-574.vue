<script setup lang="ts">
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree";
import {
  LucideFile,
  LucideFolder,
  LucideFolderOpen,
  LucideListCollapse,
  LucideListTree,
} from "lucide-vue-next";

interface Item {
  name: string;
  children?: Item[];
}

const items: Item[] = [
  {
    name: "Engineering",
    children: [
      {
        name: "Frontend",
        children: [
          {
            name: "Design System",
            children: [
              { name: "Components" },
              { name: "Tokens" },
              { name: "Guidelines" },
            ],
          },
          { name: "Web Platform" },
        ],
      },
      {
        name: "Backend",
        children: [{ name: "APIs" }, { name: "Infrastructure" }],
      },
      { name: "Platform Team" },
    ],
  },
  {
    name: "Marketing",
    children: [{ name: "Content" }, { name: "SEO" }],
  },
  {
    name: "Operations",
    children: [{ name: "HR" }, { name: "Finance" }],
  },
];
const initialExpanded = ["Engineering", "Frontend", "Design System"];
const expandedItems = ref(initialExpanded);

const expandAll = () => {
  const getAllItemNames = (items: Item[]): string[] =>
    items.flatMap((item) => [
      item.name,
      ...getAllItemNames(item.children ?? []),
    ]);

  expandedItems.value = getAllItemNames(items);
};

const collapseAll = () => {
  expandedItems.value = [];
};
</script>

<template>
  <div class="flex h-full flex-col gap-2 *:first:grow">
    <div>
      <div class="mb-2 flex items-center gap-2">
        <Button size="sm" variant="outline" @click="expandAll">
          <LucideListTree class="-ms-1 size-4 opacity-60" aria-hidden="true" />
          Expand all
        </Button>
        <Button size="sm" variant="outline" @click="collapseAll">
          <LucideListCollapse
            class="-ms-1 size-4 opacity-60"
            aria-hidden="true"
          />
          Collapse all
        </Button>
      </div>

      <Tree
        :items="items"
        :getKey="(item) => item.name"
        v-slot="{ flattenItems }"
        v-model:expanded="expandedItems"
      >
        <TreeItem
          v-for="item in flattenItems"
          v-bind="item"
          v-slot="{ isExpanded }"
        >
          <TreeItemLabel
            :hasChildren="item.hasChildren"
            class="before:bg-background relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10"
          >
            <span class="flex items-center gap-2">
              <template v-if="item.hasChildren">
                <LucideFolderOpen
                  v-if="isExpanded"
                  class="text-muted-foreground pointer-events-none size-4"
                />
                <LucideFolder
                  v-else
                  class="text-muted-foreground pointer-events-none size-4"
                />
              </template>
              <LucideFile
                v-else
                class="text-muted-foreground pointer-events-none size-4"
              />
              {{ item.value.name }}
              <span v-if="item.hasChildren" class="text-muted-foreground -ms-1">
                {{ `(${item.value.children?.length ?? 0})` }}
              </span>
            </span>
          </TreeItemLabel>
        </TreeItem>
      </Tree>
    </div>
    <p
      aria-live="polite"
      role="region"
      class="text-muted-foreground mt-2 text-xs"
    >
      Tree with expand/collapse all buttons ∙
      <a
        href="https://reka-ui.com/docs/components/tree"
        class="hover:text-foreground underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reka UI Tree
      </a>
    </p>
  </div>
</template>
