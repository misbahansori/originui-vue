<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/default/ui/empty";
import {
  LucideCalendar,
  LucideFile,
  LucidePlus,
  LucideRefreshCcw,
  LucideUser,
} from "lucide-vue-next";
</script>

<template>
  <Empty>
    <EmptyHeader>
      <EmptyMedia>
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
      </EmptyMedia>
      <EmptyTitle class="font-semibold">No data found</EmptyTitle>
      <EmptyDescription>
        It looks like there's no data in this page. You can create a new one or refresh the page.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
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
    </EmptyContent>
  </Empty>
</template>
