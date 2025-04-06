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
        <Button variant="outline" size="sm">Dark</Button>
      </TooltipTrigger>
      <TooltipContent class="dark px-2 py-1 text-xs">
        This tooltip will be always dark
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
