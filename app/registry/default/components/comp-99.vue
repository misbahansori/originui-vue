<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";
import { LucidePlus } from "lucide-vue-next";
</script>
<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline" size="icon" aria-label="Add new item">
          <LucidePlus :size="16" aria-hidden="true" />
        </Button>
      </TooltipTrigger>
      <TooltipContent class="px-2 py-1 text-xs">Tooltip</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
