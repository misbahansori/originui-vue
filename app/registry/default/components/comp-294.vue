<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideRefreshCw, LucideX } from "lucide-vue-next";
</script>

<template>
  <!-- To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element. -->
  <div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
    <div class="flex gap-3">
      <div
        class="flex size-9 shrink-0 items-center justify-center rounded-full border"
        aria-hidden="true"
      >
        <LucideRefreshCw class="size-4 opacity-60" />
      </div>
      <div class="flex grow flex-col gap-3">
        <div class="space-y-1">
          <p class="text-sm font-medium">Version 1.4 is now available!</p>
          <p class="text-muted-foreground text-sm">
            This update contains several bug fixes and performance improvements.
          </p>
        </div>
        <div class="flex gap-2">
          <Button size="sm">Install</Button>
          <Button size="sm" variant="link">Later</Button>
        </div>
      </div>
      <Button
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        aria-label="Close notification"
      >
        <LucideX
          class="size-4 opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  </div>
</template>
