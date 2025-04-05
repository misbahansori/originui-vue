<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucidePlus } from "lucide-vue-next";
</script>

<template>
  <Button
    class="rounded-full"
    variant="outline"
    size="icon"
    aria-label="Add new item"
  >
    <LucidePlus :size="16" aria-hidden="true" />
  </Button>
</template>
