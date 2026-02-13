<script setup lang="ts">
import {
  LucideAlertCircle,
  LucideFile,
  LucideFileArchive,
  LucideFileSpreadsheet,
  LucideFileText,
  LucideHeadphones,
  LucideImage,
  LucideTrash2,
  LucideUpload,
  LucideVideo,
  LucideX,
} from "lucide-vue-next";
import { ref } from "vue";

import { Button } from "@/registry/default/ui/button";

const initialFiles = [
  {
    id: "intro.zip-1744638436563-8u5xuls",
    name: "intro.zip",
    size: 252873,
    type: "application/zip",
    url: "https://example.com/intro.zip",
  },
  {
    id: "image-01-123456789",
    name: "image-01.jpg",
    size: 1528737,
    type: "image/jpeg",
    url: "https://picsum.photos/1000/800?grayscale&random=1",
  },
  {
    id: "audio-123456789",
    name: "audio.mp3",
    size: 1528737,
    type: "audio/mpeg",
    url: "https://example.com/audio.mp3",
  },
];

const getFileIcon = (file: { file: File | { type: string; name: string } }) => {
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
        type.includes("excel") || name.endsWith(".xls") || name.endsWith(".xlsx"),
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

  for (const { icon: Icon, conditions } of Object.values(iconMap)) {
    if (conditions(file.file.type, file.file.name)) {
      return Icon;
    }
  }

  return LucideFile;
};

const getFilePreview = (file: { file: File | { type: string; name: string; url?: string } }) => {
  if (file.file.type.startsWith("image/")) {
    if (file.file instanceof File) {
      const previewUrl = URL.createObjectURL(file.file);
      return {
        type: "img",
        props: {
          src: previewUrl,
          alt: file.file.name,
          class: "size-full  object-cover",
        },
      };
    } else if (file.file.url) {
      return {
        type: "img",
        props: {
          src: file.file.url,
          alt: file.file.name,
          class: "size-full  object-cover",
        },
      };
    } else {
      return {
        type: LucideImage,
        props: {
          class: "size-5 opacity-60",
        },
      };
    }
  }

  return {
    type: getFileIcon(file),
    props: {
      class: "size-5 opacity-60",
    },
  };
};

// Type for tracking upload progress
type UploadProgress = {
  fileId: string;
  progress: number;
  completed: boolean;
};

// Function to simulate file upload with more realistic timing and progress
const simulateUpload = (
  totalBytes: number,
  onProgress: (progress: number) => void,
  onComplete: () => void,
) => {
  let timeoutId: NodeJS.Timeout;
  let uploadedBytes = 0;
  let lastProgressReport = 0;

  const simulateChunk = () => {
    // Simulate variable network conditions with random chunk sizes
    const chunkSize = Math.floor(Math.random() * 300000) + 2000;
    uploadedBytes = Math.min(totalBytes, uploadedBytes + chunkSize);

    // Calculate progress percentage (0-100)
    const progressPercent = Math.floor((uploadedBytes / totalBytes) * 100);

    // Only report progress if it's changed by at least 1%
    if (progressPercent > lastProgressReport) {
      lastProgressReport = progressPercent;
      onProgress(progressPercent);
    }

    // Continue simulation if not complete
    if (uploadedBytes < totalBytes) {
      // Variable delay between 50ms and 500ms to simulate network fluctuations (reduced for faster uploads)
      const delay = Math.floor(Math.random() * 450) + 50;

      // Occasionally add a longer pause to simulate network congestion (5% chance, shorter duration)
      const extraDelay = Math.random() < 0.05 ? 500 : 0;

      timeoutId = setTimeout(simulateChunk, delay + extraDelay);
    } else {
      // Upload complete
      onComplete();
    }
  };

  // Start the simulation
  timeoutId = setTimeout(simulateChunk, 100);

  // Return a cleanup function to cancel the simulation
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
};

const maxSizeMB = 5;
const maxSize = maxSizeMB * 1024 * 1024; // 5MB default
const maxFiles = 6;

// State to track upload progress for each file
const uploadProgress = ref<UploadProgress[]>([]);

