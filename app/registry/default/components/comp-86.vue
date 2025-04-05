<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideArrowRight } from "lucide-vue-next";
</script>

<template>
  <Button class="group">
    Button
    <LucideArrowRight
      class="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
      :size="16"
      aria-hidden="true"
    />
  </Button>
</template>
