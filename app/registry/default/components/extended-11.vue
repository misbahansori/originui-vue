<script setup lang="ts">
import { Card, CardContent, CardTitle } from "@/registry/default/ui/card";
import { LucideMoreHorizontal } from "lucide-vue-next";
</script>

<template>
  <Card class="py-4">
    <CardContent class="flex flex-col gap-3 px-4">
      <div class="flex items-center justify-between">
        <CardTitle class="text-base font-medium">Earnings</CardTitle>
        <div class="flex items-center gap-2">
          <Button variant="ghost" class="size-8">
            <LucideMoreHorizontal class="size-4" />
          </Button>
        </div>
      </div>
      <div class="col-span-2 flex flex-col gap-2">
        <span class="text-3xl font-semibold">$8,120.53</span>
        <div class="text-muted-foreground text-sm font-medium">
          <span class="font-semibold text-green-600 dark:text-green-500">
            +12.5%
          </span>
          <span>vs last month</span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div class="bg-muted flex flex-col gap-1 rounded-md p-3">
          <span class="text-muted-foreground text-sm font-medium">
            Total orders
          </span>
          <span class="text-2xl font-semibold">124</span>
        </div>
        <div class="bg-muted flex flex-col gap-1 rounded-md p-3">
          <span class="text-muted-foreground text-sm font-medium">
            Total customers
          </span>
          <span class="text-2xl font-semibold">42</span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
