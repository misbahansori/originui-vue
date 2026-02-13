<script setup lang="ts">
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree";
import { LucideFolder, LucideFolderOpen } from "lucide-vue-next";

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
            children: [{ name: "Components" }, { name: "Tokens" }, { name: "Guidelines" }],
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
</script>

<template>
  <div class="flex h-full flex-col gap-2 *:first:grow">
    <div>
      <Tree
        :items="items"
        :getKey="(item) => item.name"
        v-slot="{ flattenItems }"
        :defaultExpanded="['Engineering', 'Frontend', 'Design System']"
        class="relative before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]"
        multiple
      >
        <TreeItem v-for="item in flattenItems" v-bind="item" v-slot="{ isExpanded }">
          <TreeItemLabel
            :hasChildren="item.hasChildren"
            class="before:bg-background relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10"
          >
            <span class="flex flex-1 items-center gap-2">
              <template v-if="item.hasChildren">
                <LucideFolderOpen
                  v-if="isExpanded"
                  class="text-muted-foreground pointer-events-none size-4"
                />
                <LucideFolder v-else class="text-muted-foreground pointer-events-none size-4" />
              </template>
              {{ item.value.name }}
            </span>
          </TreeItemLabel>
        </TreeItem>
      </Tree>
    </div>
    <p aria-live="polite" role="region" class="text-muted-foreground mt-2 text-xs">
      Tree with multi-select∙
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
