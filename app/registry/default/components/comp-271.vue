<script setup lang="ts">
import { LucideCircleCheck } from "lucide-vue-next";
</script>

<template>
  <div class="border-border rounded-md border px-4 py-3">
    <p class="flex items-center text-sm">
      <LucideCircleCheck
        class="me-3 -mt-0.5 inline-flex size-4 shrink-0 text-emerald-500"
        aria-hidden="true"
      />
      Completed successfully!
    </p>
  </div>
</template>
