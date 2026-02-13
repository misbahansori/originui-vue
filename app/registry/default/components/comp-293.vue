<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideX } from "lucide-vue-next";
</script>

<template>
  <!-- To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element. -->
  <div class="bg-background z-50 max-w-[400px] rounded-md border p-4 shadow-lg">
    <div class="flex gap-2">
      <div class="flex grow flex-col gap-3">
        <div class="space-y-1">
          <p class="text-sm font-medium">We Value Your Privacy 🍪</p>
          <p class="text-muted-foreground text-sm">
            We use cookies to improve your experience, and show personalized content.
          </p>
        </div>
        <div class="flex gap-2">
          <Button size="sm">Accept</Button>
          <Button size="sm" variant="outline">Decline</Button>
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
