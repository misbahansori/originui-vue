<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  LucideCalendar,
  LucideFile,
  LucidePlus,
  LucideRefreshCcw,
  LucideUser,
} from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="flex w-full max-w-md flex-col items-center gap-6 text-center">
      <div class="flex items-center gap-3">
        <div class="-rotate-8 rounded-md border p-3 shadow">
          <LucideFile class="text-muted-foreground size-5" />
        </div>
        <div class="-translate-y-2 rounded-md border p-3 shadow">
          <LucideCalendar class="text-muted-foreground size-5" />
        </div>
        <div class="rotate-8 rounded-md border p-3 shadow">
          <LucideUser class="text-muted-foreground size-5" />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="text-lg font-bold">No data found</h1>
        <p class="text-muted-foreground text-sm">
          It looks like there's no data in this page. You can create a new one
          or refresh the page.
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
