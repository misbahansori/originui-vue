<script setup lang="ts">
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree";

interface Item {
  name: string;
  children?: Item[];
}

const items: Item[] = [
  {
    name: "User Guides",
    children: [
      {
        name: "Getting Started",
        children: [
          {
            name: "Installation",
          },
          {
            name: "Configuration",
          },
        ],
      },
      {
        name: "Advanced Usage",
      },
    ],
  },
  {
    name: "API Reference",
    children: [
      {
        name: "Endpoints",
      },
      {
        name: "Data Models",
      },
    ],
  },
  {
    name: "Resources",
    children: [
      {
        name: "Code Examples",
      },
      {
        name: "FAQ",
      },
    ],
  },
];
</script>

<template>
  <div class="flex h-full flex-col gap-2 *:first:grow">
    <Tree
      :items="items"
      :getKey="(item) => item.name"
      v-slot="{ flattenItems }"
      :defaultExpanded="['User Guides', 'Getting Started']"
    >
      <TreeItem v-for="item in flattenItems" v-bind="item">
        <TreeItemLabel :hasChildren="item.hasChildren">
          {{ item.value.name }}
        </TreeItemLabel>
      </TreeItem>
    </Tree>
    <p aria-live="polite" role="region" class="text-muted-foreground mt-2 text-xs">
      Menu navigation tree ∙
      <a class="hover:text-foreground underline" target="_blank" rel="noopener noreferrer">
        Reka UI Tree
      </a>
    </p>
  </div>
</template>
