<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/default/ui/popover";
</script>

<template>
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Tooltip-like popover</Button>
    </PopoverTrigger>
    <PopoverContent class="max-w-[280px] py-3 shadow-none" side="top">
      <div class="space-y-3">
        <div class="space-y-1">
          <p class="text-[13px] font-medium">Popover with button</p>
          <p class="text-muted-foreground text-xs">
            I am a popover that would like to look like a tooltip. I can't be a
            tooltip because of the interactive element inside me.
          </p>
        </div>
        <Button size="sm" class="h-7 px-2">Know more</Button>
      </div>
    </PopoverContent>
  </Popover>
</template>
