<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent, CardTitle } from "@/registry/default/ui/card";
import { LucideActivity, LucideArrowUpRight } from "lucide-vue-next";
</script>

<template>
  <Card class="grid gap-2 rounded-xl bg-neutral-50 p-1.5 dark:bg-white/3">
    <div class="flex items-center justify-between p-2 pb-1.5">
      <div class="flex items-center gap-2.5">
        <span
          class="bg-background flex size-8 items-center justify-center rounded-md border"
        >
          <LucideActivity class="size-4" />
        </span>
        <CardTitle class="text-sm font-medium">Activity</CardTitle>
      </div>
      <Button variant="outline" class="h-8 whitespace-nowrap">
        <span>Requests</span>
        <LucideArrowUpRight />
      </Button>
    </div>

    <Card class="rounded-lg py-4 shadow-md shadow-black/5">
      <CardContent class="h-full w-full px-4">
        <div class="flex items-start justify-between gap-4 pb-6">
          <div class="flex flex-col gap-2">
            <div class="text-muted-foreground font-mono text-xs/none uppercase">
              Requests
            </div>
            <div class="text-foreground text-base/none font-medium">0</div>
          </div>
          <div class="ml-auto flex items-center gap-4">
            <button
              type="button"
              class="flex shrink-0 flex-col items-end gap-1 whitespace-nowrap"
            >
              <div
                class="text-muted-foreground flex items-center gap-2 font-mono text-xs/none whitespace-nowrap uppercase [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-neutral-600 dark:[&>svg]:text-neutral-400"
              >
                <div
                  class="bg-destructive h-2 w-1 shrink-0 rounded-[2px]"
                ></div>
                Failed
              </div>
              <div class="font-medium">0</div>
            </button>
            <button
              type="button"
              class="flex shrink-0 flex-col items-end gap-1 whitespace-nowrap"
            >
              <div
                class="text-muted-foreground flex items-center gap-2 font-mono text-xs/none whitespace-nowrap uppercase [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-neutral-600 dark:[&>svg]:text-neutral-400"
              >
                <div class="bg-primary h-2 w-1 shrink-0 rounded-[2px]"></div>
                Processed
              </div>
              <div class="font-medium">0</div>
            </button>
            <button
              type="button"
              class="flex shrink-0 flex-col items-end gap-1 whitespace-nowrap"
            >
              <div
                class="text-muted-foreground flex items-center gap-2 font-mono text-xs/none whitespace-nowrap uppercase [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-neutral-600 dark:[&>svg]:text-neutral-400"
              >
                <div class="bg-accent h-2 w-1 shrink-0 rounded-[2px]"></div>
                Skipped
              </div>
              <div class="font-medium">0</div>
            </button>
          </div>
        </div>
        <div
          class="text-muted-foreground mt-1 flex items-center justify-between text-xs"
        >
          <button class="font-mono whitespace-nowrap">
            <div class="flex gap-1">
              <div>Sep 18, 2025, 06:50:00</div>
              <div class="text-muted-foreground">UTC</div>
            </div>
          </button>
          <button class="font-mono whitespace-nowrap">
            <div class="flex gap-1">
              <div>Sep 18, 2025, 07:50:00</div>
              <div class="text-muted-foreground">UTC</div>
            </div>
          </button>
        </div>
      </CardContent>
    </Card>
  </Card>
  Car
</template>
