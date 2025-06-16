<script setup lang="ts">
import { Input } from "@/registry/default/ui/input";
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree";
import { LucideFile, LucideFolder, LucideFolderOpen } from "lucide-vue-next";
import { ref } from "vue";

interface Item {
  name: string;
  children?: Item[];
}

const items = ref<Item[]>([
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
]);

const renamingItem = ref<string | null>(null);
const renameValue = ref("");

const startRenaming = (item: Item) => {
  renamingItem.value = item.name;
  renameValue.value = item.name;
};

const handleRename = (item: Item) => {
  if (renamingItem.value === item.name) {
    item.name = renameValue.value;
    renamingItem.value = null;
  }
};

const handleKeyDown = (e: KeyboardEvent, item: Item) => {
  if (e.key === "F2") {
    e.preventDefault();
    startRenaming(item);
  } else if (e.key === "Enter" && renamingItem.value === item.name) {
    handleRename(item);
  } else if (e.key === "Escape") {
    renamingItem.value = null;
  }
};

const inputRef = useTemplateRef("inputRef");

watch(renamingItem, (newVal) => {
  if (newVal && inputRef.value) {
    inputRef.value?.$el.focus();
  }
});
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
          v-slot="{ isExpanded }"
          @keydown="(e: KeyboardEvent) => handleKeyDown(e, item.value)"
        >
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
                <LucideFolder
                  v-else
                  class="text-muted-foreground pointer-events-none size-4"
                />
              </template>
              <LucideFile
                v-else
                class="text-muted-foreground pointer-events-none size-4"
              />
              <template v-if="renamingItem === item.value.name">
                <Input
                  ref="inputRef"
                  v-model="renameValue"
                  class="-my-0.5 h-6 px-1"
                  @blur="handleRename(item.value)"
                  @keydown.enter="handleRename(item.value)"
                  @keydown.escape="renamingItem = null"
                  autofocus
                />
              </template>
              <template v-else>
                {{ item.value.name }}
              </template>
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
      Tree with renaming (press F2 to rename) ∙
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
