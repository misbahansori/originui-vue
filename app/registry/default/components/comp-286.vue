<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideArrowRight, LucideInfo, LucideX } from "lucide-vue-next";
</script>

<template>
  <!-- To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element. -->
  <div class="bg-background z-50 max-w-[400px] rounded-md border px-4 py-3 shadow-lg">
    <div class="flex gap-2">
      <div class="flex grow gap-3">
        <LucideInfo class="mt-0.5 size-4 shrink-0 text-blue-500" aria-hidden="true" />
        <div class="flex grow justify-between gap-12">
          <p class="text-sm">Just a quick note!</p>
          <a href="#" class="group text-sm font-medium whitespace-nowrap">
            Link
            <LucideArrowRight
              class="ms-1 -mt-0.5 inline-flex size-4 opacity-60 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
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
