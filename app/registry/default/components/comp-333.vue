<script setup lang="ts">
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/default/ui/command";
import { onMounted, onUnmounted, ref } from "vue";

const open = ref(false);

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    open.value = !open.value;
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <div>
    <button
      class="border-input bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 w-fit rounded-md border px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
      @click="open = true"
    >
      <span class="flex grow items-center">
        <Icon
          name="lucide:search"
          class="text-muted-foreground/80 -ms-1 me-3 size-4"
          aria-hidden="true"
        />
        <span class="text-muted-foreground/70 font-normal">Search</span>
      </span>
      <kbd
        class="bg-background text-muted-foreground/70 ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium"
      >
        ⌘K
      </kbd>
    </button>
    <CommandDialog v-model:open="open">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Quick start">
          <CommandItem value="new-folder">
            <Icon
              name="lucide:folder-plus"
              class="size-4 opacity-60"
              aria-hidden="true"
            />
            <span>New folder</span>
            <CommandShortcut class="justify-center">⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem value="import-document">
            <Icon
              name="lucide:file-input"
              class="size-4 opacity-60"
              aria-hidden="true"
            />
            <span>Import document</span>
            <CommandShortcut class="justify-center">⌘I</CommandShortcut>
          </CommandItem>
          <CommandItem value="add-block">
            <Icon
              name="lucide:circle-fading-plus"
              class="size-4 opacity-60"
              aria-hidden="true"
            />
            <span>Add block</span>
            <CommandShortcut class="justify-center">⌘B</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Navigation">
          <CommandItem value="dashboard">
            <Icon
              name="lucide:arrow-up-right"
              class="size-4 opacity-60"
              aria-hidden="true"
            />
            <span>Go to dashboard</span>
          </CommandItem>
          <CommandItem value="apps">
            <Icon
              name="lucide:arrow-up-right"
              class="size-4 opacity-60"
              aria-hidden="true"
            />
            <span>Go to apps</span>
          </CommandItem>
          <CommandItem value="connections">
            <Icon
              name="lucide:arrow-up-right"
              class="size-4 opacity-60"
              aria-hidden="true"
            />
            <span>Go to connections</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </div>
</template>
