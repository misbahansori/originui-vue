<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { LucideChevronDown } from "lucide-vue-next";
import { ref } from "vue";

const nextjs = ref<boolean | "indeterminate">(false);
const sveltekit = ref<boolean | "indeterminate">(true);
const astro = ref<boolean | "indeterminate">(false);
const remix = ref<boolean | "indeterminate">(false);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Checkbox items
        <LucideChevronDown :size="16" class="-me-1 opacity-60" aria-hidden="true" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuCheckboxItem v-model="nextjs">Next.js</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem v-model="sveltekit">SvelteKit</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem v-model="remix" disabled>Remix</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem v-model="astro">Astro</DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
