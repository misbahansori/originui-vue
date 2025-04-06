<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideArrowLeft } from "lucide-vue-next";
</script>

<template>
  <Button class="group" variant="ghost">
    <LucideArrowLeft
      class="-ms-1 opacity-60 transition-transform group-hover:-translate-x-0.5"
      :size="16"
      aria-hidden="true"
    />
    Button
  </Button>
</template>
