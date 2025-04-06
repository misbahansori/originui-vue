<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideSparkles } from "lucide-vue-next";
</script>

<template>
  <Button variant="outline">
    Button
    <LucideSparkles class="-me-1 opacity-60" :size="16" aria-hidden="true" />
  </Button>
</template>
