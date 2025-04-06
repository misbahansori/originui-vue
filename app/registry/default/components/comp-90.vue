<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideLoaderCircle } from "lucide-vue-next";
</script>

<template>
  <Button disabled>
    <LucideLoaderCircle
      class="-ms-1 animate-spin"
      :size="16"
      aria-hidden="true"
    />
    Button
  </Button>
</template>
