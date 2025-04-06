<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideTrash } from "lucide-vue-next";
</script>

<template>
  <Button variant="destructive">
    <LucideTrash class="-ms-1 opacity-60" :size="16" aria-hidden="true" />
    Button
  </Button>
</template>
