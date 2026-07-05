<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import { LucideListFilter } from "lucide-vue-next";

</script>

<template>
  <div class="flex flex-col gap-4">
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Filters">
          <LucideListFilter class="size-4" aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-36 p-3">
        <div class="space-y-3">
          <div class="text-muted-foreground text-xs font-medium">Filters</div>
          <form>
            <div class="space-y-3">
              <div class="flex items-center gap-2">
                <Checkbox />
                <Label class="font-normal">Real Time</Label>
              </div>
              <div class="flex items-center gap-2">
                <Checkbox />
                <Label class="font-normal">Top Channels</Label>
              </div>
              <div class="flex items-center gap-2">
                <Checkbox />
                <Label class="font-normal">Last Orders</Label>
              </div>
              <div class="flex items-center gap-2">
                <Checkbox />
                <Label class="font-normal">Total Spent</Label>
              </div>
            </div>
            <div
              role="separator"
              aria-orientation="horizontal"
              class="bg-border -mx-3 my-3 h-px"
            ></div>
            <div class="flex justify-between gap-2">
              <Button size="sm" variant="outline" class="h-7 px-2">Clear</Button>
              <Button size="sm" class="h-7 px-2">Apply</Button>
            </div>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