// Function to handle newly added files
const handleFilesAdded = (addedFiles: FileWithPreview[]) => {
  // Initialize progress tracking for each new file
  const newProgressItems = addedFiles.map((file) => ({
    fileId: file.id,
    progress: 0,
    completed: false,
  }));

  // Add new progress items to state
  uploadProgress.value = [...uploadProgress.value, ...newProgressItems];

  // Store cleanup functions
  const cleanupFunctions: Array<() => void> = [];

  // Start simulated upload for each file
  addedFiles.forEach((file) => {
    const fileSize = file.file instanceof File ? file.file.size : file.file.size;

    // Start the upload simulation and store the cleanup function
    const cleanup = simulateUpload(
      fileSize,
      // Progress callback
      (progress) => {
        uploadProgress.value = uploadProgress.value.map((item) =>
          item.fileId === file.id ? { ...item, progress } : item,
        );
      },
      // Complete callback
      () => {
        uploadProgress.value = uploadProgress.value.map((item) =>
          item.fileId === file.id ? { ...item, completed: true } : item,
        );
      },
    );

    cleanupFunctions.push(cleanup);
  });

  // Return a cleanup function that cancels all animations
  return () => {
    cleanupFunctions.forEach((cleanup) => cleanup());
  };
};

// Remove the progress tracking for the file
const handleFileRemoved = (fileId: string) => {
  uploadProgress.value = uploadProgress.value.filter((item) => item.fileId !== fileId);
};

const { files, errors, dropzoneRef, openFileDialog, removeFile, clearFiles, inputRef } =
  useFileUpload({
    multiple: true,
    maxFiles,
    maxSize,
    initialFiles,
    onFilesAdded: handleFilesAdded,
  });
</script>

<template>
  <div class="flex flex-col gap-2">
    <!-- Drop area -->
    <div
      ref="dropzoneRef"
      role="button"
      @click="openFileDialog"
      :data-files="files.length > 0 || undefined"
      class="border-input data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex min-h-52 flex-col items-center overflow-hidden rounded-xl border border-dashed p-4 transition-colors not-data-[files]:justify-center has-[input:focus]:ring-[3px]"
    >
      <input ref="inputRef" class="sr-only" aria-label="Upload image file" />
      <div v-if="files.length > 0" class="flex w-full flex-col gap-3">
        <div class="flex items-center justify-between gap-2">
          <h3 class="truncate text-sm font-medium">Files ({{ files.length }})</h3>
          <div class="flex gap-2">
            <Button variant="outline" size="sm" @click="openFileDialog">
              <LucideUpload class="-ms-0.5 size-3.5 opacity-60" aria-hidden="true" />
              Add files
            </Button>
            <Button
              variant="outline"
              size="sm"
              @click="
                () => {
                  // Clear all progress tracking
                  uploadProgress = [];
                  clearFiles();
                }
              "
            >
              <LucideTrash2 class="-ms-0.5 size-3.5 opacity-60" aria-hidden="true" />
              Remove all
            </Button>
          </div>
        </div>

        <div class="w-full space-y-2">
          <div
            v-for="file in files"
            :key="file.id"
            :data-uploading="
              uploadProgress.find((p) => p.fileId === file.id)?.completed === false || undefined
            "
            class="bg-background flex flex-col gap-1 rounded-lg border p-2 pe-3 transition-opacity duration-300"
          >
            <div class="flex items-center justify-between gap-2">
              <div
                class="flex items-center gap-3 overflow-hidden in-data-[uploading=true]:opacity-50"
              >
                <div
                  class="flex aspect-square size-10 shrink-0 items-center justify-center overflow-hidden rounded border"
                >
                  <component :is="getFilePreview(file).type" v-bind="getFilePreview(file).props" />
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
                @click="
                  () => {
                    handleFileRemoved(file.id);
                    removeFile(file.id);
                  }
                "
                aria-label="Remove file"
              >
                <LucideX class="size-4" aria-hidden="true" />
              </Button>
            </div>

            <!-- Upload progress bar -->
            <div
              v-if="uploadProgress.find((p) => p.fileId === file.id)?.completed === false"
              class="mt-1 flex items-center gap-2"
            >
              <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  class="bg-primary h-full transition-all duration-300 ease-out"
                  :style="{
                    width: `${uploadProgress.find((p) => p.fileId === file.id)?.progress || 0}%`,
                  }"
                />
              </div>
              <span class="text-muted-foreground w-10 text-xs tabular-nums">
                {{ uploadProgress.find((p) => p.fileId === file.id)?.progress || 0 }}%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col items-center justify-center px-4 py-3 text-center">
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
        <Button variant="outline" class="mt-4" @click="openFileDialog">
          <LucideUpload class="-ms-1 opacity-60" aria-hidden="true" />
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

    <p aria-live="polite" role="region" class="text-muted-foreground mt-2 text-center text-xs">
      With simulated progress track ∙
      <a
        href="https://github.com/origin-space/originui/tree/main/docs/use-file-upload.md"
        class="hover:text-foreground underline"
      >
        API
      </a>
    </p>
  </div>
</template>
