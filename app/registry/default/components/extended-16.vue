<script setup lang="ts">
import { Card, CardContent } from "@/registry/default/ui/card";
import { LucideCheckCircle } from "lucide-vue-next";
</script>

<template>
  <Card class="ring-border/40 ring-4">
    <CardContent class="flex flex-col gap-4">
      <div class="flex flex-col items-center gap-2 text-center">
        <div
          class="bg-muted/50 flex size-12 items-center justify-center rounded-md"
        >
          <LucideCheckCircle class="text-green-500" />
        </div>
        <CardTitle class="text-xl font-semibold">Import Succesful</CardTitle>
        <CardDescription>
          Success! Data from sample.xlsx was imported successfully.
        </CardDescription>
      </div>
      <div class="bg-muted flex flex-wrap gap-3 rounded-md p-3">
        <div class="flex flex-1 flex-col">
          <span
            class="text-muted-foreground text-sm font-medium whitespace-nowrap"
          >
            No. of imported rows:
          </span>
          <span class="text-base font-semibold whitespace-nowrap">231</span>
        </div>
        <div class="flex flex-1 flex-col">
          <span
            class="text-muted-foreground text-sm font-medium whitespace-nowrap"
          >
            Conflicts found:
          </span>
          <div class="text-sm font-medium whitespace-nowrap">
            <span class="text-destructive-foreground">O errors</span>
            <span>,&nbsp;</span>
            <span class="text-yellow-600 dark:text-yellow-500">2 warning</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
