<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline" size="sm">W/ arrow</Button>
      </TooltipTrigger>
      <TooltipContent class="dark px-2 py-1 text-xs" :show-arrow="true">
        This tooltip has an arrow
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
