<script setup lang="ts">


const isDownloading = ref(false);

const handleDownload = () => {
  isDownloading.value = true;
  // Simulate download
  setTimeout(() => {
    isDownloading.value = false;
  }, 2000);
};
</script>

<template>
  <div class="bg-muted px-4 py-3 md:py-2">
    <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
      <p class="text-sm">
        <span class="font-medium">v2.1.0</span>
        <span class="text-muted-foreground mx-2">•</span>
        New features and improvements available
      </p>
      <Button
        size="sm"
        variant="outline"
        :disabled="isDownloading"
        @click="handleDownload"
        class="min-w-24"
      >
        <template v-if="isDownloading">
          <Icon
            name="lucide:loader-circle"
            class="-ms-0.5 me-2 size-4 animate-spin"
            aria-hidden="true"
          />
          Updating...
        </template>
        <template v-else>
          <Icon
            name="lucide:download"
            class="-ms-0.5 size-4"
            aria-hidden="true"
          />
          Update now
        </template>
      </Button>
    </div>
  </div>
</template>
