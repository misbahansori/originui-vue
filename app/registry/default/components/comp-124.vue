<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideChevronLeft } from "lucide-vue-next";
</script>

<template>
  <Button variant="link" class="gap-1">
    <LucideChevronLeft class="opacity-60" :size="16" aria-hidden="true" />
    Go back
  </Button>
</template>
