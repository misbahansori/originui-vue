<script setup lang="ts">
import { LucideTriangleAlert } from "lucide-vue-next";
</script>

<template>
  <div class="rounded-md border px-4 py-3">
    <p class="flex items-center text-sm">
      <LucideTriangleAlert
        class="me-3 -mt-0.5 inline-flex size-4 shrink-0 text-amber-500"
        aria-hidden="true"
      />
      Some information is missing!
    </p>
  </div>
</template>
