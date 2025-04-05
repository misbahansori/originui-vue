<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucidePlus } from "lucide-vue-next";
</script>

<template>
  <Button variant="outline" class="aspect-square max-sm:p-0">
    <LucidePlus class="opacity-60 sm:-ms-1" :size="16" aria-hidden="true" />
    <span class="max-sm:sr-only">Add new</span>
  </Button>
</template>
