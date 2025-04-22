<script setup lang="ts">
import { categories } from "@/config/components";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/default/ui/command";
import { LucideComponent } from "lucide-vue-next";
import { computed, ref } from "vue";

const open = ref(false);
const searchQuery = ref("");

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
  <div>
    <button
      class="bg-background text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:ring-ring/50 inline-flex h-10 w-fit min-w-72 cursor-text rounded-full border px-4 py-2 text-sm outline-none focus:ring-[3px]"
      @click="open = true"
    >
      <span class="flex grow items-center gap-2">
        <Icon
          name="ri:search-2-line"
          class="text-muted-foreground -ms-1"
          size="20"
          aria-hidden="true"
        />
        <span class="font-normal text-zinc-400 dark:text-zinc-500">
          Quick search...
        </span>
        <div
          class="text-muted-foreground/80 pointer-events-none ml-auto flex items-center justify-center"
        >
          <kbd
            class="text-muted-foreground inline-flex font-[inherit] text-xs font-medium"
          >
            <span class="opacity-70">⌘</span>
            K
          </kbd>
        </div>
      </span>
    </button>
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
        <CommandSeparator />
      </CommandList>
    </CommandDialog>
  </div>
</template>
