<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { LucideChartNoAxesColumn, LucideInfo } from "lucide-vue-next";
</script>

<template>
  <Card class="gap-4">
    <CardHeader class="gap-4 px-4">
      <div class="flex items-center gap-3">
        <div class="flex size-7 items-center justify-center rounded-md border">
          <LucideChartNoAxesColumn class="text-foreground size-4" />
        </div>
        <CardTitle class="text-lg/none">Financing overview</CardTitle>
      </div>
      <CardDescription class="text-sm/relaxed">
        Preview of the financing options available to the user and the total
        amount of financing available.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid grid-cols-2 gap-4 px-4">
      <div class="flex flex-col gap-1">
        <div class="text-muted-foreground flex items-center gap-2">
          <p class="text-xs font-medium">Total amount</p>
          <LucideInfo class="size-4" />
        </div>
        <p class="text-xl font-semibold tracking-tight tabular-nums">
          $100,000
        </p>
      </div>
      <div class="flex flex-col gap-1">
        <div class="text-muted-foreground flex items-center gap-2">
          <p class="text-xs font-medium">Total Customer</p>
          <LucideInfo class="size-4" />
        </div>
        <p class="text-xl font-semibold tracking-tight tabular-nums">27,320</p>
      </div>
    </CardContent>
  </Card>
</template>
