<script setup lang="ts">
import { Badge } from "@/registry/default/ui/badge";
import { LucideCheck } from "lucide-vue-next";
</script>

<template>
  <Badge variant="outline" class="gap-1">
    <LucideCheck :size="16" class="text-emerald-500" aria-hidden="true" />
    Badge
  </Badge>
</template>
