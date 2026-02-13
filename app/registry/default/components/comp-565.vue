<script setup lang="ts">
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree";

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
    <Tree
      :items="items"
      :getKey="(item) => item.name"
      v-slot="{ flattenItems }"
      :defaultExpanded="['Engineering', 'Frontend', 'Design System']"
    >
      <TreeItem v-for="item in flattenItems" v-bind="item">
        <TreeItemLabel :hasChildren="item.hasChildren">
          {{ item.value.name }}
        </TreeItemLabel>
      </TreeItem>
    </Tree>
    <p aria-live="polite" role="region" class="text-muted-foreground mt-2 text-xs">
      Basic tree with no extra features ∙
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
