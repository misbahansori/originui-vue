<script setup lang="ts">
import {
  ListboxContent,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
  ListboxRoot,
} from "reka-ui";

const selectedKeys = ref(["lettuce", "tuna"]);
const options = [
  {
    id: "veggies",
    name: "Veggies",
    items: [
      { id: "lettuce", name: "Lettuce" },
      { id: "tomato", name: "Tomato" },
      { id: "onion", name: "Onion" },
    ],
  },
  {
    id: "protein",
    name: "Protein",
    items: [
      { id: "ham", name: "Ham" },
      { id: "tuna", name: "Tuna" },
      { id: "tofu", name: "Tofu" },
    ],
  },
  {
    id: "condiments",
    name: "Condiments",
    items: [
      { id: "mayo", name: "Mayonaise" },
      { id: "mustard", name: "Mustard" },
      { id: "ranch", name: "Ranch" },
    ],
  },
];
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Listbox with option groups</Label>
    <ListboxRoot
      class="border-input overflow-hidden rounded-md border"
      multiple
      v-model="selectedKeys"
    >
      <ListboxContent
        class="bg-background max-h-72 min-h-20 space-y-2 overflow-auto p-1 text-sm shadow-xs transition-[color,box-shadow]"
        aria-label="Select some foods"
      >
        <template v-for="(group, index) in options" :key="group.id">
          <ListboxGroup>
            <ListboxGroupLabel
              class="text-muted-foreground px-2 py-1.5 text-xs font-medium"
            >
              {{ group.name }}
            </ListboxGroupLabel>
            <ListboxItem
              v-for="item in group.items"
              :key="item.id"
              :id="item.id"
              :value="item.id"
              class="data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[highlighted]:bg-accent/50 data-[highlighted]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
            >
              {{ item.name }}
            </ListboxItem>
          </ListboxGroup>
          <Separator
            v-if="index !== options.length - 1"
            class="bg-border -mx-1 my-2 h-px"
          />
        </template>
      </ListboxContent>
    </ListboxRoot>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Built with reka-ui
      <a
        class="hover:text-foreground underline"
        href="https://reka-ui.com/docs/components/listbox"
        target="_blank"
        rel="noopener nofollow"
      >
        Listbox
      </a>
    </p>
  </div>
</template>
