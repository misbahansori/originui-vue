<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { Progress } from "@/registry/default/ui/progress";

const used = 2000;
const total = 5000;
const remaining = total - used;
const percent = (used / total) * 100;
</script>

<template>
  <div class="*:not-first:mt-2">
    <Card class="mx-auto w-full max-w-lg">
      <CardHeader
        class="flex min-h-auto items-center justify-between border-0 pt-6 pb-4"
      >
        <CardTitle>API Call Quota</CardTitle>
        <div class="ml-auto">
          <Button variant="outline" size="sm" class="font-medium">
            View API usage
          </Button>
        </div>
      </CardHeader>
      <CardContent class="flex flex-col space-y-6">
        <div class="grow space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-muted-foreground text-sm">
              Used calls:
              <span class="text-foreground font-semibold">{{ used }}</span>
            </span>
            <span class="text-foreground text-base font-semibold">
              ${{ (used * 0.002).toFixed(2) }}
            </span>
          </div>

          <div>
            <Progress
              :modelValue="percent"
              class="bg-muted"
              indicatorClassName="bg-indigo-500"
            />
          </div>

          <div class="flex items-center justify-between">
            <span class="text-foreground text-sm font-semibold">
              {{ remaining }} free calls left
            </span>
            <span class="text-muted-foreground text-xs">
              of {{ total }} monthly quota
            </span>
          </div>
        </div>

        <div
          class="bg-muted/60 text-muted-foreground flex items-center justify-between gap-2 rounded-xl px-4 py-2.5 text-xs"
        >
          <span>Quota renews on</span>
          <span class="text-foreground font-medium">September 1, 2025</span>
        </div>
      </CardContent>
    </Card>
    <p
      class="text-muted-foreground mt-2 text-xs"
      role="region"
      aria-live="polite"
    >
      Ported from reui.io API quota card
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
