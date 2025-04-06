<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideCircleCheck, LucideX } from "lucide-vue-next";
</script>

<template>
  <!-- To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element. -->
  <div
    class="bg-background z-50 max-w-[400px] rounded-md border px-4 py-3 shadow-lg"
  >
    <div class="flex gap-2">
      <div class="flex grow gap-3">
        <LucideCircleCheck
          class="mt-0.5 size-4 shrink-0 text-emerald-500"
          aria-hidden="true"
        />
        <div class="flex grow justify-between gap-12">
          <p class="text-sm">Message sent</p>
          <div class="text-sm whitespace-nowrap">
            <button class="text-sm font-medium hover:underline">View</button>
            <span class="text-muted-foreground mx-1">·</span>
            <button class="text-sm font-medium hover:underline">Undo</button>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        aria-label="Close banner"
      >
        <LucideX
          class="size-4 opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  </div>
</template>
