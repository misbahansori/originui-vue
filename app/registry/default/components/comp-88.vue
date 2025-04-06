<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideChevronDown } from "lucide-vue-next";
</script>

<template>
  <Button>
    Button
    <LucideChevronDown class="-me-1 opacity-60" :size="16" aria-hidden="true" />
  </Button>
</template>
