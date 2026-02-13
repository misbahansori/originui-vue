<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import {
  LucideMinus,
  LucidePlus,
  LucideVolume,
  LucideVolume1,
  LucideVolume2,
  LucideVolumeX,
} from "lucide-vue-next";
import { computed, ref } from "vue";

const volume = ref(3); // Initialize volume state (0-6)

function decreaseVolume() {
  volume.value = Math.max(0, volume.value - 1);
}

function increaseVolume() {
  volume.value = Math.min(6, volume.value + 1);
}

// Computed property for the volume icon component
const VolumeIcon = computed(() => {
  if (volume.value === 0) return LucideVolumeX;
  if (volume.value < 3) return LucideVolume;
  if (volume.value < 5) return LucideVolume1;
  return LucideVolume2;
});
</script>

<template>
  <div class="inline-flex items-center" role="group" aria-labelledby="volume-control">
    <span id="volume-control" class="sr-only">Volume Control</span>
    <Button
      class="rounded-full"
      variant="outline"
      size="icon"
      aria-label="Decrease volume"
      @click="decreaseVolume"
      :disabled="volume === 0"
    >
      <LucideMinus :size="16" aria-hidden="true" />
    </Button>
    <div class="flex items-center px-3 text-sm font-medium tabular-nums" aria-live="polite">
      <component :is="VolumeIcon" class="opacity-60" :size="16" aria-hidden="true" />
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
      <LucidePlus :size="16" aria-hidden="true" />
    </Button>
  </div>
</template>
