<script setup lang="ts">
import { useFileUpload } from "@/composables/useFileUpload";
import {
  LucideAlertCircle,
  LucideImage,
  LucideUpload,
  LucideX,
} from "lucide-vue-next";

// Create a dummy image file
const initialFiles = [
  {
    name: "image-01.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=1",
    id: "image-01-123456789",
  },
  {
    name: "image-02.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=2",
    id: "image-02-123456789",
  },
  {
    name: "image-03.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=3",
    id: "image-03-123456789",
  },
  {
    name: "image-04.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=4",
    id: "image-04-123456789",
  },
];

const maxSizeMB = 5;
const maxSize = maxSizeMB * 1024 * 1024; // 5MB default
const maxFiles = 6;

const {
  files,
  isDragging,
  errors,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
  openFileDialog,
  removeFile,
  getInputProps,
} = useFileUpload({
  accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
  maxSize,
  multiple: true,
  maxFiles,
  initialFiles,
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <!-- Drop area -->
    <div
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
      @dragover="handleDragOver"
      @drop="handleDrop"
      :data-dragging="isDragging || undefined"
      :data-files="files.length > 0 || undefined"
      class="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:ring-[3px]"
    >
      <input v-bind="getInputProps()" aria-label="Upload image file" />
      <div v-if="files.length > 0" class="flex w-full flex-col gap-3">
        <div class="flex items-center justify-between gap-2">
          <h3 class="truncate text-sm font-medium">
            Uploaded Files ({{ files.length }})
          </h3>
          <Button
            variant="outline"
            @click="openFileDialog"
            :disabled="files.length >= maxFiles"
          >
            <LucideUpload
              class="-ms-0.5 size-3.5 opacity-60"
              aria-hidden="true"
            />
            Add more
          </Button>
        </div>

        <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
          <div
            v-for="file in files"
            :key="file.id"
            class="bg-accent relative aspect-square rounded-md"
          >
            <img
              :src="file.preview"
              :alt="file.file.name"
              class="size-full rounded-[inherit] object-cover"
            />
            <button
              type="button"
              @click="removeFile(file.id)"
              class="border-background focus-visible:border-background absolute -top-2 -right-2 size-6 rounded-full border-2 shadow-none"
              aria-label="Remove image"
            >
              <LucideX class="size-3.5" />
            </button>
          </div>
        </div>
      </div>
      <div
        v-else
        class="flex flex-col items-center justify-center px-4 py-3 text-center"
      >
        <div
          class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <LucideImage class="size-4 opacity-60" />
        </div>
        <p class="mb-1.5 text-sm font-medium">Drop your images here</p>
        <p class="text-muted-foreground text-xs">
          SVG, PNG, JPG or GIF (max. {{ maxSizeMB }}MB)
        </p>
        <Button variant="outline" class="mt-4" @click="openFileDialog">
          <LucideUpload class="-ms-1 size-4 opacity-60" aria-hidden="true" />
          Select images
        </Button>
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
      Multiple image uploader w/ image grid
    </p>
  </div>
</template>
