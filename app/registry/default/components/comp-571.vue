<script setup lang="ts">
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree";
import {
  LucideFile,
  LucideFolder,
  LucideFolderOpen,
  LucideSearch,
} from "lucide-vue-next";
import { ref } from "vue";

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

const searchQuery = ref("");
const initialExpanded = ["Engineering", "Frontend", "Design System"];
const expandedItems = ref(initialExpanded);

// Function to check if an item matches the search query
const matchesSearch = (item: Item): boolean => {
  if (!searchQuery.value) return false;
  const query = searchQuery.value.toLowerCase();
  return item.name.toLowerCase().includes(query);
};

// Function to find matching items and their parents
const findMatches = (items: Item[], parents: string[] = []): string[] => {
  return items.reduce((acc: string[], item) => {
    if (matchesSearch(item)) {
      acc.push(...parents, item.name);
    }
    if (item.children) {
      acc.push(...findMatches(item.children, [...parents, item.name]));
    }
    return acc;
  }, []);
};

// Handle search
watch(searchQuery, (value) => {
  if (searchQuery.value.length > 0) {
    expandedItems.value = [...new Set(findMatches(items))];
  } else {
    expandedItems.value = initialExpanded;
  }
});
</script>

<template>
  <div class="flex h-full flex-col gap-2 *:first:grow">
    <div class="flex-1">
      <div class="relative mb-2">
        <Input
          class="peer ps-9"
          type="search"
          placeholder="Quick search..."
          v-model="searchQuery"
        />
        <div
          class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
        >
          <LucideSearch class="size-4" aria-hidden="true" />
        </div>
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
          :data-search-match="matchesSearch(item.value)"
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
              <span>
                {{ item.value.name }}
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
      Tree with search highlight ∙
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
