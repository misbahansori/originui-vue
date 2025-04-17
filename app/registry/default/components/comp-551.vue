<script setup lang="ts">
import { formatBytes, useFileUpload } from "@/composables/useFileUpload";
import { Button } from "@/registry/default/ui/button";
import { Table } from "@/registry/default/ui/table";
import {
  LucideAlertCircle,
  LucideDownload,
  LucideFile,
  LucideFileArchive,
  LucideFileSpreadsheet,
  LucideFileText,
  LucideFileUp,
  LucideHeadphones,
  LucideImage,
  LucideTrash2,
  LucideVideo,
} from "lucide-vue-next";

const initialFiles = [
  {
    name: "document.pdf",
    size: 528737,
    type: "application/pdf",
    url: "https://originui.com",
    id: "document.pdf-1744638436563-8u5xuls",
  },
  {
    name: "intro.zip",
    size: 252873,
    type: "application/zip",
    url: "https://originui.com",
    id: "intro.zip-1744638436563-8u5xuls",
  },
  {
    name: "conclusion.xlsx",
    size: 352873,
    type: "application/xlsx",
    url: "https://originui.com",
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

const handleDownload = (url: string | undefined) => {
  if (url) {
    window.open(url, "_blank");
  }
};
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
      class="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 flex min-h-56 flex-col items-center rounded-xl border border-dashed p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:ring-[3px] data-[files]:hidden"
    >
      <input v-bind="getInputProps()" aria-label="Upload files" />
      <div class="flex flex-col items-center justify-center text-center">
        <div
          class="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
          aria-hidden="true"
        >
          <LucideFile class="size-4 opacity-60" />
        </div>
        <p class="mb-1.5 text-sm font-medium">Upload files</p>
        <p class="text-muted-foreground text-xs">
          Max {{ maxFiles }} files ∙ Up to {{ formatBytes(maxSize) }}
        </p>
        <Button
          size="sm"
          variant="outline"
          @click="openFileDialog"
          class="mt-4"
        >
          <LucideFileUp class="-ms-1 opacity-60" aria-hidden="true" />
          Select files
        </Button>
      </div>
    </div>

    <div v-if="files.length > 0" class="flex flex-col gap-2">
      <!-- Table header with actions -->
      <div class="flex items-center justify-between gap-2">
        <h3 class="text-sm font-medium">Files ({{ files.length }})</h3>
        <div class="flex gap-2">
          <Button size="sm" variant="outline" @click="openFileDialog">
            <LucideFileUp
              class="-ms-0.5 size-3.5 opacity-60"
              aria-hidden="true"
            />
            Add files
          </Button>
          <Button size="sm" variant="outline" @click="clearFiles">
            <LucideTrash2
              class="-ms-0.5 size-3.5 opacity-60"
              aria-hidden="true"
            />
            Remove all
          </Button>
        </div>
      </div>

      <!-- Table -->
      <div class="bg-background overflow-hidden rounded-md border">
        <Table class="w-full">
          <TableHeader class="text-xs">
            <TableRow class="bg-muted/50">
              <TableHead class="h-9 py-2 text-left">Name</TableHead>
              <TableHead class="h-9 py-2 text-left">Type</TableHead>
              <TableHead class="h-9 py-2 text-left">Size</TableHead>
              <TableHead class="h-9 w-0 py-2 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody class="text-[13px]">
            <TableRow v-for="file in files" :key="file.id">
              <TableCell class="max-w-48 py-2 font-medium">
                <span class="flex items-center gap-2">
                  <span class="shrink-0">
                    <component
                      :is="getFileIcon(file)"
                      class="size-4 opacity-60"
                    />
                  </span>
                  <span class="truncate">{{ file.file.name }}</span>
                </span>
              </TableCell>
              <TableCell class="text-muted-foreground py-2">
                {{ file.file.type.split("/")[1]?.toUpperCase() || "UNKNOWN" }}
              </TableCell>
              <TableCell class="text-muted-foreground py-2">
                {{ formatBytes(file.file.size) }}
              </TableCell>
              <TableCell class="py-2 text-right whitespace-nowrap">
                <Button
                  size="icon"
                  variant="ghost"
                  class="text-muted-foreground/80 hover:text-foreground size-8 hover:bg-transparent"
                  aria-label="Download file"
                  @click="handleDownload(file.preview)"
                >
                  <LucideDownload class="size-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  class="text-muted-foreground/80 hover:text-foreground size-8 hover:bg-transparent"
                  aria-label="Remove file"
                  @click="removeFile(file.id)"
                >
                  <LucideTrash2 class="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
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
      Multiple files uploader w/ table
    </p>
  </div>
</template>
