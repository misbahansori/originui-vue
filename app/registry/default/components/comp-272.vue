<script setup lang="ts">
import { LucideCircleCheck } from "lucide-vue-next";
</script>

<template>
  <div
    class="rounded-md border border-emerald-500/50 px-4 py-3 text-emerald-600"
  >
    <p class="flex items-center text-sm">
      <LucideCircleCheck
        class="me-3 -mt-0.5 inline-flex size-4 shrink-0 opacity-60"
        aria-hidden="true"
      />
      Completed successfully!
    </p>
  </div>
</template>
