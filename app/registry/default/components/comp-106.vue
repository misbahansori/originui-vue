<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideFlipHorizontal, LucideFlipVertical } from "lucide-vue-next";
</script>

<template>
  <div class="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Flip Horizontal"
    >
      <LucideFlipHorizontal :size="16" aria-hidden="true" />
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Flip Vertical"
    >
      <LucideFlipVertical :size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
