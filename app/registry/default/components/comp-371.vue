<script setup lang="ts">
import type { Checked } from "@radix-ui/react-dropdown-menu";

const nextjs = ref<Checked>(false);
const sveltekit = ref<Checked>(true);
const astro = ref<Checked>(false);
const remix = ref<Checked>(false);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Checkbox items
        <Icon
          name="lucide:chevron-down"
          class="-me-1 size-4 opacity-60"
          aria-hidden="true"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuCheckboxItem
        :checked="nextjs"
        @update:checked="nextjs = $event"
      >
        Next.js
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        :checked="sveltekit"
        @update:checked="sveltekit = $event"
      >
        SvelteKit
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        :checked="remix"
        @update:checked="remix = $event"
        disabled
      >
        Remix
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        :checked="astro"
        @update:checked="astro = $event"
      >
        Astro
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
