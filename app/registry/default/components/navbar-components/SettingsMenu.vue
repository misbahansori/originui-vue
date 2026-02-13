<script setup lang="ts">
import { SettingsIcon } from "lucide-vue-next";

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
    <DropdownMenuTrigger as-child>
      <Button
        size="icon"
        variant="ghost"
        class="rounded-full shadow-none"
        aria-label="Open edit menu"
      >
        <SettingsIcon class="text-muted-foreground" :size="16" aria-hidden="true" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="max-w-64">
      <DropdownMenuItem>Appearance</DropdownMenuItem>
      <DropdownMenuItem>Preferences</DropdownMenuItem>
      <DropdownMenuItem>API Settings</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
