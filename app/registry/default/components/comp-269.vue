<script setup lang="ts">
import { LucideCircleAlert } from "lucide-vue-next";
</script>

<template>
  <div class="rounded-md border px-4 py-3">
    <p class="flex items-center text-sm">
      <LucideCircleAlert
        :size="16"
        class="me-3 -mt-0.5 inline-flex shrink-0 text-red-500"
        aria-hidden="true"
      />
      An error occurred!
    </p>
  </div>
</template>
