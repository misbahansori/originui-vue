<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { Progress } from "@/registry/default/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { onMounted, onUnmounted, ref } from "vue";

const progress = ref(13);

let timer: ReturnType<typeof setTimeout> | null = null;

onMounted(() => {
  timer = setTimeout(() => {
    progress.value = 66;
  }, 500);
});

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>

<template>
  <div class="*:not-first:mt-2">
    <Card class="mx-auto w-full md:w-[450px]">
      <CardHeader class="flex items-center justify-between">
        <CardTitle>Tasks Overview</CardTitle>
        <div class="ml-auto">
          <Select defaultValue="this-month">
            <SelectTrigger class="w-32">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent class="flex flex-col gap-5">
        <!-- Progress bar and done tasks -->
        <div class="mb-6 grow">
          <div class="mb-1 flex items-center justify-between">
            <span class="text-foreground text-sm font-medium">Tasks Done</span>
            <span class="text-sm font-semibold text-green-500">12</span>
          </div>
          <Progress :modelValue="progress" />
        </div>

        <!-- Task summary -->
        <div class="space-y-6">
          <!-- Tasks list -->
          <div class="grid grid-cols-3 gap-2.5">
            <div
              class="bg-muted/60 flex flex-col items-center justify-center gap-1 rounded-lg px-2 py-3.5"
            >
              <span class="text-lg font-bold text-green-500">28</span>
              <span class="text-accent-foreground text-xs">Backlog</span>
            </div>
            <div
              class="bg-muted/60 flex flex-col items-center justify-center gap-1 rounded-lg px-2 py-3.5"
            >
              <span class="text-lg font-bold text-yellow-500">14</span>
              <span class="text-accent-foreground text-xs">In Progress</span>
            </div>
            <div
              class="bg-muted/60 flex flex-col items-center justify-center gap-1 rounded-lg px-2 py-3.5"
            >
              <span class="text-lg font-bold text-violet-500">8</span>
              <span class="text-accent-foreground text-xs">In Review</span>
            </div>
          </div>

          <!-- AI prediction footer -->
          <div class="text-muted-foreground text-center text-xs">
            AI prediction to finish all tasks:
            <span class="text-foreground font-semibold">1w 4d 2h</span>
          </div>
        </div>
      </CardContent>
    </Card>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Ported from reui.io tasks overview card
      <a
        class="hover:text-foreground underline"
        href="https://reui.io/blocks/cards"
        target="_blank"
        rel="noopener nofollow"
      >
        reui.io
      </a>
    </p>
  </div>
</template>
