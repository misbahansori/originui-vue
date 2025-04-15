<script setup lang="ts">
import { ref } from "vue";
import { LucideAlertCircle, LucideImageUp, LucideX } from "lucide-vue-next";
import { useFileUpload } from "@/composables/useFileUpload";

const maxSizeMB = 5;
const maxSize = maxSizeMB * 1024 * 1024; // 5MB default

const {
  state: { files, isDragging, errors },
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
  openFileDialog,
  removeFile,
  getInputProps,
} = useFileUpload({
  accept: "image/*",
  maxSize,
});

const previewUrl = ref(files.value?.[0]?.preview || null);
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="relative">
      <!-- Drop area -->
      <div
        role="button"
        @click="openFileDialog"
        @dragenter="handleDragEnter"
        @dragleave="handleDragLeave"
        @dragover="handleDragOver"
        @drop="handleDrop"
        :data-dragging="isDragging || undefined"
        class="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
      >
        <input v-bind="getInputProps()" aria-label="Upload file" />
        <div v-if="previewUrl" class="absolute inset-0">
          <img
            :src="previewUrl"
            :alt="files[0]?.file?.name || 'Uploaded image'"
            class="size-full object-cover"
          />
        </div>
        <div
          v-else
          class="flex flex-col items-center justify-center px-4 py-3 text-center"
        >
          <div
            class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <LucideImageUp class="size-4 opacity-60" />
          </div>
          <p class="mb-1.5 text-sm font-medium">
            Drop your image here or click to browse
          </p>
          <p class="text-muted-foreground text-xs">
            Max size: {{ maxSizeMB }}MB
          </p>
        </div>
      </div>
      <div v-if="previewUrl" class="absolute top-4 right-4">
        <button
          type="button"
          class="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
          @click="removeFile(files[0]?.id)"
          aria-label="Remove image"
        >
          <LucideX class="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div
      v-if="errors.length > 0"
      class="text-destructive flex items-center gap-1 text-xs"
      role="alert"
    >
      <LucideAlertCircle class="size-3 shrink-0" />
      <span>{{ errors[0] }}</span>
    </div>

    <p
      aria-live="polite"
      role="region"
      class="text-muted-foreground mt-2 text-center text-xs"
    >
      Single image uploader w/ max size
    </p>
  </div>
</template>
