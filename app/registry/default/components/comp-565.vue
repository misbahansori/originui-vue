<script setup lang="ts">
import { Tree, TreeItem, TreeVirtualizer } from "@/registry/default/ui/tree";

interface Item {
  name: string;
  children?: Item[];
}

const items: Item[] = [
  {
    name: "Company",
    children: [
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
    ],
  },
];
</script>

<template>
  <div class="flex h-full flex-col gap-2">
    <Tree
      :items="items"
      :getKey="(item) => item.name"
      :getChildren="(item) => item.children"
    >
      <TreeVirtualizer v-slot="{ item }">
        <TreeItem v-bind="item">
          {{ item.value.name }}
        </TreeItem>
      </TreeVirtualizer>
    </Tree>
  </div>
</template>
