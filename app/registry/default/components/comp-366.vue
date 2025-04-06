<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { LucideEllipsis } from "lucide-vue-next";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        size="icon"
        variant="ghost"
        class="rounded-full shadow-none"
        aria-label="Open edit menu"
      >
        <LucideEllipsis :size="16" aria-hidden="true" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Option 1</DropdownMenuItem>
      <DropdownMenuItem>Option 2</DropdownMenuItem>
      <DropdownMenuItem>Option 3</DropdownMenuItem>
      <DropdownMenuItem>Option 4</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
