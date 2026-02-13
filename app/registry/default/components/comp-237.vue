<script setup lang="ts">
import { Label } from "@/registry/default/ui/label";
import { ListboxContent, ListboxItem, ListboxRoot } from "reka-ui";
import { ref } from "vue";

const selectedKeys = ref(["svelte"]);
const options = [
  { id: "react", name: "React" },
  { id: "vue", name: "Vue" },
  { id: "angular", name: "Angular" },
  { id: "svelte", name: "Svelte" },
];
</script>

<template>
  <div class="*:not-first:mt-2">
    <Label>Listbox with single option</Label>
    <ListboxRoot class="border-input overflow-hidden rounded-md border" v-model="selectedKeys">
      <ListboxContent
        class="bg-background space-y-1 p-1 text-sm shadow-xs transition-[color,box-shadow]"
        aria-label="Select framework"
      >
        <ListboxItem
          v-for="option in options"
          :key="option.id"
          :id="option.id"
          :value="option.id"
          class="data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground data-[highlighted]:bg-accent/50 data-[highlighted]:text-accent-foreground data-focus-visible:border-ring data-focus-visible:ring-ring/50 relative rounded px-2 py-1.5 outline-none data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:ring-[3px]"
        >
          {{ option.name }}
        </ListboxItem>
      </ListboxContent>
    </ListboxRoot>
    <p class="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
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
