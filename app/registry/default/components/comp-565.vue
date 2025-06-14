<script setup lang="ts">
import { TreeItem, TreeRoot, TreeVirtualizer } from "reka-ui";
import { ref } from "vue";

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

const expanded = ref<string[]>(["Engineering", "Frontend", "Design System"]);
const selected = ref<string[]>(["Components"]);
</script>

<template>
  <div class="flex h-full flex-col gap-2">
    <TreeRoot
      v-model:expanded="expanded"
      v-model="selected"
      :items="items"
      :get-key="(item) => item.name"
      :get-children="(item) => item.children"
      multiple
      propagate-select
    >
      <TreeVirtualizer v-slot="{ item }" :text-content="(opt) => opt.name">
        <TreeItem v-bind="item.bind">
          {{ item.value.name }}
        </TreeItem>
      </TreeVirtualizer>
    </TreeRoot>
  </div>
</template>
