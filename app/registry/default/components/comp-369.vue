<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import {
  LucideBolt,
  LucideChevronDown,
  LucideCopyPlus,
  LucideFiles,
  LucideLayers2,
  LucideTrash,
} from "lucide-vue-next";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Grouped items
        <LucideChevronDown class="-me-1 size-4 opacity-60" aria-hidden="true" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <LucideCopyPlus class="size-4 opacity-60" aria-hidden="true" />
          Copy
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LucideBolt class="size-4 opacity-60" aria-hidden="true" />
          Edit
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <LucideLayers2 class="size-4 opacity-60" aria-hidden="true" />
          Group
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LucideFiles class="size-4 opacity-60" aria-hidden="true" />
          Clone
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <LucideTrash class="size-4" aria-hidden="true" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
