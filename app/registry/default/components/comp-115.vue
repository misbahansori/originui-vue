<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideChevronLeft } from "lucide-vue-next";
</script>

<template>
  <Button class="relative ps-12">
    Previous
    <span
      class="bg-primary-foreground/15 pointer-events-none absolute inset-y-0 start-0 flex w-9 items-center justify-center"
    >
      <LucideChevronLeft class="opacity-60" :size="16" aria-hidden="true" />
    </span>
  </Button>
</template>
