<script setup lang="ts">
import {
  LucideChevronLeft,
  LucideHistory,
  LucideMessageSquareText,
  LucideUserRoundPlus,
} from "lucide-vue-next";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/button";
</script>

<template>
  <header class="border-b px-4 md:px-6">
    <div class="flex h-16 items-center justify-between gap-4">
      <!-- Left side -->
      <div class="flex items-center gap-2">
        <Button
          class="size-8"
          variant="ghost"
          size="icon"
          aria-label="Go back"
          as-child
        >
          <a href="#">
            <LucideChevronLeft :size="16" aria-hidden="true" />
          </a>
        </Button>
        <h1 class="text-sm font-medium">Basic UI</h1>
      </div>
      <!-- Right side -->
      <div class="flex items-center gap-2">
        <!-- History button -->
        <Button
          size="icon"
          variant="ghost"
          class="text-muted-foreground size-8 rounded-full shadow-none"
          aria-label="History"
        >
          <LucideHistory :size="16" aria-hidden="true" />
        </Button>
        <!-- Comments button -->
        <Button
          size="icon"
          variant="ghost"
          class="text-muted-foreground size-8 rounded-full shadow-none"
          aria-label="Save"
        >
          <LucideMessageSquareText :size="16" aria-hidden="true" />
        </Button>
        <!-- Add user -->
        <Button
          size="icon"
          variant="ghost"
          class="text-muted-foreground size-8 rounded-full shadow-none"
          aria-label="Add user"
        >
          <LucideUserRoundPlus :size="16" aria-hidden="true" />
        </Button>
        <!-- Online users -->
        <div class="ml-2 flex items-center gap-2">
          <div class="relative">
            <Avatar>
              <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
              <AvatarFallback>KK</AvatarFallback>
            </Avatar>
            <span
              class="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-emerald-500"
            >
              <span class="sr-only">Online</span>
            </span>
          </div>
          <div class="relative">
            <Avatar>
              <AvatarImage src="./avatar-80-06.jpg" alt="Martha Johnson" />
              <AvatarFallback>KK</AvatarFallback>
            </Avatar>
            <span
              class="border-background bg-muted-foreground absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2"
            >
              <span class="sr-only">Online</span>
            </span>
          </div>
          <div class="relative">
            <Avatar>
              <AvatarImage src="./avatar-80-05.jpg" alt="Linda Green" />
              <AvatarFallback>KK</AvatarFallback>
            </Avatar>
            <span
              class="border-background bg-muted-foreground absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2"
            >
              <span class="sr-only">Online</span>
            </span>
          </div>
          <Button
            variant="secondary"
            class="bg-secondary text-muted-foreground ring-background hover:bg-secondary hover:text-foreground flex size-8 items-center justify-center rounded-full text-xs"
            size="icon"
          >
            +3
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>
