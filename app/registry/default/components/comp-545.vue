<script setup lang="ts">
import { useFileUpload } from "@/composables/useFileUpload";
import { Button } from "@/registry/default/ui/button";
import {
  LucideAlertCircle,
  LucideImage,
  LucideUpload,
  LucideX,
} from "lucide-vue-next";
import { computed } from "vue";

const maxSizeMB = 2;
const maxSize = maxSizeMB * 1024 * 1024; // 2MB default

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
});

const currentFile = computed(() => files.value?.[0]);
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="relative">
      <!-- Drop area -->
      <div
        @dragenter="handleDragEnter"
        @dragleave="handleDragLeave"
        @dragover="handleDragOver"
        @drop="handleDrop"
        :data-dragging="isDragging || undefined"
        class="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors has-[input:focus]:ring-[3px]"
      >
        <input v-bind="getInputProps()" aria-label="Upload image file" />
        <div
          v-if="currentFile"
          class="absolute inset-0 flex items-center justify-center p-4"
        >
          <img
            :src="currentFile.preview"
            :alt="currentFile.file.name"
            class="mx-auto max-h-full rounded object-contain"
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
            <LucideImage class="size-4 opacity-60" />
          </div>
          <p class="mb-1.5 text-sm font-medium">Drop your image here</p>
          <p class="text-muted-foreground text-xs">
            SVG, PNG, JPG or GIF (max. {{ maxSizeMB }}MB)
          </p>
          <Button variant="outline" class="mt-4" @click="openFileDialog">
            <LucideUpload class="-ms-1 size-4 opacity-60" aria-hidden="true" />
            Select image
          </Button>
        </div>
      </div>

      <div v-if="currentFile" class="absolute top-3 right-3">
        <button
          type="button"
          class="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
          @click="removeFile(currentFile.id)"
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
      Single image uploader w/ max size (drop area + button)
    </p>
  </div>
</template>
