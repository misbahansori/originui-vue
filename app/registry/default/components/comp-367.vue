<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { LucideChevronDown } from "lucide-vue-next";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Same width of trigger
        <LucideChevronDown
          :size="16"
          class="-me-1 opacity-60"
          aria-hidden="true"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="min-w-(--reka-dropdown-menu-trigger-width)">
      <DropdownMenuItem>Option 1</DropdownMenuItem>
      <DropdownMenuItem>Option 2</DropdownMenuItem>
      <DropdownMenuItem>Option 3</DropdownMenuItem>
      <DropdownMenuItem>Option 4</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
