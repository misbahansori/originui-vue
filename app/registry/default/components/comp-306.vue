<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideEclipse, LucideX } from "lucide-vue-next";
import { ref } from "vue";

const isVisible = ref(true);

const hideBanner = () => {
  isVisible.value = false;
};
</script>

<template>
  <div v-if="isVisible" class="dark bg-muted text-foreground px-4 py-3 md:py-2">
    <div class="flex gap-2 md:items-center">
      <div class="flex grow gap-3 md:items-center">
        <LucideEclipse class="size-4 shrink-0 opacity-60 max-md:mt-0.5" aria-hidden="true" />
        <div class="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
          <p class="text-sm">
            It's live and ready to use! Start exploring the latest addition to your toolkit.
          </p>
          <div class="flex gap-2 max-md:flex-wrap">
            <Button size="sm" class="text-sm">Download</Button>
            <Button variant="outline" size="sm" class="text-sm">Learn more</Button>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        @click="hideBanner"
        aria-label="Close banner"
      >
        <LucideX
          class="size-4 opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  </div>
</template>
