<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideX } from "lucide-vue-next";
</script>

<template>
  <Button variant="secondary">
    <LucideX class="-ms-1 opacity-60" :size="16" aria-hidden="true" />
    Button
  </Button>
</template>
