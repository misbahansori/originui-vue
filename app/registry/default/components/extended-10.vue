<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { LucideChartNoAxesColumn } from "lucide-vue-next";
</script>

<template>
  <Card>
    <CardHeader>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2 rounded-md border p-2">
          <LucideChartNoAxesColumn class="size-4" />
        </div>
        <CardTitle class="text-lg/none">Financing overview</CardTitle>
      </div>
      <CardDescription>
        Preview of the financing options available to the user and the total
        amount of financing available.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-1">
        <p class="text-muted-foreground text-sm font-medium">Total amount</p>
        <p class="text-2xl font-bold">$100,000</p>
      </div>
      <div class="flex flex-col gap-1">
        <p class="text-muted-foreground text-sm font-medium">Total Customer</p>
        <p class="text-2xl font-bold">27,320</p>
      </div>
    </CardContent>
  </Card>
</template>
