<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import {
  LucideBolt,
  LucideChevronDown,
  LucideCopyPlus,
  LucideFiles,
  LucideLayers2,
} from "lucide-vue-next";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Menu with icons
        <LucideChevronDown :size="16" class="-me-1 opacity-60" aria-hidden="true" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>
        <LucideCopyPlus :size="16" class="opacity-60" aria-hidden="true" />
        Copy
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LucideBolt :size="16" class="opacity-60" aria-hidden="true" />
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LucideLayers2 :size="16" class="opacity-60" aria-hidden="true" />
        Group
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LucideFiles :size="16" class="opacity-60" aria-hidden="true" />
        Clone
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
