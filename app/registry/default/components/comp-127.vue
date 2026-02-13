<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  LucideChevronDown,
  LucideChevronLeft,
  LucideChevronRight,
  LucideChevronUp,
  LucideCircle,
} from "lucide-vue-next";
</script>

<template>
  <div class="inline-grid w-fit grid-cols-3 gap-1">
    <Button class="col-start-2" variant="outline" size="icon" aria-label="Pan camera up">
      <LucideChevronUp :size="16" aria-hidden="true" />
    </Button>
    <Button class="col-start-1" variant="outline" size="icon" aria-label="Pan camera left">
      <LucideChevronLeft :size="16" aria-hidden="true" />
    </Button>
    <div class="flex items-center justify-center" aria-hidden="true">
      <LucideCircle class="opacity-60" :size="16" />
    </div>
    <Button variant="outline" size="icon" aria-label="Pan camera right">
      <LucideChevronRight :size="16" aria-hidden="true" />
    </Button>
    <Button class="col-start-2" variant="outline" size="icon" aria-label="Pan camera down">
      <LucideChevronDown :size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
