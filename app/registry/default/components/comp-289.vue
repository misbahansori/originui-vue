<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideTriangleAlert, LucideX } from "lucide-vue-next";
</script>

<template>
  <!-- To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element. -->
  <div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
    <div class="flex gap-2">
      <div class="flex grow gap-3">
        <LucideTriangleAlert
          :size="16"
          class="mt-0.5 shrink-0 text-amber-500"
          aria-hidden="true"
        />
        <div class="flex grow flex-col gap-3">
          <div class="space-y-1">
            <p class="text-sm font-medium">Something requires your action!</p>
            <p class="text-muted-foreground text-sm">
              It conveys that a specific action is needed to resolve or address
              a situation.
            </p>
          </div>
          <div>
            <Button size="sm">Learn more</Button>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        aria-label="Close notification"
      >
        <LucideX
          :size="16"
          class="opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  </div>
</template>
