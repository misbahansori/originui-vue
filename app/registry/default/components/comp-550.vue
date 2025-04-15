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
    name: "document.pdf",
    size: 528737,
    type: "application/pdf",
    url: "https://example.com/document.pdf",
    id: "document.pdf-1744638436563-8u5xuls",
  },
  {
    name: "intro.zip",
    size: 252873,
    type: "application/zip",
    url: "https://example.com/intro.zip",
    id: "intro.zip-1744638436563-8u5xuls",
  },
  {
    name: "conclusion.xlsx",
    size: 352873,
    type: "application/xlsx",
    url: "https://example.com/conclusion.xlsx",
    id: "conclusion.xlsx-1744638436563-8u5xuls",
  },
];

const getFileIcon = (file: { file: File | { type: string; name: string } }) => {
  const fileType = file.file instanceof File ? file.file.type : file.file.type;
  const fileName = file.file instanceof File ? file.file.name : file.file.name;

  if (
    fileType.includes("pdf") ||
    fileName.endsWith(".pdf") ||
    fileType.includes("word") ||
    fileName.endsWith(".doc") ||
    fileName.endsWith(".docx")
  ) {
    return LucideFileText;
  } else if (
    fileType.includes("zip") ||
    fileType.includes("archive") ||
    fileName.endsWith(".zip") ||
    fileName.endsWith(".rar")
  ) {
    return LucideFileArchive;
  } else if (
    fileType.includes("excel") ||
    fileName.endsWith(".xls") ||
    fileName.endsWith(".xlsx")
  ) {
    return LucideFileSpreadsheet;
  } else if (fileType.includes("video/")) {
    return LucideVideo;
  } else if (fileType.includes("audio/")) {
    return LucideHeadphones;
  } else if (fileType.startsWith("image/")) {
    return LucideImage;
  }
  return LucideFile;
};

const maxSize = 10 * 1024 * 1024; // 10MB default
const maxFiles = 10;

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
      class="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 flex min-h-56 flex-col items-center rounded-xl border border-dashed p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:ring-[3px]"
    >
      <input v-bind="getInputProps()" aria-label="Upload files" />

      <div v-if="files.length > 0" class="flex w-full flex-col gap-3">
        <div class="flex items-center justify-between gap-2">
          <h3 class="truncate text-sm font-medium">
            Uploaded Files ({{ files.length }})
          </h3>
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
        <div class="w-full space-y-2">
          <div
            v-for="file in files"
            :key="file.id"
            class="bg-background flex items-center justify-between gap-2 rounded-lg border p-2 pe-3"
          >
            <div class="flex items-center gap-3 overflow-hidden">
              <div
                class="flex aspect-square size-10 shrink-0 items-center justify-center rounded border"
              >
                <component :is="getFileIcon(file)" class="size-4 opacity-60" />
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

            <button
              type="button"
              class="text-muted-foreground/80 hover:text-foreground -me-2 size-8 hover:bg-transparent"
              @click="removeFile(file.id)"
              aria-label="Remove file"
            >
              <LucideX class="size-4" aria-hidden="true" />
            </button>
          </div>

          <button
            v-if="files.length < maxFiles"
            type="button"
            class="border-input bg-background ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring mt-2 inline-flex h-8 w-full items-center justify-center rounded-md border px-2.5 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            @click="openFileDialog"
          >
            <LucideFileUp class="-ms-1 opacity-60" aria-hidden="true" />
            Add more
          </button>
        </div>
      </div>

      <div v-else class="flex flex-col items-center justify-center text-center">
        <div
          class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <LucideFile class="size-4 opacity-60" />
        </div>
        <p class="mb-1.5 text-sm font-medium">Upload files</p>
        <p class="text-muted-foreground text-xs">
          Max {{ maxFiles }} files ∙ Up to {{ maxSize }}MB
        </p>
        <button
          type="button"
          class="border-input bg-background ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring mt-4 inline-flex h-8 items-center justify-center rounded-md border px-2.5 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          @click="openFileDialog"
        >
          <LucideFileUp class="-ms-1 opacity-60" aria-hidden="true" />
          Select files
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
      Multiple files uploader w/ list inside
    </p>
  </div>
</template>
