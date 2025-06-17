<script setup lang="ts">
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree";
import { LucideFile, LucideFolder, LucideFolderOpen } from "lucide-vue-next";

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
</script>

<template>
  <div class="flex h-full flex-col gap-2 *:first:grow">
    <div>
      <Tree
        :items="items"
        :getKey="(item) => item.name"
        v-slot="{ flattenItems }"
        :defaultExpanded="['Engineering', 'Frontend', 'Design System']"
      >
        <TreeItem
          v-for="item in flattenItems"
          v-bind="item"
          v-slot="{ isExpanded, handleToggle }"
          @toggle.prevent
        >
          <TreeItemLabel
            :hasChildren="item.hasChildren"
            class="before:bg-background relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10"
            @dblclick="handleToggle"
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
      Tree with items expandable on double click ∙
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
