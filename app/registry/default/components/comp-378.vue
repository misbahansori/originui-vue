<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { LucideBook, LucideInfo, LucideLifeBuoy, LucideMessageCircleMore } from "lucide-vue-next";
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
        <LucideInfo class="size-4" aria-hidden="true" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="pb-2">
      <DropdownMenuLabel>Need help?</DropdownMenuLabel>
      <DropdownMenuItem class="cursor-pointer py-1 focus:bg-transparent focus:underline" asChild>
        <a href="#">
          <LucideBook class="size-4 opacity-60" aria-hidden="true" />
          Documentation
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem class="cursor-pointer py-1 focus:bg-transparent focus:underline" asChild>
        <a href="#">
          <LucideLifeBuoy class="size-4 opacity-60" aria-hidden="true" />
          Support
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem class="cursor-pointer py-1 focus:bg-transparent focus:underline" asChild>
        <a href="#">
          <LucideMessageCircleMore class="size-4 opacity-60" aria-hidden="true" />
          Contact us
        </a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
