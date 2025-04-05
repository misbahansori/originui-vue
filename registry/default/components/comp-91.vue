<script setup lang="ts">
const isLoading = ref(false);

function handleClick() {
  isLoading.value = true;
  // Simulate an async operation
  setTimeout(() => {
    isLoading.value = false;
  }, 1000); // Reset after 1 second
}
</script>

<template>
  <Button
    @click="handleClick"
    :disabled="isLoading"
    :data-loading="isLoading || undefined"
    class="group relative disabled:opacity-100"
  >
    <span class="group-data-loading:text-transparent">Click me</span>
    <div
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center"
    >
      <Icon
        name="lucide:loader-circle"
        class="animate-spin"
        :size="16"
        aria-hidden="true"
      />
    </div>
  </Button>
</template>
