<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideEllipsis, LucideFiles, LucideFilm } from "lucide-vue-next";
</script>

<template>
  <div class="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
    >
      <LucideFiles class="-ms-1 opacity-60" :size="16" aria-hidden="true" />
      Files
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
    >
      <LucideFilm class="-ms-1 opacity-60" :size="16" aria-hidden="true" />
      Media
    </Button>
    <Button
      class="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
      variant="outline"
      size="icon"
      aria-label="Menu"
    >
      <LucideEllipsis :size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
