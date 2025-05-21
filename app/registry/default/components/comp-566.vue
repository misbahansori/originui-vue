<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { TreeItem, TreeRoot } from "reka-ui";
import { createReusableTemplate } from "@vueuse/core";
const items = [
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
            children: [
              { title: "APIs" },
              { title: "Infrastructure" },
            ],
          },
          { title: "Platform Team" },
        ],
      },
      {
        title: "Marketing",
        children: [
          { title: "Content" },
          { title: "SEO" },
        ],
      },
      {
        title: "Operations",
        children: [
          { title: "HR" },
          { title: "Finance" },
        ],
      },
    ]
interface Item {
  name: string;
  children?: string[];
}

const indent = 20;
</script>

<template>

  <div className="flex h-full flex-col gap-2 *:first:grow">
  <TreeRoot
    v-slot="{ flattenItems }"
    class="flex flex-col"
    :class="'relative before:absolute before:inset-0 before:-ms-1 before:bg-[repeating-linear-gradient(to_right,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]'"
    as="div"
    :style="{ '--tree-indent': `${indent}px` }"
    :items="items"
    :get-key="(item) => item.title"
    :default-expanded="['Engineering', 'Frontend', 'Design System']"
  >
    <TreeItem
      v-for="item in flattenItems"
      v-slot="{ isExpanded, isSelected }"
      as="button"
      :key="item._id"
      :style="{ '--tree-padding': `${(item.level-1) * indent }px` }"
      :data-select="$slots.isSelected"
      :data-folder="item.hasChildren"
      v-bind="item.bind"
      :class="'before:bg-background relative before:absolute before:inset-x-0 before:-inset-y-0.5 before:-z-10'"
      class="z- ps-(--tree-padding) outline-hidden select-none not-last:pb-0.5 focus:z-20 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    >
      <span
        class="in-focus-visible:ring-ring/50 bg-background hover:bg-accent in-data-[selected=true]:bg-accent in-data-[selected=true]:text-accent-foreground in-data-[drag-target=true]:bg-accent flex items-center gap-1 rounded-sm px-2 py-1.5 text-sm transition-colors not-in-data-[folder=true]:ps-7 in-focus-visible:ring-[3px] in-data-[search-match=true]:bg-blue-400/20! [&_svg]:pointer-events-none [&_svg]:shrink-0"
      >

      <template v-if="item.hasChildren">
        <Icon
          icon="lucide:chevron-down"
          class="text-muted-foreground size-4 in-aria-[expanded=false]:-rotate-90"
        />
      </template>
        {{ item.value.title }}
      </span>
    </TreeItem>
  </TreeRoot>
  </div>
</template>
