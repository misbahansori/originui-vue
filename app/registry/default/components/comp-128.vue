<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideChevronRight } from "lucide-vue-next";
</script>

<template>
  <Button class="group h-auto gap-4 py-3 text-left" variant="outline">
    <div class="space-y-1">
      <h3>Talent Agency</h3>
      <p class="text-muted-foreground font-normal whitespace-break-spaces">
        Matches for your roster
      </p>
    </div>
    <LucideChevronRight
      class="opacity-60 transition-transform group-hover:translate-x-0.5"
      :size="16"
      aria-hidden="true"
    />
  </Button>
</template>
