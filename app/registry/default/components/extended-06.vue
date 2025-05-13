<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideFile, LucidePlus, LucideRefreshCcw } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="flex w-full max-w-md flex-col items-center gap-6 text-center">
      <div class="bg-muted flex items-center justify-center rounded-full p-4">
        <LucideFile class="size-6" />
      </div>
      <div>
        <h1 class="text-lg font-bold">No data found</h1>
        <p class="text-muted-foreground text-sm">
          It looks like there's no data in this page.
        </p>
      </div>
      <div class="flex items-center gap-2">
        <Button>
          <LucidePlus class="size-4" />
          <span>Create new</span>
        </Button>
        <Button variant="outline">
          <LucideRefreshCcw class="size-4" />
          <span>Refresh</span>
        </Button>
      </div>
    </div>
  </div>
</template>
