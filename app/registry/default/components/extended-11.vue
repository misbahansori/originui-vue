<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent, CardTitle } from "@/registry/default/ui/card";
import { LucideMoreHorizontal } from "lucide-vue-next";
</script>

<template>
  <Card class="relative overflow-hidden py-4">
    <div
      class="absolute top-0 right-0 h-full w-full translate-x-14 -translate-y-14"
    >
      <div
        class="absolute top-[20%] right-[30%] size-24 rounded-full bg-sky-400/20 blur-2xl"
      ></div>
      <div
        class="absolute top-[30%] left-[10%] size-24 rounded-full bg-fuchsia-400/20 blur-2xl"
      ></div>
      <div
        class="absolute right-[30%] bottom-[20%] size-24 rounded-full bg-amber-400/20 blur-2xl"
      ></div>
    </div>
    <CardContent class="relative flex flex-col gap-3 px-4">
      <div class="flex items-center justify-between">
        <CardTitle class="text-base font-medium">Earnings</CardTitle>
        <div class="flex items-center gap-2">
          <Button variant="ghost" class="size-8">
            <LucideMoreHorizontal class="size-4" />
          </Button>
        </div>
      </div>
      <div class="col-span-2 flex flex-col gap-2">
        <span class="text-3xl font-normal tracking-tighter tabular-nums">
          $18,120.53
        </span>
        <div class="text-muted-foreground text-sm font-medium">
          <span class="font-semibold text-green-600 dark:text-green-500">
            +12.5%
          </span>
          <span>vs last month</span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div class="bg-muted flex flex-col gap-1 rounded-md p-3">
          <span class="text-muted-foreground text-xs font-medium">
            Total orders
          </span>
          <span class="text-2xl font-medium tracking-tighter tabular-nums">
            124
          </span>
        </div>
        <div class="bg-muted flex flex-col gap-1 rounded-md p-3">
          <span class="text-muted-foreground text-xs font-medium">
            Total customers
          </span>
          <span class="text-2xl font-medium tracking-tighter tabular-nums">
            42
          </span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
