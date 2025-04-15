<script setup lang="ts">
import { useFileUpload } from "@/composables/useFileUpload";
import { LucideCircleUserRound, LucideX } from "lucide-vue-next";
import { computed } from "vue";

const {
  files,
  isDragging,
  removeFile,
  openFileDialog,
  getInputProps,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
} = useFileUpload({
  accept: "image/*",
});

const previewUrl = computed(() => files.value?.[0]?.preview || null);
const currentFile = computed(() => files.value?.[0]);
const currentFileName = computed(
  () => currentFile.value?.file?.name || "Uploaded image",
);
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div class="relative inline-flex">
      <!-- Drop area -->
      <div
        role="button"
        @click="openFileDialog"
        @dragenter="handleDragEnter"
        @dragleave="handleDragLeave"
        @dragover="handleDragOver"
        @drop="handleDrop"
        :data-dragging="isDragging || undefined"
        :aria-label="previewUrl ? 'Change image' : 'Upload image'"
        class="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-dashed transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
      >
        <input v-bind="getInputProps()" aria-label="Upload image file" />
        <img
          v-if="previewUrl"
          :src="previewUrl"
          :alt="currentFileName"
          class="size-full object-cover"
          width="64"
          height="64"
          style="object-fit: cover"
        />
        <div v-else aria-hidden="true">
          <LucideCircleUserRound class="size-4 opacity-60" />
        </div>
      </div>
      <button
        v-if="previewUrl"
        type="button"
        @click="removeFile(currentFile?.id)"
        class="border-background focus-visible:border-background absolute -top-1 -right-1 size-6 rounded-full border-2 shadow-none"
        aria-label="Remove image"
      >
        <LucideX class="size-3.5" />
      </button>
    </div>
    <p
      aria-live="polite"
      role="region"
      class="text-muted-foreground mt-2 text-xs"
    >
      Avatar uploader with droppable area
    </p>
  </div>
</template>
