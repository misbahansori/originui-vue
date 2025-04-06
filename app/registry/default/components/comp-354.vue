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
        <Button variant="outline" size="sm">Tiny</Button>
      </TooltipTrigger>
      <TooltipContent class="px-2 py-1 text-xs">
        This is a simple tooltip
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
