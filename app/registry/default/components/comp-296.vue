<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideRadio, LucideX } from "lucide-vue-next";
</script>

<template>
  <!-- To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element. -->
  <div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
    <div class="flex items-center gap-2">
      <div
        class="flex size-9 shrink-0 items-center justify-center rounded-full border"
        aria-hidden="true"
      >
        <LucideRadio class="size-4 opacity-60" />
      </div>
      <div class="flex grow items-center gap-12">
        <div class="space-y-1">
          <p class="text-sm font-medium">Live in 27 hours</p>
          <p class="text-muted-foreground text-xs">November 20 at 8:00 PM.</p>
        </div>
        <Button size="sm">Notify me</Button>
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
