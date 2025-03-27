<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(true);

const hideBanner = () => {
  isVisible.value = false;
};
</script>

<template>
  <div v-if="isVisible" class="dark bg-muted text-foreground px-4 py-3">
    <div class="flex gap-2">
      <div class="flex grow gap-3">
        <Icon
          name="lucide:eclipse"
          class="mt-0.5 size-4 shrink-0 opacity-60"
          aria-hidden="true"
        />
        <div class="flex grow flex-col justify-between gap-2 md:flex-row">
          <p class="text-sm">
            We just added something awesome to make your experience even better.
          </p>
          <a href="#" class="group text-sm font-medium whitespace-nowrap">
            Learn more
            <Icon
              name="lucide:arrow-right"
              class="ms-1 -mt-0.5 inline-flex size-4 opacity-60 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
      <Button
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        @click="hideBanner"
        aria-label="Close banner"
      >
        <Icon
          name="lucide:x"
          class="size-4 opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  </div>
</template>
