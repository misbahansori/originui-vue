<script setup lang="ts">
import { computed, ref } from "vue";

const volume = ref(3); // Initialize volume state (0-6)

function decreaseVolume() {
  volume.value = Math.max(0, volume.value - 1);
}

function increaseVolume() {
  volume.value = Math.min(6, volume.value + 1);
}

// Computed property for the volume icon
const volumeIcon = computed(() => {
  if (volume.value === 0) return "lucide:volume-x";
  if (volume.value < 3) return "lucide:volume";
  if (volume.value < 5) return "lucide:volume-1";
  return "lucide:volume-2";
});
</script>

<template>
  <div
    class="inline-flex items-center"
    role="group"
    aria-labelledby="volume-control"
  >
    <span id="volume-control" class="sr-only">Volume Control</span>
    <Button
      class="rounded-full"
      variant="outline"
      size="icon"
      aria-label="Decrease volume"
      @click="decreaseVolume"
      :disabled="volume === 0"
    >
      <Icon name="lucide:minus" size="16" aria-hidden="true" />
    </Button>
    <div
      class="flex items-center px-3 text-sm font-medium tabular-nums"
      aria-live="polite"
    >
      <Icon
        :name="volumeIcon"
        class="opacity-60"
        size="16"
        aria-hidden="true"
      />
      <span class="ms-2" :aria-label="`Current volume is ${volume}`">
        {{ volume }}
      </span>
    </div>
    <Button
      class="rounded-full"
      variant="outline"
      size="icon"
      aria-label="Increase volume"
      @click="increaseVolume"
      :disabled="volume === 6"
    >
      <Icon name="lucide:plus" size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
