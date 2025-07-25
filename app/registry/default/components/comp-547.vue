<script setup lang="ts">
import { formatBytes, useFileUpload } from "@/composables/useFileUpload";
import { Button } from "@/registry/default/ui/button";
import {
  LucideAlertCircle,
  LucideImage,
  LucideUpload,
  LucideX,
} from "lucide-vue-next";

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
    size: 2345678,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=2",
    id: "image-02-123456789",
  },
  {
    name: "image-03.jpg",
    size: 3456789,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=3",
    id: "image-03-123456789",
  },
];

const maxSizeMB = 5;
const maxSize = maxSizeMB * 1024 * 1024; // 5MB default
const maxFiles = 6;

const {
  files,

  errors,
  openFileDialog,
  removeFile,
  clearFiles,
  dropzoneRef,
  inputRef,
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
      ref="dropzoneRef"
      :data-files="files.length > 0 || undefined"
      class="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:ring-[3px]"
    >
      <input ref="inputRef" aria-label="Upload image file" />
      <div
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

    <!-- File list -->
    <div v-if="files.length > 0" class="space-y-2">
      <div
        v-for="file in files"
        :key="file.id"
        class="bg-background flex items-center justify-between gap-2 rounded-lg border p-2 pe-3"
      >
        <div class="flex items-center gap-3 overflow-hidden">
          <div class="bg-accent aspect-square shrink-0 rounded">
            <img
              :src="file.preview"
              :alt="file.file.name"
              class="size-10 rounded-[inherit] object-cover"
            />
          </div>
          <div class="flex min-w-0 flex-col gap-0.5">
            <p class="truncate text-[13px] font-medium">
              {{ file.file.name }}
            </p>
            <p class="text-muted-foreground text-xs">
              {{ formatBytes(file.file.size) }}
            </p>
          </div>
        </div>

        <Button
          size="icon"
          variant="ghost"
          class="text-muted-foreground/80 hover:text-foreground -me-2 size-8 hover:bg-transparent"
          @click="removeFile(file.id)"
          aria-label="Remove file"
        >
          <LucideX aria-hidden="true" />
        </Button>
      </div>

      <!-- Remove all files button -->
      <div v-if="files.length > 1">
        <Button size="sm" variant="outline" @click="clearFiles">
          Remove all files
        </Button>
      </div>
    </div>

    <p
      aria-live="polite"
      role="region"
      class="text-muted-foreground mt-2 text-center text-xs"
    >
      Multiple image uploader w/ image list
    </p>
  </div>
</template>
