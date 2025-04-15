<script setup lang="ts">
import { formatBytes, useFileUpload } from "@/composables/useFileUpload";
import {
  LucideAlertCircle,
  LucideFile,
  LucideFileArchive,
  LucideFileSpreadsheet,
  LucideFileText,
  LucideFileUp,
  LucideHeadphones,
  LucideImage,
  LucideTrash2,
  LucideVideo,
  LucideX,
} from "lucide-vue-next";

const initialFiles = [
  {
    name: "intro.zip",
    size: 252873,
    type: "application/zip",
    url: "https://example.com/intro.zip",
    id: "intro.zip-1744638436563-8u5xuls",
  },
  {
    name: "image-01.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=1",
    id: "image-01-123456789",
  },
  {
    name: "audio.mp3",
    size: 1528737,
    type: "audio/mpeg",
    url: "https://example.com/audio.mp3",
    id: "audio-123456789",
  },
];

const getFileIcon = (file: { file: File | { type: string; name: string } }) => {
  const fileType = file.file instanceof File ? file.file.type : file.file.type;
  const fileName = file.file instanceof File ? file.file.name : file.file.name;

  const iconMap = {
    pdf: {
      icon: LucideFileText,
      conditions: (type: string, name: string) =>
        type.includes("pdf") ||
        name.endsWith(".pdf") ||
        type.includes("word") ||
        name.endsWith(".doc") ||
        name.endsWith(".docx"),
    },
    archive: {
      icon: LucideFileArchive,
      conditions: (type: string, name: string) =>
        type.includes("zip") ||
        type.includes("archive") ||
        name.endsWith(".zip") ||
        name.endsWith(".rar"),
    },
    excel: {
      icon: LucideFileSpreadsheet,
      conditions: (type: string, name: string) =>
        type.includes("excel") ||
        name.endsWith(".xls") ||
        name.endsWith(".xlsx"),
    },
    video: {
      icon: LucideVideo,
      conditions: (type: string) => type.includes("video/"),
    },
    audio: {
      icon: LucideHeadphones,
      conditions: (type: string) => type.includes("audio/"),
    },
    image: {
      icon: LucideImage,
      conditions: (type: string) => type.startsWith("image/"),
    },
  };

  for (const { icon, conditions } of Object.values(iconMap)) {
    if (conditions(fileType, fileName)) {
      return icon;
    }
  }

  return LucideFile;
};

const getFilePreview = (file: {
  file: File | { type: string; name: string; url?: string };
}) => {
  const fileType = file.file instanceof File ? file.file.type : file.file.type;
  const fileName = file.file instanceof File ? file.file.name : file.file.name;

  if (fileType.startsWith("image/")) {
    if (file.file instanceof File) {
      return {
        type: "image",
        url: URL.createObjectURL(file.file),
        alt: fileName,
      };
    } else if (file.file.url) {
      return {
        type: "image",
        url: file.file.url,
        alt: fileName,
      };
    }
  }
  return {
    type: "icon",
    component: getFileIcon(file),
  };
};

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
  clearFiles,
  getInputProps,
} = useFileUpload({
  multiple: true,
  maxFiles,
  maxSize,
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
            Files ({{ files.length }})
          </h3>
          <div class="flex gap-2">
            <button
              type="button"
              class="border-input bg-background ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-8 items-center justify-center rounded-md border px-2.5 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              @click="openFileDialog"
            >
              <LucideFileUp
                class="-ms-0.5 size-3.5 opacity-60"
                aria-hidden="true"
              />
              Add files
            </button>
            <button
              type="button"
              class="border-input bg-background ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-8 items-center justify-center rounded-md border px-2.5 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              @click="clearFiles"
            >
              <LucideTrash2
                class="-ms-0.5 size-3.5 opacity-60"
                aria-hidden="true"
              />
              Remove all
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
          <div
            v-for="file in files"
            :key="file.id"
            class="bg-background relative flex flex-col rounded-md border"
          >
            <div
              class="bg-accent flex aspect-square items-center justify-center overflow-hidden rounded-t-[inherit]"
            >
              <img
                v-if="getFilePreview(file).type === 'image'"
                :src="getFilePreview(file).url"
                :alt="getFilePreview(file).alt"
                class="size-full rounded-t-[inherit] object-cover"
              />
              <component
                v-else
                :is="getFilePreview(file).component"
                class="size-5 opacity-60"
              />
            </div>
            <button
              type="button"
              class="border-background focus-visible:border-background absolute -top-2 -right-2 size-6 rounded-full border-2 shadow-none"
              @click="removeFile(file.id)"
              aria-label="Remove file"
            >
              <LucideX class="size-3.5" />
            </button>
            <div class="flex min-w-0 flex-col gap-0.5 border-t p-3">
              <p class="truncate text-[13px] font-medium">
                {{ file.file.name }}
              </p>
              <p class="text-muted-foreground truncate text-xs">
                {{ formatBytes(file.file.size) }}
              </p>
            </div>
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
        <p class="mb-1.5 text-sm font-medium">Drop your files here</p>
        <p class="text-muted-foreground text-xs">
          Max {{ maxFiles }} files ∙ Up to {{ maxSizeMB }}MB
        </p>
        <button
          type="button"
          class="border-input bg-background ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring mt-4 inline-flex h-8 items-center justify-center rounded-md border px-2.5 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          @click="openFileDialog"
        >
          <LucideFileUp class="-ms-1 opacity-60" aria-hidden="true" />
          Select images
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
      Mixed content w/ card
    </p>
  </div>
</template>
