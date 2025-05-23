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
    <div>
      <TreeRoot
        v-slot="{ flattenItems }"
        class="relative before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]"
        :items="items"
        :get-key="(item) => item.title"
        :indent="indent"
        :default-expanded="['Engineering', 'Frontend', 'Design System']"
      >
        <TreeItem
          v-for="item in flattenItems"
          :key="item._id"
          v-bind="item.bind"
          class="before:bg-background relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10"
        >
          {{ item.value.title }}
        </TreeItem>
      </TreeRoot>
    </div>
  </div>
</template>
