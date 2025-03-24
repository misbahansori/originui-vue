<script setup lang="ts">
import { Search } from "lucide-vue-next";
import { Button } from "~/components/ui/button";
</script>

<template>
  <Button
    variant="outline"
    class="inline-flex w-full items-center justify-between rounded-md sm:w-64"
  >
    <div class="flex items-center">
      <Search class="mr-2 h-4 w-4" />
      <span>Search components...</span>
    </div>
    <kbd class="bg-muted hidden rounded px-2 py-1 text-xs sm:inline-block">
      ⌘ K
    </kbd>
  </Button>
</template>
