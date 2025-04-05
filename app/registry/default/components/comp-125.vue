<script setup lang="ts">
import { Button } from "@/registry/default/ui/button";
import { LucideCircleUserRound } from "lucide-vue-next";

const file = shallowRef<File | null>(null);
const previewUrl = useObjectUrl(file);
const inputRef = useTemplateRef("fileInput");

function handleButtonClick() {
  if (inputRef.value) {
    inputRef.value.click();
  }
}

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files?.[0]) {
    file.value = input.files[0];
  }
}
</script>

<template>
  <div>
    <div class="inline-flex items-center gap-2 align-top">
      <div
        class="border-input relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md border"
        :aria-label="
          previewUrl ? 'Preview of uploaded image' : 'Default user avatar'
        "
      >
        <img
          v-if="previewUrl"
          class="h-full w-full object-cover"
          :src="previewUrl"
          alt="Preview of uploaded image"
          width="32"
          height="32"
        />
        <div v-else aria-hidden="true" class="flex items-center justify-center">
          <LucideCircleUserRound class="opacity-60" :size="16" />
        </div>
      </div>
      <div class="relative inline-block">
        <Button @click="handleButtonClick" aria-haspopup="dialog">
          {{ file ? "Change image" : "Upload image" }}
        </Button>
        <input
          type="file"
          ref="fileInput"
          @change="handleFileChange"
          class="hidden"
          accept="image/*"
          aria-label="Upload image file"
        />
      </div>
    </div>
    <div v-if="file" class="mt-2">
      <div class="inline-flex gap-2 text-xs">
        <p class="text-muted-foreground truncate" aria-live="polite">
          {{ file.name }}
        </p>
        <button
          @click="() => (file = null)"
          class="font-medium text-red-500 hover:underline"
          :aria-label="`Remove ${file.name}`"
        >
          Remove
        </button>
      </div>
    </div>
    <div class="sr-only" aria-live="polite" role="status">
      {{
        previewUrl
          ? "Image uploaded and preview available"
          : "No image uploaded"
      }}
    </div>
  </div>
</template>
