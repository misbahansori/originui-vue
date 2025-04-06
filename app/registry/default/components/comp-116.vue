<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideChevronRight } from "lucide-vue-next";
</script>

<template>
  <Button class="relative pe-12">
    Next
    <span
      class="bg-primary-foreground/15 pointer-events-none absolute inset-y-0 end-0 flex w-9 items-center justify-center"
    >
      <LucideChevronRight class="opacity-60" :size="16" aria-hidden="true" />
    </span>
  </Button>
</template>
