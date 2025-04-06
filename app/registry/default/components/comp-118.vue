<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideStar } from "lucide-vue-next";
</script>

<template>
  <Button>
    <LucideStar class="-ms-1 opacity-60" :size="16" aria-hidden="true" />
    <span class="flex items-baseline gap-2">
      Star
      <span class="text-primary-foreground/60 text-xs">729</span>
    </span>
  </Button>
</template>
