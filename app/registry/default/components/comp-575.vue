<script setup lang="ts">
import { Tree, TreeItem, TreeItemLabel } from "@/registry/default/ui/tree";
import {
  RiBracesLine,
  RiCodeSSlashLine,
  RiFileTextLine,
  RiImageLine,
  RiReactjsLine,
} from "@remixicon/vue";

interface Item {
  name: string;
  children?: Item[];
  fileExtension?: string;
}

const items: Item[] = [
  {
    name: "app",
    children: [
      {
        name: "(dashboard)",
        children: [
          {
            name: "dashboard",
            children: [
              {
                name: "page.tsx",
                fileExtension: "tsx",
              },
            ],
          },
        ],
      },
      {
        name: "api",
        children: [
          {
            name: "hello",
            children: [
              {
                name: "route.ts",
                fileExtension: "ts",
              },
            ],
          },
        ],
      },
      {
        name: "layout.tsx",
        fileExtension: "tsx",
      },
      {
        name: "page.tsx",
        fileExtension: "tsx",
      },
    ],
  },
  {
    name: "components",
    children: [
      {
        name: "button.tsx",
        fileExtension: "tsx",
      },
      {
        name: "card.tsx",
        fileExtension: "tsx",
      },
    ],
  },
  {
    name: "lib",
    children: [
      {
        name: "utils.ts",
        fileExtension: "ts",
      },
    ],
  },
  {
    name: "public",
    children: [
      {
        name: "favicon.ico",
        fileExtension: "ico",
      },
      {
        name: "vercel.svg",
        fileExtension: "svg",
      },
    ],
  },
  {
    name: "package.json",
    fileExtension: "json",
  },
  {
    name: "tailwind.config.ts",
    fileExtension: "ts",
  },
  {
    name: "tsconfig.json",
    fileExtension: "json",
  },
  {
    name: "next.config.mjs",
    fileExtension: "mjs",
  },
  {
    name: "README.md",
    fileExtension: "md",
  },
];

function getFileIcon(extension: string | undefined) {
  switch (extension) {
    case "tsx":
    case "jsx":
      return RiReactjsLine;
    case "ts":
    case "js":
    case "mjs":
      return RiCodeSSlashLine;
    case "json":
      return RiBracesLine;
    case "svg":
    case "ico":
    case "png":
    case "jpg":
      return RiImageLine;
    case "md":
      return RiFileTextLine;
    default:
      return null;
  }
}
</script>

<template>
  <div class="flex h-full flex-col gap-2 *:first:grow">
    <div>
      <Tree
        :items="items"
        :getKey="(item) => item.name"
        v-slot="{ flattenItems }"
        :defaultExpanded="['app', '(dashboard)']"
        class="relative before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]"
      >
        <TreeItem
          v-for="item in flattenItems"
          v-bind="item"
          v-slot="{ isExpanded }"
        >
          <TreeItemLabel
            :hasChildren="item.hasChildren"
            class="before:bg-background relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10"
          >
            <span class="flex items-center gap-2">
              <component
                v-if="getFileIcon(item.value.fileExtension)"
                :is="getFileIcon(item.value.fileExtension)"
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
      File editor ∙
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
