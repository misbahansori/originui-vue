<script setup lang="ts">
import { categories } from "@/config/components";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command";
import { LucideComponent } from "lucide-vue-next";
import { computed } from "vue";

const { open, searchQuery } = useCommandPalette();

const availableComponents = categories.map((category) => ({
  name: category.name,
  slug: category.slug,
}));

const filteredComponents = computed(() => {
  if (!searchQuery.value) return availableComponents;

  return availableComponents.filter((component) => {
    return component.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
  });
});

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    open.value = !open.value;
  }
};

useEventListener("keydown", handleKeyDown);

const selectComponent = async (slug: string) => {
  open.value = false;
  await navigateTo(`/${slug}`);
};
</script>

<template>
  <CommandDialog v-model:open="open">
    <CommandInput v-model="searchQuery" placeholder="Search components..." />
    <CommandList>
      <CommandEmpty>No components found.</CommandEmpty>
      <CommandGroup heading="Components">
        <CommandItem
          v-for="component in filteredComponents"
          :key="component.name"
          :value="component.name"
          @select="selectComponent(component.slug)"
        >
          <LucideComponent :size="16" class="opacity-60" aria-hidden="true" />
          <div class="flex flex-col">
            <span>{{ component.name }}</span>
          </div>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</template>
