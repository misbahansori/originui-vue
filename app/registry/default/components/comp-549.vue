<script setup lang="ts">
import { formatBytes, useFileUpload } from "@/composables/useFileUpload";
import { Button } from "@/registry/default/ui/button";
import {
  LucideAlertCircle,
  LucideFile,
  LucideFileArchive,
  LucideFileSpreadsheet,
  LucideFileText,
  LucideFileUp,
  LucideHeadphones,
  LucideImage,
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

const maxSize = 100 * 1024 * 1024; // 100MB default
const maxFiles = 10;

const { files, errors, openFileDialog, removeFile, clearFiles, dropzoneRef, inputRef } =
  useFileUpload({
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
      ref="dropzoneRef"
      role="button"
      @click="openFileDialog"
      class="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 flex min-h-40 flex-col items-center justify-center rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[input:focus]:ring-[3px]"
    >
      <input ref="inputRef" aria-label="Upload files" />

      <div class="flex flex-col items-center justify-center text-center">
        <div
          class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <LucideFileUp class="size-4 opacity-60" />
        </div>
        <p class="mb-1.5 text-sm font-medium">Upload files</p>
        <p class="text-muted-foreground mb-2 text-xs">Drag & drop or click to browse</p>
        <div class="text-muted-foreground/70 flex flex-wrap justify-center gap-1 text-xs">
          <span>All files</span>
          <span>∙</span>
          <span>Max {{ maxFiles }} files</span>
          <span>∙</span>
          <span>Up to {{ formatBytes(maxSize) }}</span>
        </div>
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

        <Button
          size="icon"
          variant="ghost"
          class="text-muted-foreground/80 hover:text-foreground -me-2 size-8 hover:bg-transparent"
          @click="removeFile(file.id)"
          aria-label="Remove file"
        >
          <LucideX class="size-4" aria-hidden="true" />
        </Button>
      </div>

      <!-- Remove all files button -->
      <div v-if="files.length > 1">
        <Button size="sm" variant="outline" @click="clearFiles">Remove all files</Button>
      </div>
    </div>

    <p aria-live="polite" role="region" class="text-muted-foreground mt-2 text-center text-xs">
      Multiple files uploader w/ list
    </p>
  </div>
</template>
