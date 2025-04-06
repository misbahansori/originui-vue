<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">
        Menu with icons
        <Icon
          name="lucide:chevron-down"
          class="-me-1 size-4 opacity-60"
          aria-hidden="true"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>
        <Icon
          name="lucide:copy-plus"
          class="size-4 opacity-60"
          aria-hidden="true"
        />
        Copy
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon name="lucide:bolt" class="size-4 opacity-60" aria-hidden="true" />
        Edit
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon
          name="lucide:layers-2"
          class="size-4 opacity-60"
          aria-hidden="true"
        />
        Group
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Icon
          name="lucide:files"
          class="size-4 opacity-60"
          aria-hidden="true"
        />
        Clone
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
