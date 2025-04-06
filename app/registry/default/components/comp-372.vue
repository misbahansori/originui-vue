<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { LucideChevronDown } from "lucide-vue-next";
import { ref } from "vue";

const framework = ref("nextjs");
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Radio items
        <LucideChevronDown
          :size="16"
          class="-me-1 opacity-60"
          aria-hidden="true"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuRadioGroup v-model="framework">
        <DropdownMenuRadioItem value="nextjs">Next.js</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="sveltekit" disabled>
          SvelteKit
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="remix">Remix</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="astro">Astro</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
