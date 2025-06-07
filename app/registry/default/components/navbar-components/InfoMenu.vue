<script setup lang="ts">
import {
  LucideBook,
  LucideInfo,
  LucideLifeBuoy,
  LucideMessageCircleMore,
} from "lucide-vue-next";

import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        size="icon"
        variant="ghost"
        class="size-8 rounded-full shadow-none"
        aria-label="Open edit menu"
      >
        <LucideInfo
          class="text-muted-foreground"
          :size="16"
          aria-hidden="true"
        />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="pb-2">
      <DropdownMenuLabel>Need help?</DropdownMenuLabel>
      <DropdownMenuItem
        class="cursor-pointer py-1 focus:bg-transparent focus:underline"
        as-child
      >
        <a href="#">
          <LucideBook :size="16" class="opacity-60" aria-hidden="true" />
          Documentation
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem
        class="cursor-pointer py-1 focus:bg-transparent focus:underline"
        as-child
      >
        <a href="#">
          <LucideLifeBuoy :size="16" class="opacity-60" aria-hidden="true" />
          Support
        </a>
      </DropdownMenuItem>
      <DropdownMenuItem
        class="cursor-pointer py-1 focus:bg-transparent focus:underline"
        as-child
      >
        <a href="#">
          <LucideMessageCircleMore
            :size="16"
            class="opacity-60"
            aria-hidden="true"
          />
          Contact us
        </a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
