<script setup lang="ts">
import { TreeRoot, TreeItem } from "@/registry/default/ui/tree";

interface TreeItemNode {
  title: string;
  children?: TreeItemNode[];
}

const items: TreeItemNode[] = [
  {
    title: "Engineering",
    children: [
      {
        title: "Frontend",
        children: [
          {
            title: "Design System",
            children: [
              { title: "Components" },
              { title: "Tokens" },
              { title: "Guidelines" },
            ],
          },
          { title: "Web Platform" },
        ],
      },
      {
        title: "Backend",
        children: [{ title: "APIs" }, { title: "Infrastructure" }],
      },
      { title: "Platform Team" },
    ],
  },
  {
    title: "Marketing",
    children: [{ title: "Content" }, { title: "SEO" }],
  },
  {
    title: "Operations",
    children: [{ title: "HR" }, { title: "Finance" }],
  },
];

const indent = 20;
</script>

<template>
  <div className="flex h-full flex-col gap-2 *:first:grow">
    <TreeRoot
      v-slot="{ flattenItems }"
      :indent
      :items="items"
      :get-key="(item) => item.title"
      :default-expanded="['Engineering', 'Frontend', 'Design System']"
    >
      <TreeItem
        v-for="item in flattenItems"
        :key="item._id"
        v-bind="item.bind"
      >
        {{ item.value.title }}
      </TreeItem>
    </TreeRoot>
  </div>
</template>
