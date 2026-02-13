<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideCircleCheck, LucideX } from "lucide-vue-next";
</script>

<template>
  <!-- To make the notification fixed, add classes like `fixed bottom-4 right-4` to the container element. -->
  <div class="bg-background z-50 max-w-[400px] rounded-md border px-4 py-3 shadow-lg">
    <div class="flex gap-2">
      <p class="grow text-sm">
        <LucideCircleCheck
          class="me-3 -mt-0.5 inline-flex size-4 text-red-500"
          aria-hidden="true"
        />
        An error occurred!
      </p>
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
