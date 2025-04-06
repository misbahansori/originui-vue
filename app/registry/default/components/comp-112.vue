<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideSquareArrowOutUpRight } from "lucide-vue-next";
</script>

<template>
  <div class="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
    >
      Preview
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Open link"
    >
      <LucideSquareArrowOutUpRight :size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
