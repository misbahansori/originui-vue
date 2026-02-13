<script setup lang="ts">
import { useFileUpload } from "@/composables/useFileUpload";
import { Button } from "@/registry/default/ui/button";
import { LucideCircleUserRound, LucideX } from "lucide-vue-next";
import { computed } from "vue";

const { files, removeFile, openFileDialog, dropzoneRef, inputRef } = useFileUpload({
  accept: "image/*",
});

const currentFile = computed(() => files.value?.[0]);
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div class="relative inline-flex">
      <!-- Drop area -->
      <div
        ref="dropzoneRef"
        role="button"
        @click="openFileDialog"
        class="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 relative flex size-16 items-center justify-center overflow-hidden rounded-full border border-dashed transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none has-[input:focus]:ring-[3px]"
      >
        <input ref="inputRef" aria-label="Upload image file" />
        <img
          v-if="currentFile"
          :src="currentFile.preview"
          :alt="currentFile.file.name"
          class="size-full object-cover"
          width="64"
          height="64"
          style="object-fit: cover"
        />
        <div v-else aria-hidden="true">
          <LucideCircleUserRound class="size-4 opacity-60" />
        </div>
      </div>
      <Button
        v-if="currentFile"
        @click="removeFile(currentFile.id)"
        size="icon"
        class="border-background focus-visible:border-background absolute -top-1 -right-1 size-6 rounded-full border-2 shadow-none"
        aria-label="Remove image"
      >
        <LucideX class="size-3.5" />
      </Button>
    </div>
    <p aria-live="polite" role="region" class="text-muted-foreground mt-2 text-xs">
      Avatar uploader with droppable area
    </p>
  </div>
</template>
